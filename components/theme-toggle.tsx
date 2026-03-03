"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function onToggle() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="mono fixed right-4 bottom-4 z-50 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs uppercase tracking-widest text-[var(--foreground)] shadow-[var(--shadow)] transition hover:opacity-85"
      aria-label="Toggle light and dark theme"
    >
      Toggle Theme
    </button>
  );
}
