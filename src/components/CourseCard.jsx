export default function CourseCard({
  title,
  author,
  date,
  skills,
  certificateLink,
}) {
  return (
    <a
      href={certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/30 via-white/20 to-indigo-500/30 blur-md"></div>

      <div className="relative z-10 space-y-4">
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-gray-300 text-sm">
          By {author} • {date}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-white border border-white/30 rounded-full backdrop-blur-sm bg-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
