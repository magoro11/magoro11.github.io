"use client";

import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { type Locale } from "@/lib/i18n/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "fr", label: "Français" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-cyan-400 transition-colors cursor-pointer"
        aria-label="Change language"
      >
        <Globe size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 top-12 w-36 bg-[#12121a] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
          >
            {locales.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors cursor-pointer ${
                  locale === code ? "text-cyan-400 bg-cyan-500/10" : "text-white/70"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
