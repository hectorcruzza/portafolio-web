export default function HobbyIcon({ imgSrc, label }) {
  return (
    <div className="flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110">
      <div className="w-16 h-16 p-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center shadow-md">
        <img
          src={imgSrc}
          alt={label}
          className="w-10 h-10 object-contain pointer-events-none select-none"
        />
      </div>
      <span className="text-white text-sm">{label}</span>
    </div>
  );
}
