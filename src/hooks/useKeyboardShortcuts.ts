"use client";

import { useEffect } from "react";

interface ShortcutHandlers {
  onCommandPalette?: () => void;
  onToggleTheme?: () => void;
  onScrollTop?: () => void;
}

export function useKeyboardShortcuts(handlers: ShortcutHandlers) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handlers.onCommandPalette?.();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        handlers.onToggleTheme?.();
      }
      if (e.key === "Home" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handlers.onScrollTop?.();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers]);
}
