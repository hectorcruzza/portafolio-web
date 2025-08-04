import { FaReact, FaHtml5, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiNetlify,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import TechIcon from "./TechIcon";

export default function ProfessionalCompetencies() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
      <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none w-full md:w-1/2">
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-between space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center">
            Herramientas & Tecnologías
          </h3>
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            <TechIcon icon={FaReact} label="React" />
            <TechIcon icon={SiVite} label="Vite" />
            <TechIcon icon={FaHtml5} label="HTML5" />
            <TechIcon icon={SiTailwindcss} label="Tailwind" />
            <TechIcon icon={SiJavascript} label="JavaScript" />
            <TechIcon icon={FaPython} label="Python" />
            <TechIcon icon={SiFirebase} label="Firebase" />
            <TechIcon icon={FaGitAlt} label="Git" />
            <TechIcon icon={FaGithub} label="GitHub" />
            <TechIcon icon={SiNetlify} label="Netlify" />
            <TechIcon icon={SiMysql} label="MySQL" />
            <TechIcon icon={DiVisualstudio} label="Visual Studio" />
            <TechIcon icon={BiLogoVisualStudio} label="VS Code" />
          </div>
        </div>
      </div>

      <div className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20 animate-pulse-slow hover:animate-none w-full md:w-1/2">
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

        <div className="relative z-10 h-full flex flex-col justify-start space-y-4">
          <h3 className="text-2xl font-semibold text-white text-center">
            Valores Personales
          </h3>
          <ul className="text-gray-300 space-y-3 text-sm md:text-base">
            <li>
              <span className="font-bold text-white">Responsabilidad:</span>{" "}
              Comprometido con la calidad y entrega de resultados.
            </li>
            <li>
              <span className="font-bold text-white">Trabajo en equipo:</span>{" "}
              Colaboración y comunicación efectiva para alcanzar objetivos
              comunes.
            </li>
            <li>
              <span className="font-bold text-white">Ética profesional:</span>{" "}
              Actuar con integridad y respeto en cada proyecto.
            </li>
            <li>
              <span className="font-bold text-white">Adaptabilidad:</span>{" "}
              Capacidad para aprender nuevas tecnologías y afrontar cambios.
            </li>
            <li>
              <span className="font-bold text-white">Pensamiento crítico:</span>{" "}
              Analizar y resolver problemas de manera eficiente.
            </li>
            <li>
              <span className="font-bold text-white">
                Comunicación asertiva:
              </span>{" "}
              Expresar ideas y recibir retroalimentación de forma clara y
              respetuosa.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
