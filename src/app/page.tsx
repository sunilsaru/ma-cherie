import Image from "next/image";
import Header from "@/components/Header";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Copy */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span
              className="text-xs uppercase tracking-widest text-[#617DA7]"
              style={{ letterSpacing: "0.22em" }}
            >
              Introducing MA CHÉRIE
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl text-[#0C1620] leading-tight mb-7"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
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
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors"
              style={{ letterSpacing: "0.04em" }}
            >
              Start an enquiry
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#617DA7] border-opacity-30 text-[#04639B] text-sm rounded-full hover:bg-[#EAF3F8] transition-colors"
            >
              Explore the experience <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Visual card stack */}
        <div className="relative h-[400px] sm:h-[460px] lg:h-[500px]">
          {/* Back card */}
          <div
            className="absolute inset-8 rounded-3xl shadow-md"
            style={{
              background: "linear-gradient(135deg, #B8D4EC, #A0C4E0)",
              transform: "rotate(-3deg)",
            }}
          />
          {/* Mid card */}
          <div
            className="absolute inset-5 rounded-3xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, #D0E8F8, #BCDAF0)",
              transform: "rotate(1deg)",
            }}
          />
          {/* Front card */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#EAF3F8]">
            <div className="h-1 bg-[#04639B]" />
            <div className="flex-1 flex flex-col items-center justify-center px-8 sm:px-10 py-8 gap-6">
              <Image
                src="/images/ma-cherie-wordmark-blue-transparent.svg"
                alt="MA CHÉRIE"
                width={180}
                height={54}
                className="w-36 sm:w-44 h-auto"
              />
              <div className="flex items-center gap-3 w-full max-w-xs">
                <div className="flex-1 h-px bg-[#EAF3F8]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#7A1232]" />
                <div className="flex-1 h-px bg-[#EAF3F8]" />
              </div>
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
                    <span className="text-sm" style={{ color: "rgba(12,22,32,0.65)" }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-0.5 bg-[#7A1232]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="bg-[#EAF3F8] py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p
          className="text-xs uppercase text-[#04639B] mb-5"
          style={{ letterSpacing: "0.32em" }}
        >
          MA CHÉRIE
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-14" style={{ background: "rgba(97,125,167,0.3)" }} />
          <div className="w-1 h-1 rounded-full bg-[#7A1232]" />
          <div className="h-px w-14" style={{ background: "rgba(97,125,167,0.3)" }} />
        </div>
        <h2
          className="text-3xl sm:text-4xl text-[#0C1620] leading-snug mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
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

function Features() {
  return (
    <section id="experience" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#EAF3F8] rounded-2xl p-8 lg:p-9"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-6"
                style={{ border: "2px solid rgba(4,99,155,0.2)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#04639B]" />
              </div>
              <h3
                className="text-xl text-[#0C1620] mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
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

function BrandExperience() {
  return (
    <section className="bg-[#EAF3F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Copy */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span
              className="text-xs uppercase text-[#617DA7]"
              style={{ letterSpacing: "0.22em" }}
            >
              The MA CHÉRIE Experience
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl text-[#0C1620] leading-snug mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
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
            <p
              className="italic text-[#0C1620] text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;Designed to feel personal, polished and unmistakably MA
              CHÉRIE.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Decorative panel */}
        <div
          className="rounded-3xl p-10 relative overflow-hidden flex flex-col items-center justify-center gap-8 min-h-[360px]"
          style={{ background: "#04639B" }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 288,
              height: 288,
              top: -80,
              right: -80,
              background: "rgba(255,255,255,0.05)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 208,
              height: 208,
              bottom: -64,
              left: -64,
              background: "rgba(255,255,255,0.05)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 56,
              height: 56,
              top: 20,
              left: 20,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 36,
              height: 36,
              bottom: 20,
              right: 20,
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 4, height: 4, top: 28, right: 40, background: "#7A1232" }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 4, height: 4, bottom: 36, left: 40, background: "#7A1232" }}
          />
          <Image
            src="/images/ma-cherie-wordmark-white-transparent.svg"
            alt="MA CHÉRIE"
            width={200}
            height={60}
            className="relative z-10 w-40 sm:w-48 h-auto"
          />
          <div className="relative z-10 flex items-center gap-3 w-full max-w-[200px]">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="w-1 h-1 rounded-full bg-[#7A1232]" />
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
          </div>
          <p
            className="relative z-10 text-xs uppercase"
            style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.28em" }}
          >
            Est. 2024
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="bg-[#04639B] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Image
          src="/images/ma-cherie-wordmark-white-transparent.svg"
          alt="MA CHÉRIE"
          width={160}
          height={48}
          className="mx-auto mb-10 w-32 sm:w-40 h-auto"
        />
        <h2
          className="text-4xl sm:text-5xl text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s create something beautiful.
        </h2>
        <p className="text-lg mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Whether you have a question, a project in mind, or simply want to
          learn more, we&apos;d love to hear from you.
        </p>
        <a
          href="mailto:hello@macherie.com"
          className="inline-flex items-center px-10 py-4 bg-white text-[#04639B] text-sm font-semibold rounded-full hover:bg-[#EAF3F8] transition-colors mb-14"
          style={{ letterSpacing: "0.04em" }}
        >
          Contact MA CHÉRIE
        </a>
        <div
          className="pt-10 grid sm:grid-cols-3 gap-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          {[
            { label: "Email", value: "hello@macherie.com" },
            { label: "Telephone", value: "+44 (0)000 000 0000" },
            { label: "Location", value: "London, United Kingdom" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                className="text-xs uppercase mb-1.5"
                style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.22em" }}
              >
                {label}
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                (placeholder)
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2026 MA CHÉRIE. All rights reserved.
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
