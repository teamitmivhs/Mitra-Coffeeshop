import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import caramelMacchiato from "../assets/caramel-macchiato.jpg";
import blueOcean from "../assets/blueocean.jpg";
import latteArt from "../assets/latteart.jpg";
import galleryBarista from "../assets/gallery-barista.jpg";
import galleryInterior from "../assets/gallery-interior.jpg";
import galleryStudents from "../assets/gallery-students.jpg";
import frenchFries from "../assets/frenchfries.jpg";
import brownSugar from "../assets/brown-sugar.jpg";
import miSignature from "../assets/mi-signature.jpg";
import strawberryLatte from "../assets/strawberry-latte.jpg";
import dimsum from "../assets/dimsum.jpg";
import bubblePresso from "../assets/bubblepresso.jpg";
import bubblegum from "../assets/bubblegum.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mitra Coffeeshop" },
      {
        name: "description",
        content:
          "Menu lengkap Mitra Coffeeshop: americano, cappuccino, latte, matcha, choco, strawberry, taro. Harga pelajar mulai Rp 8.000.",
      },
      { property: "og:title", content: "Menu — Mitra Coffeeshop" },
      {
        property: "og:description",
        content: "Daftar minuman kopi & non-kopi di Mitra Coffeeshop.",
      },
    ],
  }),
  component: MenuPage,
});

// ─── Types ──────────────────────────────────────────────────────────────────
type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tone: string;
  image: string;
  featured?: boolean;
  isNew?: boolean;
  hasPhoto?: boolean; // false = show "Photo will be added soon" placeholder
};

// ─── Data ───────────────────────────────────────────────────────────────────
// ── Coffee ──
// TODO: ganti tiap `image` ke import dari ../assets/menu/coffee/<nama>.jpg
const coffeeMenu: MenuItem[] = [
  {
    name: "Americano",
    desc: "Espresso shot + air panas. Pahit klasik.",
    price: "10K",
    tone: "#3d2418",
    image: latteArt,
    hasPhoto: false,
  },
  {
    name: "Long Black",
    desc: "Double shot espresso over cold water. Bold & clean.",
    price: "16K",
    tone: "#241410",
    image: latteArt,
    hasPhoto: false,
  },
  {
    name: "Light Brown Sugar",
    desc: "Espresso + brown sugar + susu. Karamel subtle.",
    price: "20K",
    tone: "#a9703c",
    image: brownSugar,
    featured: true,
    hasPhoto: true,
  },
  {
    name: "Nutty Coffee",
    desc: "Hazelnut + espresso + susu. Kacang yang asik.",
    price: "18K",
    tone: "#8a5a35",
    image: brownSugar,
    hasPhoto: false,
  },
  {
    name: "Coffee Latte",
    desc: "Lembut, milky, cocok buat pemula.",
    price: "16K",
    tone: "#caa06a",
    image: latteArt,
    hasPhoto: false,
  },
  {
    name: "Caramel Macchiato",
    desc: "Espresso + vanilla + susu + caramel drizzle.",
    price: "18K",
    tone: "#c08838",
    image: caramelMacchiato,
    hasPhoto: true,
  },
  {
    name: "Cappuccino",
    desc: "Espresso + steamed milk + busa tebal.",
    price: "18K",
    tone: "#b48a5e",
    image: latteArt,
    hasPhoto: false,
  },
  {
    name: "Creamy Coffee",
    desc: "Rich, creamy, smooth. Juara buat santai.",
    price: "17K",
    tone: "#9c7148",
    image: galleryBarista,
    hasPhoto: false,
  },
  {
    name: "Brown Sugar Shaken",
    desc: "Shaken espresso + brown sugar + susu. Seger.",
    price: "17K",
    tone: "#7a4a28",
    image: caramelMacchiato,
    hasPhoto: false,
  },
  {
    name: "M.I Signature",
    desc: "Racikan spesial house blend. Must try.",
    price: "15K",
    tone: "#5c3420",
    image: miSignature,
    featured: true,
    hasPhoto: true,
  },
  {
    name: "Gula Aren Coffee",
    desc: "Espresso + gula aren + susu segar lokal.",
    price: "16K",
    tone: "#6b3f22",
    image: caramelMacchiato,
    hasPhoto: false,
  },
  {
    name: "Bubble Presso",
    desc: "Espresso + soda + bubble. Unik dan menyegarkan.",
    price: "18K",
    tone: "#5a3420",
    image: bubblePresso,
    isNew: true,
    hasPhoto: true,
  },
];

// ── Non-Coffee ──
// TODO: ganti tiap `image` ke import dari ../assets/menu/noncoffee/<nama>.jpg
const nonCoffeeMenu: MenuItem[] = [
  {
    name: "Creamy Milky Choco",
    desc: "Cokelat premium + susu full cream. Rich banget.",
    price: "16K",
    tone: "#5a3420",
    image: brownSugar,
    hasPhoto: false,
  },
  {
    name: "Creamy Milk Matcha",
    desc: "Matcha premium + susu creamy. Balance perfect.",
    price: "17K",
    tone: "#6f8f43",
    image: brownSugar,
    hasPhoto: false,
  },
  {
    name: "Korean Strawberry Milk",
    desc: "Susu + strawberry saus ala Korea. Viral!",
    price: "18K",
    tone: "#c2496f",
    image: strawberryLatte,
    hasPhoto: true,
  },
  {
    name: "Bubblegum Latte",
    desc: "Warna cantik, rasa manis playful. New arrival.",
    price: "20K",
    tone: "#cc5f9a",
    image: bubblegum,
    isNew: true,
    hasPhoto: true,
  },
  {
    name: "Pistachio Honey Matcha",
    desc: "Matcha + pistachio + madu. Kolaborasi spesial.",
    price: "23K",
    tone: "#5e7d34",
    image: brownSugar,
    featured: true,
    hasPhoto: false,
  },
  {
    name: "Matcha Latte",
    desc: "Bubuk matcha premium + susu segar.",
    price: "16K",
    tone: "#6f8f43",
    image: brownSugar,
    hasPhoto: false,
  },
  {
    name: "Ice Tea",
    desc: "Teh tawar dingin klasik. Simpel & menyegarkan.",
    price: "6K",
    tone: "#9a7a3e",
    image: galleryStudents,
    hasPhoto: false,
  },
  {
    name: "Lemon Tea",
    desc: "Teh + lemon segar. Bikin melek.",
    price: "12K",
    tone: "#c79a3e",
    image: galleryStudents,
    hasPhoto: false,
  },
  {
    name: "Thai Tea",
    desc: "Teh Thailand creamy dengan susu kental.",
    price: "15K",
    tone: "#a85a1f",
    image: galleryStudents,
    hasPhoto: false,
  },
  {
    name: "Green Tea",
    desc: "Teh hijau dingin, ringan dan menyegarkan.",
    price: "15K",
    tone: "#4f8a2a",
    image: galleryStudents,
    hasPhoto: false,
  },
  {
    name: "Lemon Mint Mojito",
    desc: "Lemon + mint + soda. Summer vibes banget.",
    price: "13K",
    tone: "#5fae6a",
    image: galleryInterior,
    hasPhoto: false,
  },
  {
    name: "Blue Ocean",
    desc: "Soda biru segar dengan rasa tropical.",
    price: "16K",
    tone: "#2f7ab8",
    image: blueOcean,
    hasPhoto: true,
  },
  {
    name: "Orange Squash",
    desc: "Jeruk peras segar, simpel dan real.",
    price: "8K",
    tone: "#d4762a",
    image: galleryInterior,
    hasPhoto: false,
  },
  {
    name: "Pink Beach",
    desc: "Fruity, segar, instagrammable. New arrival.",
    price: "16K",
    tone: "#d9657a",
    image: galleryInterior,
    isNew: true,
    hasPhoto: false,
  },
];

// ── Food & Snacks ──
// TODO: ganti tiap `image` ke import dari ../assets/menu/food/<nama>.jpg
const foodMenu: MenuItem[] = [
  {
    name: "French Fries",
    desc: "Kentang goreng renyah. Cocok buat teman ngopi.",
    price: "16K",
    tone: "#c08a2e",
    image: frenchFries,
    hasPhoto: true,
  },
  {
    name: "Spaghetti",
    desc: "Pilihan: Bolognese / Aglio Olio / Carbonara.",
    price: "10K",
    tone: "#a6442c",
    image: dimsum,
    hasPhoto: false,
  },
  {
    name: "Risoles",
    desc: "3 pcs risoles gurih. Crispy di luar, creamy di dalam.",
    price: "15K",
    tone: "#b8893e",
    image: dimsum,
    hasPhoto: false,
  },
  {
    name: "Karaage",
    desc: "Ayam goreng Jepang per pcs. Juicy & crispy.",
    price: "5K",
    tone: "#9c5a22",
    image: dimsum,
    hasPhoto: false,
  },
  {
    name: "Indomie + Telur",
    desc: "Goreng atau rebus dengan telur. Classic.",
    price: "13K",
    tone: "#bb4a2a",
    image: dimsum,
    hasPhoto: false,
  },
  {
    name: "Telur Rebus",
    desc: "Per pcs. Simple protein boost.",
    price: "5K",
    tone: "#d4a23e",
    image: dimsum,
    hasPhoto: false,
  },
  {
    name: "Dimsum",
    desc: "3 pcs (11K) atau 4 pcs (14K). Pilih sesuai lapar.",
    price: "11K",
    tone: "#a35d3a",
    image: dimsum,
    hasPhoto: true,
  },
  {
    name: "Bundle 1",
    desc: "French Fries + Risoles. Hemat combo.",
    price: "22K",
    tone: "#8a4a26",
    image: frenchFries,
    featured: true,
    hasPhoto: true,
  },
  {
    name: "Bundle 2",
    desc: "French Fries + Risoles + Karaage. Full combo!",
    price: "28K",
    tone: "#7a3e1e",
    image: dimsum,
    featured: true,
    hasPhoto: false,
  },
];

// ─── PhotoPlaceholder ────────────────────────────────────────────────────────
function PhotoPlaceholder({ tone, className = "" }: { tone: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      style={{ backgroundColor: tone + "33" }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-current/25 bg-white/10"
        style={{ color: tone }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 opacity-70"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <p
        className="px-4 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.18em] opacity-75"
        style={{ color: tone }}
      >
        Photo will be
        <br />
        added soon
      </p>
    </div>
  );
}

// ─── Mobile Floating Card (Persona 5 bottom-sheet style) ────────────────────
// Muncul dari bawah saat item di-tap di mobile. Dismiss manual via tombol close.
function FloatingCard({ item, onDismiss }: { item: MenuItem | null; onDismiss: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <>
          {/* backdrop tap-to-dismiss */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onDismiss}
          />
          {/* card */}
          <motion.div
            key="card"
            className="fixed inset-x-5 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-50 mx-auto max-h-[74svh] max-w-[24rem] overflow-hidden rounded-3xl bg-background shadow-2xl lg:hidden"
            initial={{ y: 80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
          >
            {/* Colored background */}
            <motion.div
              className="relative isolate overflow-hidden"
              style={{ backgroundColor: item.tone }}
            >
              <button
                type="button"
                aria-label="Tutup preview"
                onClick={onDismiss}
                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-xl font-bold leading-none text-white shadow-lg backdrop-blur-md transition active:scale-95"
              >
                ×
              </button>

              {/* ── P5 diagonal stripe decoration ── */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-10"
                preserveAspectRatio="none"
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <line
                    key={i}
                    x1={i * 32 - 20}
                    y1="0"
                    x2={i * 32 + 16}
                    y2="355"
                    stroke="white"
                    strokeWidth="14"
                  />
                ))}
              </svg>

              {/* ── Item photo — swings in ── */}
              <motion.div
                className="relative z-10 overflow-hidden bg-black/10"
                initial={{ y: -20, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 24, delay: 0.05 }}
              >
                {item.hasPhoto ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-square w-full object-cover object-center"
                  />
                ) : (
                  <PhotoPlaceholder tone="#ffffff" className="aspect-square w-full bg-white/10" />
                )}
              </motion.div>

              {/* ── Text info ── */}
              <div className="relative z-10 px-5 pb-4 pt-3.5 text-white">
                {/* chapter/label */}
                <motion.p
                  className="font-display text-[9px] font-bold uppercase leading-none tracking-[0.28em] text-white/60"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.featured ? "✦ Signature" : item.isNew ? "✦ New Arrival" : "Menu"}
                </motion.p>

                <motion.h3
                  className="mt-1.5 font-display text-[1.85rem] font-black leading-none"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.08 }}
                >
                  {item.name}
                </motion.h3>

                <motion.p
                  className="mt-2 line-clamp-2 text-[13px] leading-snug text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.16 }}
                >
                  {item.desc}
                </motion.p>

                {/* Price — big, P5-style */}
                <motion.p
                  className="mt-3 font-display text-[2.35rem] font-black leading-none text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 440, damping: 18, delay: 0.12 }}
                >
                  Rp {item.price}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Desktop Panel — Persona 5 enhanced ─────────────────────────────────────
function DesktopPanel({
  chapter,
  title,
  blurb,
  active,
  defaultItem,
}: {
  chapter: string;
  title: string;
  blurb: string;
  active: MenuItem | null;
  defaultItem: MenuItem;
}) {
  const displayed = active ?? defaultItem;

  return (
    <motion.div
      className="relative isolate hidden h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-10 text-white lg:flex"
      animate={{ backgroundColor: displayed.tone }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* ── P5 diagonal stripe bg ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1={i * 48 - 30}
            y1="0"
            x2={i * 48 + 40}
            y2="600"
            stroke="white"
            strokeWidth="24"
          />
        ))}
      </svg>

      {/* ── Large watermark chapter number ── */}
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-6 select-none font-display text-[11rem] font-black leading-none text-white opacity-[0.06]"
      >
        {chapter.replace("Chapter ", "")}
      </div>

      {/* ── Background photo per-item ── */}
      <AnimatePresence mode="wait">
        {displayed.hasPhoto ? (
          <motion.img
            key={displayed.name}
            src={displayed.image}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.28, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity"
          />
        ) : (
          <motion.div
            key={displayed.name + "-no-bg"}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* ── Top: chapter label + title ── */}
      <div className="relative z-10">
        <motion.p
          className="font-display text-[10px] font-bold uppercase tracking-[0.35em] text-white/60"
          key={chapter}
        >
          {chapter}
        </motion.p>
        <h2 className="mt-2 font-display text-6xl font-black leading-[0.9]">{title}</h2>
        <p className="mt-3 max-w-[22ch] text-sm text-white/70">{blurb}</p>
      </div>

      {/* ── Bottom: floating product image + name/price ── */}
      <div className="relative z-10 flex items-end justify-between gap-4">
        {/* Photo — plain square, no diagonal clip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={displayed.name + "-img"}
            className="shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/15"
            initial={{ opacity: 0, y: 20, rotate: -8, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, rotate: 4, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
          >
            {displayed.hasPhoto ? (
              <motion.img
                src={displayed.image}
                alt={displayed.name}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-36 w-36 object-cover"
              />
            ) : (
              <PhotoPlaceholder tone="#ffffff" className="h-36 w-36" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Name + price — slides in from right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={displayed.name + "-text"}
            className="min-w-0 flex-1 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28, delay: 0.05 }}
          >
            {!active ? (
              <p className="text-sm text-white/40 italic">← Arahkan ke item</p>
            ) : (
              <>
                <p className="truncate font-display text-2xl font-black leading-tight">
                  {active.name}
                </p>
                <p className="font-display text-4xl font-black text-white">Rp {active.price}</p>
                <p className="mt-1 line-clamp-2 text-xs text-white/60">{active.desc}</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── MenuShowcase ────────────────────────────────────────────────────────────
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};
const rowVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

function MenuShowcase({
  chapter,
  title,
  blurb,
  items,
  reverse = false,
}: {
  chapter: string;
  title: string;
  blurb: string;
  items: MenuItem[];
  reverse?: boolean;
}) {
  // activeIndex — driven purely by mouse hover (desktop only)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // mobileItem — driven purely by tap (mobile only), never touched by hover handlers
  const [mobileItem, setMobileItem] = useState<MenuItem | null>(null);
  const active = activeIndex !== null ? items[activeIndex] : null;

  const handleTap = (i: number) => {
    setMobileItem((prev) => (prev?.name === items[i].name ? null : items[i]));
  };

  const dismissMobile = () => setMobileItem(null);

  return (
    <section className="relative">
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Desktop sticky panel */}
        <div
          className={`relative hidden lg:block lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="sticky top-36">
            <DesktopPanel
              chapter={chapter}
              title={title}
              blurb={blurb}
              active={active}
              defaultItem={items[0]}
            />
          </div>
        </div>

        {/* Mobile: category header */}
        <div className="mb-2 lg:hidden">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-accent-foreground/60">
            {chapter}
          </p>
          <h2 className="mt-1 font-display text-4xl font-black leading-[0.9]">{title}</h2>
          <p className="mt-2 text-xs text-foreground/60">{blurb}</p>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Tap tiap item untuk lihat preview
          </p>
        </div>

        {/* Item list */}
        <motion.ul
          className={`divide-y divide-border lg:col-span-7 lg:mt-0 ${
            reverse ? "lg:order-1 lg:pr-10" : "lg:order-2 lg:pl-10"
          }`}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((item, i) => {
            const isActive = activeIndex === i;
            const isMobileActive = mobileItem?.name === item.name;
            return (
              <motion.li
                key={item.name}
                variants={rowVariants}
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setActiveIndex(i);
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === "mouse") setActiveIndex(null);
                }}
                onClick={() => handleTap(i)}
                whileTap={{ scale: 0.98 }}
                className="group relative -mx-3 cursor-pointer overflow-hidden rounded-xl px-3 py-4 lg:gap-6 lg:py-5"
              >
                {/* Desktop: P5 accent bg */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-xl"
                  style={{ backgroundColor: item.tone, originX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 0.18 : 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                />
                {/* Left accent bar — desktop hover only */}
                <motion.div
                  className="absolute inset-y-2 left-0 hidden w-[3px] rounded-full lg:block"
                  style={{ backgroundColor: item.tone }}
                  animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                />
                {/* Left accent bar — mobile, always visible & subtle */}
                <motion.div
                  className="absolute inset-y-3 left-0 w-[3px] rounded-full lg:hidden"
                  style={{ backgroundColor: item.tone }}
                  animate={{ opacity: isMobileActive ? 1 : 0.35 }}
                  transition={{ duration: 0.2 }}
                />
                {/* Mobile active: very faint tinted bg */}
                <motion.div
                  className="absolute inset-0 rounded-xl lg:hidden"
                  style={{ backgroundColor: item.tone }}
                  animate={{ opacity: isMobileActive ? 0.07 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <motion.h3
                        className="font-display text-lg font-bold lg:text-2xl"
                        animate={{ x: isActive ? 6 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      >
                        {item.name}
                      </motion.h3>
                      {item.featured && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                          Signature
                        </span>
                      )}
                      {item.isNew && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                          New
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground lg:mt-1 lg:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    <motion.p
                      className="font-display text-xl font-bold text-primary lg:text-2xl"
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      Rp {item.price}
                    </motion.p>
                    {/* Mobile-only: kecil, subtle tap hint di bawah harga */}
                    <span className="text-[10px] text-muted-foreground/60 lg:hidden">
                      {isMobileActive ? "✓ preview aktif" : "tap preview"}
                    </span>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Mobile floating card — portal-like bottom sheet */}
      <FloatingCard item={mobileItem} onDismiss={dismissMobile} />
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-6 lg:px-10 lg:pt-16 lg:pb-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          The Menu
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,9vw,8rem)] font-bold leading-[0.92] tracking-tight">
          Pilih <em className="text-primary">racikanmu</em>.
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/70 lg:mt-6 lg:text-lg">
          Semua dibuat fresh tiap pesanan.{" "}
          <span className="hidden sm:inline">Arahkan kursor atau </span>
          Tap item buat preview — less sugar atau extra shot tinggal bilang ke barista.
        </p>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-8 lg:gap-24 lg:px-10 lg:py-16">
        <MenuShowcase
          chapter="Chapter 01"
          title="Coffee"
          blurb="Espresso-based, klasik dan signature. Disajikan hot atau iced."
          items={coffeeMenu}
        />
        <MenuShowcase
          chapter="Chapter 02"
          title="Non-Coffee"
          blurb="Buat yang gak suka kopi — tetep punya banyak pilihan asik."
          items={nonCoffeeMenu}
          reverse
        />
        <MenuShowcase
          chapter="Chapter 03"
          title="Food & Snacks"
          blurb="Biar ngopi makin asik — ada camilan dan makanan buat nemenin sesi panjang."
          items={foodMenu}
        />
      </div>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <div className="rounded-2xl bg-accent p-8 text-center lg:rounded-3xl lg:p-16">
          <h2 className="font-display text-3xl font-bold text-primary lg:text-5xl">
            Udah nemu favoritmu?
          </h2>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:scale-105 lg:mt-8"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
