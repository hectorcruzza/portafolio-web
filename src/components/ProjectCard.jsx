import { useNavigate } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  technologies,
  demoLink,
  repoLink,
  images,
  devlogLink,
  inProgress,
  onOpenGallery,
}) {
  const navigate = useNavigate();

  const handleDevlogClick = () => {
    navigate("/devlogs");
  };

  return (
    <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20">
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      {inProgress && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <span className="inline-block text-xs font-bold text-white px-4 py-1 rounded-full bg-gradient-to-r from-[#ff3a82] via-purple-500 to-[#5233ff] backdrop-blur-md ring-1 ring-white/10">
            En desarrollo
          </span>
        </div>
      )}

      <div className="relative z-10 space-y-4">
        <h4 className="text-xl font-semibold text-white text-center">
          {title}
        </h4>
        <p className="text-gray-300 text-sm text-center">{description}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white/10 text-white text-xs px-2 py-1 rounded-full border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline text-sm hover:text-blue-400 hover:translate-y-[-2px] transition"
            >
              Ver demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline text-sm hover:text-blue-400 hover:translate-y-[-2px] transition"
            >
              Ver repositorio en GitHub
            </a>
          )}
          {images && images.length > 0 && (
            <button
              onClick={onOpenGallery}
              className="text-blue-300 underline text-sm hover:text-blue-400 hover:translate-y-[-2px] transition"
            >
              Ver imágenes
            </button>
          )}
          {devlogLink && (
            <button
              onClick={handleDevlogClick}
              className="text-blue-300 underline text-sm hover:text-blue-400 hover:translate-y-[-2px] transition"
            >
              Ver DevLogs
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
