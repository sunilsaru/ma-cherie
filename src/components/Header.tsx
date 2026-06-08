"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#hours" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAF3F8] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        <Link href="/" aria-label="MA CHÉRIE home">
          <Image
            src="/images/ma-cherie-wordmark-blue-transparent.svg"
            alt="MA CHÉRIE"
            width={200}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#0C1620] opacity-60 hover:opacity-100 transition-opacity tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+441235634048"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
          </svg>
          Call Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#0C1620]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#EAF3F8] px-6 pb-6 pt-4 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#0C1620] opacity-70 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+441235634048"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
            </svg>
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
