import SectionHeader from "../components/SectionHeader";
import ProjectPreview from "../components/ProjectPreview";
import TechIcons from "../components/TechIcons";

export default function Home() {
  return (
    <div className="text-white px-6 py-10">
      <SectionHeader
        title="Bienvenido a mi portafolio"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Proyectos recientes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectPreview
            title="Proyecto 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="blue"
          />
          <ProjectPreview
            title="Proyecto 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            color="rose"
          />
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Tecnologías</h2>
        <TechIcons />
      </section>
    </div>
  );
}
