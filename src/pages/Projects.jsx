import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Recursos Humanos App",
      description: "Aplicación de gestión de personal.",
      technologies: ["React + Vite", "TailwindCSS", "Firebase"],
      demoLink: "https://myhrappv1.netlify.app/",
      repoLink: "https://github.com/hectorcruzza/my-hr-app.git",
    },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-8rem)] px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-6">Proyectos</h2>

      <div className="w-full max-w-5xl space-y-12">
        <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none">
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

          <div className="relative z-10 space-y-6">
            <div className="flex justify-end">
              <a
                href="https://github.com/hectorcruzza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline text-sm transition-all duration-300 hover:text-blue-400 hover:translate-y-[-2px]"
              >
                Ver GitHub
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
