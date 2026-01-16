import React, { useState } from 'react';
import { Landmark, Camera, Palette, Copy, Check, MousePointerClick } from 'lucide-react';

const GEM_PRESETS = [
  {
    id: 'curator',
    title: '사진 기획자',
    tags: ['#비평', '#전시기획', '#작가노트'],
    desc: '"이미지의 시각적 요소를 넘어, 사진이 담고 있는 인문학적 가치를 큐레이팅합니다."',
    color: 'bg-indigo-600',
    hoverColor: 'hover:bg-indigo-700',
    iconColor: 'text-indigo-600 bg-indigo-50',
    icon: <Landmark className="w-6 h-6" />,
    prompt: `너는 20년 경력의 저명한 전시 기획자이자 미술 비평가야. 사진이 업로드되면 다음 프로세스를 따라 비평해줘.

1. 미학적 분석 (Aesthetics): 구도, 빛, 색감의 조화를 분석.
2. 의미론적 해석 (Semantics): 피사체 너머의 상징적 의미와 작가의 의도 추론.
3. 인문학적 맥락 (Context): 철학적, 역사적, 사회적 맥락에서의 해석.
4. 전시 제안 (Exhibition): 이 사진이 전시된다면 어울리는 제목과 섹션 설명.`
  },
  {
    id: 'tech',
    title: '사진 분석가',
    tags: ['#EXIF추론', '#렌즈추천', '#기술진단'],
    desc: '"픽셀 데이터를 분석해 촬영 당시의 조리개, 초점거리, 조명 위치를 역으로 계산합니다."',
    color: 'bg-amber-600',
    hoverColor: 'hover:bg-amber-700',
    iconColor: 'text-amber-600 bg-amber-50',
    icon: <Camera className="w-6 h-6" />,
    prompt: `너는 광학 공학 박사이자 프로 사진작가야. 업로드된 이미지를 기술적으로 분석해줘.

1. EXIF 추론: 사용되었을 것으로 추정되는 렌즈(화각), 조리개 값, 셔터 스피드.
2. 조명 분석: 주광원의 위치, 종류(자연광/인공광), 보조광의 유무.
3. 기술적 결함 진단: 노이즈, 색수차, 포커스 문제 등 기술적 개선점.
4. 솔루션 제안: 더 선명하고 기술적으로 완벽한 사진을 위한 촬영 팁.`
  },
  {
    id: 'colorist',
    title: '색채 디자인 분석가',
    tags: ['#색보정', '#라이트룸', '#HSL'],
    desc: '"사진의 컬러 팔레트를 분석하여 영화 같은 톤을 만들기 위한 구체적인 수치를 제안합니다."',
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700',
    iconColor: 'text-pink-600 bg-pink-50',
    icon: <Palette className="w-6 h-6" />,
    prompt: `너는 헐리우드 영화 색보정 전문 컬러리스트야. 사진을 시네마틱하게 보정하기 위한 레시피를 알려줘.

1. 컬러 팔레트 분석: 지배적인 색상(Dominant Colors) 5가지 추출.
2. 무드 키워드: 사진이 주는 감성을 형용사로 표현.
3. Lightroom 보정값 제안:
   - 노출/대비/하이라이트/쉐도우 조절값
   - HSL (Hue, Saturation, Luminance) 조정값
   - 컬러 그레이딩 (미드톤/쉐도우/하이라이트 틴트)`
  }
];

export default function GemConfiguration() {
  const [selectedGem, setSelectedGem] = useState(GEM_PRESETS[0]);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (gem: typeof GEM_PRESETS[0]) => {
    setSelectedGem(gem);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Section: Preset Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {GEM_PRESETS.map((gem) => (
          <div 
            key={gem.id} 
            className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col h-full ${
              selectedGem.id === gem.id 
                ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500 transform scale-[1.02]' 
                : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${gem.iconColor}`}>
              {gem.icon}
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">{gem.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {gem.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 italic flex-grow">
              {gem.desc}
            </p>
            <button
              onClick={() => handleCopy(gem)}
              className={`w-full py-3 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 ${gem.color} ${gem.hoverColor}`}
            >
              {selectedGem.id === gem.id && isCopied ? (
                <>
                  <Check className="w-4 h-4" /> 복사 완료!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> 지침(Instructions) 복사
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section: Guide & Mockup */}
      <div className="bg-[#1e1e2e] rounded-3xl p-6 md:p-10 shadow-2xl text-white flex flex-col xl:flex-row gap-10 items-center overflow-hidden relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Left: Step Guide */}
        <div className="w-full xl:w-1/2 relative z-10">
          <div className="text-xs font-bold text-indigo-400 tracking-widest mb-2 uppercase">Step-by-Step Guide</div>
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            실제 제미나이에서<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">젬(Gems)을 설정하는 방법</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "제미나이 메인 화면 왼쪽 하단의 'Gems 관리' 메뉴를 클릭합니다.",
              "'새 Gem 만들기' 버튼을 누릅니다.",
              "이름을 정하고, 위 카드에서 복사한 내용을 '지침(Instructions)' 칸에 붙여넣습니다.",
              "'저장' 후 사진을 업로드하면 설정된 전문가가 응답합니다."
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="w-8 h-8 rounded-full bg-slate-700 text-white font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500 transition-colors border border-slate-600">
                  {idx + 1}
                </div>
                <p className="text-slate-300 font-medium leading-relaxed pt-1 group-hover:text-white transition-colors">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup Interface */}
        <div className="w-full xl:w-1/2 relative z-10">
          <div className="bg-[#2b2b3b] rounded-xl border border-slate-700/50 shadow-2xl p-1 overflow-hidden">
            {/* Mockup Header */}
            <div className="bg-[#2b2b3b] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-[10px] font-mono text-slate-500">GEM CONFIG: {selectedGem.id.toUpperCase()}_V1</div>
            </div>
            
            {/* Mockup Body */}
            <div className="p-6 bg-[#181825] space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-indigo-400 mb-1.5 uppercase tracking-wider">Name</label>
                <div className="w-full bg-[#2b2b3b] border border-slate-700 rounded-lg px-4 py-3 text-slate-200 text-sm font-medium focus:ring-1 focus:ring-indigo-500 outline-none transition-all">
                  {selectedGem.title}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-indigo-400 mb-1.5 uppercase tracking-wider">Instructions</label>
                <div className="w-full h-[220px] bg-[#2b2b3b] border border-slate-700 rounded-lg p-4 text-slate-300 text-xs md:text-sm font-mono leading-relaxed overflow-y-auto custom-scrollbar relative">
                  <div className="absolute top-2 right-2">
                     {isCopied && <span className="bg-indigo-500 text-white text-[10px] px-2 py-1 rounded font-bold animate-pulse">Paste!</span>}
                  </div>
                  <pre className="whitespace-pre-wrap font-sans">{selectedGem.prompt}</pre>
                </div>
              </div>

              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-sm shadow-lg transition-all">
                저장하기 (Preview Only)
              </button>
            </div>
          </div>
          
          {/* Cursor Hint */}
          <div className="hidden xl:flex absolute -left-12 top-1/2 items-center gap-2 text-white/50 animate-bounce">
             <MousePointerClick className="w-6 h-6" />
             <span className="text-xs">Copy & Paste</span>
          </div>
        </div>
      </div>
    </div>
  );
}