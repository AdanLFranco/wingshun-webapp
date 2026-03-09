import { RESTAURANTE_INFO } from "@/src/constants/config";

export default function ContactoPage() {
  return (
    <main className="py-16 bg-red-800 min-h-screen px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-black text-amber-300 text-center mb-10">
          CONTÁCTANOS
        </h1>

        {/* CARD PRINCIPAL */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <p className="text-center text-gray-600 mb-8 font-medium">
            ¿Quieres reservar o pedir para llevar? El canal más rápido es
            nuestro WhatsApp.
          </p>

          <a
            href={`https://wa.me/${RESTAURANTE_INFO.whatsapp}`}
            target="_blank"
            className="bg-green-600 text-white w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all mb-10"
          >
            ORDENAR O RESERVAR
          </a>

          {/* REDES SOCIALES EN CONTACTO */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={RESTAURANTE_INFO.redes.facebook}
              target="_blank"
              className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors"
            >
              Facebook
            </a>
            <a
              href={RESTAURANTE_INFO.redes.instagram}
              target="_blank"
              className="flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-pink-50 hover:border-pink-200 transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* DATOS EXTRAS */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-center space-y-4">
            <div>
              <p className="text-[14px] font-black text-red-700 uppercase tracking-[0.2em]">
                Visítanos
              </p>
              <p className="text-gray-800 font-medium">
                {RESTAURANTE_INFO.direccion}
              </p>
            </div>
            <div>
              <p className="text-[14px] font-black text-red-700 uppercase tracking-[0.2em]">
                Nuestro Horario
              </p>

              <p className="text-gray-800 font-medium">
                Lunes a Viernes: 12:00 PM - 10:30 PM
              </p>
              <p className="text-gray-800 font-medium">
                Sábado y Domingo: 12:00 PM - 11:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
