import { createFileRoute } from "@tanstack/react-router";
import heroCoffee from "../assets/hero-coffee.jpg";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuNoncoffee from "../assets/menu-noncoffee.jpg";
import galleryStudents from "../assets/gallery-students.jpg";
import galleryBarista from "../assets/gallery-barista.jpg";
import galleryInterior from "../assets/gallery-interior.jpg";

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

const items = [
  { src: heroCoffee, alt: "Latte art", tag: "Signature", span: "row-span-2" },
  { src: galleryStudents, alt: "Made with passion", tag: "Attention", span: "" },
  { src: menuNoncoffee, alt: "Non-coffee drinks", tag: "Menu", span: "" },
  { src: galleryBarista, alt: "Barista kami", tag: "Behind the Bar", span: "row-span-2" },
  { src: galleryInterior, alt: "Interior cafe", tag: "Space", span: "" },
  { src: menuCoffee, alt: "M.I Signature", tag: "Coffee", span: "" },
];

function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-6 lg:px-10 lg:pt-20 lg:pb-12">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary lg:text-xs">
          Gallery
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.8rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight">
          Mitra <em className="text-primary">Coffeeshop</em>.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
          Snapshot harian dari cafe — vibes, racikan, dan senyum pelanggan
          favorit kami.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-32">
        {/* Mobile: Staggered/Catchy Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-card ${
                i % 3 === 0 ? "col-span-2 aspect-[4/3]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 active:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-4 text-primary-foreground">
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
                  {it.tag}
                </span>
                <p className="mt-1 font-display text-sm font-bold leading-tight">{it.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Tablet+: masonry grid with row-span */}
        <div className="hidden md:grid md:auto-rows-[280px] md:grid-cols-3 md:gap-6 lg:auto-rows-[350px]">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-card shadow-sm transition hover:shadow-xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {it.tag}
                </span>
                <p className="mt-2 font-display text-2xl font-bold">{it.alt}</p>
              </figcaption>
              {/* Desktop Always-on info label */}
              <div className="absolute top-6 left-6 rounded-full bg-background/20 px-4 py-1.5 backdrop-blur-md transition-transform group-hover:scale-90">
                 <span className="font-display text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {it.tag}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}