export default function TechnologySection() {
  return (
    <section className="bg-[#071120] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Tecnología que impulsa
          </span>

          <h2 className="mt-4 text-5xl font-bold leading-tight text-white">
            Información en tiempo real para decisiones inteligentes
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Plataforma tecnológica enfocada en seguimiento operativo, trazabilidad y eficiencia logística.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

          <div className="overflow-hidden rounded-2xl">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-80 w-full object-cover transition duration-700 hover:scale-105"
            >
              <source src="/videos/logistics.mp4" type="video/mp4" />
            </video>

          </div>

        </div>

      </div>
    </section>
  );
}