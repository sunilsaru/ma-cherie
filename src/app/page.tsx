import Image from "next/image";
import Header from "@/components/Header";

// ─── Data ─────────────────────────────────────────────────────────────────────

const cafeHighlights = [
  {
    label: "Fresh Coffee",
    desc: "Espresso, flat white, latte & more",
    dot: "#04639B",
  },
  {
    label: "Cakes & Pastries",
    desc: "Made fresh — sweet, indulgent & lovely",
    dot: "#7A1232",
  },
  {
    label: "Cosy Seating",
    desc: "Relax and take your time with us",
    dot: "#04639B",
  },
  {
    label: "Takeaway Available",
    desc: "Perfect when you're on the go",
    dot: "#617DA7",
  },
];

const menuCategories = [
  {
    name: "Coffee",
    items: [
      { name: "Espresso", price: "£2.50" },
      { name: "Americano", price: "£3.00" },
      { name: "Cappuccino", price: "£3.50" },
      { name: "Latte", price: "£3.50" },
    ],
  },
  {
    name: "Tea & Hot Drinks",
    items: [
      { name: "English Breakfast Tea", price: "£2.80" },
      { name: "Herbal Tea", price: "£3.00" },
      { name: "Hot Chocolate", price: "£3.80" },
    ],
  },
  {
    name: "Cakes & Pastries",
    items: [
      { name: "Croissant", price: "£2.95" },
      { name: "Pain au Chocolat", price: "£3.25" },
      { name: "Cake Slice", price: "£4.25" },
    ],
  },
  {
    name: "Breakfast",
    items: [
      { name: "Toast & Jam", price: "£3.95" },
      { name: "Granola Bowl", price: "£5.95" },
      { name: "Breakfast Sandwich", price: "£6.95" },
    ],
  },
  {
    name: "Lunch",
    items: [
      { name: "Soup of the Day", price: "£6.50" },
      { name: "Sandwich Selection", price: "£6.95" },
      { name: "Quiche & Salad", price: "£8.95" },
    ],
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white py-14 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EAF3F8] rounded-full px-4 py-1.5 mb-7">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7A1232]" />
            <span className="text-xs text-[#04639B] font-medium tracking-wide">
              Now Open · Abingdon
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-[3.2rem] text-[#0C1620] leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A cosy café for coffee, cakes and beautiful moments.
          </h1>

          <p className="text-[#617DA7] text-lg leading-relaxed mb-10 max-w-lg">
            Welcome to MA CHÉRIE — a relaxed café serving comforting drinks,
            sweet treats and simple moments to enjoy with the people you love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors font-medium shadow-md shadow-[#04639B]/20"
            >
              View Menu
            </a>
            <a
              href="tel:+440000000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#617DA7]/30 text-[#0C1620] text-sm rounded-full hover:border-[#04639B] hover:bg-[#EAF3F8] transition-all"
            >
              <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>

        {/* Café visual panel */}
        <div className="relative">
          {/* Warm background card */}
          <div
            className="rounded-3xl p-7 shadow-xl"
            style={{
              background: "linear-gradient(140deg, #FFF8F0 0%, #EAF3F8 100%)",
            }}
          >
            {/* Logo card */}
            <div className="bg-white rounded-2xl px-6 py-5 shadow-sm flex flex-col items-center mb-5">
              <Image
                src="/images/ma-cherie-wordmark-blue-transparent.svg"
                alt="MA CHÉRIE"
                width={180}
                height={52}
                className="w-36 h-auto mb-2"
              />
              <p className="text-xs text-[#617DA7] tracking-widest uppercase">
                Café & Pâtisserie
              </p>
            </div>

            {/* Feature rows */}
            <div className="space-y-2.5">
              {cafeHighlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/80 rounded-xl px-4 py-3 flex items-center gap-3.5 shadow-sm"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.dot }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#0C1620] leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#617DA7] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening hours chip */}
            <div className="mt-4 bg-[#04639B] rounded-xl px-4 py-3 flex items-center justify-between">
              <span className="text-white text-xs font-medium">Mon–Sat</span>
              <span className="text-white/80 text-xs">8:00am – 5:00pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Info Strip ───────────────────────────────────────────────────────────────

function InfoStrip() {
  return (
    <section className="bg-[#EAF3F8] border-y border-[#D4E8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#C8DFF0]">

          {/* Hours */}
          <div className="flex items-center gap-4 py-5 sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#617DA7] uppercase tracking-wide mb-0.5">Opening Hours</p>
              <p className="text-sm font-semibold text-[#0C1620]">Mon–Sat: 8:00am – 5:00pm</p>
              <p className="text-xs text-[#617DA7] opacity-50">placeholder</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 py-5 sm:px-8">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#617DA7] uppercase tracking-wide mb-0.5">Location</p>
              <p className="text-sm font-semibold text-[#0C1620]">Abingdon</p>
              <p className="text-xs text-[#617DA7] opacity-50">placeholder</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 py-5 sm:px-8">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#617DA7] uppercase tracking-wide mb-0.5">Call</p>
              <a href="tel:+440000000000" className="text-sm font-semibold text-[#04639B] hover:underline">
                +44 (0)0000 000000
              </a>
              <p className="text-xs text-[#617DA7] opacity-50">placeholder</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Menu ─────────────────────────────────────────────────────────────────────

function Menu() {
  return (
    <section id="menu" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span className="text-xs uppercase tracking-widest text-[#617DA7]">
              What we serve
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl text-[#0C1620] mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Menu
          </h2>
          <p className="text-[#617DA7] max-w-xl">
            A simple selection of café favourites.
          </p>
          <p className="text-xs text-[#617DA7] opacity-50 mt-1">
            Sample menu — items and prices will be confirmed before launch.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {menuCategories.map((cat) => (
            <div
              key={cat.name}
              className="bg-[#EAF3F8] rounded-2xl p-6 flex flex-col"
            >
              <h3
                className="text-lg text-[#0C1620] mb-4 pb-3 border-b border-[#C8DFF0]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.name}
              </h3>
              <ul className="space-y-3 flex-1">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-[#0C1620]">{item.name}</span>
                    <span className="text-sm font-semibold text-[#04639B] flex-shrink-0">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#617DA7] opacity-40 mt-8">
          Prices are indicative only and subject to change before launch.
        </p>
      </div>
    </section>
  );
}

// ─── Visit ────────────────────────────────────────────────────────────────────

function Visit() {
  return (
    <section id="visit" className="bg-[#EAF3F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Copy */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-0.5 h-5 bg-[#7A1232] rounded-full" />
            <span className="text-xs uppercase tracking-widest text-[#617DA7]">
              Find us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl text-[#0C1620] leading-snug mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit MA CHÉRIE
          </h2>
          <p className="text-[#617DA7] leading-relaxed mb-8">
            Pop in for a quiet coffee, meet a friend for lunch, or take
            something sweet away with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+440000000000"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#04639B] text-white text-sm rounded-full hover:bg-[#035485] transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=Abingdon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-[#04639B]/30 text-[#04639B] text-sm rounded-full hover:bg-white hover:border-[#04639B] transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        {/* Info card */}
        <div className="bg-white rounded-3xl shadow-md p-7 space-y-5">

          {[
            {
              icon: (
                <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              label: "Address",
              value: "Abingdon, Oxfordshire",
              note: "Full address — placeholder",
            },
            {
              icon: (
                <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
              ),
              label: "Opening Hours",
              value: "Monday – Saturday: 8:00am – 5:00pm",
              note: "Hours — placeholder",
            },
            {
              icon: (
                <svg className="w-4 h-4 text-[#04639B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
                </svg>
              ),
              label: "Telephone",
              value: "+44 (0)0000 000000",
              note: "Phone — placeholder",
            },
          ].map(({ icon, label, value, note }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EAF3F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                {icon}
              </div>
              <div>
                <p className="text-xs text-[#617DA7] uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-sm font-medium text-[#0C1620]">{value}</p>
                <p className="text-xs text-[#617DA7] opacity-40">{note}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section id="contact" className="bg-[#04639B] py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Image
          src="/images/ma-cherie-wordmark-white-transparent.svg"
          alt="MA CHÉRIE"
          width={200}
          height={58}
          className="mx-auto mb-8 w-40 sm:w-48 h-auto"
        />
        <h2
          className="text-3xl sm:text-4xl text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Planning a visit?
        </h2>
        <p className="text-lg mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Call ahead, ask about today&apos;s cakes, or speak to us about
          anything you need before visiting.
        </p>
        <a
          href="tel:+440000000000"
          className="inline-flex items-center gap-2.5 px-10 py-4 bg-white text-[#04639B] text-sm font-semibold rounded-full hover:bg-[#EAF3F8] transition-colors shadow-xl"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z" />
          </svg>
          Call MA CHÉRIE
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const footerLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Visit", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0C1620] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Image
            src="/images/ma-cherie-wordmark-white-transparent.svg"
            alt="MA CHÉRIE"
            width={160}
            height={46}
            className="w-36 h-auto"
          />
          <nav className="flex items-center gap-6" aria-label="Footer">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/40 hover:text-white/80 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center sm:text-left">
          <p className="text-xs text-white/25">
            © 2026 MA CHÉRIE. All rights reserved.
          </p>
        </div>
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
        <InfoStrip />
        <Menu />
        <Visit />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
