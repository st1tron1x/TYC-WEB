import Link from "next/link";

export default function CTASection() {

  return (

    <section className="relative overflow-hidden bg-[#091524] py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04] px-10 py-20 text-center backdrop-blur-2xl md:px-20">

          {/* SMALL LABEL */}
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Comercio exterior inteligente
          </span>

          {/* TITLE */}
          <h2 className="font-playfair mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Transformemos juntos la manera en que tu empresa conecta con el mundo
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Nuestro equipo está preparado para acompañar tus operaciones de comercio exterior con eficiencia, respaldo y visión estratégica.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="https://wa.me/573113979850?text=Hola%20TyC%20Asociados,%20quiero%20solicitar%20asesoría%20sobre%20comercio%20exterior."
              target="_blank"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Solicitar asesoría
            </Link>

            <Link
              href="/servicios"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.08]"
            >
              Explorar servicios
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}