import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../assets/logo.webp";

const linksLeft = [
  { to: "/", label: "Beranda" },
  { to: "/menu", label: "Menu" },
] as const;

const linksRight = [
  { to: "/gallery", label: "Galeri" },
  { to: "/contact", label: "Kontak" },
] as const;

const allLinks = [...linksLeft, ...linksRight];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md">
      {/* Hairline top accent — satu garis tipis warna primary */}
      <div className="h-[2px] w-full bg-primary" />

      {/* ── DESKTOP ── */}
      <div className="hidden md:block border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center px-10">

          {/* Nav kiri */}
          <nav className="flex flex-1 items-center gap-8">
            {linksLeft.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative py-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-foreground"
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logo tengah */}
          <Link
            to="/"
            className="flex flex-col items-center gap-1 px-10 py-3 transition-opacity hover:opacity-80"
            onClick={() => setOpen(false)}
          >
            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/20">
              <img
                src={logoImage}
                alt="Mitra Coffeeshop Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center leading-none">
              <p className="font-display text-sm font-bold tracking-tight">Mitra Coffeeshop</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                SMK Mitra Industri
              </p>
            </div>
          </Link>

          {/* Nav kanan */}
          <nav className="flex flex-1 items-center justify-end gap-8">
            {linksRight.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="relative py-5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-foreground"
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="https://wa.me/6285217971601?text=Halo%20Mitra%20Coffeeshop%2C%20saya%20mau%20pesan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-primary/90"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="flex items-center justify-between border-b border-border/50 px-6 py-3 md:hidden">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="h-8 w-8 overflow-hidden rounded-full ring-2 ring-primary/20">
            <img src={logoImage} alt="Mitra Coffeeshop Logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-none">
            <p className="font-display text-sm font-bold tracking-tight">Mitra Coffeeshop</p>
            <p className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">SMK Mitra Industri</p>
          </div>
        </Link>

        <button
          aria-label="Toggle menu"
          className="relative h-6 w-6"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-b border-border/50 bg-background md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-2">
              {allLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.045 + 0.05, ease: "easeOut" }}
                >
                  <Link
                    to={l.to}
                    className="flex items-center justify-between border-b border-border/30 py-3.5 text-sm font-semibold uppercase tracking-[0.14em]"
                    activeProps={{ className: "text-primary" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    <span className="text-foreground/30">→</span>
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://wa.me/6285217971601"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mb-2 mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Pesan via WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}