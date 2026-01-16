import React from 'react';
import { CURRICULUM_STEPS } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
  onSelectStep: (id: number) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onSelectStep }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>AI Art Academy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            상상을 현실로 만드는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              AI 프롬프트 엔지니어링
            </span>
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            인공지능의 기초 원리부터 나만의 작품을 만드는 실습까지.<br/>
            누구나 쉽게 배울 수 있는 단계별 가이드입니다.
          </p>
          <div className="pt-8">
            <button 
              onClick={onStart}
              className="bg-white text-indigo-700 px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
            >
              학습 시작하기 <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Curriculum Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRICULUM_STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <footer className="bg-slate-100 py-8 text-center text-slate-500 font-medium text-sm">
        © 2024 AI Art Academy. Powered by Google Gemini.
      </footer>
    </div>
  );
};

export default LandingPage;