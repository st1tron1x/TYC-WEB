import Image from "next/image";

export default function AboutCompany() {
  return (

    <section className="bg-[#071120] py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            ¿Quiénes somos?
          </span>

          <h2 className="font-playfair mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Más de 18 años impulsando operaciones de comercio exterior en Colombia
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            Agencia de Aduanas TyC Asociados S.A. Nivel 2 es una compañía especializada en soluciones integrales de comercio exterior, importaciones, exportaciones e intermediación aduanera.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Contamos con un equipo altamente calificado que brinda acompañamiento estratégico, eficiencia operativa y respaldo en cada proceso ante las diferentes entidades vinculadas al comercio exterior colombiano.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

          <Image
            src="/about-company.jpg"
            alt="TYC Comercio Exterior"
            width={900}
            height={900}
            className="h-[600px] w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/80 via-transparent to-transparent" />

        </div>

      </div>

    </section>
  );
}