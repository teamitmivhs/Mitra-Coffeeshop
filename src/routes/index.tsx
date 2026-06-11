import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, Heart, MapPin, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import heroCoffee from "../assets/nutty-coffee.jpg";
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
      {/* ===== HERO MAGAZINE ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 pb-20 lg:grid-cols-12 lg:px-10 lg:pt-16 lg:pb-32">
          {/* Tag column */}
          <aside className="lg:col-span-2">

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

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/50">
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                Buka · 07.30 – 16.00 WIB
              </span>
              <span className="text-foreground/20">—</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-foreground/40" />
                SMK Mitra Industri, Bekasi
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:col-span-3">
            <div className="absolute self-center-safe -top-6 hidden font-display text-xs uppercase tracking-[0.4em] text-muted-foreground lg:block">
              Featured
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={heroCoffee}
                alt="Latte art di Mitra Coffeeshop"
                width={1600}
                height={1920}
                className="aspect-[3/4] h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3 backdrop-blur">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                  Signature
                </p>
                <p className="font-display text-lg font-bold leading-tight">
                  Nutty Coffee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="border-y border-border bg-primary py-4 text-primary-foreground overflow-hidden">
          <style>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 18s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track gap-0 font-display text-sm font-semibold uppercase tracking-[0.3em]">
            {[
              "Americano",
              "Cappuccino",
              "Latte",
              "Matcha Latte",
              "Creamy Milky Choco",
              "Nutty Coffee",
              "Caramel Macchiato",
              "GoFood",
              "Loyality Card",
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
                "Loyality Card",
              ])
              .map((t, i) => (
                <span key={i} className="flex items-center whitespace-nowrap pr-12">
                  {t} <span className="ml-12 text-accent">✦</span>
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

        <div className="mt-16 flex justify-center">
          <Link to="/menu">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 rounded-full border border-primary/30 bg-background px-10 py-4 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5 hover:shadow-md"
            >
              Lihat menu lengkap
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ===== Loyality CARD BANNER ===== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-6 sm:p-10 lg:rounded-[2.5rem] lg:p-16">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
            {/* Card di atas di mobile, kanan di desktop */}
            <div className="lg:order-2">
              <LoyalityCard />
            </div>
            {/* Teks di bawah di mobile, kiri di desktop */}
            <div className="lg:order-1">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Dapatkan Loyality Card saat Pembelian
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[0.95] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Beli 10 gratis 1!{" "}
                <em className="text-primary-foreground">Ngopi makin hemat.</em>
              </h2>
              <p className="mt-4 text-sm text-primary/80 sm:text-base">
                Minta Loyality card ke kasir saat pertama beli. Tiap pembelian kopi dapat 1 stempel — kumpulkan 10, kopi berikutnya <strong>gratis!</strong>
              </p>
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
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl lg:hidden" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl lg:hidden" />
          <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl hidden lg:block" />
          <div className="absolute -left-20 bottom-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl hidden lg:block" />
          <div className="relative lg:col-span-7 lg:pl-10">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Vibe
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight lg:text-7xl">
              Tempat nongkrong favorit <em className="text-primary">anak SMK Mitra Industri</em>.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/70">
              Dari pagi sampai sore, cafe kami selalu ramai dengan siswa yang datang buat ngopi, ngerjain tugas, atau sekedar nongkrong bareng teman. Suasana yang santai dan ramah bikin Mitra Coffeeshop jadi tempat favorit buat rehat sejenak dari padatnya jadwal sekolah.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <img
              src={strawberryLatte}
              alt="Strawberry latte dengan latte art di Mitra Coffeeshop"
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
                className="aspect-[4/5] w-full object-cover"
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
              className="inline-flex items-center gap-2 rounded-full bg-[#df1d0c] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              Order di GoFood
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}