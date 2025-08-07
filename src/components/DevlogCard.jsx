export default function DevlogCard({ title, url }) {
  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10 space-y-3">
        <h4 className="text-white font-semibold">{title}</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-blue-300 underline hover:text-blue-400 hover:translate-y-[-2px] transition"
        >
          Ver video en YouTube
        </a>
      </div>
    </div>
  );
}
