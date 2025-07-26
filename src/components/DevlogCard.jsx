export default function DevlogCard({ title, description, youtubeLink }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-6 shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <a
        href={youtubeLink || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition"
      >
        Ver en YouTube
      </a>
    </div>
  );
}
