const footerLinks = {
  Explore: ["Menu", "Our Story", "Private Dining", "Wine List"],
  Visit: ["Reservations", "Opening Hours", "Find Us", "Gift Vouchers"],
  Connect: ["Instagram", "Facebook", "Press Enquiries", "Careers"],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a0f0d] text-white/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-[family-name:var(--font-playfair)] italic text-[#D4B896] text-2xl tracking-widest mb-4">
              Ma Chérie
            </p>
            <p className="text-sm leading-relaxed mb-6">
              An intimate French café &amp; restaurant in the heart of
              Marylebone, London.
            </p>
            <div className="h-px w-10 bg-[#B8966E]/40" />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-[#D4B896] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Ma Chérie. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4B896] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4B896] transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#D4B896] transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
