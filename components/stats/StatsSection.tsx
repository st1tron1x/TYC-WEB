import {
  Package,
  Ship,
  Users,
  MapPinned,
} from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-[#071120]">
            Resultados que nos respaldan
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-4">

          <div className="text-center">
            <Package className="mx-auto text-blue-600" size={40} />

            <h3 className="mt-4 text-5xl font-bold text-[#071120]">
              +12K
            </h3>

            <p className="mt-2 text-gray-600">
              Operaciones gestionadas
            </p>
          </div>

          <div className="text-center">
            <Ship className="mx-auto text-blue-600" size={40} />

            <h3 className="mt-4 text-5xl font-bold text-[#071120]">
              +8.5K
            </h3>

            <p className="mt-2 text-gray-600">
              Contenedores al año
            </p>
          </div>

          <div className="text-center">
            <Users className="mx-auto text-blue-600" size={40} />

            <h3 className="mt-4 text-5xl font-bold text-[#071120]">
              +350
            </h3>

            <p className="mt-2 text-gray-600">
              Clientes satisfechos
            </p>
          </div>

          <div className="text-center">
            <MapPinned className="mx-auto text-blue-600" size={40} />

            <h3 className="mt-4 text-5xl font-bold text-[#071120]">
              15
            </h3>

            <p className="mt-2 text-gray-600">
              Países operando
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}