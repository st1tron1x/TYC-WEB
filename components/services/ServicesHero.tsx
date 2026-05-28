import Link from "next/link";

export default function ServicesHero() {

  return (

    <section className="relative flex min-h-[85vh] items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/services-hero.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">

        <div className="max-w-4xl">

          {/* LABEL */}
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur-md">
            Soluciones integrales de comercio exterior
          </span>

          {/* TITLE */}
          <h1 className="font-playfair mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">

            Operaciones aduaneras y logísticas con alcance internacional

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">

            Acompañamos a empresas en cada etapa de sus procesos de importación, exportación y gestión aduanera mediante soluciones estratégicas, ágiles y seguras.

          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <Link
              href="https://wa.me/573113979850?text=Hola%20TyC%20Asociados,%20quiero%20asesoría%20sobre%20sus%20servicios."
              target="_blank"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Solicitar asesoría
            </Link>

            <Link
              href="/nosotros"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.08]"
            >
              Conocer la empresa
            </Link>

          </div>

          {/* FLOATING INFO */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl text-center">

              <h3 className="text-4xl font-bold text-white">
                +18
              </h3>

              <p className="mt-2 text-gray-300">
                Años de experiencia
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl text-center">

              <h3 className="text-4xl font-bold text-white">
                24/7
              </h3>

              <p className="mt-2 text-gray-300">
                Seguimiento operativo
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl text-center">

              <h3 className="text-4xl font-bold text-white">
                Nacional
              </h3>

              <p className="mt-2 text-gray-300">
                Cobertura estratégica
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}