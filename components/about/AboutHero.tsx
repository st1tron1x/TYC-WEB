export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        

        <h1 className="font-playfair mt-6 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Más de una década conectando empresas con el comercio global
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
          Agencia de Aduanas Nivel 2 especializada en soluciones integrales de comercio exterior.
        </p>

      </div>

    </section>
  );
}