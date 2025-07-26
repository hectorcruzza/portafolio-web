export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </header>
  );
}
