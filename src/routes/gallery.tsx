import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import latteArt from "../assets/latteart.webp";
import miSignature from "../assets/mi-signature.webp";
import blueOcean from "../assets/blueocean.webp";
import galleryStudents from "../assets/gallery-students.webp";
import galleryBarista from "../assets/gallery-barista.webp";
import galleryInterior from "../assets/gallery-interior.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — Mitra Coffeeshop" },
      {
        name: "description",
        content:
          "Suasana cafe, barista, dan momen-momen seru di Mitra Coffeeshop SMK Mitra Industri.",
      },
      { property: "og:title", content: "Galeri — Mitra Coffeeshop" },
      { property: "og:description", content: "Lihat suasana asik di Mitra Coffeeshop." },
    ],
  }),
  component: GalleryPage,
});

// ─── Data ────────────────────────────────────────────────────────────────────
const photos = [
  { src: latteArt, alt: "Latte art", tag: "Signature" },
  { src: galleryStudents, alt: "Made with passion", tag: "Vibes" },
  { src: blueOcean, alt: "Blue Ocean", tag: "Menu" },
  { src: galleryBarista, alt: "Barista kami", tag: "Behind the Bar" },
  { src: galleryInterior, alt: "Interior cafe", tag: "Space" },
  { src: miSignature, alt: "M.I Signature", tag: "Coffee" },
];

const row1 = [...photos, ...photos, ...photos];
const row2Photos = [...photos.slice(3), ...photos.slice(0, 3)];
const row2 = [...row2Photos, ...row2Photos, ...row2Photos];

// ─── Infinite Ticker (shared, desktop + mobile hero) ─────────────────────────
function TickerRow({
  items,
  direction = 1,
  speed = 28,
}: {
  items: typeof row1;
  direction?: 1 | -1;
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const getPageW = () => track.scrollWidth / 3;
    const tick = (ts: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = ts;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const dt = Math.min(ts - lastTimeRef.current, 64);
      lastTimeRef.current = ts;
      if (!pausedRef.current) {
        posRef.current += ((speed * dt) / 1000) * direction;
        const pw = getPageW();
        if (pw > 0) {
          posRef.current = ((posRef.current % pw) + pw) % pw;
          track.style.transform = `translate3d(${-posRef.current}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
      }}
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        lastTimeRef.current = null;
        pausedRef.current = false;
      }}
    >
      <div ref={trackRef} className="flex gap-3 will-change-transform lg:gap-4">
        {items.map((photo, i) => (
          <div
            key={i}
            className="group relative h-44 w-60 shrink-0 overflow-hidden rounded-2xl sm:h-52 sm:w-72 lg:h-64 lg:w-80"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />
            <div className="absolute left-3 top-3 rounded-full bg-white/10 px-2.5 py-0.5 backdrop-blur-md ring-1 ring-white/20">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                {photo.tag}
              </span>
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-sm font-bold text-white">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Desktop: 3D Magnetic Tilt Card ──────────────────────────────────────────
// Tracks mouse position inside the card and applies rotateX/Y + depth shadow
function TiltCard({
  photo,
  index,
  onOpen,
}: {
  photo: (typeof photos)[0];
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  // Raw motion values — updated on mousemove
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-smoothed values for buttery feel
  const springCfg = { stiffness: 200, damping: 24, mass: 0.6 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-10, 10]), springCfg);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), springCfg);
  const glareX = useTransform(rawX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(rawY, [-0.5, 0.5], ["0%", "100%"]);
  const shadowX = useTransform(rawX, [-0.5, 0.5], [-12, 12]);
  const shadowY = useTransform(rawY, [-0.5, 0.5], [-8, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // Stagger reveal variants per card
  const enters = [
    { hidden: { opacity: 0, x: -48, rotate: -4 }, visible: { opacity: 1, x: 0, rotate: 0 } },
    { hidden: { opacity: 0, y: 60, rotate: 3 }, visible: { opacity: 1, y: 0, rotate: 0 } },
    { hidden: { opacity: 0, x: 48, rotate: 4 }, visible: { opacity: 1, x: 0, rotate: 0 } },
    { hidden: { opacity: 0, y: 60, rotate: -3 }, visible: { opacity: 1, y: 0, rotate: 0 } },
    { hidden: { opacity: 0, x: -48, rotate: 3 }, visible: { opacity: 1, x: 0, rotate: 0 } },
    { hidden: { opacity: 0, y: 60, rotate: 4 }, visible: { opacity: 1, y: 0, rotate: 0 } },
  ];
  const desktopSpans = ["row-span-2", "", "", "row-span-2", "", ""];

  return (
    <motion.figure
      ref={ref}
      className={`group relative isolate cursor-pointer overflow-hidden rounded-3xl bg-card ${desktopSpans[index]}`}
      variants={enters[index % enters.length]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 220, damping: 24, delay: (index % 3) * 0.1 }}
      style={{
        rotateX,
        rotateY,
        clipPath: "inset(0 round 1.5rem)",
        transformStyle: "preserve-3d",
        // Dynamic box shadow follows tilt direction
        boxShadow: useTransform(
          [shadowX, shadowY],
          ([sx, sy]: number[]) =>
            `${sx}px ${sy}px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)`,
        ) as any,
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      {/* Photo */}
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="h-full w-full rounded-[inherit] object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
      />

      {/* Base scrim */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      {/* Glare highlight — moves with mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]: string[]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.12) 0%, transparent 65%)`,
          ) as any,
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-black/80 via-black/20 to-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Tag pill — fades on hover */}
      <div className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm ring-1 ring-white/15 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
        <span className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-white">
          {photo.tag}
        </span>
      </div>

      {/* Expand icon — appears on hover */}
      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 group-hover:opacity-100">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M8.5 1.5H12.5V5.5M5.5 12.5H1.5V8.5M12.5 1.5L8 7M1.5 12.5L6 7" />
        </svg>
      </div>

      {/* Caption — slides up on hover */}
      <figcaption
        className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        style={{ transform: "translateZ(24px)" }}
      >
        <span className="block font-display text-[9px] font-bold uppercase tracking-[0.3em] text-white/55">
          {photo.tag}
        </span>
        <p className="mt-1.5 font-display text-xl font-bold leading-tight text-white">
          {photo.alt}
        </p>
      </figcaption>
    </motion.figure>
  );
}

// ─── Mobile: Full-screen Cinematic Swipe Stack ───────────────────────────────
// One photo fills the viewport; swipe or tap arrows to navigate.
// Transition: diagonal wipe clip-path (Persona 5 style).
function MobileStack({ onOpen }: { onOpen: (i: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const nav = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((p) => (p + dir + photos.length) % photos.length);
  };

  // Swipe support
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 44) nav(dx < 0 ? 1 : -1);
  };

  // Clip-path wipe: diagonally sweeps across the photo
  const wipeIn = (dir: 1 | -1) =>
    dir === 1
      ? { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }
      : { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" };
  const wipeOut = (dir: 1 | -1) =>
    dir === 1
      ? { clipPath: "polygon(0% 0%, -10% 0%, -10% 100%, 0% 100%)" }
      : { clipPath: "polygon(100% 0%, 110% 0%, 110% 100%, 100% 100%)" };
  const wipeMid = { clipPath: "polygon(-10% 0%, 110% 0%, 110% 100%, -10% 100%)" };

  return (
    <div className="md:hidden">
      {/* ── Full-height photo card ── */}
      <div
        className="relative mx-4 overflow-hidden rounded-3xl"
        style={{ height: "62svh" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            className="absolute inset-0"
            custom={direction}
            initial={(dir: number) => wipeIn(dir as 1 | -1)}
            animate={wipeMid}
            exit={(dir: number) => wipeOut(dir as 1 | -1)}
            transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
          >
            <img
              src={photos[current].src}
              alt={photos[current].alt}
              className="h-full w-full object-cover"
              onClick={() => onOpen(current)}
            />
            {/* Diagonal P5-style accent slash */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 48%, rgba(0,0,0,0.18) 48%, rgba(0,0,0,0.18) 52%, transparent 52%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Caption */}
            <motion.div
              className="absolute inset-x-0 bottom-0 p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.32 }}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
                {photos[current].tag}
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-white">
                {photos[current].alt}
              </p>
            </motion.div>

            {/* Index counter top-right */}
            <div className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm ring-1 ring-white/20">
              <span className="font-display text-xs font-bold text-white">
                {String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left / right tap zones (invisible, full-height) */}
        <button
          onClick={() => nav(-1)}
          className="absolute inset-y-0 left-0 w-1/3"
          aria-label="Sebelumnya"
        />
        <button
          onClick={() => nav(1)}
          className="absolute inset-y-0 right-0 w-1/3"
          aria-label="Berikutnya"
        />

        {/* Arrow hints */}
        <button
          onClick={() => nav(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur ring-1 ring-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => nav(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur ring-1 ring-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="mt-3 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="relative shrink-0 overflow-hidden rounded-xl transition-all duration-300"
            style={{ width: i === current ? 72 : 52, height: 52 }}
            aria-label={photo.alt}
          >
            <img src={photo.src} alt="" className="h-full w-full object-cover" />
            {i === current && (
              <motion.div
                layoutId="thumb-active"
                className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-1 ring-offset-background"
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
              />
            )}
            {i !== current && <div className="absolute inset-0 bg-black/40" />}
          </button>
        ))}
      </div>

      {/* ── Dot indicators ── */}
      <div className="mt-3 flex justify-center gap-1.5 pb-2">
        {photos.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full bg-primary"
            animate={{ width: i === current ? 20 : 6, opacity: i === current ? 1 : 0.3 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
          />
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
  const [dir, setDir] = useState<1 | -1>(1);

  const go = (d: 1 | -1) => {
    setDir(d);
    onNav(d);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNav, onClose]);

  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
  };

  const photo = photos[index];

  // Wipe transition for lightbox too
  const wipeIn =
    dir === 1
      ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
  const wipeMid = "polygon(-5% 0%, 105% 0%, 105% 100%, -5% 100%)";
  const wipeOut =
    dir === 1
      ? "polygon(0% 0%, -5% 0%, -5% 100%, 0% 100%)"
      : "polygon(100% 0%, 105% 0%, 105% 100%, 100% 100%)";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="popLayout" custom={dir}>
        <motion.div
          key={index}
          className="relative mx-4 max-h-[85svh] max-w-4xl overflow-hidden rounded-2xl"
          custom={dir}
          initial={{ clipPath: wipeIn, opacity: 0.6 }}
          animate={{ clipPath: wipeMid, opacity: 1 }}
          exit={{ clipPath: wipeOut, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={photo.src} alt={photo.alt} className="max-h-[85svh] w-full object-contain" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
              {photo.tag}
            </p>
            <p className="mt-1 font-display text-xl font-bold text-white">{photo.alt}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          go(-1);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          go(1);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onJump(i);
            }}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/35"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const navLightbox = useCallback((dir: 1 | -1) => {
    setLightboxIndex((p) => (p === null ? null : (p + dir + photos.length) % photos.length));
  }, []);
  const jumpLightbox = useCallback((i: number) => setLightboxIndex(i), []);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
              transition={{ duration: 0.45 }}
            >
              Gallery
            </motion.p>
            <motion.h1
              className="mt-2 font-display text-[clamp(2.4rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 }}
            >
              Mitra <em className="text-primary">Coffeeshop</em>.
            </motion.h1>
          </div>
          <motion.div
            className="mb-1 shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <span className="inline-flex flex-col items-center rounded-2xl border border-border bg-card px-3 py-2">
              <span className="font-display text-xl font-bold leading-none text-primary">
                {photos.length}
              </span>
              <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                foto
              </span>
            </span>
          </motion.div>
        </div>
        <motion.p
          className="mt-3 max-w-xs text-[13px] leading-relaxed text-foreground/60 lg:mt-6 lg:max-w-xl lg:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          Snapshot harian — vibes, racikan, dan momen seru di Mitra Coffeeshop.
        </motion.p>
      </section>

      {/* ── Infinite ticker ── */}
      <section className="pb-6 lg:pb-10">
        <div className="flex flex-col gap-3 lg:gap-4">
          <TickerRow items={row1} direction={1} speed={30} />
          <TickerRow items={row2} direction={-1} speed={24} />
        </div>
      </section>

      {/* ── Mobile: cinematic swipe stack ── */}
      <section className="mx-auto max-w-7xl pb-8 sm:pb-10">
        <MobileStack onOpen={openLightbox} />
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10 lg:py-10">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
          <p className="flex items-center gap-2 font-display text-[9px] font-bold uppercase tracking-[0.28em] text-foreground/35">
            <span className="hidden md:inline">Klik foto untuk lihat lebih dekat</span>
            <span className="md:hidden">Tap foto untuk lightbox</span>
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
        </motion.div>
      </div>

      {/* ── Desktop: 3D tilt masonry — hidden on mobile ── */}
      <section className="mx-auto hidden max-w-7xl px-4 pb-24 sm:px-6 md:block lg:px-10 lg:pb-32">
        <div
          className="grid auto-rows-[240px] grid-cols-3 gap-4 lg:auto-rows-[280px] lg:gap-5"
          style={{ perspective: "1200px" }}
        >
          {photos.map((photo, i) => (
            <TiltCard key={i} photo={photo} index={i} onOpen={() => openLightbox(i)} />
          ))}
        </div>
      </section>

      {/* ── Mobile: simple grid below swipe stack ── */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:hidden">
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo, i) => (
            <motion.figure
              key={i}
              className="relative cursor-pointer overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.07 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-2">
                <p className="font-display text-[10px] font-bold leading-tight text-white">
                  {photo.alt}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
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
