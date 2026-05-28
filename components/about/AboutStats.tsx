export default function AboutStats() {

  const stats = [
    {
      number: "+18",
      label: "Años de experiencia",
    },
    {
      number: "4",
      label: "Sedes estratégicas",
    },
    {
      number: "24/7",
      label: "Seguimiento operativo",
    },
    {
      number: "Nacional",
      label: "Cobertura logística",
    },
  ];

  return (

    <section className="relative overflow-hidden bg-[#091524] py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Nuestra trayectoria
          </span>

          <h2 className="font-playfair mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Experiencia y respaldo en cada operación
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Construimos relaciones empresariales basadas en confianza, eficiencia y acompañamiento estratégico.
          </p>

        </div>

        {/* STATS GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
            >

              <h3 className="text-6xl font-bold tracking-tight text-white transition duration-500 group-hover:text-blue-400">
                {stat.number}
              </h3>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-500/40 to-transparent" />

              <p className="mt-6 text-lg text-gray-300">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}