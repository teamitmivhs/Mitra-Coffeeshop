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
  // Classic Coffee
  { name: "Americano", desc: "Espresso shot + air panas. Pahit klasik.", price: "10K" },
  { name: "Long Black", desc: "Double shot espresso over cold water. Bold & clean.", price: "16K" },
  // Milk-based Coffee
  { name: "Light Brown Sugar", desc: "Espresso + brown sugar + susu. Karamel subtle.", price: "20K", featured: true },
  { name: "Nutty Coffee", desc: "Hazelnut + espresso + susu. Kacang yang asik.", price: "18K" },
  { name: "Coffee Latte", desc: "Lembut, milky, cocok buat pemula.", price: "16K" },
  { name: "Caramel Macchiato", desc: "Espresso + vanilla + susu + caramel drizzle.", price: "18K" },
  { name: "Cappuccino", desc: "Espresso + steamed milk + busa tebal.", price: "18K" },
  { name: "Creamy Coffee", desc: "Rich, creamy, smooth. Juara buat santai.", price: "17K" },
  { name: "Brown Sugar Shaken", desc: "Shaken espresso + brown sugar + susu. Seger.", price: "17K" },
  { name: "M.I Signature", desc: "Racikan spesial house blend. Must try.", price: "15K", featured: true },
  { name: "Gula Aren Coffee", desc: "Espresso + gula aren + susu segar lokal.", price: "16K" },
];

const nonCoffeeMenu = [
  // Milk Series
  { name: "Creamy Milky Choco", desc: "Cokelat premium + susu full cream. Rich banget.", price: "16K", color: "#8b4513" },
  { name: "Creamy Milk Matcha", desc: "Matcha premium + susu creamy. Balance perfect.", price: "17K", color: "#9bbf6e" },
  { name: "Korean Strawberry Milk", desc: "Susu + strawberry saus ala Korea. Viral!", price: "18K", color: "#e88aab" },
  { name: "Bubblegum Latte", desc: "Warna cantik, rasa manis playful. New arrival.", price: "20K", color: "#f9a8d4", isNew: true },
  // Matcha CS x CECHA
  { name: "Pistachio Honey Matcha", desc: "Matcha + pistachio + madu. Kolaborasi spesial.", price: "23K", color: "#7cad4d", featured: true },
  { name: "Matcha Latte", desc: "Bubuk matcha premium + susu segar.", price: "16K", color: "#9bbf6e" },
  // Tea Series
  { name: "Ice Tea", desc: "Teh tawar dingin klasik. Simpel & menyegarkan.", price: "6K", color: "#c8a96e" },
  { name: "Lemon Tea", desc: "Teh + lemon segar. Bikin melek.", price: "12K", color: "#e8c07a" },
  { name: "Thai Tea", desc: "Teh Thailand creamy dengan susu kental.", price: "15K", color: "#d4813a" },
  { name: "Green Tea", desc: "Teh hijau dingin, ringan dan menyegarkan.", price: "15K", color: "#78b04a" },
  // Summer Series
  { name: "Lemon Mint Mojito", desc: "Lemon + mint + soda. Summer vibes banget.", price: "13K", color: "#a8d8a0" },
  { name: "Blue Ocean", desc: "Soda biru segar dengan rasa tropical.", price: "16K", color: "#5ba3d9" },
  { name: "Orange Squash", desc: "Jeruk peras segar, simpel dan real.", price: "8K", color: "#f0a050" },
  { name: "Pink Beach", desc: "Fruity, segar, instagrammable. New arrival.", price: "16K", color: "#f9a8a8", isNew: true },
];

const foodMenu = [
  { name: "French Fries", desc: "Kentang goreng renyah. Cocok buat teman ngopi.", price: "16K" },
  { name: "Spaghetti", desc: "Pilihan: Bolognese / Aglio Olio / Carbonara.", price: "10K" },
  { name: "Risoles", desc: "3 pcs risoles gurih. Crispy di luar, creamy di dalam.", price: "15K" },
  { name: "Karaage", desc: "Ayam goreng Jepang per pcs. Juicy & crispy.", price: "5K" },
  { name: "Indomie + Telur", desc: "Goreng atau rebus dengan telur. Classic.", price: "13K" },
  { name: "Telur Rebus", desc: "Per pcs. Simple protein boost.", price: "5K" },
  { name: "Dimsum", desc: "3 pcs (11K) atau 4 pcs (14K). Pilih sesuai lapar.", price: "11K" },
  { name: "Bundle 1", desc: "French Fries + Risoles. Hemat combo.", price: "22K", featured: true },
  { name: "Bundle 2", desc: "French Fries + Risoles + Karaage. Full combo!", price: "28K", featured: true },
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
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-2xl font-bold lg:text-3xl">
                        {item.name}
                      </h3>
                      {item.isNew && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                          New
                        </span>
                      )}
                      {item.featured && (
                        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                          Signature
                        </span>
                      )}
                    </div>
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

      {/* FOOD & SNACKS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground/70">
                Chapter 03
              </p>
              <h2 className="mt-2 font-display text-6xl font-bold leading-none">
                Food &amp; Snacks
              </h2>
              <p className="mt-4 max-w-xs text-sm text-foreground/70">
                Biar ngopi makin asik — ada camilan dan makanan buat nemenin sesi panjang.
              </p>
            </div>
          </div>
          <ul className="space-y-2 lg:col-span-8">
            {foodMenu.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-border py-6"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl font-bold lg:text-3xl">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        Bundle
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