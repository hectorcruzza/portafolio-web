import DevlogSection from "../components/DevlogSection";

export default function DevLogs() {
  const devlogData = [
    {
      project: "Portafolio Web",
      videos: [
        {
          title:
            "Desarrollo de mi Portafolio Web: Mockup inicial y conceptualización de la estructura [01]",
          url: "https://youtu.be/a8WpVYqqjY8",
        },
        {
          title:
            "Desarrollo de mi Portafolio Web: Mejoras en Inicio, Sobre Mí y Proyectos [02]",
          url: "https://youtu.be/uLJ0-WNuHcY",
        },
      ],
    },
    {
      project: "Recursos Humanos App",
      videos: [
        {
          title:
            "Aplicación Web de RRHH: Configuración de entorno, componentes, GitHub y despliegue en Netlify [01]",
          url: "https://youtu.be/yWGAIKY2v0I",
        },
        {
          title:
            "Aplicación Web de RRHH: Navegación con React Router y autenticación con Firebase Auth [02]",
          url: "https://youtu.be/pHuEfY0dJQI",
        },
        {
          title:
            "Aplicación Web de RRHH: Integración de Firestore y variables de entorno [03]",
          url: "https://youtu.be/njSWkVKWqYs",
        },
        {
          title:
            "Aplicación Web de RRHH: Actualización y eliminación de datos de empleados en Firestore [04]",
          url: "https://youtu.be/FMpv3SWp5k0",
        },
      ],
    },
    {
      project: "Chatbot para Top Mexico Real Estate",
      videos: [
        {
          title:
            "Desarrollo de Chatbot para Top Mexico Real Estate: Mockup inicial y conexión con Gemini AI [01]",
          url: "https://youtu.be/hlY9JWYRs10",
        },
      ],
    },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-8rem)] px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-4">DevLogs</h2>
      <p className="text-gray-300 max-w-3xl text-center mb-8">
        Aquí encontrarás los videos de desarrollo donde explico el proceso
        detrás de algunos de mis proyectos.
      </p>

      <div className="w-full max-w-5xl space-y-12">
        {devlogData.map(({ project, videos }) => (
          <DevlogSection key={project} title={project} videos={videos} />
        ))}
      </div>
    </section>
  );
}
