export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a0f0d 0%, #2C2420 40%, #3d1f1a 70%, #1a0f0d 100%)",
        }}
      />
      {/* Decorative texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4B896' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #6B2737 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#B8966E]/60" />
          <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
            Est. 2024
          </span>
          <div className="h-px w-16 bg-[#B8966E]/60" />
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-8xl text-white leading-none tracking-tight mb-6">
          Ma{" "}
          <span className="italic text-[#D4B896]">Chérie</span>
        </h1>

        <p className="font-[family-name:var(--font-playfair)] italic text-[#D4B896]/80 text-lg sm:text-xl md:text-2xl mb-6 tracking-wide">
          Where every moment becomes a memory
        </p>

        <p className="text-white/50 text-sm sm:text-base uppercase tracking-[0.25em] mb-12">
          French Café &amp; Restaurant
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reservations"
            className="w-full sm:w-auto px-10 py-4 bg-[#6B2737] text-white text-sm uppercase tracking-[0.2em] hover:bg-[#4A1A26] transition-colors duration-300"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white/80 text-sm uppercase tracking-[0.2em] hover:border-[#B8966E] hover:text-[#D4B896] transition-all duration-300"
          >
            Explore Menu
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
