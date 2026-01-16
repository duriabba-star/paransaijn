import React, { useState } from 'react';
import { generateAIImage } from '../services/geminiService';
import { Loader2, Download, AlertCircle, Wand2 } from 'lucide-react';

const SUGGESTED_PROMPTS = [
  "미래 도시의 밤하늘을 나는 고래, 사이버펑크 스타일",
  "숲속에서 책을 읽고 있는 귀여운 여우, 수채화 느낌",
  "우주복을 입은 햄스터의 초상화, 4k, 고화질",
  "치즈로 만들어진 달, 3D 렌더링"
];

const ImagePlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    const result = await generateAIImage(prompt);

    if (result.error) {
      setError(result.error);
    } else {
      setGeneratedImage(result.imageUrl);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white shadow-lg">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <Wand2 className="w-5 h-5" /> 상상 연구소
        </h3>
        <p className="text-indigo-100 text-sm mb-6">
          앞서 배운 내용을 활용해 프롬프트를 입력해보세요. AI가 당신의 상상을 그림으로 만들어줍니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="예: 선글라스를 쓴 파인애플, 팝아트 스타일..."
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900/40 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 border-0 shadow-inner transition-colors"
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2 min-w-[120px]"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "생성하기"}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-indigo-200 self-center">추천 프롬프트:</span>
          {SUGGESTED_PROMPTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setPrompt(p)}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors backdrop-blur-sm"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Result Area */}
      <div className="min-h-[400px] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center relative overflow-hidden group">
        {isLoading && (
          <div className="flex flex-col items-center gap-4 text-slate-500 animate-pulse">
            <Loader2 className="w-12 h-12 animate-spin text-indigo-500" />
            <p>AI 화가가 열심히 그림을 그리고 있어요...</p>
          </div>
        )}

        {!isLoading && !generatedImage && !error && (
          <div className="text-center text-slate-400 p-8">
            <div className="text-6xl mb-4 grayscale opacity-30">🎨</div>
            <p>프롬프트를 입력하고 '생성하기'를 눌러보세요.</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center gap-2 text-red-500 p-6 text-center">
            <AlertCircle className="w-10 h-10" />
            <p>{error}</p>
          </div>
        )}

        {generatedImage && !isLoading && (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={generatedImage} 
              alt="Generated AI Art" 
              className="max-w-full max-h-[600px] object-contain shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={generatedImage} 
                download={`ai-art-${Date.now()}.png`}
                className="bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg font-medium flex items-center gap-2 hover:bg-indigo-50"
              >
                <Download className="w-4 h-4" /> 저장하기
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePlayground;