"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/artist-profiles", label: "Artist Profile List" },
  { href: "/song-names", label: "Song Names" },
  { href: "/request-song", label: "Request Song" },
  { href: "/about", label: "About Website" },
  { href: "/", label: "Find Song Lyrics" },
];

export default function UserNav() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsHidden(window.scrollY > 80);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`card sticky top-4 z-10 rounded-2xl px-4 py-3 transition-all duration-300 ${
        isHidden ? "pointer-events-none -translate-y-6 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="mono rounded-lg border border-[#d7c9b2] bg-[#fffcf6] px-3 py-2 text-xs uppercase tracking-widest text-[#5a503f] transition hover:bg-[#f4ecdf]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
