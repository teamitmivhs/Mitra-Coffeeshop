import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock } from "lucide-react";

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
          <a
            href="https://www.instagram.com/mitra.coffeshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition hover:bg-primary-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @mitra.coffeshop
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Jelajahi
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-accent">Menu Lengkap</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Kontak</Link></li>
            <li>
              <a
                href="https://gofood.link/a/G6pniU1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Order GoFood 🛵
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
          <p className="mt-3 flex items-start gap-2 text-sm">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Senin – Jumat <br /> 07.30 – 16.00 WIB
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Sabtu<br /> 08.00 – 12.00 WIB
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Minggu Tutup
          </p>
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