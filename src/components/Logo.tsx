interface LogoProps {
  isHero?: boolean; // Para hacerlo más grande si está en el Hero
}

export default function Logo({ isHero = false }: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center select-none ${
        isHero ? "scale-110 md:scale-150 mb-6" : ""
      }`}
    >
      <div className="flex items-baseline font-black tracking-tighter">
        {/* SECCIÓN WING */}
        <div className="flex items-baseline">
          <span className="text-brand-brightYellow font-bold text-3xl md:text-4xl drop-shadow-md">
            W
          </span>
          <span
            className={`${
              isHero ? "text-white" : "text-brand-dark"
            } font-bold text-xl md:text-3xl ml-1 mr-2 tracking-widest`}
          >
            ING
          </span>
        </div>

        {/* SECCIÓN SHUN */}
        <div className="flex items-baseline">
          <span className="text-brand-brightYellow font-bold text-3xl md:text-4xl drop-shadow-md">
            S
          </span>
          <span
            className={`${
              isHero ? "text-white" : "text-brand-dark"
            } text-xl md:text-2xl ml-1 tracking-widest`}
          >
            HUN
          </span>
        </div>
      </div>

      {/* Subtítulo opcional solo para el Hero */}
      {isHero && (
        <span className="text-brand-yellow font-medium tracking-[0.5em] text-xs md:text-sm mt-2 uppercase opacity-90">
          Tradición Cantonesa
        </span>
      )}
    </div>
  );
}
