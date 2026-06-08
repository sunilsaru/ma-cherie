import Image from "next/image";
import Header from "@/components/Header";

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = {
  name?: string;
  desc?: string;
};

type MenuCategory = {
  category: string;
  price: string;
  note?: string;
  fullWidth?: boolean;
  variants: Variant[];
};

type DayHours = {
  day: string;
  hours: string;
  extended?: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const openingHours: DayHours[] = [
  { day: "Monday", hours: "09:00 – 17:00" },
  { day: "Tuesday", hours: "09:00 – 17:00" },
  { day: "Wednesday", hours: "09:00 – 21:30", extended: true },
  { day: "Thursday", hours: "09:00 – 21:30", extended: true },
  { day: "Friday", hours: "09:00 – 22:30", extended: true },
  { day: "Saturday", hours: "09:00 – 22:30", extended: true },
  { day: "Sunday", hours: "09:00 – 16:00" },
];

const menuData: MenuCategory[] = [
  {
    category: "Overnight Oats",
    price: "£6.00",
    variants: [
      {
        name: "Tiramisu",
        desc: "Oats, almond milk, espresso shot, chia seeds, cocoa powder, vanilla and mascarpone",
      },
      {
        name: "Banana Bread",
        desc: "Oats, almond milk, mashed banana, strawberry, vanilla, walnuts and cinnamon",
      },
      {
        name: "Pistachio",
        desc: "Oats, almond milk, pistachio cream, mascarpone, maple syrup and vanilla",
      },
    ],
  },
  {
    category: "Smoothie Breakfast Bowls",
    price: "£7.00",
    variants: [
      {
        name: "Pineapple Mango Bowl",
        desc: "Granola, passion fruit, pineapple, mango, chia seeds and fresh fruits",
      },
      {
        name: "Berry Bowl",
        desc: "Granola, strawberries, raspberries, blackberries and honey",
      },
    ],
  },
  {
    category: "American Pancakes",
    price: "£8.00",
    variants: [
      { desc: "Crispy bacon, maple syrup and blueberries" },
      { desc: "Berry compote, fresh berries and ice cream" },
      { desc: "Pistachio cream, mascarpone, honey, ice cream and fresh figs" },
    ],
  },
  {
    category: "Brioche",
    price: "£7.00",
    variants: [
      { desc: "Ice cream, fresh strawberries and raspberry topping" },
      { desc: "Goat cheese, thyme, plum and honey" },
    ],
  },
  {
    category: "Sourdough Toast Toppers",
    price: "£9.00",
    variants: [
      { desc: "Mashed avocado and salami" },
      { desc: "Ricotta, figs and roasted pistachio with honey drizzle" },
      {
        desc: "Prosciutto, pesto, mozzarella, sundried tomatoes, toasted pine nuts and basil oil",
      },
      {
        desc: "Goats cheese, salad, onion chutney, peaches and balsamic dressing",
      },
    ],
  },
  {
    category: "Salads",
    price: "£11.00",
    note: "Topped with chargrilled chicken, prawns or baked falafel",
    variants: [
      {
        name: "Green Valley",
        desc: "Green salad, buckwheat, broad beans, honey mustard sauce and fresh parsley",
      },
      {
        name: "Bella Ciao",
        desc: "Italian pasta, mozzarella, parmesan, green pesto, red and yellow cherry tomatoes, olive oil and fresh basil",
      },
      {
        name: "Spartacus",
        desc: "Cherry tomatoes, cucumber, red onion, black olives, black rice, orzo, feta cheese and lemon dill dressing",
      },
      {
        name: "Sunny Vibes",
        desc: "Quinoa, brown rice, tomatoes, curly kale, soy beans, red onion, spring onion and balsamic dressing",
      },
      {
        name: "Mambonito",
        desc: "Fresh salad leaves, avocado, azuki beans, black rice, tomatoes and spicy sauce",
      },
    ],
  },
  {
    category: "Cheese & Meat Boards",
    price: "£15.00",
    fullWidth: true,
    variants: [
      {
        name: "Classic French Cheese Board",
        desc: "Brie, roquefort, comté and French goat cheese with honey, berry compote, figs, pears, grapes, mixed raw nuts and sourdough crackers",
      },
      { name: "British Cheese Board" },
      { name: "Italian Cheese Board" },
      { name: "Ultimate Charcuterie Platter" },
      { name: "Honey, Garlic & Fresh Thyme Camembert Platter" },
      { name: "Burrata Platter" },
    ],
  },
];

const highlights = [
  {
    label: "Brunch & Pancakes",
    caption: "Relaxed morning plates, fluffy pancakes and fresh seasonal bowls",
  },
  {
    label: "Cakes & Desserts",
    caption: "Homemade cakes, sweet brioche and indulgent dessert specials",
  },
  {
    label: "Cheese & Sharing Boards",
    caption: "Curated cheese and charcuterie boards — perfect for lingering over",
  },
];

const galleryLabels = [
  "Café interior",
  "Brunch plate",
  "Sharing board",
  "Coffee & cake",
];

// ─── Reusable Icons ───────────────────────────────────────────────────────────

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.338c0-.608.386-1.15.966-1.341l3.378-1.126a.75.75 0 01.857.28l1.75 2.625a.75.75 0 01-.185.998L7.2 8.91a.75.75 0 00-.24.857 10.5 10.5 0 005.273 5.273.75.75 0 00.857-.24l1.136-1.82a.75.75 0 01.998-.185l2.625 1.75a.75.75 0 01.28.857l-1.126 3.378a1.375 1.375 0 01-1.341.966C7.574 21.75 2.25 16.426 2.25 9.75v-3.412z"
      />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function PinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function CameraIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  );
}

// ─── Photo Placeholder ────────────────────────────────────────────────────────

function PhotoPlaceholder({
  label,
  aspectClass = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspectClass?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#EAF3F8] via-stone-50 to-[#D0E8F5] ${className}`}
    >
      <div
        className={`${aspectClass} flex flex-col items-center justify-center px-6 text-center`}
      >
        <div className="w-14 h-14 rounded-full bg-[#04639B]/10 flex items-center justify-center mb-4">
          <CameraIcon className="w-7 h-7 text-[#04639B]/40" />
        </div>
        <p className="text-[#617DA7]/55 text-xs uppercase tracking-widest mb-1.5">
          Photo placeholder
        </p>
        <p
          className="text-[#0C1620]/65 font-semibold text-base"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {label}
        </p>
        <p className="text-[#617DA7]/40 text-xs mt-2">
          Professional image coming soon
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs font-medium text-[#04639B]">MA CHÉRIE</span>
        <span className="text-xs text-[#617DA7]/55">Abingdon</span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-5 font-medium">
            Café · Brunch · Sharing Boards
          </p>
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#0C1620] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Coffee, brunch and beautiful moments in Abingdon.
          </h1>
          <p className="text-lg text-[#617DA7] leading-relaxed mb-10 max-w-lg">
            A cosy neighbourhood café serving carefully made food, artisan coffee
            and handpicked wines — from a lazy morning brunch to an easy evening
            with a sharing board and a glass.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="px-8 py-3.5 bg-[#04639B] text-white rounded-full text-sm font-medium hover:bg-[#035485] transition-colors"
            >
              View Menu
            </a>
            <a
              href="tel:+441235634048"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#04639B]/30 text-[#04639B] rounded-full text-sm font-medium hover:border-[#04639B] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              01235 634048
            </a>
          </div>
        </div>

        {/* Hero photo placeholder */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#EAF3F8] via-stone-50 to-[#D0E8F5] h-[380px] sm:h-[460px] lg:h-[520px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#04639B]/10 flex items-center justify-center mb-5">
              <CameraIcon className="w-8 h-8 text-[#04639B]/35" />
            </div>
            <p className="text-[#617DA7]/45 text-xs uppercase tracking-widest mb-2">
              Photo placeholder
            </p>
            <p
              className="text-[#0C1620]/55 text-xl font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Café exterior
            </p>
            <p className="text-[#617DA7]/35 text-sm mt-2">
              Professional image coming soon
            </p>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg flex items-center gap-3">
              <div className="w-0.5 h-8 bg-[#7A1232] rounded-full flex-shrink-0" />
              <div>
                <p
                  className="font-semibold text-[#0C1620] text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  MA CHÉRIE Café
                </p>
                <p className="text-xs text-[#617DA7]">Abingdon, Oxfordshire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Strip ───────────────────────────────────────────────────── */}
      <section className="bg-[#04639B] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 grid sm:grid-cols-3 gap-6 sm:gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <ClockIcon className="w-5 h-5 text-white/70 flex-shrink-0 sm:mt-0.5" />
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                Opening Hours
              </p>
              <p className="text-sm text-white/90 leading-relaxed">
                Mon–Tue 09:00–17:00
                <br />
                Wed–Thu 09:00–21:30
                <br />
                Fri–Sat 09:00–22:30
                <br />
                Sun 09:00–16:00
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <PinIcon className="w-5 h-5 text-white/70 flex-shrink-0 sm:mt-0.5" />
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                Find Us
              </p>
              <p className="text-sm text-white/90">Abingdon, Oxfordshire</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <PhoneIcon className="w-5 h-5 text-white/70 flex-shrink-0 sm:mt-0.5" />
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                Reservations
              </p>
              <a
                href="tel:+441235634048"
                className="text-sm text-white hover:text-white/80 transition-colors"
              >
                01235 634048
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-3 font-medium">
            What we do
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0C1620]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Made with care, served with warmth
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.label}>
              <PhotoPlaceholder label={h.label} aspectClass="aspect-[4/3]" />
              <div className="pt-4 px-1">
                <h3
                  className="font-semibold text-[#0C1620] text-lg mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {h.label}
                </h3>
                <p className="text-sm text-[#617DA7] leading-relaxed">
                  {h.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Menu ─────────────────────────────────────────────────────────── */}
      <section id="menu" className="bg-[#F8FBFD] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-3 font-medium">
              Our menu
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1620]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Fresh, seasonal and made to order
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {menuData.map((cat) => (
              <div
                key={cat.category}
                className={`bg-white rounded-2xl p-6 border border-[#EAF3F8] shadow-sm${cat.fullWidth ? " sm:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#EAF3F8]">
                  <h3
                    className="text-xl font-bold text-[#0C1620]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {cat.category}
                  </h3>
                  <span className="flex-shrink-0 text-sm font-semibold text-[#04639B] bg-[#EAF3F8] px-3 py-1 rounded-full">
                    {cat.price}
                  </span>
                </div>

                {cat.note && (
                  <p className="text-xs text-[#617DA7] italic mb-4">
                    {cat.note}
                  </p>
                )}

                <ul
                  className={`space-y-3${cat.fullWidth ? " sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-3" : ""}`}
                >
                  {cat.variants.map((v, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7A1232]/60" />
                      <div>
                        {v.name && v.desc ? (
                          <>
                            <p className="text-sm font-semibold text-[#0C1620]">
                              {v.name}
                            </p>
                            <p className="text-xs text-[#617DA7] leading-relaxed mt-0.5">
                              {v.desc}
                            </p>
                          </>
                        ) : v.name ? (
                          <p className="text-sm text-[#0C1620] font-medium">
                            {v.name}
                          </p>
                        ) : (
                          <p className="text-sm text-[#0C1620]">{v.desc}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#617DA7] mt-8">
            Menu changes seasonally. Please call us for today&apos;s specials.
          </p>
        </div>
      </section>

      {/* ── Opening Hours ─────────────────────────────────────────────────── */}
      <section id="hours" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-3 font-medium">
              Opening hours
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1620] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come and stay a while
            </h2>
            <p className="text-[#617DA7] leading-relaxed mb-8">
              We&apos;re open seven days a week, with extended evening hours
              Wednesday through Saturday — great for after-work drinks or a
              relaxed sharing board with friends.
            </p>
            <a
              href="tel:+441235634048"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#04639B] text-white rounded-full text-sm font-medium hover:bg-[#035485] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Book a table
            </a>
          </div>

          <div className="bg-[#F8FBFD] rounded-2xl border border-[#EAF3F8] overflow-hidden">
            {openingHours.map((row, i) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4${i < openingHours.length - 1 ? " border-b border-[#EAF3F8]" : ""}`}
              >
                <span
                  className={`text-sm font-medium${row.extended ? " text-[#0C1620]" : " text-[#617DA7]"}`}
                >
                  {row.day}
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-sm text-[#0C1620]">{row.hours}</span>
                  {row.extended && (
                    <span className="text-xs text-[#7A1232] bg-[#7A1232]/10 px-2 py-0.5 rounded-full font-medium">
                      Evening
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────────────────── */}
      <section id="gallery" className="bg-[#F8FBFD] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-3 font-medium">
              Gallery
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1620] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A glimpse of MA CHÉRIE
            </h2>
            <p className="text-sm text-[#617DA7]">
              Professional photography coming soon.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryLabels.map((label) => (
              <PhotoPlaceholder
                key={label}
                label={label}
                aspectClass="aspect-square"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit ─────────────────────────────────────────────────────────── */}
      <section id="visit" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#04639B] mb-3 font-medium">
              Find us
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0C1620] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Visit us in Abingdon
            </h2>
            <p className="text-[#617DA7] leading-relaxed mb-8">
              We&apos;re nestled in the heart of Abingdon, Oxfordshire — easy to
              find and always worth the visit. Walk in or call ahead to reserve a
              table, especially for evenings and weekends.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#EAF3F8] flex items-center justify-center flex-shrink-0">
                  <PinIcon className="w-5 h-5 text-[#04639B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C1620] mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-[#617DA7]">
                    Abingdon, Oxfordshire
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#EAF3F8] flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-[#04639B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C1620] mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+441235634048"
                    className="text-sm text-[#04639B] hover:text-[#035485] transition-colors"
                  >
                    01235 634048
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#EAF3F8] flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-[#04639B]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0C1620] mb-0.5">
                    Hours
                  </p>
                  <p className="text-sm text-[#617DA7] leading-relaxed">
                    Mon–Tue: 09:00–17:00
                    <br />
                    Wed–Thu: 09:00–21:30
                    <br />
                    Fri–Sat: 09:00–22:30
                    <br />
                    Sun: 09:00–16:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#EAF3F8] to-stone-100 h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="w-14 h-14 rounded-full bg-[#04639B]/10 flex items-center justify-center mx-auto mb-4">
                <PinIcon className="w-7 h-7 text-[#04639B]/50" />
              </div>
              <p className="text-[#617DA7]/50 text-xs uppercase tracking-widest mb-1.5">
                Map placeholder
              </p>
              <p
                className="text-[#0C1620]/60 font-semibold text-base"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Abingdon, Oxfordshire
              </p>
              <p className="text-[#617DA7]/40 text-xs mt-1.5">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#0C1620] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-medium">
            Get in touch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reserve a table or ask us anything
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Give us a call and we&apos;ll make sure you&apos;re looked after —
            whether it&apos;s a quiet brunch for two or an evening with a group.
          </p>
          <a
            href="tel:+441235634048"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#04639B] text-white rounded-full text-lg font-medium hover:bg-[#035485] transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            01235 634048
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#04639B] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid sm:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/ma-cherie-wordmark-white-transparent.svg"
              alt="MA CHÉRIE"
              width={160}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              A cosy café in Abingdon, Oxfordshire. Brunch, cakes, sharing
              boards and carefully made drinks.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-medium">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Hours", href: "#hours" },
                { label: "Gallery", href: "#gallery" },
                { label: "Visit", href: "#visit" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-medium">
              Contact
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <PinIcon className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/70">Abingdon, Oxfordshire</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-white/50 flex-shrink-0" />
                <a
                  href="tel:+441235634048"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  01235 634048
                </a>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/70 leading-relaxed">
                  Mon–Tue 09:00–17:00
                  <br />
                  Wed–Thu 09:00–21:30
                  <br />
                  Fri–Sat 09:00–22:30
                  <br />
                  Sun 09:00–16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/35">
              &copy; {new Date().getFullYear()} MA CHÉRIE. All rights reserved.
            </p>
            <p className="text-xs text-white/25">Abingdon, Oxfordshire</p>
          </div>
        </div>
      </footer>
    </>
  );
}
