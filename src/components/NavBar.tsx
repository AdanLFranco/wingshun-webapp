// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-red-800 shadow-md border-b border-brand-yellow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-black text-amber-300 tracking-tighter"
        >
          WING SHUN
        </Link>

        {/* LINKS: En móvil se ven como una fila con scroll si no caben */}
        <div className="flex gap-4 md:gap-8 text-sm md:text-base font-bold text-amber-300 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto justify-center">
          <Link href="/" className="hover:text-brand-red whitespace-nowrap">
            INICIO
          </Link>
          <Link href="/menu" className="hover:text-brand-red whitespace-nowrap">
            MENÚ
          </Link>
          <Link
            href="/nosotros"
            className="hover:text-brand-red whitespace-nowrap"
          >
            NOSOTROS
          </Link>
          <Link
            href="/contacto"
            className="hover:text-brand-red whitespace-nowrap"
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
}
