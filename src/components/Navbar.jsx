import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 h-16 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex items-center space-x-4 md:space-x-0">
          <div
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>
          <div className="text-white text-lg font-bold">Héctor Cruz</div>
        </div>

        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-white font-medium transition-all duration-300 ${
                  isActive ? "after:w-full font-bold" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative text-white font-medium transition-all duration-300 ${
                  isActive ? "after:w-full font-bold" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `relative text-white font-medium transition-all duration-300 ${
                  isActive ? "after:w-full font-bold" : "after:w-0"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full`
              }
            >
              Proyectos
            </NavLink>
          </li>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 z-20 bg-black/50 md:hidden transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`h-full w-48 bg-white/10 backdrop-blur-md border-r border-white/20 flex flex-col items-start pt-16 pl-6 space-y-6 transform transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-white text-xl transition-all mt-6 ${
                isActive ? "font-bold underline underline-offset-4" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-white text-xl transition-all ${
                isActive ? "font-bold underline underline-offset-4" : ""
              }`
            }
          >
            Sobre Mí
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-white text-xl transition-all ${
                isActive ? "font-bold underline underline-offset-4" : ""
              }`
            }
          >
            Proyectos
          </NavLink>
        </div>
      </div>
    </>
  );
}
