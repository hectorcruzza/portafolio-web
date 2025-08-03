export default function TechIcon({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md shadow-md">
        <Icon className="text-2xl text-white" />
      </div>
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
}
