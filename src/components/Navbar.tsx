"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Reservations", href: "#reservations" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C2420]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-2xl italic tracking-widest text-[#D4B896] uppercase"
        >
          Ma Chérie
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-white/80 hover:text-[#D4B896] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve CTA */}
        <a
          href="#reservations"
          className="hidden md:inline-flex items-center gap-2 border border-[#B8966E] text-[#D4B896] text-sm uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#B8966E] hover:text-[#2C2420] transition-all duration-300"
        >
          Reserve
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/80 p-2"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C2420]/98 backdrop-blur-sm px-6 pb-8 pt-2">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.15em] text-white/80 hover:text-[#D4B896] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservations"
                onClick={() => setMenuOpen(false)}
                className="inline-flex border border-[#B8966E] text-[#D4B896] text-sm uppercase tracking-[0.15em] px-6 py-2.5 hover:bg-[#B8966E] hover:text-[#2C2420] transition-all"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
