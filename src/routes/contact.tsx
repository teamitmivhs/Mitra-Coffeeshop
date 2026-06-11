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
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-6 lg:px-10 lg:pt-20 lg:pb-12">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary lg:text-xs">
          Visit Us
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.8rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight">
          Mampir <em className="text-primary">yuk</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Info card */}
          <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground lg:rounded-[3rem] lg:p-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  <MapPin className="h-3.5 w-3.5" /> Lokasi
                </div>
                <p className="mt-3 font-display text-2xl font-bold leading-tight lg:text-4xl">
                  SMK Mitra Industri MM2100
                </p>
                <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70 lg:text-base">
                  Jl. Kalimantan Blok DD No.1, Cikarang Barat, Bekasi 17520
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  <Clock className="h-3.5 w-3.5" /> Jam Buka
                </div>
                <ul className="mt-4 divide-y divide-primary-foreground/10">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-3 font-display text-sm lg:text-lg"
                    >
                      <span className="font-bold">{h.day}</span>
                      <span className="text-primary-foreground/60">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-bold text-white transition active:scale-95 lg:text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/mitra.coffeshop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-bold text-accent-foreground transition active:scale-95 lg:text-sm"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold transition active:scale-95 hover:bg-primary-foreground hover:text-primary sm:col-span-2 lg:text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card lg:rounded-[3rem]">
            <iframe
              title="Lokasi Mitra Coffeeshop"
              src="https://www.google.com/maps?q=SMK+Mitra+Industri+MM2100&output=embed"
              className="h-[300px] w-full lg:h-full lg:min-h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Go food & grab */}
        <div className="mt-8 rounded-[2rem] border border-border bg-card p-8 lg:mt-16 lg:rounded-[3rem] lg:p-16">
          <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary lg:text-xs">
            Delivery
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold lg:text-5xl">
            Pesan dari mana aja.
          </h3>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-muted-foreground lg:mt-6 lg:text-lg">
            Gak sempat mampir? Tenang — kamu bisa order kopi di Mitra Coffeeshop langsung
            lewat GoFood. Diantar ke lokasi kamu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-4">
            <a
              href="https://gofood.link/a/G6pniU1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ba1e10] px-6 py-4 text-xs font-bold text-white transition active:scale-95 lg:px-8 lg:py-5 lg:text-sm"
            >
              <img src={gofoodIcon} alt="" aria-hidden="true" className="h-8 w-8 lg:h-10 lg:w-10" />
              Order di GoFood
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-xs font-bold transition active:scale-95 hover:bg-muted lg:px-8 lg:py-5 lg:text-sm"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-20 lg:gap-8">
          {[
            {
              t: "Bisa dine-in?",
              d: "Bisa banget. Tempat duduk indoor & outdoor tersedia.",
            },
            {
              t: "Ada loyalty card?",
              d: "Ada! Minta ke kasir saat pertama beli. Kumpulkan 10 stempel, gratis 1!",
            },
            {
              t: "Bisa delivery?",
              d: "Bisa! Order lewat GoFood — cari Mitra Coffeeshop.",
            },
          ].map((q) => (
            <div key={q.t} className="rounded-2xl border border-border bg-card p-6 lg:rounded-[2rem] lg:p-10">
              <p className="font-display text-base font-bold lg:text-2xl">{q.t}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground lg:mt-4 lg:text-base">{q.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}