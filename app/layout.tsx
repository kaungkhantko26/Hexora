import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Hexora",
  description: "Hexora - a full-stack lyrics app powered by Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen">
          {children}
          <footer className="border-t border-[var(--line)] bg-[var(--surface)] px-4 py-4 text-center md:px-8">
            <p className="mono text-xs uppercase tracking-widest text-[#6f6454]">
              Copyright © 2026 Hexora
            </p>
            <p className="mt-1 text-xs text-[#6f6454]">
              Policy: Content is protected. Copying, republishing, or redistribution without permission is not allowed.
            </p>
          </footer>
        </div>
        <ThemeToggle />
      </body>
    </html>
  );
}
