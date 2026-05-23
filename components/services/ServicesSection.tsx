import Image from "next/image";
import {
  Ship,
  Plane,
  FileCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Importaciones",
    description:
      "Gestión integral para procesos de importación eficientes y seguros.",
    image: "/services/import.jpg",
    icon: Ship,
  },

  {
    title: "Exportaciones",
    description:
      "Acompañamiento estratégico para operaciones internacionales.",
    image: "/services/exportairplane.jpg",
    icon: Plane,
  },

  {
    title: "Asesoría aduanera",
    description:
      "Cumplimiento normativo y optimización documental.",
    image: "/services/customs.jpg",
    icon: FileCheck,
  },

  {
    title: "Logística y transporte",
    description:
      "Coordinación nacional e internacional de carga.",
    image: "/services/camion.jpg",
    icon: Truck,
  },
];

export default function Services() {
  return (
    <section className="bg-[#f4f7fb] py-28">

      <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-[1fr_2fr]">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Lo que hacemos
          </p>

          <h2 className="font-playfair text-5xl font-semibold leading-tight text-[#071120]">
            Servicios diseñados para facilitar tu{" "}
            <span className="text-blue-600">
              comercio exterior
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Ofrecemos soluciones integrales para importaciones,
            exportaciones, gestión aduanera y logística estratégica.
          </p>

          <button className="mt-10 rounded-2xl border border-blue-200 bg-white px-8 py-4 font-semibold text-[#071120] transition hover:border-blue-500 hover:bg-blue-50">
            Conocer todos los servicios
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-8 md:grid-cols-2">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* ICON */}
                  <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl">

                    <Icon size={28} />

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-2xl font-semibold text-[#071120]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4">
                    Ver más
                    <ArrowRight size={18} />
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}