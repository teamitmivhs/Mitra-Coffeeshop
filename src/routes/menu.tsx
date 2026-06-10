import { createFileRoute } from "@tanstack/react-router";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuNoncoffee from "../assets/menu-noncoffee.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Mitra Coffeeshop" },
      {
        name: "description",
        content:
          "Menu lengkap Mitra Coffeeshop: americano, cappuccino, latte, matcha, choco, strawberry, taro. Harga pelajar mulai Rp 8.000.",
      },
      { property: "og:title", content: "Menu — Mitra Coffeeshop" },
      { property: "og:description", content: "Daftar minuman kopi & non-kopi di Mitra Coffeeshop." },
    ],
  }),
  component: MenuPage,
});

const coffeeMenu = [
  { name: "Americano", desc: "Espresso shot + air panas. Pahit klasik.", price: "8K" },
  { name: "Espresso", desc: "Single shot, full body. Buat yang pure.", price: "8K" },
  { name: "Cappuccino", desc: "Espresso + steamed milk + busa tebal.", price: "12K" },
  { name: "Caffe Latte", desc: "Lembut, milky, cocok buat pemula.", price: "13K" },
  { name: "Caramel Latte", desc: "Latte dengan sirup karamel. Signature.", price: "15K", featured: true },
  { name: "Mocha", desc: "Coklat + espresso + susu. Manis berani.", price: "15K" },
  { name: "Vietnam Drip", desc: "Kopi tetes + susu kental manis.", price: "12K" },
  { name: "Kopi Susu Mitra", desc: "House blend, gula aren, susu segar.", price: "14K", featured: true },
];

const nonCoffeeMenu = [
  { name: "Matcha Latte", desc: "Bubuk matcha Jepang + susu segar.", price: "15K", color: "#9bbf6e" },
  { name: "Chocolate", desc: "Cokelat premium hangat / dingin.", price: "12K", color: "#8b4513" },
  { name: "Strawberry Milk", desc: "Susu + saus strawberry asli.", price: "13K", color: "#e88aab" },
  { name: "Taro Latte", desc: "Taro creamy, warna ungu cantik.", price: "14K", color: "#a78bfa" },
  { name: "Red Velvet", desc: "Manis, lembut, instagrammable.", price: "15K", color: "#c44569" },
  { name: "Lemon Tea", desc: "Teh + lemon segar. Bikin melek.", price: "10K", color: "#e8c07a" },
  { name: "Lychee Soda", desc: "Soda + sirup leci. Fresh banget.", price: "12K", color: "#f9a8a8" },
  { name: "Milo Dino", desc: "Milo dingin extra bubuk di atas.", price: "13K", color: "#6b3a2a" },
];

export default function MenuPage() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
          The Menu
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight">
          Pilih <em className="text-primary">racikanmu</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          Semua minuman dibuat fresh setiap pesanan. Bisa request less sugar
          atau extra shot — tinggal bilang ke barista.
        </p>
      </section>

      {/* COFFEE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
                Chapter 01
              </p>
              <h2 className="mt-2 font-display text-6xl font-bold leading-none">
                Coffee
              </h2>
              <p className="mt-4 max-w-xs text-sm text-foreground/70">
                Espresso-based, klasik dan signature. Disajikan hot atau iced.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={menuCoffee}
                  alt="Iced coffee"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
          <ul className="space-y-2 lg:col-span-8">
            {coffeeMenu.map((item) => (
              <li
                key={item.name}
                className={`flex items-baseline justify-between gap-6 border-b border-border py-6 ${
                  item.featured ? "" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl font-bold lg:text-3xl">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <p className="font-display text-2xl font-bold text-primary lg:text-3xl">
                  Rp {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NON-COFFEE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:order-2">
            <div className="sticky top-28">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
                Chapter 02
              </p>
              <h2 className="mt-2 font-display text-6xl font-bold leading-none">
                Non-Coffee
              </h2>
              <p className="mt-4 max-w-xs text-sm text-foreground/70">
                Buat yang gak suka kopi — tetep punya banyak pilihan asik.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={menuNoncoffee}
                  alt="Non-coffee drinks"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
          <ul className="space-y-2 lg:col-span-8 lg:order-1">
            {nonCoffeeMenu.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-border py-6"
              >
                <div className="flex flex-1 items-start gap-4">
                  <span
                    className="mt-2 h-3 w-3 shrink-0 rounded-full"
                    style={{ background: item.color }}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-display text-2xl font-bold lg:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <p className="font-display text-2xl font-bold text-primary lg:text-3xl">
                  Rp {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-3xl bg-accent p-10 text-center lg:p-16">
          <h2 className="font-display text-4xl font-bold text-primary lg:text-5xl">
            Udah nemu favoritmu?
          </h2>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:scale-105"
          >
            Pesan Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
