import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Devlogs from "./pages/Devlogs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 mt-[64px] px-4 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/devlogs" element={<Devlogs />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
