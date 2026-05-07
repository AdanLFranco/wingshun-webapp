// src/app/nosotros/page.tsx
export default function NosotrosPage() {
  return (
    <main className="bg-red-900 min-h-screen">
      {/* Header con imagen opcional de la familia o el equipo trabajando */}
      <section className="bg-red-950 py-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Nuestra <strong className="text-amber-300">Historia</strong>
        </h1>
        <p className="max-w-2xl mx-auto text-red-100 text-lg italic">
          El puente entre Estelí y el corazón de Cantón.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6 bg-amber-200 text-gray-800 leading-relaxed">
        <div className="space-y-6 text-lg">
          <p>
            En <span className="font-bold text-red-700">Wing Shun</span>, no
            solo servimos comida; compartimos una herencia. Somos una familia
            nicaragüense apasionada que decidió emprender un viaje culinario
            para traer a Estelí la esencia vibrante de la cocina tradicional
            cantonesa.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="border-l-4 border-red-700 pl-4 bg-amber-50">
              <h3 className="font-bold text-xl mb-2">Respeto Milenario</h3>
              <p className="text-gray-600 text-sm">
                Estudiamos cada receta respetando las técnicas ancestrales para
                asegurar un sabor auténtico.
              </p>
            </div>
            <div className="border-l-4 border-red-700 pl-4 bg-amber-50">
              <h3 className="font-bold text-xl mb-2">Frescura Total</h3>
              <p className="text-gray-600 text-sm">
                Cada plato es preparado al momento. El fuego del wok garantiza
                que todo llegue crujiente a su mesa.
              </p>
            </div>
          </div>

          <p>
            Nuestra cocina es el punto de encuentro donde la calidez esteliana
            se une con la disciplina del arte culinario oriental. Lo invitamos a
            ser parte de nuestra mesa y a descubrir por qué en Wing Shun,
            cocinar es nuestra forma de decir:
            <span className="font-bold"> ¡Bienvenidos a la familia!</span>
          </p>
        </div>
      </section>
    </main>
  );
}
