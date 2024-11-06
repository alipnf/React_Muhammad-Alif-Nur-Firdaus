import { useState } from "react";
import { npcData } from "../sevices/npcData";
import { generateMission } from "../sevices/geminiAPI";

export default function Home() {
  const [selectedNpc, setSelectedNpc] = useState(null);
  const [missions, setMissions] = useState([]); // Menyimpan semua misi yang dihasilkan
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNpcChange = (event) => {
    const selectedNpcName = event.target.value;
    const npc = npcData.npc.find((npc) => npc.name === selectedNpcName);
    setSelectedNpc(npc);
    setMissions([]); // Reset missions
  };

  const generateMissionHandler = async () => {
    if (!selectedNpc) return;

    setLoading(true);
    setError(null); // Reset error before generating mission
    try {
      const responseJson = await generateMission(selectedNpc);
      setMissions(responseJson);
    } catch (error) {
      setError("Gagal menghasilkan misi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-3 px-4">
      <h1 className="mb-4 text-3xl font-bold">Misi NPC</h1>
      <div className="mb-4">
        <label htmlFor="npc-select" className="block text-lg font-medium">
          Pilih NPC:
        </label>
        <select
          id="npc-select"
          onChange={handleNpcChange}
          className="mt-2 w-full rounded-md border border-gray-300 p-2"
        >
          <option value="">--Pilih NPC--</option>
          {npcData.npc.map((npc) => (
            <option key={npc.name} value={npc.name}>
              {npc.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={generateMissionHandler}
        disabled={loading || !selectedNpc}
        className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
      >
        {loading ? "Menghasilkan..." : "Generate Misi"}
      </button>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {missions.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold">Misi Dihasilkan:</h2>
          {missions.map((item, index) => (
            <div
              key={index} // key sementara
              className="mb-4 rounded-md border border-gray-300 p-4 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.mission.title}</h3>
              <p className="mt-2">{item.mission.description}</p>
              <p className="mt-2">
                Tingkat Kesulitan: {item.mission.difficulty} | Poin:{" "}
                {item.mission.points}
              </p>
              {item.mission.achievement && (
                <p className="mt-2 font-bold">
                  Achievement: {item.mission.achievement}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
