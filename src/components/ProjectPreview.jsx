export default function ProjectPreview({ title, description, color }) {
  const bgColor =
    {
      blue: "bg-blue-800",
      rose: "bg-rose-800",
    }[color] || "bg-gray-700";

  return (
    <div className={`p-6 rounded-xl shadow-md ${bgColor}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  );
}
