import React from 'react';
import { Brain, Sparkles, Bot, Image as ImageIcon } from 'lucide-react';

export const CURRICULUM_STEPS = [
  {
    id: 1,
    icon: <Brain className="w-6 h-6" />,
    title: "1. AI와 이미지의 이해",
    shortDesc: "AI의 개념부터 생성 원리까지"
  },
  {
    id: 2,
    icon: <Sparkles className="w-6 h-6" />, // Swapped icon for better fit
    title: "2. 프롬프트의 마법",
    shortDesc: "글자를 그림으로 바꾸는 언어"
  },
  {
    id: 3,
    icon: <Bot className="w-6 h-6" />,
    title: "3. 나만의 사진 비서, 젬(Gems)",
    shortDesc: "페르소나 설정과 자동화"
  },
  {
    id: 4,
    icon: <ImageIcon className="w-6 h-6" />,
    title: "4. 실습: 나만의 작품 만들기",
    shortDesc: "Gemini로 직접 그려보기"
  }
];

// Reusable styles - Updated for Bolder & High Readability
export const CARD_STYLE = "bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 relative overflow-hidden";
export const HEADING_STYLE = "text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight";
export const SUB_HEADING_STYLE = "text-xl font-extrabold text-slate-800 mb-3 mt-8";
export const PARAGRAPH_STYLE = "text-slate-700 leading-relaxed mb-5 text-lg font-medium tracking-normal"; // Darker color & Medium weight
export const HIGHLIGHT_STYLE = "font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100";
export const BADGE_STYLE = "inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-extrabold shadow-md mb-4 tracking-wide uppercase";