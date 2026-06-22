import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import latteArt      from "../assets/latteart.jpg";
import menuCoffee      from "../assets/menu-coffee.jpg";
import blueOcean  from "../assets/blueocean.jpg";
import galleryStudents from "../assets/gallery-students.jpg";
import galleryBarista  from "../assets/gallery-barista.jpg";
import galleryInterior from "../assets/gallery-interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Mitra Coffeeshop" },
      { name: "description", content: "Suasana cafe, barista, dan momen-momen seru di Mitra Coffeeshop SMK Mitra Industri." },
      { property: "og:title",       content: "Galeri — Mitra Coffeeshop" },
      { property: "og:description", content: "Lihat suasana asik di Mitra Coffeeshop." },
    ],
  }),
  component: GalleryPage,
});

// ─── Data ────────────────────────────────────────────────────────────────────
const photos = [
  { src: latteArt,      alt: "Latte art",          tag: "Signature"      },
  { src: galleryStudents, alt: "Made with passion",   tag: "Vibes"          },
  { src: blueOcean,   alt: "Non-coffee drinks",   tag: "Menu"           },
  { src: galleryBarista,  alt: "Barista kami",        tag: "Behind the Bar" },
  { src: galleryInterior, alt: "Interior cafe",       tag: "Space"          },
  { src: menuCoffee,      alt: "M.I Signature",       tag: "Coffee"         },
];

// Duplicate for seamless infinite ticker
const row1 = [...photos, ...photos, ...photos];
const row2 = [...photos.slice(3), ...photos.slice(3), ...photos.slice(3)];

// Masonry reveal origins — each card enters from a different angle
const revealVariants = [
  { hidden: { opacity: 0, x: -40, rotate: -3  }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y:  50, rotate:  2  }, visible: { opacity: 1, y: 0, rotate: 0 } },
  { hidden: { opacity: 0, x:  40, rotate:  3  }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y:  50, rotate: -2  }, visible: { opacity: 1, y: 0, rotate: 0 } },
  { hidden: { opacity: 0, x: -40, rotate:  2  }, visible: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, y:  50, rotate:  3  }, visible: { opacity: 1, y: 0, rotate: 0 } },
];

// ─── Infinite Ticker Row ─────────────────────────────────────────────────────
function TickerRow({
  items,
  direction = 1,
  speed = 28,
}: {
  items: typeof row1;
  direction?: 1 | -1;
  speed?: number;
}) {
  const trackRef    = useRef<HTMLDivElement>(null);
  const pausedRef   = useRef(false);
  const posRef      = useRef(0);
  const rafRef      = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Width of one "page" (1/3 of the tripled content)
    const getPageW = () => track.scrollWidth / 3;

    const tick = (ts: number) => {
      if (lastTimeRef.current === null) {
        // First frame or resume after pause — skip delta to avoid jump
        lastTimeRef.current = ts;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min(ts - lastTimeRef.current, 64); // clamp to ~2 frames max
      lastTimeRef.current = ts;

      if (!pausedRef.current) {
        posRef.current += (speed * dt) / 1000 * direction;
        const pw = getPageW();
        if (direction === 1  && posRef.current >=  pw) posRef.current -= pw;
        if (direction === -1 && posRef.current <= -pw) posRef.current += pw;
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed]);

  const handlePointerEnter = () => {
    pausedRef.current = true;
  };
  const handlePointerLeave = () => {
    // Reset lastTime so resume doesn't produce a giant dt spike
    lastTimeRef.current = null;
    pausedRef.current = false;
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        // Fade edges on both sides for a polished "infinite" feel
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div ref={trackRef} className="flex gap-4 will-change-transform">
        {items.map((photo, i) => (
          <div
            key={i}
            className="group relative h-52 w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl md:h-64 md:w-80 lg:h-72 lg:w-96"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            {/* base scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* tag pill */}
            <div className="absolute left-3 top-3 translate-y-0 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/20">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-white">
                {photo.tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 transition-transform duration-300 group-hover:-translate-y-1">
              <p className="font-display text-sm font-bold text-white drop-shadow-sm">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  photos,
  index,
  onClose,
  onNav,
  onJump,
}: {
  photos: typeof photos;
  index: number;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
  onJump: (i: number) => void;
}) {
  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft")  onNav(-1);
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNav, onClose]);

  // Swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) onNav(dx < 0 ? 1 : -1);
  };

  const photo = photos[index];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative mx-4 max-h-[85svh] max-w-4xl overflow-hidden rounded-2xl shadow-2xl shadow-black/60"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          exit={{    opacity: 0, scale: 0.92, y: -8 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[85svh] w-full object-contain"
          />
          {/* Caption */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
              {photo.tag}
            </p>
            <p className="mt-1 font-display text-xl font-bold text-white">
              {photo.alt}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:h-10 lg:w-10"
        aria-label="Tutup"
      >
        <X className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>

      {/* Desktop: side arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:flex"
        aria-label="Sebelumnya"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 lg:flex"
        aria-label="Berikutnya"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Mobile: prev/next + dots in one bottom bar */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:hidden">
        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onJump(i); }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur"
          aria-label="Berikutnya"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop: dot indicators only */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 gap-2 lg:flex">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onJump(i); }}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Masonry Grid with Scroll Reveal ─────────────────────────────────────────
function MasonryGrid({ onOpen }: { onOpen: (i: number) => void }) {
  // Desktop: col/row spans per card
  const desktopSpans = ["row-span-2", "", "", "row-span-2", "", ""];

  return (
    <>
      {/* ── Mobile layout: alternating featured rows ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {/* Row 1: one full-width featured card */}
        <motion.figure
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card"
          variants={revealVariants[0]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onOpen(0)}
        >
          <img src={photos[0].src} alt={photos[0].alt} loading="lazy"
            className="aspect-[4/3] w-full object-cover transition duration-500 group-active:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 backdrop-blur-sm ring-1 ring-white/10">
            <span className="font-display text-[8px] font-bold uppercase tracking-[0.2em] text-white">{photos[0].tag}</span>
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-display text-base font-bold text-white drop-shadow-sm">{photos[0].alt}</p>
          </figcaption>
        </motion.figure>

        {/* Row 2: two side-by-side */}
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((idx) => (
            <motion.figure
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card"
              variants={revealVariants[idx]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ type: "spring", stiffness: 240, damping: 22, delay: (idx - 1) * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpen(idx)}
            >
              <img src={photos[idx].src} alt={photos[idx].alt} loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-active:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute left-2 top-2 rounded-full bg-black/30 px-2 py-0.5 backdrop-blur-sm">
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.18em] text-white">{photos[idx].tag}</span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-display text-sm font-bold leading-tight text-white">{photos[idx].alt}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Row 3: one full-width featured card */}
        <motion.figure
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card"
          variants={revealVariants[3]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onOpen(3)}
        >
          <img src={photos[3].src} alt={photos[3].alt} loading="lazy"
            className="aspect-[4/3] w-full object-cover transition duration-500 group-active:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 backdrop-blur-sm">
            <span className="font-display text-[8px] font-bold uppercase tracking-[0.2em] text-white">{photos[3].tag}</span>
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-display text-base font-bold text-white">{photos[3].alt}</p>
          </figcaption>
        </motion.figure>

        {/* Row 4: two side-by-side */}
        <div className="grid grid-cols-2 gap-3">
          {[4, 5].map((idx) => (
            <motion.figure
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card"
              variants={revealVariants[idx]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ type: "spring", stiffness: 240, damping: 22, delay: (idx - 4) * 0.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpen(idx)}
            >
              <img src={photos[idx].src} alt={photos[idx].alt} loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-active:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute left-2 top-2 rounded-full bg-black/30 px-2 py-0.5 backdrop-blur-sm">
                <span className="font-display text-[7px] font-bold uppercase tracking-[0.18em] text-white">{photos[idx].tag}</span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-display text-sm font-bold leading-tight text-white">{photos[idx].alt}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* ── Desktop layout: masonry grid ── */}
      <div className="hidden md:grid md:auto-rows-[240px] md:grid-cols-3 md:gap-4 lg:auto-rows-[280px] lg:gap-5">
        {photos.map((photo, i) => (
          <motion.figure
            key={i}
            className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-card ${desktopSpans[i]}`}
            variants={revealVariants[i % revealVariants.length]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: (i % 3) * 0.08 }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpen(i)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy"
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110" />
            {/* always-on base scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* hover reveal full overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* tag — fades out on hover */}
            <div className="absolute left-3 top-3 rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white">{photo.tag}</span>
            </div>
            {/* caption — slides up on hover */}
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-display text-[9px] font-bold uppercase tracking-[0.28em] text-white/55">{photo.tag}</span>
              <p className="mt-1.5 font-display text-xl font-bold leading-tight text-white">{photo.alt}</p>
            </figcaption>
            {/* corner expand icon */}
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 group-hover:opacity-100">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                <path d="M8.5 1.5H12.5V5.5M5.5 12.5H1.5V8.5M12.5 1.5L8 7M1.5 12.5L6 7" />
              </svg>
            </div>
          </motion.figure>
        ))}
      </div>
    </>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const navLightbox   = useCallback((dir: 1 | -1) => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + dir + photos.length) % photos.length
    );
  }, []);
  const jumpLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
  }, []);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero header ── */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-10 lg:pt-20 lg:pb-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <motion.p
              className="font-display text-[9px] font-bold uppercase tracking-[0.28em] text-primary lg:text-xs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Gallery
            </motion.p>
            <motion.h1
              className="mt-2 font-display text-[clamp(2.4rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Mitra <em className="text-primary">Coffeeshop</em>.
            </motion.h1>
          </div>
          {/* foto count badge */}
          <motion.div
            className="mb-1 shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.18 }}
          >
            <span className="inline-flex flex-col items-center rounded-2xl border border-border bg-card px-3 py-2">
              <span className="font-display text-xl font-bold leading-none text-primary">{photos.length}</span>
              <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">foto</span>
            </span>
          </motion.div>
        </div>
        <motion.p
          className="mt-3 max-w-xs text-[13px] leading-relaxed text-foreground/60 lg:mt-6 lg:max-w-xl lg:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Snapshot harian — vibes, racikan, dan momen seru di Mitra Coffeeshop.
        </motion.p>
      </section>

      {/* ── Infinite ticker — two rows, opposite directions ── */}
      <section className="pb-8 lg:pb-10">
        <div className="flex flex-col gap-3 lg:gap-4">
          <TickerRow items={row1} direction={1}  speed={30} />
          <TickerRow items={row2} direction={-1} speed={24} />
        </div>
      </section>

      {/* ── Divider label ── */}
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10 lg:py-12">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <p className="flex items-center gap-2 font-display text-[9px] font-bold uppercase tracking-[0.28em] text-foreground/35 lg:text-[10px] lg:tracking-[0.3em]">
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            Tap untuk lihat lebih dekat
            <span className="h-1 w-1 rounded-full bg-primary/50" />
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </motion.div>
      </div>

      {/* ── Masonry grid ── */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10 lg:pb-32">
        <MasonryGrid onOpen={openLightbox} />
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNav={navLightbox}
            onJump={jumpLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}