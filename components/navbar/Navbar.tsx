"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-[#071120]/90 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
        }`}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoT.C.png"
            alt="T&C Asociados"
            width={125}
            height={70}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Inicio
          </Link>

          <Link
            href="/nosotros"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Nosotros
          </Link>

          <Link
            href="/servicios"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Servicios
          </Link>

          <Link
            href="/tecnologia"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Tecnología
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-medium text-white transition hover:text-blue-400"
          >
            Contacto
          </Link>

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

            <Link
              href="/"
              className="text-sm font-medium text-white transition hover:text-blue-400"
            >
              Inicio
            </Link>

            <Link href="/nosotros" className="text-lg text-white">
              Nosotros
            </Link>

            <Link href="#" className="text-lg text-white">
              Servicios
            </Link>

            <Link href="#" className="text-lg text-white">
              Tecnología
            </Link>

            <Link href="#" className="text-lg text-white">
              Contacto
            </Link>

            <button className="mt-4 rounded-xl bg-blue-600 px-6 py-4 text-white">
              Cotizar ahora
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}