import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] overflow-hidden">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
