export default function ProjectSection({ title, description, color }) {
  const bgColor =
    {
      blue: "bg-blue-900",
      rose: "bg-rose-900",
      emerald: "bg-emerald-800",
      violet: "bg-violet-800",
    }[color] || "bg-gray-800";

  return (
    <section className={`${bgColor} text-white p-8 rounded-xl my-6`}>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-lg text-gray-300">{description}</p>
    </section>
  );
}
