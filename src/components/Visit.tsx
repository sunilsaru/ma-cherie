const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "12:00 – 22:30" },
  { day: "Saturday", time: "11:00 – 23:00" },
  { day: "Sunday", time: "11:00 – 17:00" },
];

export default function Visit() {
  return (
    <section
      id="visit"
      style={{ background: "linear-gradient(180deg, #1a0f0d 0%, #2C2420 100%)" }}
      className="py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-[#B8966E]/50" />
            <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
              Find Us
            </span>
            <div className="h-px w-16 bg-[#B8966E]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-white">
            Visit Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address */}
          <div className="border border-white/10 p-8 hover:border-[#B8966E]/40 transition-colors">
            <div className="text-[#B8966E] text-2xl mb-5">◎</div>
            <h3 className="font-[family-name:var(--font-playfair)] italic text-white text-xl mb-4">
              Address
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              14 Rue de la Paix<br />
              Marylebone<br />
              London, W1G 9LW<br />
              United Kingdom
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-[#D4B896] text-xs uppercase tracking-[0.2em] border-b border-[#B8966E]/40 pb-0.5 hover:border-[#B8966E] transition-colors"
            >
              Get Directions <span>→</span>
            </a>
          </div>

          {/* Hours */}
          <div className="border border-white/10 p-8 hover:border-[#B8966E]/40 transition-colors">
            <div className="text-[#B8966E] text-2xl mb-5">◷</div>
            <h3 className="font-[family-name:var(--font-playfair)] italic text-white text-xl mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between gap-4 text-sm">
                  <span className="text-white/50">{day}</span>
                  <span
                    className={
                      time === "Closed" ? "text-[#B8966E]/60" : "text-white/80"
                    }
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Private dining & contact */}
          <div className="border border-white/10 p-8 hover:border-[#B8966E]/40 transition-colors">
            <div className="text-[#B8966E] text-2xl mb-5">✦</div>
            <h3 className="font-[family-name:var(--font-playfair)] italic text-white text-xl mb-4">
              Private Dining
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Our intimate private dining room seats up to 20 guests, ideal for
              celebrations, corporate lunches, or an exclusive evening with
              friends.
            </p>
            <a
              href="mailto:events@macherie.co.uk"
              className="inline-flex items-center gap-2 text-[#D4B896] text-xs uppercase tracking-[0.2em] border-b border-[#B8966E]/40 pb-0.5 hover:border-[#B8966E] transition-colors"
            >
              Enquire Now <span>→</span>
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          className="mt-10 w-full h-64 border border-white/10 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #1a1008 0%, #2a1a12 50%, #1a0f0d 100%)",
          }}
        >
          <div className="text-center">
            <div className="text-[#B8966E]/40 text-4xl mb-3">⊕</div>
            <p className="text-white/20 text-xs uppercase tracking-[0.3em]">
              Interactive Map
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
