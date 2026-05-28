import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-no-repeat bg-right bg-[length:115%]"
                /*style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')",
                }}*/
                style={{
                    backgroundImage: "url('/Hero_fullscreen.png')",
                }}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/70" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071120] via-[#071120]/70 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-32">

                {/* SMALL LABEL */}
                <span className="mb-6 w-fit rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-md">
                    Comercio Exterior • Agencia de Aduanas Nivel 2
                </span>

                {/* TITLE */}
                <h1 className="font-playfair max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
                    Conectamos tu negocio con el{" "}
                    <span className="text-blue-400">
                        mundo
                    </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                    Gestión aduanera, importaciones, exportaciones y acompañamiento estratégico para operaciones nacionales e internacionales.
                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                    <Link
                        href="https://wa.me/573113979850?text=Hola%20TyC%20Asociados,%20quiero%20solicitar%20asesoría%20sobre%20comercio%20exterior."
                        target="_blank"
                        className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
                    >
                        Solicitar asesoría
                    </Link>

                    <button className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                        Conocer servicios
                    </button>
                </div>

                {/* STATS */}
                <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h2 className="text-4xl font-bold text-white">
                            +15
                        </h2>

                        <p className="mt-2 text-gray-300">
                            Años de experiencia
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h2 className="text-4xl font-bold text-white">
                            24/7
                        </h2>

                        <p className="mt-2 text-gray-300">
                            Seguimiento operativo
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <h2 className="text-4xl font-bold text-white">
                            Nacional
                        </h2>

                        <p className="mt-2 text-gray-300">
                            Cobertura estratégica
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}