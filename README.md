# ☕ Kopi Mitra — Ngopi Asik di SMK Mitra Industri

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Runtime: Bun](https://img.shields.io/badge/Runtime-Bun%20v1.3.14-black?logo=bun)](https://bun.sh)
[![Framework: TanStack Start](https://img.shields.io/badge/Framework-TanStack%20Start-FF4154?logo=react)](https://tanstack.com/start)

Website resmi **Kopi Mitra**, coffee shop premium yang berlokasi di lingkungan SMK Mitra Industri. Didesain dengan estetika **Magazine Layout** yang berani, modern, dan menggunakan palet warna *Cream & Caramel* yang hangat.

---

## ✨ Fitur Utama

### 📖 Magazine-Style Design
Implementasi layout asimetris yang responsif dan estetis, memberikan pengalaman membaca menu seperti menelusuri majalah gaya hidup.

### 🗂️ Interactive Loyalty Card
Fitur kartu loyalitas digital dengan **3D Flip Animation** (CSS3) yang intuitif. Memberikan insentif "Beli 10 Gratis 1" bagi pelanggan setia.

### 🎢 Dynamic Menu Marquee
Ticker teks berjalan yang menampilkan menu unggulan secara *real-time*, menambah kesan dinamis dan modern pada antarmuka.

### 🛍️ Digital Integration
*   **Direct WhatsApp API:** Pesan langsung tanpa simpan nomor untuk kemudahan reservasi dan *pre-order*.
*   **GoFood Integration:** Hubungan langsung ke aplikasi Gojek untuk layanan pesan antar.

### 🎬 Programmatic Marketing (Remotion)
Sub-proyek berbasis **Remotion** untuk menghasilkan video promosi secara otomatis melalui kode, memastikan konten media sosial tetap segar dan konsisten.

---

## 🛠️ Tech Stack

Project ini menggunakan arsitektur mutakhir untuk menjamin performa maksimal dan pengalaman pengembang yang luar biasa:

*   **Runtime:** [Bun](https://bun.sh/) — JavaScript runtime super cepat untuk instalasi, build, dan eksekusi.
*   **Framework:** [TanStack Start](https://tanstack.com/start) — Full-stack framework dengan SSR, Type-safe routing, dan data fetching handal.
*   **Routing:** [TanStack Router](https://tanstack.com/router) — Routing berbasis file yang sepenuhnya *type-safe*.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) — Menggunakan engine Lightning CSS untuk performa styling tingkat tinggi.
*   **UI Primitives:** [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/) — Komponen UI yang aksesibel dan mudah dikustomisasi.
*   **Motion:** [Lucide React](https://lucide.dev/) untuk ikonografi dan CSS transitions untuk animasi mikro.

---

## 🚀 Memulai (Quick Start)

Pastikan Anda telah menginstal **Bun** di sistem Anda.

### 1. Inisialisasi Proyek
```bash
git clone <url-repository>
cd mitra-coffeeshop
bun install
```

### 2. Jalankan Mode Pengembangan
```bash
bun dev
```
Akses di: `http://localhost:3000`

### 3. Build untuk Produksi
```bash
bun build
```

---

## 📹 Konten Video (Remotion)

Proyek ini menyertakan generator video promosi di dalam direktori `remotion/`.

### Setup & Render:
1.  Masuk ke direktori: `cd remotion`
2.  Install dependensi: `bun install`
3.  Render video: `bun run scripts/render-remotion.mjs`

*Video hasil render akan tersimpan sesuai konfigurasi di dalam script tersebut.*

---

## 📁 Struktur Proyek

```text
├── remotion/            # Generator video promosi (Remotion.dev)
│   ├── src/             # Komposisi dan scene video
│   └── scripts/         # Script render otomatis
├── src/
│   ├── assets/          # Media statis (Hero, Menu, Loyalty Card)
│   ├── components/      # Komponen UI (Atomic & Shadcn)
│   ├── lib/             # Utilitas, config, dan API helpers
│   ├── routes/          # File-based routing (Halaman utama, Menu, Gallery)
│   └── styles.css       # Konfigurasi Tailwind v4 & Design System
├── vite.config.ts       # Konfigurasi bundling & SSR
└── package.json         # Dependensi & scripts
```

---

## 🛠️ Alur Kerja Pengembangan

*   **Linting:** `bun lint` (ESLint)
*   **Formatting:** `bun format` (Prettier)
*   **Type Checking:** `bun tsc` (jika tersedia)

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

---

**Kopi Mitra Project** — *Brewing Excellence for SMK Mitra Industri.*
