import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function AboutLocations() {

  const locations = [
    {
      city: "Cali",
      address: "Av. 4 Norte #37AN – 37, Barrio La Flora",
      phone: "+57 (2) 664-0106",
      email: "auditoria@tyc-asociados.com",
    },
    {
      city: "Buenaventura",
      address: "Calle 6A #3A – 77, Piso 1",
      phone: "+57 (2) 240-0781",
      email: "administracionbun@tyc-asociados.com",
    },
    {
      city: "Bogotá",
      address: "Carrera 102A #25H – 45",
      phone: "+57 (1) 805-0490",
      email: "bogota@tyc-asociados.com",
    },
    {
      city: "Cartagena",
      address: "Calle 27A #24 – 54",
      phone: "+57 (5) 679-0508",
      email: "cartagena@tyc-asociados.com",
    },
  ];

  return (

    <section className="bg-[#071120] py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Cobertura nacional
          </span>

          <h2 className="font-playfair mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Presencia estratégica en las principales ciudades del país
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Operamos desde puntos estratégicos para brindar acompañamiento logístico y aduanero a nivel nacional.
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* MAP */}
          <div className="relative flex justify-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

            <Image
              src="/colombia-map.png"
              alt="Mapa Colombia"
              width={900}
              height={1200}
              className="relative z-10 h-[700px] w-auto object-contain opacity-90 drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            />

          </div>

          {/* LOCATIONS */}
          <div className="grid gap-6">

            {locations.map((location, index) => (

              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >

                <div className="flex items-center gap-3">

                  <MapPin className="text-blue-400" size={22} />

                  <h3 className="text-2xl font-semibold text-white">
                    {location.city}
                  </h3>

                </div>

                <p className="mt-5 text-gray-300">
                  {location.address}
                </p>

                <div className="mt-6 flex items-center gap-3 text-gray-400">

                  <Phone size={18} />

                  <span>{location.phone}</span>

                </div>

                <div className="mt-3 flex items-center gap-3 text-gray-400">

                  <Mail size={18} />

                  <span>{location.email}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}