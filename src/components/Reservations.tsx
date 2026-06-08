"use client";

import { useState } from "react";

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservations" className="bg-[#FAF7F2] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — intro */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8966E]" />
              <span className="text-[#B8966E] text-xs uppercase tracking-[0.3em]">
                Reservations
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[#2C2420] leading-tight mb-8">
              Reserve Your<br />
              <span className="italic text-[#6B2737]">Table</span>
            </h2>

            <p className="text-[#7A6E68] leading-relaxed mb-10">
              We would be delighted to welcome you. For parties of 8 or more,
              or for special occasions, please contact us directly and we will
              arrange everything to your liking.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "◷",
                  title: "Lunch Service",
                  detail: "Tuesday – Sunday  ·  12:00 – 15:00",
                },
                {
                  icon: "◷",
                  title: "Dinner Service",
                  detail: "Tuesday – Saturday  ·  18:30 – 22:30",
                },
                {
                  icon: "✆",
                  title: "Telephone",
                  detail: "+44 (0)20 7946 0958",
                },
                {
                  icon: "✉",
                  title: "Email",
                  detail: "hello@macherie.co.uk",
                },
              ].map(({ icon, title, detail }) => (
                <div key={title} className="flex gap-4">
                  <span className="text-[#B8966E] text-lg leading-none mt-0.5">
                    {icon}
                  </span>
                  <div>
                    <p className="text-[#2C2420] text-sm font-semibold uppercase tracking-[0.1em] mb-0.5">
                      {title}
                    </p>
                    <p className="text-[#7A6E68] text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="border border-[#B8966E]/30 p-12 text-center">
                <div className="font-[family-name:var(--font-playfair)] italic text-[#6B2737] text-3xl mb-4">
                  Merci beaucoup
                </div>
                <p className="text-[#7A6E68] leading-relaxed">
                  Your request has been received. We will confirm your
                  reservation by email within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-[#E8DDD0] p-8 lg:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Sophie"
                      className="w-full bg-transparent border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] placeholder:text-[#C5B9B0] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full bg-transparent border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] placeholder:text-[#C5B9B0] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sophie@example.com"
                    className="w-full bg-transparent border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] placeholder:text-[#C5B9B0] transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-transparent border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                      Time
                    </label>
                    <select
                      required
                      className="w-full bg-[#FAF7F2] border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] transition-colors"
                    >
                      <option value="">Select time</option>
                      <optgroup label="Lunch">
                        {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"].map(
                          (t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          )
                        )}
                      </optgroup>
                      <optgroup label="Dinner">
                        {[
                          "18:30",
                          "19:00",
                          "19:30",
                          "20:00",
                          "20:30",
                          "21:00",
                          "21:30",
                        ].map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                    Number of Guests
                  </label>
                  <select
                    required
                    className="w-full bg-[#FAF7F2] border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] transition-colors"
                  >
                    <option value="">Select guests</option>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                    <option value="8+">8+ guests — please call us</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#7A6E68]">
                    Special Requests{" "}
                    <span className="normal-case tracking-normal text-[#C5B9B0]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, dietary requirements, occasion..."
                    className="w-full bg-transparent border border-[#E8DDD0] px-4 py-3 text-[#2C2420] text-sm focus:outline-none focus:border-[#B8966E] placeholder:text-[#C5B9B0] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6B2737] text-white text-sm uppercase tracking-[0.2em] py-4 hover:bg-[#4A1A26] transition-colors duration-300"
                >
                  Request Reservation
                </button>

                <p className="text-[#B5A99F] text-xs text-center">
                  Reservation requests are confirmed within 24 hours via email.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
