import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, Heart, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuNoncoffee from "../assets/menu-noncoffee.jpg";
import galleryStudents from "../assets/gallery-students.jpg";
import galleryBarista from "../assets/gallery-barista.jpg";
import frontCard from "../assets/front-card.jpeg";
import rearCard from "../assets/rear-card.jpeg";
import strawberryLatte from "../assets/strawberry-latte.jpg";

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

function LoyalityCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* perspective wrapper — fluid width, fixed aspect ratio */}
      <div
        className="relative w-full cursor-pointer"
        style={{ perspective: "1200px", aspectRatio: "85.6 / 54" }}
        onClick={() => setFlipped((f) => !f)}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        role="button"
        aria-label="Flip Loyality card"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={frontCard}
              alt="Loyality card depan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* REAR */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src={rearCard}
              alt="Loyality card belakang"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-primary/60">
        Hover atau tap kartu untuk melihat baliknya ✦
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Mobile: full-bleed hero image */}
        <div className="relative flex min-h-[92svh] flex-col justify-between pb-7 pt-5 lg:hidden">
          <img
            src={galleryBarista}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* layered gradient: dark top for readability, heavy bottom for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />

          {/* top pill — location badge */}
          <div className="relative z-10 px-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-background/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              <MapPin className="h-2.5 w-2.5 text-primary" />
              SMK Mitra Industri
            </span>
          </div>

          {/* bottom content */}
          <div className="relative z-10 px-5">
            {/* eyebrow */}
            <p className="font-display text-[9px] font-bold uppercase tracking-[0.32em] text-primary/90">
              Coffee · Vibes · School Life
            </p>

            {/* headline — big, editorial, two-line */}
            <h1 className="mt-2 font-display text-[2.75rem] font-bold leading-[0.92] tracking-tighter">
              Ngopi
              <br />
              di sekolah?{" "}
              <span className="italic text-primary">Bisa.</span>
            </h1>

            <p className="mt-3 max-w-[260px] text-[13px] leading-snug text-foreground/65">
              Americano, matcha latte, choco — fresh, terjangkau, tiap hari.
            </p>

            {/* CTA row */}
            <div className="mt-5 flex items-center gap-2.5">
              <Link
                to="/menu"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-primary-foreground active:scale-95"
              >
                Lihat Menu
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-foreground backdrop-blur-md active:scale-95"
              >
                Suasana
              </Link>
            </div>


          </div>
        </div>

        {/* Desktop: full-bleed background, mirroring mobile */}
        <div className="relative hidden min-h-[90svh] flex-col justify-between pb-14 pt-8 lg:flex">
          <img
            src={galleryBarista}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* top bar */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
              <MapPin className="h-3 w-3 text-primary" />
              SMK Mitra Industri
            </span>
          </div>

          {/* bottom content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-10">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary/90">
              Coffee · Vibes · School Life
            </p>
            <h1 className="mt-3 font-display text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.92] tracking-tighter">
              Ngopi di sekolah?{" "}
              <span className="italic text-primary">Bisa banget.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/65">
              Dari americano klasik sampai matcha latte yang creamy — Mitra Coffeeshop
              jadi tempat seru buat ngerjain tugas, ngobrol bareng teman, atau sekedar rehat.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 active:scale-95"
              >
                Lihat Menu
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                Suasana Cafe
              </Link>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="mt-0 border-y border-border bg-primary py-3 text-primary-foreground overflow-hidden lg:mt-0 lg:py-4">
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track gap-0 font-display text-[10px] font-bold uppercase tracking-[0.25em] lg:text-sm">
            {[
              "Americano",
              "Cappuccino",
              "Latte",
              "Matcha Latte",
              "Creamy Milky Choco",
              "Nutty Coffee",
              "Caramel Macchiato",
              "GoFood",
              "Loyalty Card",
            ]
              .concat([
                "Americano",
                "Cappuccino",
                "Latte",
                "Matcha Latte",
                "Creamy Milky Choco",
                "Nutty Coffee",
                "Caramel Macchiato",
                "GoFood",
                "Loyalty Card",
              ])
              .map((t, i) => (
                <span key={i} className="flex items-center whitespace-nowrap pr-10 lg:pr-12">
                  {t} <span className="ml-10 text-accent lg:ml-12">✦</span>
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ===== MENU PREVIEW ===== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-24">
        {/* Intro — satu baris di mobile */}
        <div className="mb-6 flex items-end justify-between gap-4 lg:mb-16">
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary lg:text-xs">
              Menu Spotlight
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold leading-[0.95] tracking-tight lg:mt-4 lg:text-7xl">
              Coffee &amp; <em className="text-primary">Non-Coffee</em>.
            </h2>
          </div>
          <Link
            to="/menu"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline lg:flex"
          >
            Lihat semua <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-8">
          <article className="group relative overflow-hidden rounded-[1.5rem] bg-card lg:rounded-[2rem]">
            <img
              src={menuCoffee}
              alt="Iced coffee"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground lg:p-10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-accent lg:gap-2 lg:text-[10px]">
                <Coffee className="h-2.5 w-2.5 lg:h-3 lg:w-3" /> The Classics
              </div>
              <h3 className="mt-1 font-display text-xl font-bold lg:mt-2 lg:text-5xl">Coffee</h3>
              <p className="mt-1 hidden text-[10px] text-primary-foreground/70 sm:block lg:mt-2 lg:text-sm">
                Americano · Espresso · Latte · Signature
              </p>
              <p className="mt-2 font-display text-base font-bold text-accent lg:mt-4 lg:text-2xl">
                mulai Rp 10K
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[1.5rem] bg-card lg:rounded-[2rem]">
            <img
              src={menuNoncoffee}
              alt="Non-coffee drinks"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground lg:p-10">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-accent lg:gap-2 lg:text-[10px]">
                <Sparkles className="h-2.5 w-2.5 lg:h-3 lg:w-3" /> Sweet Side
              </div>
              <h3 className="mt-1 font-display text-xl font-bold lg:mt-2 lg:text-5xl">Non-Coffee</h3>
              <p className="mt-1 hidden text-[10px] text-primary-foreground/70 sm:block lg:mt-2 lg:text-sm">
                Matcha · Choco · Strawberry · Soda
              </p>
              <p className="mt-2 font-display text-base font-bold text-accent lg:mt-4 lg:text-2xl">
                mulai Rp 6K
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 flex justify-center lg:hidden">
          <Link
            to="/menu"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 py-3.5 text-sm font-bold text-primary"
          >
            Lihat Menu Lengkap <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ===== LOYALITY CARD BANNER ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-accent p-5 sm:p-8 lg:rounded-[3rem] lg:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Text — always first on mobile */}
            <div className="lg:order-1">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-primary lg:text-xs">
                Membership Benefit
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold leading-[1] tracking-tight text-primary sm:text-3xl lg:text-7xl">
                Beli 10,{" "}
                <em className="text-primary-foreground">gratis 1!</em>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-primary/70 lg:mt-4 lg:text-lg">
                Minta Loyality Card ke kasir. Kumpulkan 10 stempel, nikmati kopi favoritmu <strong>gratis!</strong>
              </p>
              <div className="mt-3 lg:mt-8">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                  Cara mendapatkan kartu <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Card — second on mobile */}
            <div className="lg:order-2">
              <LoyalityCard />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIBE / STORY ===== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-32">
        {/* Section 1 — image + teks */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[3rem]">
              <img
                src={galleryStudents}
                alt="Siswa SMK Mitra Industri nongkrong"
                loading="lazy"
                width={1280}
                height={1600}
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
              {/* Mobile: floating label chip, bukan full-width bar */}
              <div className="absolute bottom-3 left-3 lg:hidden">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                  ✦ The Vibes
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-10">
            <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary lg:block">
              The Vibes
            </p>
            <h2 className="font-display text-3xl font-bold leading-[1] tracking-tight lg:mt-6 lg:text-7xl">
              Tempat nongkrong favorit <em className="text-primary">anak SMK Mitra</em>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
              Dari pagi sampai sore, cafe kami selalu ramai dengan siswa yang datang buat ngopi, ngerjain tugas, atau sekedar nongkrong bareng teman.
            </p>
          </div>
        </div>

        {/* Section 2 — teks + image */}
        <div className="mt-10 grid gap-6 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:col-span-7 lg:order-1 lg:pr-10">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary lg:text-xs">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-[1] tracking-tight lg:mt-6 lg:text-7xl">
              Lebih dari sekedar <em className="text-primary">secangkir kopi</em>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
              Mitra Coffeeshop lahir dari mimpi sederhana: kasih ruang buat anak SMK
              Mitra Industri buat rehat, ngobrol, dan kreatif bareng.
            </p>

            {/* Feature cards — 1-col on mobile (row layout), 3-col on desktop */}
            <div className="mt-5 flex flex-col gap-2.5 sm:grid sm:grid-cols-3 sm:gap-3 lg:mt-12 lg:gap-6">
              {[
                { icon: Coffee, t: "Biji Pilihan", d: "Arabika lokal" },
                { icon: Heart, t: "Harga Pelajar", d: "Mulai 8 Ribu" },
                { icon: Sparkles, t: "Vibes Seru", d: "Nongkrong asik" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 sm:flex-col sm:items-center sm:text-center lg:items-start lg:rounded-2xl lg:p-6 lg:text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary lg:h-12 lg:w-12">
                    <Icon className="h-3.5 w-3.5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold lg:text-base">{t}</p>
                    <p className="text-[10px] text-muted-foreground lg:text-xs">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:col-span-5 lg:order-2">
            <img
              src={strawberryLatte}
              alt="Strawberry latte"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full rounded-[1.5rem] object-cover lg:aspect-[4/5] lg:rounded-[3rem]"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10 lg:pb-32">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-6 py-10 text-center text-primary-foreground sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-[1] tracking-tight sm:text-4xl lg:text-8xl">
              Mampir hari ini?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70 lg:mt-8 lg:text-lg">
              Pesan duluan via WhatsApp biar gak antri pas jam istirahat. Atau order delivery lewat GoFood!
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mt-14 lg:gap-5">
              <a
                href="https://wa.me/6285217971601"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition active:scale-95 sm:w-auto lg:px-10 lg:py-5 lg:text-base"
              >
                Pesan via WhatsApp
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </a>
              <a
                href="https://gofood.link/a/G6pniU1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#df1d0c] px-8 py-4 text-sm font-bold text-white transition active:scale-95 sm:w-auto lg:px-10 lg:py-5 lg:text-base"
              >
                Order di GoFood
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}