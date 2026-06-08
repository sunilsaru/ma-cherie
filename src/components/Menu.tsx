const menuCategories = [
  {
    category: "Les Entrées",
    subtitle: "Starters",
    items: [
      {
        name: "Soupe à l'Oignon",
        description: "Classic French onion soup, Gruyère croûton, slow-braised onions",
        price: "£12",
        tag: "Signature",
      },
      {
        name: "Terrine de Foie Gras",
        description: "Duck foie gras terrine, brioche toast, fig compote, fleur de sel",
        price: "£18",
        tag: null,
      },
      {
        name: "Salade Niçoise",
        description: "Seared tuna, green beans, quail egg, olives, anchovy vinaigrette",
        price: "£14",
        tag: "Seasonal",
      },
    ],
  },
  {
    category: "Les Plats",
    subtitle: "Mains",
    items: [
      {
        name: "Boeuf Bourguignon",
        description: "Slow-braised beef cheek, lardons, pearl onions, pomme purée",
        price: "£28",
        tag: "Chef's Choice",
      },
      {
        name: "Sole Meunière",
        description: "Pan-fried Dover sole, brown butter, capers, lemon, fine herbs",
        price: "£34",
        tag: null,
      },
      {
        name: "Poulet Rôti",
        description: "Free-range roast chicken, tarragon jus, gratin dauphinois",
        price: "£24",
        tag: null,
      },
    ],
  },
  {
    category: "Les Desserts",
    subtitle: "Desserts",
    items: [
      {
        name: "Crème Brûlée",
        description: "Madagascan vanilla custard, caramelised sugar, fresh berries",
        price: "£9",
        tag: "Signature",
      },
      {
        name: "Tarte Tatin",
        description: "Caramelised apple tarte tatin, crème fraîche, calvados caramel",
        price: "£10",
        tag: null,
      },
      {
        name: "Mousse au Chocolat",
        description: "Valrhona dark chocolate mousse, praline feuilletine, gold leaf",
        price: "£11",
        tag: "Seasonal",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      style={{ background: "linear-gradient(180deg, #2C2420 0%, #1a0f0d 100%)" }}
      className="py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-[#B8966E]/50" />
            <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
              À La Carte
            </span>
            <div className="h-px w-16 bg-[#B8966E]/50" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-white mb-4">
            Our Menu
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            Seasonal menus crafted with the finest local produce, guided by the
            traditions of classical French cuisine.
          </p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {menuCategories.map((cat) => (
            <div
              key={cat.category}
              className="border border-white/10 p-8 hover:border-[#B8966E]/40 transition-colors duration-500"
            >
              <div className="mb-8">
                <p className="text-[#B8966E] text-xs uppercase tracking-[0.3em] mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] italic text-white text-2xl">
                  {cat.category}
                </h3>
                <div className="mt-4 h-px bg-[#B8966E]/20" />
              </div>

              <ul className="space-y-7">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-[family-name:var(--font-playfair)] text-white/90 text-base">
                          {item.name}
                        </span>
                        {item.tag && (
                          <span className="text-[10px] uppercase tracking-[0.15em] text-[#B8966E] border border-[#B8966E]/50 px-2 py-0.5">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <span className="font-[family-name:var(--font-playfair)] italic text-[#D4B896] text-base shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#reservations"
            className="inline-flex items-center gap-3 text-[#D4B896] text-sm uppercase tracking-[0.2em] border-b border-[#B8966E]/40 pb-1 hover:border-[#B8966E] transition-colors"
          >
            Reserve your table to experience the full menu
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
