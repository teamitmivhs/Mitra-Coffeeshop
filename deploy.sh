#!/bin/bash

# Pastikan path Bun terdeteksi
export PATH="$HOME/.bun/bin:$PATH"

echo "🚀 Memulai proses update & deploy..."

# 1. Tarik kode terbaru dari GitHub
echo "📥 Menarik kode terbaru dari GitHub..."
git pull origin main

# 2. Install dependensi jika ada yang baru
echo "📦 Menginstal dependensi..."
bun install

# 3. Build proyek
echo "🏗️  Melakukan build proyek..."
bun run build

# 4. Restart server preview
echo "🔄 Me-restart server preview..."
# Mencari PID proses yang berjalan di port 3001 dan mematikannya
OLD_PID=$(lsof -t -i:3001)
if [ -n "$OLD_PID" ]; then
  echo "Stopping process on port 3001 (PID: $OLD_PID)"
  kill $OLD_PID
fi

# Jalankan server di background
nohup bun run preview --port 3001 --host 0.0.0.0 > server.log 2>&1 &

echo "✅ Deployment selesai! Website live di port 3001."
echo "📝 Log server dapat dilihat di file: server.log"
