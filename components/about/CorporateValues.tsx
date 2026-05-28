import {
  Zap,
  ShieldCheck,
  Gauge,
  MessagesSquare,
  Target,
  Handshake,
} from "lucide-react";

export default function CorporateValues() {

  const values = [
    {
      icon: Zap,
      title: "Eficiencia",
      description:
        "Optimizamos cada operación para ofrecer resultados ágiles, precisos y alineados con las necesidades de nuestros clientes.",
    },
    {
      icon: ShieldCheck,
      title: "Calidad",
      description:
        "Trabajamos bajo altos estándares operativos y estratégicos para garantizar excelencia en cada proceso.",
    },
    {
      icon: Gauge,
      title: "Agilidad",
      description:
        "Respondemos rápidamente a los cambios del mercado y a las necesidades operativas del comercio internacional.",
    },
    {
      icon: MessagesSquare,
      title: "Comunicación",
      description:
        "Mantenemos relaciones claras, cercanas y efectivas con nuestros clientes y aliados estratégicos.",
    },
    {
      icon: Target,
      title: "Efectividad",
      description:
        "Alineamos objetivos y resultados mediante soluciones enfocadas en productividad y crecimiento empresarial.",
    },
    {
      icon: Handshake,
      title: "Respeto",
      description:
        "Valoramos las relaciones humanas y comerciales construidas desde la confianza y el compromiso mutuo.",
    },
  ];

  return (

    <section className="relative overflow-hidden bg-[#071120] py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Valores corporativos
          </span>

          <h2 className="font-playfair mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Principios que impulsan nuestra operación
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Nuestra cultura organizacional está enfocada en eficiencia, confianza y excelencia operativa.
          </p>

        </div>

        {/* VALUES GRID */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >

                {/* GLOW */}
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

                {/* ICON */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">

                  <Icon size={30} className="text-blue-400" />

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white">
                  {value.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-5 text-lg leading-relaxed text-gray-400">
                  {value.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}