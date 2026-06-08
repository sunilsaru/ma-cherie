export default function About() {
  return (
    <section id="about" className="bg-[#FAF7F2] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            {/* Main frame */}
            <div
              className="aspect-[3/4] w-full max-w-md mx-auto lg:mx-0"
              style={{
                background:
                  "linear-gradient(160deg, #2C2420 0%, #3d1f1a 50%, #6B2737 100%)",
              }}
            >
              <div className="absolute inset-6 border border-[#B8966E]/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12 text-center">
                <div className="text-[#B8966E] text-xs uppercase tracking-[0.3em] mb-2">
                  Since 2024
                </div>
                <div className="font-[family-name:var(--font-playfair)] italic text-[#D4B896] text-4xl leading-snug">
                  "La vie est trop courte pour une mauvaise cuisine."
                </div>
                <div className="h-px w-12 bg-[#B8966E]/60" />
                <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                  Life is too short for bad cooking
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-44 bg-[#6B2737] p-6 shadow-2xl">
              <p className="font-[family-name:var(--font-playfair)] italic text-[#D4B896] text-3xl leading-none mb-1">
                12+
              </p>
              <p className="text-white/60 text-xs uppercase tracking-[0.2em]">
                Seasonal dishes
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8966E]" />
              <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
                Our Story
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[#2C2420] leading-tight mb-8">
              A Labour of Love,<br />
              <span className="italic text-[#6B2737]">Born in Paris</span>
            </h2>

            <div className="space-y-5 text-[#7A6E68] leading-relaxed text-base">
              <p>
                Ma Chérie was born from a single conviction — that dining should
                feel like coming home. Inspired by the intimate bistros of
                Montmartre and the sun-drenched terraces of Provence, we set out
                to recreate that warmth in every dish we serve.
              </p>
              <p>
                Our chef, trained at Le Cordon Bleu Paris, brings classical
                French technique to a menu that breathes with the seasons.
                Ingredients are sourced from local farms and trusted suppliers,
                ensuring that each plate tells a story of its origin.
              </p>
              <p>
                Whether you join us for a leisurely weekend brunch, a quiet
                weekday lunch, or an unhurried dinner à deux — you are always
                our guest, never just a table number.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-[#E8DDD0]">
              {[
                { stat: "4.9", label: "Guest Rating" },
                { stat: "8 yr", label: "Chef Experience" },
                { stat: "100%", label: "Local Produce" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl text-[#6B2737] mb-1">
                    {stat}
                  </p>
                  <p className="text-xs text-[#7A6E68] uppercase tracking-[0.15em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
