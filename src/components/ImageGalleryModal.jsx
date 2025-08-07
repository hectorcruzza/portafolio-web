import { useState, useEffect } from "react";

export default function ImageGalleryModal({ images, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl mx-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 space-y-6 shadow-2xl flex flex-col items-center mt-20">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <img src="/images/close-icon.png" alt="Cerrar" className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold text-white text-center">
          Galería de Imágenes
        </h2>

        <div className="relative w-full flex items-center justify-center">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2"
            onClick={prevImage}
          >
            <img
              src="/images/prev-icon.png"
              alt="Anterior"
              className="w-8 h-8"
            />
          </button>

          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="rounded-lg shadow-lg max-h-[60vh] object-contain"
          />

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
            onClick={nextImage}
          >
            <img
              src="/images/next-icon.png"
              alt="Siguiente"
              className="w-8 h-8"
            />
          </button>
        </div>

        <p className="text-gray-300 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
