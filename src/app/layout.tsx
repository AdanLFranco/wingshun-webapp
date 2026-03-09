import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/NavBar";
import { RESTAURANTE_INFO } from "@/src/constants/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wing Shun | Sabor Oriental",
  description: "La mejor comida china, ordena directo por WhatsApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />

        <div className="min-h-screen">{children}</div>

        {/* FOOTER PROFESIONAL CON ICONOS */}
        <footer className="relative z-20 bg-red-950 text-yellow-200 py-16 border-t border-amber-900/50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-black mb-2 uppercase tracking-[0.2em] text-brand-brightYellow">
              Wing Shun
            </h3>
            <p className="text-amber-200/60 mb-10 italic text-sm font-light">
              Auténtica tradición cantonesa en Estelí.
            </p>

            {/* CONTENEDOR DE ICONOS REDONDEADOS */}
            <div className="flex justify-center items-center gap-6 mb-12">
              {/* FACEBOOK */}
              <a
                href={RESTAURANTE_INFO.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 p-4 rounded-full hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.792 5 15.536 5H18V0h-3.977C10.038 0 9 2.105 9 4.792V8z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href={RESTAURANTE_INFO.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 p-4 rounded-full hover:bg-linear-to-tr hover:from-yellow-400 hover:to-purple-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${RESTAURANTE_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 p-4 rounded-full hover:bg-green-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <div className="border-t border-amber-400/20 pt-8 text-amber-200/40 text-[10px] uppercase tracking-widest font-bold">
              &copy; {new Date().getFullYear()} Wing Shun Estelí - Todos los
              derechos reservados
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
