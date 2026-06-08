"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAF3F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        <Link href="/" aria-label="MA CHÉRIE home">
          <Image
            src="/images/ma-cherie-wordmark-blue-transparent.svg"
            alt="MA CHÉRIE"
            width={160}
            height={44}
            className="h-10 w-auto"
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
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors"
        >
          Enquire Now
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
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
