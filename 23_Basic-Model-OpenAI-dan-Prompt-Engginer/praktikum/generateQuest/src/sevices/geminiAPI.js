import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateMission = async (npc) => {
  const prompt = `
    Saya ingin kamu menjadi NPC seperti NPC berikut: ${JSON.stringify(npc)}.
    Buatlah beberapa misi unik dengan berbagai tingkat kesulitan berdasarkan deskripsi dan kepribadian NPC ini.
    Pastikan bahwa misi "Hard" muncul lebih jarang dibandingkan dengan misi dengan tingkat kesulitan "Easy" dan "Medium".
    Poin yang didapat adalah sebagai berikut: 
    - Easy: +2 poin 
    - Medium: +4 poin 
    - Hard: +15 poin.
    Hanya misi dengan tingkat kesulitan "Hard" yang mendapatkan achievement.

    Buat respons dalam format JSON seperti di bawah ini:
    [
      {
        "mission": {
          "title": "Judul Misi",
          "description": "Deskripsi misi.",
          "difficulty": "Easy", // atau Medium
          "points": 2, // atau 4
          "achievement": null // untuk Easy dan Medium
        }
      },
      {
        "mission": {
          "title": "Judul Misi Hard",
          "description": "Deskripsi misi Hard.",
          "difficulty": "Hard",
          "points": 15,
          "achievement": "Nama Achievement"
        }
      }
    ]
    Ingatlah untuk memastikan bahwa misi dengan tingkat kesulitan "Hard" tidak lebih dari 20% dari total misi yang dihasilkan.
`;

  try {
    const result = await model.generateContent(prompt);

    const cleanedResult = result.response
      .text()
      .replace(/```json/, "")
      .replace(/```/, "")
      .trim();

    console.log(cleanedResult);
    return JSON.parse(cleanedResult);
  } catch (error) {
    console.error("Error generating mission:", error);
    throw error;
  }
};
