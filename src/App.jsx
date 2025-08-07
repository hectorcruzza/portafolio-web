import { Routes, Route } from "react-router-dom";
import BackgroundEffect from "./components/BackgroundEffect";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import DevLogs from "./pages/DevLogs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] overflow-hidden">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10 pt-24 pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/devlogs" element={<DevLogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
