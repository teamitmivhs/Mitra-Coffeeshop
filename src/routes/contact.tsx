import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import gofoodIcon from "../assets/icon-gofood.svg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Lokasi — Mitra Coffeeshop" },
      {
        name: "description",
        content:
          "Lokasi, jam buka, dan kontak Mitra Coffeeshop di SMK Mitra Industri, Bekasi. Pesan langsung via WhatsApp.",
      },
      { property: "og:title", content: "Kontak & Lokasi — Mitra Coffeeshop" },
      {
        property: "og:description",
        content: "Cari tahu lokasi & jam buka Mitra Coffeeshop, atau pesan via WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { day: "Senin – Jumat", time: "07.00 – 16.00" },
  { day: "Sabtu", time: "08.00 – 12.00" },
  { day: "Minggu", time: "Tutup" },
];

function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          Visit Us
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight">
          Mampir <em className="text-primary">yuk</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info card */}
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  <MapPin className="h-4 w-4" /> Lokasi
                </div>
                <p className="mt-3 font-display text-2xl font-bold leading-tight">
                  SMK Mitra Industri MM2100
                </p>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Jl. Kalimantan Blok DD No.1, Cikarang Barat, Bekasi 17520
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  <Clock className="h-4 w-4" /> Jam Buka
                </div>
                <ul className="mt-3 divide-y divide-primary-foreground/15">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-2 font-display text-base"
                    >
                      <span className="font-semibold">{h.day}</span>
                      <span className="text-primary-foreground/80">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/mitra.coffeshop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:scale-105"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition hover:bg-primary-foreground hover:text-primary sm:col-span-2"
                >
                  <Phone className="h-4 w-4" />
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <iframe
              title="Lokasi Mitra Coffeeshop di SMK Mitra Industri"
              src="https://www.google.com/maps?q=SMK+Mitra+Industri+MM2100&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
          {/* Go food & grab */}
          <div className="mt-12 rounded-3xl border border-border bg-card p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
              Delivery
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold lg:text-4xl">
              Pesan dari mana aja.
            </h3>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground">
              Gak sempat mampir? Tenang — kamu bisa order kopi di Mitra Coffeeshop langsung
              lewat GoFood. Diantar ke lokasi kamu.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://gofood.link/a/G6pniU1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ba1e10] px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-105"
              >
                <img src={gofoodIcon} alt="" aria-hidden="true" className="h-10 w-10" />
                Order di GoFood
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>


        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Bisa dine-in?",
              d: "Bisa banget. Tempat duduk indoor & outdoor tersedia.",
            },
            {
              t: "Ada loyalty card?",
              d: "Ada! Minta ke kasir saat pertama beli. Kumpulkan 10 stempel, kopi berikutnya gratis!",
            },
            {
              t: "Bisa delivery?",
              d: "Bisa! Order lewat GoFood — tinggal cari Mitra Coffeeshop atau klik link di atas.",
            },
          ].map((q) => (
            <div key={q.t} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-lg font-bold">{q.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{q.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}