import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      href="https://wa.me/6285217971601?text=Halo%20Mitra%20Coffeeshop%2C%20saya%20mau%20pesan"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Pesan via WhatsApp</span>
    </motion.a>
  );
}

