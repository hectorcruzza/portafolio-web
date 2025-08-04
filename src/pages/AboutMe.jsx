import AboutIntro from "../components/AboutIntro";
import Hobbies from "../components/Hobbies";
import ProfessionalCompetencies from "../components/ProfessionalCompetencies";
import Courses from "../components/Courses";
import FormacionYExperiencia from "../components/FormacionYExperiencia";

export default function AboutMe() {
  return (
    <section className="w-full min-h-[calc(100vh-8rem)] px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-6">Sobre Mí</h2>

      <div className="w-full max-w-5xl space-y-12">
        <AboutIntro />
        <Hobbies />
        <ProfessionalCompetencies />
        <Courses />
        <FormacionYExperiencia />
      </div>
    </section>
  );
}
