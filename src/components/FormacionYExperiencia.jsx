export default function FormacionYExperiencia() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
      <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none w-full md:w-1/2">
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-start space-y-4">
          <h3 className="text-2xl font-semibold text-white text-center">
            Formación Académica
          </h3>
          <ul className="text-gray-300 space-y-3 text-sm md:text-base">
            <li>
              <span className="font-bold text-white">
                Ingeniería de Software y Sistemas Computacionales:
              </span>{" "}
              Universidad Interamericana para el Desarrollo (UNID), 2023 -
              Actualidad.
            </li>
          </ul>
        </div>
      </div>

      <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none w-full md:w-1/2">
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-start space-y-4">
          <h3 className="text-2xl font-semibold text-white text-center">
            Experiencia Profesional
          </h3>
          <ul className="text-gray-300 space-y-3 text-sm md:text-base">
            <li>
              <span className="font-bold text-white">
                Asesorías EXANI II - Pensamiento Matemático:
              </span>{" "}
              Sesiones personalizadas enfocadas en resolución de problemas y
              estrategias matemáticas aplicadas, (2025).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
