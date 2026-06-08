const testimonials = [
  {
    quote:
      "The Boeuf Bourguignon was the finest I've had outside of Lyon. The atmosphere is utterly charming — we felt transported to Paris.",
    author: "Charlotte B.",
    detail: "Regular Guest",
  },
  {
    quote:
      "A hidden gem. The staff remember your name, the wine list is exceptional, and the crème brûlée is worth the trip alone.",
    author: "James T.",
    detail: "Food Critic, The Evening Standard",
  },
  {
    quote:
      "We celebrated our anniversary here and it was perfect in every way. The private dining experience was beyond our expectations.",
    author: "Isabelle & Marc D.",
    detail: "Anniversary Dinner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F0EAD6] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-[#B8966E]/50" />
            <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
              Testimonials
            </span>
            <div className="h-px w-16 bg-[#B8966E]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[#2C2420]">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ quote, author, detail }) => (
            <div
              key={author}
              className="bg-white p-8 border border-[#E8DDD0] flex flex-col gap-6"
            >
              <div className="font-[family-name:var(--font-playfair)] text-[#B8966E] text-4xl leading-none select-none">
                &ldquo;
              </div>
              <p className="font-[family-name:var(--font-playfair)] italic text-[#2C2420] text-base leading-relaxed flex-1">
                {quote}
              </p>
              <div className="pt-4 border-t border-[#E8DDD0]">
                <p className="text-[#2C2420] text-sm font-semibold">{author}</p>
                <p className="text-[#7A6E68] text-xs uppercase tracking-[0.1em] mt-0.5">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
