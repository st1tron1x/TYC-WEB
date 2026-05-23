"use client";

const clients = [
  "DHL",
  "Maersk",
  "Samsung",
  "Adidas",
  "Nestlé",
  "FedEx",
  "Amazon",
  "Lenovo",
];

export default function ClientsMarquee() {
  return (
    <section className="overflow-hidden bg-[#071120] py-16">

      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Empresas que confían en nosotros
        </p>
      </div>

      <div className="relative">

        {/* GRADIENT LEFT */}
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#071120] to-transparent" />

        {/* GRADIENT RIGHT */}
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#071120] to-transparent" />

        {/* MARQUEE */}
        <div className="flex w-max animate-marquee gap-20">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-3xl font-semibold tracking-wide text-white/40 transition hover:text-white"
            >
              {client}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}