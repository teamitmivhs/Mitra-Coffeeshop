import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Kopi%20Mitra%2C%20saya%20mau%20pesan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Pesan via WhatsApp</span>
    </a>
  );
}
