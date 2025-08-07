import DevlogCard from "./DevlogCard";

export default function DevlogSection({ title, videos }) {
  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, idx) => (
            <DevlogCard key={idx} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
