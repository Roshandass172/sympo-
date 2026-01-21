
import { GoogleGenAI } from "@google/genai";

// Always use the process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string, context?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: context ? `${context}\n\nUser: ${prompt}` : prompt,
      config: {
        systemInstruction: "You are the DATRONIX '26 Symposium Virtual Guide. You are helpful, technically savvy, and excited about innovation. Help users with info about events (Code-X Hackathon, Robo Wars, UI/UX Masterclass), registration, and the symposium schedule. The base color theme of the event is Royal Blue.",
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Use .text property directly (not a method call) to extract content from GenerateContentResponse
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The guide is currently recharging. Please try again in a moment.";
  }
};
