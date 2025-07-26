import DevlogCard from "../components/DevlogCard";

export default function Devlogs() {
  return (
    <div className="px-6 py-10 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Devlogs</h1>

      <DevlogCard
        title="Devlog 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        youtubeLink=""
      />

      <DevlogCard
        title="Devlog 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        youtubeLink=""
      />

      <DevlogCard
        title="Devlog 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        youtubeLink=""
      />
    </div>
  );
}
