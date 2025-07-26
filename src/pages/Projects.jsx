import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h1>

      <ProjectSection
        title="Proyecto 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="blue"
      />

      <ProjectSection
        title="Proyecto 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="rose"
      />

      <ProjectSection
        title="Proyecto 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="emerald"
      />

      <ProjectSection
        title="Proyecto 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="violet"
      />
    </div>
  );
}
