import SocialIcon from "../components/SocialIcon";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full min-h-[calc(100vh-8rem)] px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-6">Contacto</h2>
      <p className="text-gray-300 max-w-3xl text-center mb-8">
        Puedes acceder a mis perfiles a través de los siguientes íconos:
      </p>

      <div className="flex justify-center gap-6">
        <SocialIcon
          icon={<FaEnvelope />}
          label="Email"
          link="mailto:hectorivancruzalayola@gmail.com"
        />
        <SocialIcon
          icon={<FaLinkedin />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/h%C3%A9ctor-iv%C3%A1n-cruz-alayola-39149b290/"
        />
        <SocialIcon
          icon={<FaGithub />}
          label="GitHub"
          link="https://github.com/hectorcruzza"
        />
        <SocialIcon
          icon={<FaInstagram />}
          label="Instagram"
          link="https://www.instagram.com/hectorcruzz_/"
        />
      </div>
    </section>
  );
}
