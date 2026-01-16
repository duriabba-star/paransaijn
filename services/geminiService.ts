import { GoogleGenAI } from "@google/genai";
import { GeminiImageResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIImage = async (prompt: string): Promise<GeminiImageResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Extract image data
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const imageUrl = `data:image/png;base64,${base64EncodeString}`;
          return { imageUrl, error: null };
        }
      }
    }

    return { imageUrl: null, error: "이미지를 생성하지 못했습니다. 다른 프롬프트를 시도해보세요." };

  } catch (error: any) {
    console.error("Gemini Image Gen Error:", error);
    return { imageUrl: null, error: error.message || "알 수 없는 오류가 발생했습니다." };
  }
};