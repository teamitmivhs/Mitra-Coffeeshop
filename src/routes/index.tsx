import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Coffee, Heart, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import caramelMacchiato from "../assets/caramel-macchiato.webp";
import blueOcean from "../assets/blueocean.webp";
import galleryStudents from "../assets/gallery-students.webp";
import galleryBarista from "../assets/gallery-barista.webp";
import frontCard from "../assets/front-card.webp";
import miSignature from "../assets/mi-signature.webp";
import rearCard from "../assets/rear-card.webp";
import strawberryLatte from "../assets/strawberry-latte.webp";

const siteUrl = "https://coffeeshop.itmivhs.net";
const homeTitle = "Mitra Coffeeshop - Coffee Shop SMK Mitra Industri";
const homeDescription =
  "Mitra Coffeeshop adalah coffee shop di SMK Mitra Industri dengan menu kopi, non-kopi, snack, dan loyalty card harga pelajar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeTitle },
      {
        name: "description",
        content: homeDescription,
      },
      { property: "og:title", content: homeTitle },
      {
        property: "og:description",
        content: homeDescription,
      },
      { property: "og:url", content: siteUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mitra Coffeeshop" },
      { name: "twitter:title", content: homeTitle },
      { name: "twitter:description", content: homeDescription },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Mitra Coffeeshop",
          url: siteUrl,
          image: `${siteUrl}/favicon.ico`,
          description: homeDescription,
          telephone: "+6285217971601",
          servesCuisine: ["Coffee", "Non-coffee drinks", "Snacks"],
          priceRange: "Rp6.000-Rp18.000",
          address: {
            "@type": "PostalAddress",
            name: "SMK Mitra Industri",
            addressCountry: "ID",
          },
          sameAs: ["https://gofood.link/a/G6pniU1"],
        },
      },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
  }),
  component: HomePage,
});

const easeOut = [0.22, 1, 0.36, 1] as const;

const mobileHeroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const mobileHeroItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const whatsappOrderUrl =
  "https://wa.me/6285217971601?text=Halo%20Mitra%20Coffeeshop%2C%20saya%20mau%20pesan";

const bestSellerItems = [
  {
    image: caramelMacchiato,
    title: "Caramel Macchiato",
    label: "Coffee",
    price: "18K",
    desc: "Espresso, vanilla, susu, dan caramel drizzle.",
  },
  {
    image: blueOcean,
    title: "Blue Ocean",
    label: "Fresh",
    price: "15K",
    desc: "Soda segar dengan warna biru yang standout.",
  },
  {
    image: strawberryLatte,
    title: "Korean Strawberry",
    label: "Non-Coffee",
    price: "18K",
    desc: "Susu creamy dengan saus strawberry ala Korea.",
  },
  {
    image: miSignature,
    title: "M.I Signature",
    label: "House Blend",
    price: "15K",
    desc: "Racikan spesial Mitra Coffeeshop.",
  },
];

function LoyaltyCard() {
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
        aria-label="Flip Loyalty card"
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
              alt="Loyalty card depan"
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
              alt="Loyalty card belakang"
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
  const reduceMotion = useReducedMotion();
  const viewport = { once: true, amount: 0.22 };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Mobile: full-bleed hero image */}
        <div className="relative flex h-[34rem] flex-col justify-end overflow-hidden pb-5 pt-20 sm:h-[36rem] lg:hidden">
          <motion.img
            src={galleryBarista}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[50%_34%]"
            initial={reduceMotion ? false : { scale: 1.08, opacity: 0.85 }}
            animate={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.25, ease: easeOut }}
          />
          {/* layered gradient: dark top for readability, heavy bottom for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/68 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-background to-transparent" />

          {/* bottom content */}
          <motion.div
            className="relative z-10 px-5"
            variants={mobileHeroStagger}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "show"}
          >
            {/* eyebrow */}
            <motion.p
              className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-primary/90"
              variants={mobileHeroItem}
            >
              Coffee bar · SMK Mitra Industri
            </motion.p>

            {/* headline — big, editorial, two-line */}
            <motion.h1
              className="mt-2 max-w-[14rem] font-display text-[3.15rem] font-bold leading-[0.88] tracking-tight"
              variants={mobileHeroItem}
            >
              Mitra
              <br />
              Coffeeshop
            </motion.h1>

            <motion.p
              className="mt-3 max-w-[18rem] text-[13px] leading-snug text-foreground/70"
              variants={mobileHeroItem}
            >
              Fresh drinks, harga pelajar, siap nemenin nugas dan nongkrong.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-5 grid grid-cols-[1fr_auto] gap-2.5"
              variants={mobileHeroItem}
            >
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-primary-foreground shadow-lg shadow-primary/25 transition active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan Sekarang
              </a>
              <Link
                to="/menu"
                aria-label="Lihat menu"
                className="inline-flex aspect-square h-11 items-center justify-center rounded-full border border-white/20 bg-white/15 text-foreground backdrop-blur-md transition active:scale-95"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="mt-4 flex snap-x gap-2 overflow-x-auto pb-1"
              variants={mobileHeroItem}
            >
              {[
                { value: "Coffee", label: "mulai 10K" },
                { value: "Non-coffee", label: "mulai 6K" },
                { value: "GoFood", label: "ready" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="min-w-fit snap-start rounded-full border border-white/15 bg-background/65 px-3.5 py-2 text-left backdrop-blur-md"
                >
                  <p className="text-[11px] font-bold leading-none text-primary">{item.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop: full-bleed background, mirroring mobile */}
        <div className="relative hidden min-h-[90svh] flex-col justify-end pb-14 pt-8 lg:flex">
          <img
            src={galleryBarista}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* bottom content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-10">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary/90">
              SMK Mitra Industri · Coffee · Vibes
            </p>
            <h1 className="mt-3 font-display text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.92] tracking-tighter">
              Ngopi di sekolah? <span className="italic text-primary">Bisa banget.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/65">
              Dari americano klasik sampai matcha latte yang creamy — Mitra Coffeeshop jadi tempat
              seru buat ngerjain tugas, ngobrol bareng teman, atau sekedar rehat.
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
      <motion.section
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-24"
        variants={revealUp}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={viewport}
      >
        {/* Intro — satu baris di mobile */}
        <div className="mb-4 flex items-end justify-between gap-4 lg:mb-16">
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

        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 lg:hidden">
          {bestSellerItems.map(({ image, title, label, desc, price }, index) => (
            <motion.article
              key={title}
              className="relative min-w-[78%] snap-start overflow-hidden rounded-[1.35rem] border border-border bg-card shadow-sm shadow-primary/5"
              variants={imageReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={viewport}
              transition={{ delay: index * 0.05 }}
            >
              <img src={image} alt={title} loading="lazy" className="h-56 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary via-primary/80 to-transparent p-4 pt-16 text-primary-foreground">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-foreground">
                    {label}
                  </span>
                  <span className="font-display text-lg font-bold text-accent">{price}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold leading-none">{title}</h3>
                <p className="mt-2 text-xs leading-snug text-primary-foreground/75">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-3 lg:grid lg:gap-8">
          <motion.article
            className="group relative overflow-hidden rounded-[1.5rem] bg-card shadow-xl shadow-primary/5 lg:rounded-[2rem]"
            variants={imageReveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <img
              src={caramelMacchiato}
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
          </motion.article>

          <motion.article
            className="group relative overflow-hidden rounded-[1.5rem] bg-card shadow-xl shadow-primary/5 lg:rounded-[2rem]"
            variants={imageReveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
            transition={{ delay: 0.08 }}
          >
            <img
              src={blueOcean}
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
              <h3 className="mt-1 font-display text-xl font-bold lg:mt-2 lg:text-5xl">
                Non-Coffee
              </h3>
              <p className="mt-1 hidden text-[10px] text-primary-foreground/70 sm:block lg:mt-2 lg:text-sm">
                Matcha · Choco · Strawberry · Soda
              </p>
              <p className="mt-2 font-display text-base font-bold text-accent lg:mt-4 lg:text-2xl">
                mulai Rp 6K
              </p>
            </div>
          </motion.article>
        </div>

        <div className="mt-5 flex justify-center lg:hidden">
          <Link
            to="/menu"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/20 py-3.5 text-sm font-bold text-primary"
          >
            Lihat Menu Lengkap <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>

      {/* ===== LOYALITY CARD BANNER ===== */}
      <motion.section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
        variants={revealUp}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={viewport}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] bg-accent p-5 shadow-2xl shadow-primary/10 sm:p-8 lg:rounded-[3rem] lg:p-20">
          <div className="absolute inset-x-0 top-0 h-16 bg-white/15" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-primary/10" />

          <div className="relative grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Text — always first on mobile */}
            <div className="lg:order-1">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-primary lg:text-xs">
                Membership Benefit
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-[0.95] tracking-tight text-primary sm:text-3xl lg:text-7xl">
                Beli 10,
                <br className="lg:hidden" /> <em className="text-primary-foreground">gratis 1!</em>
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary/70 lg:mt-4 lg:text-lg">
                Minta Loyalty Card ke kasir. Setiap pembelian on site dapat 1 stiker, kumpulkan 10
                stiker untuk kopi gratis.
              </p>
              <div className="group mt-4 max-w-md rounded-[1.25rem] border border-primary/15 bg-primary/8 p-3 transition lg:mt-8 lg:bg-primary/5 lg:hover:bg-primary/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 text-left text-sm font-bold text-primary"
                >
                  Cara mendapatkan kartu
                  <ChevronDown className="h-4 w-4 shrink-0 transition group-hover:translate-y-0.5 lg:group-hover:rotate-180" />
                </button>
                <div className="mt-3 border-t border-primary/15 pt-3 text-sm leading-relaxed text-primary/75 lg:grid lg:grid-rows-[0fr] lg:overflow-hidden lg:border-t-0 lg:pt-0 lg:transition-all lg:duration-300 lg:group-hover:mt-3 lg:group-hover:grid-rows-[1fr] lg:group-hover:border-t lg:group-hover:pt-3 lg:group-focus-within:mt-3 lg:group-focus-within:grid-rows-[1fr] lg:group-focus-within:border-t lg:group-focus-within:pt-3">
                  <div className="min-h-0">
                    <p>
                      Setiap 1 pembelian di Mitra Coffeeshop akan mendapatkan 1 stiker. Untuk
                      mendapatkan kopi gratis, kamu harus mengumpulkan 10 stiker.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-primary/60">
                      *Berlaku hanya untuk pembelian on site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card — second on mobile */}
            <div className="mx-auto w-full lg:order-2">
              <LoyaltyCard />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== VIBE / STORY ===== */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-32">
        <div className="grid gap-4 lg:hidden">
          <motion.article
            className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-card"
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <img
              src={galleryStudents}
              alt="Siswa SMK Mitra Industri nongkrong"
              loading="lazy"
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                The Vibes
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-[0.95] tracking-tight">
                Nongkrong favorit anak SMK Mitra.
              </h2>
              <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-primary-foreground/75">
                Ramai buat ngopi, nugas, atau rehat bareng teman.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-card"
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <img
              src={strawberryLatte}
              alt="Strawberry latte"
              loading="lazy"
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Our Story
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-[0.95] tracking-tight">
                Lebih dari <em className="text-primary">secangkir kopi</em>.
              </h2>
              <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-foreground/70">
                Ruang kecil buat rehat, ngobrol, dan kreatif bareng.
              </p>
            </div>
          </motion.article>

          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Coffee, t: "Biji", d: "Pilihan" },
              { icon: Heart, t: "Harga", d: "Pelajar" },
              { icon: Sparkles, t: "Vibes", d: "Seru" },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-card p-3 text-center shadow-sm shadow-primary/5"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <p className="mt-2 font-display text-xs font-bold">{t}</p>
                <p className="text-[10px] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1 — image + teks */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            variants={imageReveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col justify-center lg:col-span-7 lg:pl-10"
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <p className="hidden font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary lg:block">
              The Vibes
            </p>
            <h2 className="font-display text-3xl font-bold leading-[1] tracking-tight lg:mt-6 lg:text-7xl">
              Tempat nongkrong favorit <em className="text-primary">anak SMK Mitra</em>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
              Dari pagi sampai sore, cafe kami selalu ramai dengan siswa yang datang buat ngopi,
              ngerjain tugas, atau sekedar nongkrong bareng teman.
            </p>
          </motion.div>
        </div>

        {/* Section 2 — teks + image */}
        <div className="mt-10 hidden gap-6 lg:mt-32 lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="order-2 lg:col-span-7 lg:order-1 lg:pr-10"
            variants={revealUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary lg:text-xs">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-[1] tracking-tight lg:mt-6 lg:text-7xl">
              Lebih dari sekedar <em className="text-primary">secangkir kopi</em>.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
              Mitra Coffeeshop lahir dari mimpi sederhana: kasih ruang buat anak SMK Mitra Industri
              buat rehat, ngobrol, dan kreatif bareng.
            </p>

            {/* Feature cards — 1-col on mobile (row layout), 3-col on desktop */}
            <div className="-mx-4 mt-5 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12 lg:gap-6">
              {[
                { icon: Coffee, t: "Biji Pilihan", d: "Arabika lokal" },
                { icon: Heart, t: "Harga Pelajar", d: "Mulai 8 Ribu" },
                { icon: Sparkles, t: "Vibes Seru", d: "Nongkrong asik" },
              ].map(({ icon: Icon, t, d }, index) => (
                <motion.div
                  key={t}
                  className="flex min-w-[145px] snap-start items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm shadow-primary/5 sm:min-w-0 sm:flex-col sm:items-center sm:text-center lg:items-start lg:rounded-2xl lg:p-6 lg:text-left"
                  variants={revealUp}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "show"}
                  viewport={viewport}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary lg:h-12 lg:w-12">
                    <Icon className="h-3.5 w-3.5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold lg:text-base">{t}</p>
                    <p className="text-[10px] text-muted-foreground lg:text-xs">{d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:col-span-5 lg:order-2"
            variants={imageReveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={viewport}
          >
            <img
              src={strawberryLatte}
              alt="Strawberry latte"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[16/10] w-full rounded-[1.5rem] object-cover shadow-xl shadow-primary/5 lg:aspect-[4/5] lg:rounded-[3rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <motion.section
        className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-10 lg:pb-32"
        variants={revealUp}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={viewport}
      >
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-6 py-10 text-center text-primary-foreground sm:px-8 sm:py-12 lg:rounded-[2.5rem] lg:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-[1] tracking-tight sm:text-4xl lg:text-8xl">
              Mampir hari ini?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70 lg:mt-8 lg:text-lg">
              Pesan duluan via WhatsApp biar gak antri pas jam istirahat. Atau order delivery lewat
              GoFood!
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
      </motion.section>
    </div>
  );
}
