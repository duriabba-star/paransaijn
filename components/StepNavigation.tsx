import React from 'react';
import { CURRICULUM_STEPS } from '../constants';
import { CheckCircle2, Home } from 'lucide-react';

interface StepNavigationProps {
  currentStep: number;
  onStepChange: (id: number) => void;
  completedSteps: number[];
  onGoHome: () => void;
}

const StepNavigation: React.FC<StepNavigationProps> = ({ currentStep, onStepChange, completedSteps, onGoHome }) => {
  return (
    <nav className="w-full md:w-80 bg-slate-50 border-r border-slate-200 h-full overflow-y-auto flex-shrink-0 flex flex-col">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-black text-slate-800 flex items-center gap-2 tracking-tight">
            <span className="text-2xl">🎨</span> AI Art Academy
          </h1>
        </div>
        <button 
          onClick={onGoHome}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-600 bg-white hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-all shadow-sm border border-slate-200 hover:shadow-md active:scale-95"
        >
          <Home className="w-4 h-4" /> 메인으로 돌아가기
        </button>
      </div>
      
      <div className="px-4 pb-6 space-y-3 flex-1">
        <div className="text-xs font-extrabold text-slate-400 px-2 uppercase tracking-wider mb-2">Curriculum</div>
        {CURRICULUM_STEPS.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = completedSteps.includes(step.id);
          
          return (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`w-full text-left p-4 rounded-2xl flex items-start gap-3 transition-all duration-300 ease-out ${
                isActive 
                  ? 'bg-white border-2 border-indigo-500 shadow-[0_8px_20px_-6px_rgba(79,70,229,0.2)] scale-[1.02] z-10' 
                  : 'bg-transparent border border-transparent hover:bg-white hover:shadow-sm hover:border-slate-200'
              }`}
            >
              <div className={`mt-0.5 transition-colors duration-300 ${isActive ? 'text-indigo-600 drop-shadow-sm' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-bold text-sm mb-1 truncate ${isActive ? 'text-indigo-800' : 'text-slate-600'}`}>
                  {step.title}
                </div>
                <div className={`text-xs truncate font-medium ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {step.shortDesc}
                </div>
              </div>
              <div className="mt-1 flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 drop-shadow-sm" />
                ) : (
                  isActive && <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] animate-pulse" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default StepNavigation;