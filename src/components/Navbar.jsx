import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkStyle = (path) =>
    location.pathname === path
      ? "text-white underline underline-offset-4"
      : "text-gray-300 hover:text-white";

  return (
    <nav className="bg-zinc-900 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Héctor Cruz</h1>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={navLinkStyle("/")}>
            Inicio
          </Link>
          <Link to="/sobre-mi" className={navLinkStyle("/sobre-mi")}>
            Sobre mí
          </Link>
          <Link to="/proyectos" className={navLinkStyle("/proyectos")}>
            Proyectos
          </Link>
          <Link to="/devlogs" className={navLinkStyle("/devlogs")}>
            Devlogs
          </Link>
          <Link to="/contacto" className={navLinkStyle("/contacto")}>
            Contacto
          </Link>
          <a href="#" target="_blank">
            <FaGithub className="text-xl hover:text-white" />
          </a>
          <a href="#" target="_blank">
            <FaLinkedin className="text-xl hover:text-white" />
          </a>
          <a href="#" target="_blank">
            <FaInstagram className="text-xl hover:text-white" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle("/")}
          >
            Inicio
          </Link>
          <Link
            to="/sobre-mi"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle("/sobre-mi")}
          >
            Sobre mí
          </Link>
          <Link
            to="/proyectos"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle("/proyectos")}
          >
            Proyectos
          </Link>
          <Link
            to="/devlogs"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle("/devlogs")}
          >
            Devlogs
          </Link>
          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className={navLinkStyle("/contacto")}
          >
            Contacto
          </Link>
          <div className="flex gap-4 pt-2">
            <a href="#" target="_blank">
              <FaGithub className="text-xl hover:text-white" />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin className="text-xl hover:text-white" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className="text-xl hover:text-white" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
