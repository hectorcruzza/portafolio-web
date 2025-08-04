import HobbyIcon from "./HobbyIcon";

export default function Hobbies() {
  const hobbies = [
    { imgSrc: "/images/musica.png", label: "Escuchar música" },
    { imgSrc: "/images/patinaje.png", label: "Patinar" },
    { imgSrc: "/images/amigos.png", label: "Salir con amigos" },
    { imgSrc: "/images/videos.png", label: "Ver videos" },
    { imgSrc: "/images/juegos.png", label: "Jugar videojuegos" },
  ];

  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10 space-y-6">
        <h3 className="text-2xl font-semibold text-white text-center">
          Hobbies
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {hobbies.map((hobby, index) => (
            <HobbyIcon key={index} imgSrc={hobby.imgSrc} label={hobby.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
