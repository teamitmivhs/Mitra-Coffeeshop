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
  { src: galleryStudents, alt: "Siswa kumpul", tag: "Vibes", span: "" },
  { src: menuNoncoffee, alt: "Non-coffee drinks", tag: "Menu", span: "" },
  { src: galleryBarista, alt: "Barista kami", tag: "Behind the Bar", span: "row-span-2" },
  { src: galleryInterior, alt: "Interior cafe", tag: "Space", span: "" },
  { src: menuCoffee, alt: "M.I Signature", tag: "Coffee", span: "" },
];

function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          Gallery
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight">
          Mitra <em className="text-primary">Coffeeshop</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Snapshot harian dari cafe — vibes, racikan, dan senyum pelanggan
          favorit kami.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid auto-rows-[260px] grid-cols-2 gap-4 md:grid-cols-3 lg:auto-rows-[320px]">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl bg-card ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-5 text-primary-foreground">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {it.tag}
                </span>
                <p className="mt-1 font-display text-lg font-bold">{it.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
