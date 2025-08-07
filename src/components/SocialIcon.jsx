export default function SocialIcon({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center"
    >
      <div className="p-4 bg-white/10 rounded-full border-white/20 text-white text-lg transition-all duration-300 hover:bg-gradient-to-r from-pink-500 to-indigo-500 hover:text-white hover:scale-110">
        {icon}
      </div>
      <span className="mt-2 text-white text-sm">{label}</span>
    </a>
  );
}
