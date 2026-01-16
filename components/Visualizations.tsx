import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

// Step 2 Visualization: Pixel Grid
export const PixelGridDemo = () => {
  const [pixels, setPixels] = useState(Array(64).fill(false));

  const togglePixel = (index: number) => {
    const newPixels = [...pixels];
    newPixels[index] = !newPixels[index];
    setPixels(newPixels);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
      <div className="grid grid-cols-8 gap-1 bg-slate-200 p-2 rounded shadow-inner cursor-pointer" style={{ width: 'fit-content' }}>
        {pixels.map((isActive, i) => (
          <div
            key={i}
            onClick={() => togglePixel(i)}
            className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-150 rounded-sm ${isActive ? 'bg-indigo-600 shadow-sm' : 'bg-white hover:bg-slate-100'}`}
          />
        ))}
      </div>
      <div className="max-w-xs text-sm text-slate-600 space-y-2">
        <p>
          <span className="font-bold text-slate-800">왼쪽의 그리드를 클릭해보세요.</span>
        </p>
        <p>
          컴퓨터는 이미지를 <strong>숫자의 배열</strong>로 인식합니다. 
          각 칸(픽셀)이 켜졌는지(1), 꺼졌는지(0) 혹은 어떤 색상 값을 가지는지(RGB)로 그림을 기억합니다.
        </p>
        <p className="text-xs text-slate-400 mt-2">
          AI는 수십억 개의 이미지에서 픽셀들의 패턴을 학습하여 새로운 그림을 만들어냅니다.
        </p>
      </div>
    </div>
  );
};

// Step 4 Visualization: Text to Image Flow
export const PromptFlowDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl space-y-6 border border-indigo-50">
      <div className="flex items-center gap-4 text-lg font-medium text-slate-700 flex-wrap justify-center">
        <div className="bg-white px-5 py-3 rounded-xl shadow-md border border-slate-200 text-indigo-600 font-bold">
          "귀여운 고양이"
        </div>
        <div className="text-slate-400 text-2xl animate-pulse">➜</div>
        <div className="bg-slate-800 text-white px-5 py-3 rounded-xl shadow-lg font-mono text-sm border-2 border-slate-700">
          [AI 모델 연산]
        </div>
        <div className="text-slate-400 text-2xl animate-pulse">➜</div>
        <div className="w-20 h-20 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center text-4xl transform transition-transform hover:scale-110 duration-300">
          🐱
        </div>
      </div>
      <p className="text-sm text-center text-slate-500 max-w-md leading-relaxed">
        우리가 "언어"로 명령을 내리면, AI는 학습된 데이터 공간(Latent Space)에서 
        그 단어와 가장 가까운 시각적 패턴을 찾아내어 픽셀을 조합합니다.
      </p>
    </div>
  );
};

// Step 5 Visualization: Prompt Builder Guide
export const PromptIngredients = () => {
  const ingredients = [
    { name: "주체 (Subject)", desc: "무엇을 그릴 것인가? (예: 우주비행사)", color: "bg-blue-50 text-blue-700 border-blue-100" },
    { name: "행동 (Action)", desc: "무엇을 하고 있는가? (예: 춤추는)", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "화풍 (Style)", desc: "어떤 스타일인가? (예: 유화, 3D)", color: "bg-purple-50 text-purple-700 border-purple-100" },
    { name: "분위기 (Mood)", desc: "느낌이나 조명은? (예: 신비로운)", color: "bg-orange-50 text-orange-700 border-orange-100" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ingredients.map((item, idx) => (
        <div key={idx} className={`p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group`}>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border ${item.color}`}>
            {item.name}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};