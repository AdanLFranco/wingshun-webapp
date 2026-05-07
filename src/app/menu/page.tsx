import { MENU_COMPLETO } from "@/src/data/menu";
import Plato from "@/src/components/Plato";

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      {/* 1. FONDO FIJO CON Z-INDEX NEGATIVO */}
      {/* Esto permite que el Footer, que está en el layout, pase por encima al final */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/back01.webp')" }}
      />

      {/* 2. OVERLAY OSCURO CON DESENFOQUE */}
      <div className="fixed inset-0 -z-10  bg-black/40 backdrop-blur-[2px]" />

      {/* 3. CONTENIDO DEL MENÚ */}
      <div className="relative p-4 md:p-10 max-w-6xl mx-auto pb-24">
        {/* Encabezado Estilizado */}
        <header className="py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Nuestro</span>{" "}
            <strong className="text-amber-300">Menú</strong>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg italic opacity-90">
            Descubre la esencia de Cantón en cada plato.
          </p>
        </header>

        {/* Grid de Platos: 1 col móvil, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {MENU_COMPLETO.map((item) => (
            <div key={item.id} className="h-full">
              <Plato {...item} />
            </div>
          ))}
        </div>

        {/* Nota al pie del menú */}
        <footer className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-gray-400 text-sm italic max-w-2xl mx-auto leading-relaxed">
            * Los precios mostrados incluyen impuestos. Si tiene alguna alergia
            alimentaria, por favor infórmelo a nuestro personal al realizar su
            pedido.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse delay-75" />
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse delay-150" />
          </div>
        </footer>
      </div>
    </main>
  );
}
