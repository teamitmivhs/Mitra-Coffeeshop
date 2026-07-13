#!/bin/bash
set -e

# Pastikan path Bun terdeteksi
export PATH="$HOME/.bun/bin:$PATH"
PROJECT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
cd "$PROJECT_DIR"

echo "Memulai proses update & deploy..."

# 1. Tarik kode terbaru dari GitHub
echo "Menarik kode terbaru dari GitHub..."
git pull --ff-only origin main

# 2. Install dependensi jika ada yang baru
echo "Menginstal dependensi..."
bun install

# 3. Build proyek
echo "Melakukan build proyek..."
bun run build

# 4. Install dan restart server preview
echo "Me-restart server preview..."
mkdir -p "$HOME/.config/systemd/user"
install -m 644 mitra-coffeeshop.service "$HOME/.config/systemd/user/mitra-coffeeshop.service"
systemctl --user daemon-reload
systemctl --user enable mitra-coffeeshop.service > /dev/null
systemctl --user restart mitra-coffeeshop.service

# Pastikan server benar-benar siap sebelum deployment dinyatakan berhasil.
for _ in {1..10}; do
  if curl --fail --silent http://127.0.0.1:3001/ > /dev/null; then
    echo "Deployment selesai! Website live di port 3001."
    echo "Log server: journalctl --user -u mitra-coffeeshop.service"
    exit 0
  fi

  if ! systemctl --user is-active --quiet mitra-coffeeshop.service; then
    echo "Server preview gagal dijalankan. Log terakhir:"
    journalctl --user -u mitra-coffeeshop.service -n 50 --no-pager
    exit 1
  fi

  sleep 1
done

echo "Server preview tidak merespons di port 3001 setelah 10 detik."
journalctl --user -u mitra-coffeeshop.service -n 50 --no-pager
exit 1
