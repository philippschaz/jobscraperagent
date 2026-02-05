
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeResumeContent = async (text: string, searchCriteria: string): Promise<AnalysisResult> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this resume text and job search criteria. Provide a summary of the candidate's profile, a list of their top 5 technical skills, 3 suggested job titles they should look for, and a "search refinement" suggestion based on their preferences.
    
    RESUME TEXT:
    ${text}
    
    SEARCH CRITERIA:
    ${searchCriteria}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          topSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
          suggestedTitles: { type: Type.ARRAY, items: { type: Type.STRING } },
          refinement: { type: Type.STRING }
        },
        required: ["summary", "topSkills", "suggestedTitles", "refinement"]
      }
    }
  });

  return JSON.parse(response.text || "{}") as AnalysisResult;
};
