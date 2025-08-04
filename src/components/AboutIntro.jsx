export default function AboutIntro() {
  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center space-y-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10">
        <p className="text-white text-lg leading-relaxed">
          Soy Héctor Cruz, estudiante de Ingeniería de Software y Sistemas
          Computacionales. Me especializo en el desarrollo Frontend, apasionado
          por la creación de interfaces limpias, eficientes y visualmente
          atractivas.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Actualmente busco oportunidades que me permitan crecer
          profesionalmente, aportar mis conocimientos y aprender de nuevos retos
          en el ámbito del desarrollo web.
        </p>
      </div>
    </div>
  );
}
