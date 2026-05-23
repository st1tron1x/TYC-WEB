"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-md">

        {/* LOGO */}
        <a href="#" className="flex items-center">
          <Image
            src="/logoT.C.png"
            alt="T&C Asociados"
            width={125}
            height={70}
            priority
            className="h-auto w-auto"
          />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-10 md:flex">
          <a href="#" className="text-sm font-medium text-white transition hover:text-blue-400">
            Inicio
          </a>

          <a href="#" className="text-sm font-medium text-white transition hover:text-blue-400">
            Nosotros
          </a>

          <a href="#" className="text-sm font-medium text-white transition hover:text-blue-400">
            Servicios
          </a>

          <a href="#" className="text-sm font-medium text-white transition hover:text-blue-400">
            Tecnología
          </a>

          <a href="#" className="text-sm font-medium text-white transition hover:text-blue-400">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            Cotizar ahora
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="bg-[#071120]/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6 px-6 py-8">
            <a href="#" className="text-lg text-white">
              Inicio
            </a>

            <a href="#" className="text-lg text-white">
              Nosotros
            </a>

            <a href="#" className="text-lg text-white">
              Servicios
            </a>

            <a href="#" className="text-lg text-white">
              Tecnología
            </a>

            <a href="#" className="text-lg text-white">
              Contacto
            </a>

            <button className="mt-4 rounded-xl bg-blue-600 px-6 py-4 text-white">
              Cotizar ahora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}