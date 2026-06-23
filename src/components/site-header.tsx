import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Coffee, Home, Images, Menu, MessageCircle, Phone, ShoppingBag, X } from "lucide-react";
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

const mobileLinks = [
  { to: "/", label: "Beranda", icon: Home },
  { to: "/menu", label: "Menu", icon: Coffee },
  { to: "/gallery", label: "Galeri", icon: Images },
  { to: "/contact", label: "Kontak", icon: Phone },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:bg-background/85 md:backdrop-blur-md">
      {/* Hairline top accent — satu garis tipis warna primary */}
      <div className="hidden h-[2px] w-full bg-primary md:block" />

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
      <div className="px-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:hidden">
        <div className="flex items-center justify-between rounded-full border border-white/45 bg-background/82 px-2.5 py-2 shadow-xl shadow-primary/10 backdrop-blur-xl">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5 pl-1"
            onClick={() => setOpen(false)}
          >
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/15">
              <img
                src={logoImage}
                alt="Mitra Coffeeshop Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 leading-none">
              <p className="truncate font-display text-sm font-bold tracking-tight">
                Mitra Coffeeshop
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                SMK Mitra Industri
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-lg shadow-primary/20 transition active:scale-95"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
            Menu
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="px-3 pt-2 md:hidden"
          >
            <div className="overflow-hidden rounded-[1.35rem] border border-white/45 bg-background/95 p-3 shadow-2xl shadow-primary/15 backdrop-blur-xl">
              <nav className="grid grid-cols-2 gap-2">
                {mobileLinks.map(({ to, label, icon: Icon }, i) => {
                  const isActive = pathname === to;

                  return (
                    <motion.div
                      key={to}
                      initial={{ y: -6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.035 + 0.03, ease: "easeOut" }}
                    >
                      <Link
                        to={to}
                        className={`flex items-center gap-2.5 rounded-2xl border px-3 py-3 text-sm font-bold transition active:scale-[0.98] ${
                          isActive
                            ? "border-primary/20 bg-primary text-primary-foreground shadow-lg shadow-primary/15"
                            : "border-border/60 bg-white/35 text-foreground hover:bg-white/55"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            isActive ? "bg-white/15" : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <motion.a
                href="https://wa.me/6285217971601?text=Halo%20Mitra%20Coffeeshop%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="mt-3 flex items-center justify-between rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/20"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Pesan via WhatsApp
                </span>
                <ShoppingBag className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
