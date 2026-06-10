import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, Heart, Sparkles, Star } from "lucide-react";
import heroCoffee from "../assets/hero-coffee.jpg";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuNoncoffee from "../assets/menu-noncoffee.jpg";
import galleryStudents from "../assets/gallery-students.jpg";
import galleryBarista from "../assets/gallery-barista.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mitra Coffeeshop — Ngopi Asik di SMK Mitra Industri" },
      {
        name: "description",
        content:
          "Coffee shop di SMK Mitra Industri. Americano, latte, matcha, choco, dan banyak lagi. Harga pelajar, suasana seru.",
      },
      { property: "og:title", content: "Mitra Coffeeshop — Ngopi Asik di SMK Mitra Industri" },
      {
        property: "og:description",
        content: "Menu kopi & non-kopi lengkap. Tempat nongkrong favorit anak SMK Mitra Industri.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* ===== HERO MAGAZINE ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 pb-20 lg:grid-cols-12 lg:px-10 lg:pt-16 lg:pb-32">
          {/* Tag column */}
          <aside className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/30" />
              Issue 01
            </div>
            <p className="mt-3 font-display text-sm font-semibold text-primary">Juni 2026</p>
          </aside>

          {/* Headline */}
          <div className="lg:col-span-7">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Coffee · Vibes · School Life
            </p>
            <h1 className="mt-6 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight text-balance">
              Ngopi di sekolah?{" "}
              <span className="italic text-primary">Bisa banget.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
              Dari americano klasik sampai matcha latte yang creamy — Mitra Coffeeshop
              jadi tempat seru buat ngerjain tugas, ngobrol bareng teman, atau
              sekedar rehat antar pelajaran.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Lihat Menu
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-semibold text-foreground transition hover:border-foreground/60"
              >
                Suasana Cafe
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>Rating 4.9 dari 320+ pelajar</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:col-span-3">
            <div className="absolute -left-6 -top-6 hidden font-display text-xs uppercase tracking-[0.2em] text-muted-foreground lg:block">
              Featured
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={heroCoffee}
                alt="Latte art di Mitra Coffeeshop"
                width={1536}
                height={1920}
                className="aspect-[3/4] h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3 backdrop-blur">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                  Signature
                </p>
                <p className="font-display text-lg font-bold leading-tight">
                  Coffee Latte
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="border-y border-border bg-primary py-4 text-primary-foreground">
          <div className="flex gap-12 overflow-hidden whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.3em]">
            {[
              "Americano",
              "Cappuccino",
              "Latte",
              "Matcha",
              "Choco",
              "Strawberry",
              "Taro",
              "Promo Pelajar",
            ]
              .concat([
                "Americano",
                "Cappuccino",
                "Latte",
                "Matcha",
                "Choco",
                "Strawberry",
              ])
              .map((t, i) => (
                <span key={i} className="flex items-center gap-12">
                  {t} <span className="text-accent">✦</span>
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ===== MENU PREVIEW ===== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Menu Spotlight
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight lg:text-7xl">
              Dua sisi: <em className="text-primary">coffee</em> & <em className="text-primary">non-coffee</em>.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/70 lg:col-span-5 lg:col-start-8">
            Buat yang udah cinta espresso atau yang lebih suka sesuatu yang
            manis dan ringan — semua punya tempat di Mitra Coffeeshop. Semua dibuat
            fresh di tempat sama barista kami.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl bg-card">
            <img
              src={menuCoffee}
              alt="Iced coffee"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/0 to-primary/0" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Coffee className="h-4 w-4" /> The Classics
              </div>
              <h3 className="mt-2 font-display text-4xl font-bold">Coffee</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Americano · Espresso · Long Black · CoffeeLatte · Nutty Coffee
              </p>
              <p className="mt-4 font-display text-2xl font-semibold text-accent">
                mulai Rp 10K
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl bg-card">
            <img
              src={menuNoncoffee}
              alt="Non-coffee drinks"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/0 to-primary/0" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-4 w-4" /> Sweet Side
              </div>
              <h3 className="mt-2 font-display text-4xl font-bold">Non-Coffee</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Matcha · Choco · Strawberry · Taro · Blue Ocean
              </p>
              <p className="mt-4 font-display text-2xl font-semibold text-accent">
                mulai Rp 6K
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 font-display text-base font-semibold text-primary"
          >
            Lihat menu lengkap
            <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
          </Link>
        </div>
      </section>

      {/* ===== PROMO BANNER ===== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent p-10 lg:p-16">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Promo Spesial Pelajar
              </p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight text-primary lg:text-6xl">
                Tunjukin kartu pelajar, dapet diskon 20%.
              </h2>
              <p className="mt-6 max-w-md text-base text-primary/80">
                Berlaku setiap hari Senin – Jumat, jam 13.00 – 16.00 WIB.
                Khusus siswa & guru SMK Mitra Industri.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pakai%20promo%20pelajar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Klaim Promo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { v: "20%", l: "Diskon Pelajar" },
                { v: "8K", l: "Mulai Harga" },
                { v: "4.9★", l: "Rating Cafe" },
                { v: "320+", l: "Pelanggan/hari" },
                { v: "30+", l: "Varian Menu" },
                { v: "GoFood", l: "Bisa Delivery" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl bg-background/60 px-3 py-5 backdrop-blur"
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    {s.v}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-foreground/60">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIBE / STORY ===== */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={galleryStudents}
              alt="Siswa SMK Mitra Industri nongkrong di Mitra Coffeeshop"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Story
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight lg:text-7xl">
              Lebih dari sekedar <em className="text-primary">secangkir kopi</em>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/70">
              
              Mitra Coffeeshop lahir dari mimpi sederhana: kasih ruang buat anak SMK
              Mitra Industri buat rehat, ngobrol, dan kreatif bareng. Tiap
              cangkir kami racik dengan biji kopi pilihan, dan tiap senyum kami
              bagi gratis.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Coffee, t: "Biji Pilihan", d: "Arabika lokal terbaik" },
                { icon: Heart, t: "Harga Pelajar", d: "Mulai dari 8 ribu" },
                { icon: Sparkles, t: "Vibes Seru", d: "Tempat nongkrong asik" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-5">
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="mt-3 font-display text-base font-bold">{t}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src={galleryBarista}
                alt="Barista Mitra Coffeeshop menuang latte art"
                loading="lazy"
                width={1280}
                height={1600}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.5rem] bg-primary p-16 text-center text-primary-foreground">
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight lg:text-7xl">
            Mampir hari ini?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/80">
            Pesan duluan via WhatsApp biar gak antri pas jam istirahat. Atau order delivery lewat GoFood!
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition hover:scale-105"
            >
              Pesan via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://gofood.link/a/G6pniU1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EF3E2D] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              Order GoFood
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}