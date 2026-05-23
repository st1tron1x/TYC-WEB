import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#050b14] text-white">

            <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-4">

                {/* BRAND */}
                <div>
                    <Link href="/" className="inline-flex items-center">
                        <Image
                            src="/logoT.C.png"
                            alt="T&C Asociados"
                            width={180}
                            height={60}
                            className="h-auto w-auto"
                        />
                    </Link>

                    <p className="mt-6 leading-relaxed text-gray-400">
                        Agencia de aduanas enfocada en comercio exterior,
                        importaciones, exportaciones y soluciones estratégicas
                        para operaciones internacionales.
                    </p>

                    {/* SOCIALS */}
                    <div className="mt-6 flex gap-4">

                        <a
                            href="#"
                            className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600"
                        >
                            <FaFacebookF size={18} />
                        </a>

                        <a
                            href="#"
                            className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <a
                            href="#"
                            className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-600"
                        >
                            <FaLinkedinIn size={18} />
                        </a>

                    </div>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="text-xl font-semibold">
                        Navegación
                    </h3>

                    <ul className="mt-6 space-y-4 text-gray-400">

                        <li>
                            <a href="#" className="transition hover:text-blue-400">
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-blue-400">
                                Nosotros
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-blue-400">
                                Servicios
                            </a>
                        </li>

                        <li>
                            <a href="#" className="transition hover:text-blue-400">
                                Contacto
                            </a>
                        </li>

                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-xl font-semibold">
                        Servicios
                    </h3>

                    <ul className="mt-6 space-y-4 text-gray-400">

                        <li>Importaciones</li>

                        <li>Exportaciones</li>

                        <li>Asesoría Aduanera</li>

                        <li>Logística Internacional</li>

                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-xl font-semibold">
                        Contacto
                    </h3>

                    <div className="mt-6 space-y-5 text-gray-400">

                        <div className="flex items-start gap-3">
                            <MapPin size={20} className="mt-1 text-blue-400" />

                            <p>
                                Cali, Colombia
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Phone size={20} className="mt-1 text-blue-400" />

                            <p>
                                +57 300 000 0000
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Mail size={20} className="mt-1 text-blue-400" />

                            <p>
                                contacto@tyc-asociados.com
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

                    <p>
                        © 2026 T&C Asociados. Todos los derechos reservados.
                    </p>

                    <p>
                        Diseño y desarrollo web profesional.
                    </p>

                </div>
            </div>
        </footer>
    );
}