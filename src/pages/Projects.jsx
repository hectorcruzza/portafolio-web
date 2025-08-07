import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ImageGalleryModal from "../components/ImageGalleryModal";

export default function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const projects = [
    {
      title: "Recursos Humanos App",
      description: "Aplicación web de gestión de personal.",
      technologies: ["React + Vite", "TailwindCSS", "Firebase"],
      demoLink: "https://myhrappv1.netlify.app/",
      repoLink: "https://github.com/hectorcruzza/my-hr-app.git",
      images: [
        "/images/RRHH1.png",
        "/images/RRHH2.png",
        "/images/RRHH3.png",
        "/images/RRHH4.png",
      ],
      devlogLink: true,
      inProgress: false,
    },
    {
      title: "Chatbot para Top Mexico Real Estate",
      description:
        "Chatbot potenciado por Gemini AI mediante Google AI Studio, que guía al usuario a elegir su propiedad ideal.",
      technologies: [
        "React + Vite",
        "TailwindCSS",
        "Google AI Studio",
        "Gemini",
      ],
      demoLink: "https://chatbot-topmre.netlify.app/",
      repoLink: "https://github.com/hectorcruzza/chatbot-topmre.git",
      images: ["/images/Chatbot1.png", "/images/Chatbot2.png"],
      devlogLink: true,
      inProgress: true,
    },
    {
      title: "MarketPal",
      description:
        "Aplicación de escritorio tipo POS diseñada para facilitar la gestión de un negocio. Permite llevar un control de ventas, inventario, clientes y empleados, todo desde una interfaz sencilla y fácil de usar.",
      technologies: ["C#", ".NET", "Firebase"],
      demoLink: null,
      repoLink: "https://github.com/MikeGPQ/MarketPal-1.2.git",
      images: [
        "/images/MarketPal1.png",
        "/images/MarketPal2.png",
        "/images/MarketPal3.png",
        "/images/MarketPal4.png",
        "/images/MarketPal5.png",
        "/images/MarketPal6.png",
        "/images/MarketPal7.png",
        "/images/MarketPal8.png",
        "/images/MarketPal9.png",
      ],
      devlogLink: null,
      inProgress: false,
    },
    {
      title: "PedalRide Rentals",
      description: "Sistema de reservaciones para alquilar bicicletas.",
      technologies: ["Python"],
      demoLink: null,
      repoLink: "https://github.com/hectorcruzza/PedalRide-Rentals.git",
      images: [
        "/images/PedalRideRentals1.png",
        "/images/PedalRideRentals2.png",
        "/images/PedalRideRentals3.png",
        "/images/PedalRideRentals4.png",
        "/images/PedalRideRentals5.png",
        "/images/PedalRideRentals6.png",
        "/images/PedalRideRentals7.png",
        "/images/PedalRideRentals8.png",
        "/images/PedalRideRentals9.png",
        "/images/PedalRideRentals10.png",
      ],
      devlogLink: null,
      inProgress: false,
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
                <ProjectCard
                  key={index}
                  {...project}
                  onOpenGallery={() => {
                    setSelectedImages(project.images);
                    setIsGalleryOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageGalleryModal
        images={selectedImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}
