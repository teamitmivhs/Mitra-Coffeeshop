import { createFileRoute } from "@tanstack/react-router";
import menuCoffee from "../assets/menu-coffee.jpg";
import menuNoncoffee from "../assets/menu-noncoffee.jpg";
import menuSnack from "../assets/dimsum.jpg";

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
      <section className="mx-auto max-w-7xl px-6 pt-6 pb-4 lg:px-10 lg:pt-20 lg:pb-12">
        <p className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary lg:text-xs">
          The Menu
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight lg:mt-6">
          Pilih <em className="text-primary">racikanmu</em>.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70 lg:mt-8 lg:text-lg">
          Semua minuman dibuat fresh setiap pesanan. Bisa request less sugar
          atau extra shot — tinggal bilang ke barista kami.
        </p>
      </section>

      {/* COFFEE */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            {/* Mobile Header */}
            <div className="flex items-center gap-5 lg:hidden">
              <div className="flex-1">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-primary">
                  Chapter 01
                </p>
                <h2 className="mt-1 font-display text-4xl font-bold leading-none">
                  Coffee
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                  Espresso-based, klasik dan signature. Hot atau iced.
                </p>
              </div>
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] shadow-sm">
                <img
                  src={menuCoffee}
                  alt="Iced coffee"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-32 self-start">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Chapter 01
              </p>
              <h2 className="mt-3 font-display text-7xl font-bold leading-none">
                Coffee
              </h2>
              <p className="mt-6 max-w-xs text-base text-foreground/60 leading-relaxed">
                Espresso-based, klasik dan signature. Disajikan hot atau iced sesuai selera.
              </p>
              <div className="mt-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={menuCoffee}
                  alt="Iced coffee"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-square w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <ul className="divide-y divide-border lg:col-span-8 lg:pt-4">
            {coffeeMenu.map((item) => (
              <li
                key={item.name}
                className="group flex items-center justify-between gap-4 py-5 lg:py-8"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold transition group-hover:text-primary lg:text-3xl">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground lg:px-3 lg:py-1">
                        Best Seller
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground lg:mt-2 lg:text-base">{item.desc}</p>
                </div>
                <p className="font-display text-lg font-bold text-primary shrink-0 lg:text-4xl">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NON-COFFEE */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:order-2">
            {/* Mobile Header */}
            <div className="flex items-center gap-5 lg:hidden">
              <div className="flex-1 text-right">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-primary">
                  Chapter 02
                </p>
                <h2 className="mt-1 font-display text-4xl font-bold leading-none">
                  Non-Coffee
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                  Buat yang gak suka kopi — tetep punya banyak pilihan asik.
                </p>
              </div>
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] shadow-sm">
                <img
                  src={menuNoncoffee}
                  alt="Non-coffee drinks"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-32 self-start">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary text-right lg:text-left">
                Chapter 02
              </p>
              <h2 className="mt-3 font-display text-7xl font-bold leading-none text-right lg:text-left">
                Non-Coffee
              </h2>
              <p className="mt-6 max-w-xs text-base text-foreground/60 text-right lg:text-left lg:ml-auto leading-relaxed">
                Beragam pilihan segar mulai dari susu korea, matcha, sampai squash soda yang ikonik.
              </p>
              <div className="mt-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={menuNoncoffee}
                  alt="Non-coffee drinks"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-square w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <ul className="divide-y divide-border lg:col-span-8 lg:order-1 lg:pt-4">
            {nonCoffeeMenu.map((item) => (
              <li
                key={item.name}
                className="group flex items-center justify-between gap-4 py-5 lg:py-8"
              >
                <div className="flex flex-1 items-start gap-4 min-w-0">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full lg:h-3 lg:w-3"
                    style={{ background: item.color }}
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg font-bold transition group-hover:text-primary lg:text-3xl">
                        {item.name}
                      </h3>
                      <div className="flex gap-1">
                        {item.isNew && (
                          <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground lg:px-3 lg:py-1">
                            New
                          </span>
                        )}
                        {item.featured && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary lg:px-3 lg:py-1">
                            Signature
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground lg:mt-2 lg:text-base">{item.desc}</p>
                  </div>
                </div>
                <p className="font-display text-lg font-bold text-primary shrink-0 lg:text-4xl">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOD & SNACKS */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            {/* Mobile Header */}
            <div className="flex items-center gap-5 lg:hidden">
              <div className="flex-1">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.22em] text-primary">
                  Chapter 03
                </p>
                <h2 className="mt-1 font-display text-4xl font-bold leading-none">
                  Snacks
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                  Teman ngopi paling asik buat nemenin tugas.
                </p>
              </div>
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-[1.5rem] shadow-sm">
                <img
                  src={menuSnack}
                  alt="Snacks and food"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block sticky top-32 self-start">
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Chapter 03
              </p>
              <h2 className="mt-3 font-display text-7xl font-bold leading-none">
                Snacks
              </h2>
              <p className="mt-6 max-w-xs text-base text-foreground/60 leading-relaxed">
                Biar ngopi makin seru — ada camilan dan makanan buat nemenin sesi panjangmu.
              </p>
              <div className="mt-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={menuSnack}
                  alt="Snacks and food"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-square w-full object-cover transition duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
          <ul className="divide-y divide-border lg:col-span-8 lg:pt-4">
            {foodMenu.map((item) => (
              <li
                key={item.name}
                className="group flex items-center justify-between gap-4 py-5 lg:py-8"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold transition group-hover:text-primary lg:text-3xl">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground lg:px-3 lg:py-1">
                        Bundle
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground lg:mt-2 lg:text-base">{item.desc}</p>
                </div>
                <p className="font-display text-lg font-bold text-primary shrink-0 lg:text-4xl">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-accent p-10 text-center lg:rounded-[3.5rem] lg:p-24">
          <div className="absolute inset-0 bg-primary/5 opacity-50" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-primary lg:text-7xl">
              Udah nemu favoritmu?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-primary/70 lg:mt-8 lg:text-xl">
              Pesan sekarang via WhatsApp biar gak antri pas jam istirahat.
            </p>
            <a
              href="https://wa.me/6285217971601"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground transition active:scale-95 lg:mt-14 lg:px-12 lg:py-5 lg:text-lg"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}