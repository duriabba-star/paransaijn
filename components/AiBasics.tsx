import React from 'react';
import { Sparkles, Zap, Info } from 'lucide-react';
import { PixelGridDemo } from './Visualizations';
import { HEADING_STYLE, PARAGRAPH_STYLE, HIGHLIGHT_STYLE, BADGE_STYLE } from '../constants';

export default function AiBasics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Intro Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-4">
           <div className={BADGE_STYLE} style={{marginBottom: 0}}>Intro</div>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">인공지능이란 무엇일까요?</h2>
        <p className="text-slate-600 leading-relaxed mb-6 font-medium">
          우리가 평소에 그림을 그릴 때는 붓을 직접 움직여야 합니다. 
          하지만 <span className={HIGHLIGHT_STYLE}>인공지능(AI)</span>은 우리가 말로 설명하면, 
          그 말을 이해하고 스스로 그림을 그려줍니다.
        </p>
        
        <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-100 flex items-start gap-4">
          <div className="text-3xl bg-white p-2 rounded-lg shadow-sm border border-indigo-50">🤖</div>
          <div>
            <h3 className="font-extrabold text-indigo-900 text-sm mb-1">확률적 정답 찾기</h3>
            <p className="text-indigo-800/80 text-xs leading-relaxed font-medium">
              AI는 스스로 생각하는 것이 아니라, 수많은 데이터를 공부해서 <strong className="text-indigo-900 bg-indigo-100 px-1 rounded">가장 그럴듯한 정답을 확률적으로</strong> 찾아내는 기술입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Gemini Spotlight */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
        <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" /> Our Pick
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Google Gemini?</span>
            </h2>
        </div>
        <p className="text-slate-600 font-medium leading-relaxed text-sm mb-6 flex-grow">
            다른 AI들과 달리 제미나이는 <strong>처음부터 멀티모달(Multimodal)</strong>로 설계되어 
            텍스트, 이미지, 영상을 한 번에 이해합니다.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-auto">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex items-center gap-1.5 mb-1 font-bold text-slate-800 text-sm">
                    <Zap className="w-3.5 h-3.5 text-yellow-500" /> 네이티브 멀티모달
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">다양한 정보를 동시에 처리하는 능력</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                <div className="flex items-center gap-1.5 mb-1 font-bold text-blue-800 text-sm">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" /> 무료 접근성
                </div>
                <p className="text-[10px] text-blue-600 leading-tight">누구나 쉽게 사용할 수 있는 고성능 AI</p>
            </div>
        </div>
      </div>

      {/* 3. Etymology */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-2 mb-4">
           <div className={BADGE_STYLE} style={{marginBottom: 0}}>Story</div>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">이름의 비밀: 쌍둥이</h2>
        
        <div className="relative bg-slate-900 rounded-2xl p-6 text-center text-white shadow-lg overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
                 <div className="flex flex-col items-center">
                     <span className="text-2xl mb-1">🧠</span>
                     <span className="text-[10px] font-bold text-blue-300">DeepMind</span>
                 </div>
                 <div className="text-lg text-slate-500 font-black">+</div>
                 <div className="flex flex-col items-center">
                     <span className="text-2xl mb-1">💡</span>
                     <span className="text-[10px] font-bold text-purple-300">Google Brain</span>
                 </div>
            </div>
            
            <div className="relative z-10">
                <h3 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200 mb-1">
                    Gemini (쌍둥이)
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                    구글의 두 핵심 연구소가 하나로 합쳐져<br/>탄생했다는 의미입니다.
                </p>
            </div>
        </div>
      </div>

      {/* 4. Vision (Pixel Grid) */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
         <div className="flex items-center gap-2 mb-4">
             <div className={BADGE_STYLE} style={{marginBottom: 0}}>Principle</div>
         </div>
         <h2 className="text-2xl font-extrabold text-slate-900 mb-4">컴퓨터 눈으로 본 세상</h2>
         <p className="text-slate-600 text-sm mb-4 font-medium">
           디지털 이미지는 작은 점, <span className={HIGHLIGHT_STYLE}>픽셀(Pixel)</span>의 모임입니다.
         </p>
         
         <div className="flex justify-center mb-4 transform scale-90 origin-top">
           <PixelGridDemo />
         </div>
         
         <div className="flex items-start gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
            <Info className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-emerald-800 font-medium leading-relaxed">
              AI는 "고양이 사진에는 세모난 픽셀 덩어리(귀)가 있다"는 패턴을 학습합니다.
            </p>
         </div>
      </div>

    </div>
  );
}