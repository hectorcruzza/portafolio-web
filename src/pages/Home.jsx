import { motion } from "framer-motion";
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
import TechIcon from "../components/TechIcon";

export default function Home() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl px-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-3 py-1 bg-white/10 text-sm text-white rounded-full backdrop-blur-md"
        >
          Frontend Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Héctor Cruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300"
        >
          Estudiante de Ingeniería de Software y Sistemas Computacionales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          <TechIcon icon={FaReact} label="React" />
          <TechIcon icon={SiVite} label="Vite" />
          <TechIcon icon={FaHtml5} label="HTML5" />
          <TechIcon icon={SiTailwindcss} label="Tailwind" />
          <TechIcon icon={SiJavascript} label="JavaScript" />
          <TechIcon icon={FaPython} label="Python" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          <TechIcon icon={SiFirebase} label="Firebase" />
          <TechIcon icon={FaGitAlt} label="Git" />
          <TechIcon icon={FaGithub} label="GitHub" />
          <TechIcon icon={SiNetlify} label="Netlify" />
          <TechIcon icon={SiMysql} label="MySQL" />
          <TechIcon icon={DiVisualstudio} label="Visual Studio" />
          <TechIcon icon={BiLogoVisualStudio} label="VS Code" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center space-x-4 mt-8"
        >
          <button className="bg-gradient-to-r from-[#ff3a82] to-[#5233ff] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:translate-y-[-2px] transition-all uppercase">
            Ver Proyectos
          </button>
          <button className="bg-white/10 text-white font-semibold py-3 px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all uppercase">
            DevLogs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
