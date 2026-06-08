"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Thoughtful Details",
    body: "Every element is chosen with intention. From the first point of contact to the finishing touch, nothing is left to chance.",
  },
  {
    title: "Warm Service",
    body: "A guest should feel acknowledged, welcomed and valued. The experience begins long before the first interaction.",
  },
  {
    title: "A Polished Experience",
    body: "Refined, calm and consistently beautiful. A standard of presentation that quietly says everything it needs to.",
  },
];

const contactItems = [
  { label: "Email", value: "hello@macherie.com" },
  { label: "Telephone", value: "+44 (0)000 000 0000" },
  { label: "Location", value: "London, United Kingdom" },
];

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm border-b border-[#EAF3F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/images/ma-cherie-wordmark-blue-transparent.svg"
            alt="MA CHÉRIE"
            width={160}
            height={44}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#0C1620]/65 hover:text-[#04639B] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors tracking-wide"
        >
          Enquire Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#0C1620]/70 hover:text-[#04639B] transition-colors"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#EAF3F8] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#0C1620]/65 hover:text-[#04639B] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#617DA7]">
              Introducing MA CHÉRIE
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.35rem] text-[#0C1620] leading-tight mb-7">
            A refined destination for beautiful moments.
          </h1>

          <p className="text-[#617DA7] text-lg leading-relaxed mb-10 max-w-lg">
            MA CHÉRIE brings together thoughtful details, warm service and a
            polished experience designed to feel personal from the very first
            moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors tracking-wide shadow-lg shadow-[#04639B]/20"
            >
              Start an enquiry
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#617DA7]/30 text-[#04639B] text-sm rounded-full hover:border-[#04639B] hover:bg-[#EAF3F8] transition-all tracking-wide"
            >
              Explore the experience
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right: layered card visual */}
        <div className="relative h-[400px] sm:h-[460px] lg:h-[500px]">
          {/* Back card */}
          <div className="absolute inset-8 bg-gradient-to-br from-[#B8D4EC] to-[#A0C4E0] rounded-3xl -rotate-3 shadow-md" />
          {/* Mid card */}
          <div className="absolute inset-5 bg-gradient-to-br from-[#D0E8F8] to-[#BCDAF0] rounded-3xl rotate-1 shadow-lg" />
          {/* Front card */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#EAF3F8]/80">
            {/* Top accent */}
            <div className="h-1 bg-[#04639B] flex-shrink-0" />

            <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-8 gap-6">
              <Image
                src="/images/ma-cherie-wordmark-blue-transparent.svg"
                alt="MA CHÉRIE"
                width={180}
                height={54}
                className="w-36 sm:w-44 h-auto"
              />

              {/* Divider with berry dot */}
              <div className="flex items-center gap-3 w-full max-w-[240px]">
                <div className="flex-1 h-px bg-[#EAF3F8]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#7A1232] flex-shrink-0" />
                <div className="flex-1 h-px bg-[#EAF3F8]" />
              </div>

              {/* Detail rows */}
              <div className="w-full space-y-2.5">
                {[
                  "Thoughtful details in every moment",
                  "Warm, personal service",
                  "A polished brand experience",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 bg-[#EAF3F8] rounded-xl px-4 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#617DA7] flex-shrink-0" />
                    <span className="text-[#0C1620]/65 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-0.5 bg-[#7A1232] flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function Intro() {
  return (
    <section id="about" className="bg-[#EAF3F8] py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-[#04639B] mb-5">
          MA CHÉRIE
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-14 bg-[#617DA7]/25" />
          <div className="w-1 h-1 rounded-full bg-[#7A1232]" />
          <div className="h-px w-14 bg-[#617DA7]/25" />
        </div>

        <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#0C1620] leading-snug mb-6">
          Elegant, considered and made to feel personal.
        </h2>

        <p className="text-[#617DA7] leading-relaxed text-base sm:text-lg">
          From first impression to final detail, the brand experience should
          feel soft, polished and quietly memorable.
        </p>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section id="experience" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#EAF3F8] rounded-2xl p-8 lg:p-9 hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Icon marker */}
              <div className="w-11 h-11 rounded-full border-2 border-[#04639B]/20 flex items-center justify-center mb-6 group-hover:border-[#04639B]/40 transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-[#04639B]" />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#0C1620] mb-3">
                {f.title}
              </h3>
              <p className="text-[#617DA7] leading-relaxed text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brand Experience ─────────────────────────────────────────────────────────

function BrandExperience() {
  return (
    <section className="bg-[#EAF3F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#617DA7]">
              The MA CHÉRIE Experience
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#0C1620] leading-snug mb-6">
            A brand experience that stays with you.
          </h2>

          <p className="text-[#617DA7] leading-relaxed mb-5">
            MA CHÉRIE is built on the belief that the finest experiences are
            felt before they are seen. It is in the weight of the detail, the
            warmth of the welcome, and the quiet confidence that everything has
            been considered.
          </p>

          <p className="text-[#617DA7] leading-relaxed mb-9">
            From the first touchpoint to the last, every interaction is an
            opportunity to make something feel exactly right.
          </p>

          <blockquote className="border-l-2 border-[#04639B] pl-5">
            <p className="font-[family-name:var(--font-playfair)] italic text-[#0C1620] text-lg leading-relaxed">
              &ldquo;Designed to feel personal, polished and unmistakably MA
              CHÉRIE.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Right: decorative panel */}
        <div className="relative bg-[#04639B] rounded-3xl p-10 overflow-hidden flex flex-col items-center justify-center gap-8 min-h-[360px] lg:min-h-[400px]">
          {/* Background orbs */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />

          {/* Corner rings */}
          <div className="absolute top-5 left-5 w-14 h-14 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full border border-white/10 pointer-events-none" />

          {/* Berry dots */}
          <div className="absolute top-7 right-10 w-1 h-1 rounded-full bg-[#7A1232] pointer-events-none" />
          <div className="absolute bottom-9 left-10 w-1 h-1 rounded-full bg-[#7A1232] pointer-events-none" />

          {/* Content */}
          <Image
            src="/images/ma-cherie-wordmark-white-transparent.svg"
            alt="MA CHÉRIE"
            width={200}
            height={60}
            className="relative z-10 w-40 sm:w-48 h-auto"
          />

          <div className="relative z-10 flex items-center gap-3 w-full max-w-[200px]">
            <div className="flex-1 h-px bg-white/20" />
            <div className="w-1 h-1 rounded-full bg-[#7A1232]" />
            <div className="flex-1 h-px bg-white/20" />
          </div>

          <p className="relative z-10 text-white/45 text-xs uppercase tracking-[0.28em]">
            Est. 2024
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section id="contact" className="bg-[#04639B] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* White logo */}
        <Image
          src="/images/ma-cherie-wordmark-white-transparent.svg"
          alt="MA CHÉRIE"
          width={160}
          height={48}
          className="mx-auto mb-10 w-32 sm:w-40 h-auto"
        />

        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-white leading-tight mb-5">
          Let&apos;s create something beautiful.
        </h2>

        <p className="text-white/65 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Whether you have a question, a project in mind, or simply want to
          learn more, we&apos;d love to hear from you.
        </p>

        <a
          href="mailto:hello@macherie.com"
          className="inline-flex items-center px-10 py-4 bg-white text-[#04639B] text-sm font-semibold rounded-full hover:bg-[#EAF3F8] transition-colors tracking-wide shadow-2xl mb-14"
        >
          Contact MA CHÉRIE
        </a>

        {/* Placeholder contact details */}
        <div className="border-t border-white/15 pt-10 grid sm:grid-cols-3 gap-8 text-center">
          {contactItems.map(({ label, value }) => (
            <div key={label}>
              <p className="text-white/40 text-xs uppercase tracking-[0.22em] mb-1.5">
                {label}
              </p>
              <p className="text-white/75 text-sm">{value}</p>
              <p className="text-white/25 text-xs mt-1">(placeholder)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0C1620] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Image
          src="/images/ma-cherie-wordmark-white-transparent.svg"
          alt="MA CHÉRIE"
          width={130}
          height={40}
          className="w-28 h-auto"
        />
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} MA CHÉRIE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
        <BrandExperience />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
