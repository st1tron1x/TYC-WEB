export default function MissionVision() {

  return (

    <section className="relative overflow-hidden bg-[#091524] py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Filosofía corporativa
          </span>

          <h2 className="font-playfair mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Comprometidos con el crecimiento y la eficiencia empresarial
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Nuestra visión estratégica y compromiso operativo impulsan relaciones comerciales sólidas y sostenibles.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* MISION */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30">

            {/* GLOW */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

            <span className="relative z-10 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Misión
            </span>

            <h3 className="relative z-10 mt-6 font-playfair text-4xl font-semibold text-white">
              Impulsar el comercio exterior colombiano
            </h3>

            <p className="relative z-10 mt-8 text-lg leading-relaxed text-gray-300">
              Fomentar la actividad comercial y empresarial en Colombia mediante servicios integrales de comercio exterior, acompañando estratégicamente a las empresas en sus operaciones de importación y exportación de bienes y servicios.
            </p>

            <p className="relative z-10 mt-6 text-lg leading-relaxed text-gray-400">
              Brindamos asesoría clara, eficiente y especializada ante las diferentes entidades vinculadas al comercio exterior colombiano, fortaleciendo nuestros servicios mediante alianzas estratégicas.
            </p>

          </div>

          {/* VISION */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">

            {/* GLOW */}
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

            <span className="relative z-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Visión
            </span>

            <h3 className="relative z-10 mt-6 font-playfair text-4xl font-semibold text-white">
              Liderazgo nacional e internacional
            </h3>

            <p className="relative z-10 mt-8 text-lg leading-relaxed text-gray-300">
              Consolidarnos como una organización reconocida a nivel nacional e internacional por la excelencia en soporte logístico, intermediación aduanera y asesorías estratégicas en comercio exterior.
            </p>

            <p className="relative z-10 mt-6 text-lg leading-relaxed text-gray-400">
              Buscamos impulsar operaciones eficientes, transparentes y tecnológicamente respaldadas, generando valor sostenible para nuestros clientes y aliados.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}