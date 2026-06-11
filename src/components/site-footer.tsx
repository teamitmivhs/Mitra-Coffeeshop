import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock, UtensilsCrossed, Images } from "lucide-react";
import { motion } from "framer-motion";
import goFoodIcon from "../assets/icon-gofood.svg";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <h3 className="font-display text-4xl font-bold tracking-tight">Mitra Coffeeshop</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Tempat ngopi favorit anak SMK Mitra Industri. Dari americano klasik
            sampai matcha latte — semua ada, dengan harga bersahabat pelajar.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/mitra.coffeshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition hover:bg-primary-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @mitra.coffeshop
          </motion.a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Jelajahi
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              { to: "/menu", label: "Menu Lengkap", icon: UtensilsCrossed },
              { to: "/gallery", label: "Galeri", icon: Images },
              { to: "/contact", label: "Kontak", icon: MapPin },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center justify-between gap-2 hover:text-accent w-full max-w-[160px]"
                  >
                    {item.label}
                    <item.icon className="h-4 w-4 shrink-0 text-accent" />
                  </motion.div>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://gofood.link/a/G6pniU1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center justify-between gap-2 hover:text-accent w-full max-w-[160px]"
                >
                  Order di GoFood
                  <img src={goFoodIcon} alt="GoFood" className="h-5 w-auto shrink-0" />
                </motion.div>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Kunjungi
          </h4>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            SMK Mitra Industri,<br /> Bekasi, Indonesia
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span>Senin – Jumat: 07.00 – 16.00</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span>Sabtu: 08.00 – 12.00</span>
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/50">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Minggu: Tutup</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60 lg:px-10">
          © {new Date().getFullYear()} Mitra Coffeeshop · Brewed with love at SMK Mitra Industri
        </p>
      </div>
    </footer>
  );
}