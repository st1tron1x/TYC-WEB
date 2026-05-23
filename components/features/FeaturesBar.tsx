import {
  ShieldCheck,
  Globe,
  Zap,
  Headphones,
} from "lucide-react";

export default function FeaturesBar() {
  return (
    <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-6">
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-[#0c1b2d]/90 p-8 backdrop-blur-xl md:grid-cols-4">

        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 text-blue-400" size={32} />

          <div>
            <h3 className="text-lg font-semibold text-white">
              Seguridad y cumplimiento
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Procesos alineados con normativa aduanera nacional.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Zap className="mt-1 text-blue-400" size={32} />

          <div>
            <h3 className="text-lg font-semibold text-white">
              Agilidad operacional
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Operaciones optimizadas para reducir tiempos.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Globe className="mt-1 text-blue-400" size={32} />

          <div>
            <h3 className="text-lg font-semibold text-white">
              Cobertura internacional
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Red estratégica de aliados logísticos globales.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Headphones className="mt-1 text-blue-400" size={32} />

          <div>
            <h3 className="text-lg font-semibold text-white">
              Acompañamiento experto
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              Equipo especializado en cada operación.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}