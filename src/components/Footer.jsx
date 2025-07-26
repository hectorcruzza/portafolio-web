export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Héctor Cruz. Todos los derechos reservados.
      </div>
    </footer>
  );
}
