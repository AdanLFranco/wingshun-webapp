import Link from "next/link";
import { PROMOCIONES } from "@/src/data/promociones"; // Ajusté la ruta si es necesario
import Logo from "@/src/components/Logo";
import { RESTAURANTE_INFO } from "@/src/constants/config";

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Imagen de fondo desde public */}
        <div
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url('/heroPicture copy.jpeg')" }}
        />

        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          {/* USAMOS EL LOGO CON LAS INICIALES AMARILLAS */}
          <Logo isHero={true} />

          <p className="text-xl md:text-2xl mb-10 font-light max-w-lg opacity-90 italic">
            Sabor auténtico cantonés en cada bocado.
          </p>

          <Link
            href="/menu"
            className="bg-brand-red px-12 py-4 rounded-full font-extrabold text-lg hover:bg-red-800 transition-all hover:scale-105 inline-block shadow-xl"
          >
            VER MENÚ
          </Link>
        </div>
      </section>

      {/* PROMOS SCROLL */}
      <section className="py-20 bg-red-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-10 text-brand-dark flex items-center gap-4">
            NUESTRAS PROMOS
            <span className="h-1 w-20 bg-brand-yellow rounded-full"></span>
          </h2>
        </div>
        <div className="flex overflow-x-auto pb-12 px-6 gap-6 no-scrollbar snap-x">
          {PROMOCIONES.map((promo) => (
            <div
              key={promo.id}
              className="group relative flex-none w-80 h-64 rounded-[2.5rem] overflow-hidden snap-center shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-yellow"
            >
              {/* 1. LA FOTO CON ZOOM */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${promo.foto}')` }}
              />

              {/* 2. OVERLAY GRADIENTE (Para que el texto se lea perfecto) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* 3. CONTENIDO (Z-10 para estar sobre la foto) */}
              <div className="relative z-10 h-full p-8 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-tight mt-3 drop-shadow-md">
                    {promo.titulo}
                  </h3>
                  <p className="text-sm opacity-90 mt-2 font-medium leading-tight line-clamp-2">
                    {promo.desc}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <a
                    href={`https://wa.me/${RESTAURANTE_INFO.whatsapp}?text=Hola Wing Shun! Me interesa la promo: ${promo.titulo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-600  text-white py-3 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg "
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    CONSULTAR
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
