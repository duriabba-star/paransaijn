import React, { useState, useEffect } from 'react';
import { 
  Copy, Check, RotateCcw,
  Plane, PenTool, Megaphone, Terminal, GraduationCap, 
  MapPin, Coffee, ShoppingBag, AlertTriangle, BookOpen, 
  List, Feather, Instagram, Bug, FileText, 
  Table, AlignLeft, Smile, Code, ListChecks,
  Utensils, Dumbbell, Briefcase, Heart, Film,
  Video, Mail, Gift, UserCheck, Calendar,
  FileJson, MessageCircle, CheckSquare, MessageCircleQuestion,
  // New Icons
  Palette, Stethoscope, Gavel, Database, Music, Landmark, Gamepad2, Globe, Lightbulb,
  Truck, TrendingUp, Sprout, MessageSquareWarning, MonitorPlay,
  Languages, CheckCircle, Search, Tag, Code2,
  FileCode, FileSpreadsheet, Newspaper, GitBranch, Grid2X2,
  Book, Mic
} from 'lucide-react';

interface Option {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  category: 'role' | 'context' | 'task' | 'format';
}

// ROLES (20 options)
const ROLES: Option[] = [
  { id: 'guide', label: '여행 가이드', desc: '20년 경력의 베테랑 현지 여행 가이드', icon: <Plane className="w-4 h-4" />, category: 'role' },
  { id: 'writer', label: '에세이 작가', desc: '사람들의 마음을 울리는 감성 에세이 작가', icon: <PenTool className="w-4 h-4" />, category: 'role' },
  { id: 'marketer', label: '마케터', desc: '트렌드를 선도하는 10년 차 수석 마케터', icon: <Megaphone className="w-4 h-4" />, category: 'role' },
  { id: 'developer', label: '개발자', desc: '효율적이고 깔끔한 코드를 작성하는 시니어 개발자', icon: <Terminal className="w-4 h-4" />, category: 'role' },
  { id: 'teacher', label: '선생님', desc: '아이들의 눈높이에 맞춰 설명하는 친절한 초등 교사', icon: <GraduationCap className="w-4 h-4" />, category: 'role' },
  { id: 'chef', label: '3성급 셰프', desc: '미슐랭 3스타 레스토랑의 총괄 셰프', icon: <Utensils className="w-4 h-4" />, category: 'role' },
  { id: 'trainer', label: '헬스 트레이너', desc: '과학적인 운동법을 제시하는 전문 퍼스널 트레이너', icon: <Dumbbell className="w-4 h-4" />, category: 'role' },
  { id: 'ceo', label: '스타트업 CEO', desc: '혁신적인 비전을 가진 유니콘 스타트업 창업자', icon: <Briefcase className="w-4 h-4" />, category: 'role' },
  { id: 'counselor', label: '심리 상담사', desc: '따뜻한 공감 능력으로 마음을 치유하는 심리 상담사', icon: <Heart className="w-4 h-4" />, category: 'role' },
  { id: 'critic', label: '영화 평론가', desc: '날카로운 분석력과 풍부한 지식을 갖춘 평론가', icon: <Film className="w-4 h-4" />, category: 'role' },
  // Added 11-20
  { id: 'designer', label: 'UX 디자이너', desc: '사용자 경험을 최우선으로 생각하는 수석 디자이너', icon: <Palette className="w-4 h-4" />, category: 'role' },
  { id: 'doctor', label: '전문의', desc: '친절하고 정확한 의학 지식을 전달하는 전문의', icon: <Stethoscope className="w-4 h-4" />, category: 'role' },
  { id: 'lawyer', label: '변호사', desc: '법률적 문제를 명쾌하게 해결해주는 유능한 변호사', icon: <Gavel className="w-4 h-4" />, category: 'role' },
  { id: 'data', label: '데이터 과학자', desc: '데이터에서 통찰을 찾아내는 데이터 사이언티스트', icon: <Database className="w-4 h-4" />, category: 'role' },
  { id: 'musician', label: '작곡가', desc: '감성적인 멜로디와 가사를 쓰는 싱어송라이터', icon: <Music className="w-4 h-4" />, category: 'role' },
  { id: 'historian', label: '역사학자', desc: '과거와 현재를 잇는 통찰력을 가진 역사학자', icon: <Landmark className="w-4 h-4" />, category: 'role' },
  { id: 'gamer', label: '프로게이머', desc: '게임 전략과 공략에 통달한 프로게이머', icon: <Gamepad2 className="w-4 h-4" />, category: 'role' },
  { id: 'translator', label: '번역가', desc: '원문의 뉘앙스를 완벽하게 살리는 전문 번역가', icon: <Globe className="w-4 h-4" />, category: 'role' },
  { id: 'consultant', label: '컨설턴트', desc: '문제 해결을 위한 전략을 제시하는 경영 컨설턴트', icon: <Lightbulb className="w-4 h-4" />, category: 'role' },
  { id: 'architect', label: '건축가', desc: '공간의 미학과 실용성을 설계하는 건축가', icon: <CheckSquare className="w-4 h-4" />, category: 'role' },
];

// CONTEXTS (20 options)
const CONTEXTS: Option[] = [
  { id: 'travel', label: '도쿄 가족 여행', desc: '부모님과 초등학생 조카를 동반한 3박 4일 도쿄 가족 여행', icon: <MapPin className="w-4 h-4" />, category: 'context' },
  { id: 'rain', label: '비 오는 카페', desc: '장마철 비가 쏟아지는 오후, 재즈가 흐르는 조용한 카페 창가', icon: <Coffee className="w-4 h-4" />, category: 'context' },
  { id: 'product', label: '텀블러 출시', desc: '2030 세대를 타겟으로 한 친환경 텀블러 신제품 런칭', icon: <ShoppingBag className="w-4 h-4" />, category: 'context' },
  { id: 'error', label: '서버 에러', desc: '원인을 알 수 없는 500 내부 서버 오류가 간헐적으로 발생하는 상황', icon: <AlertTriangle className="w-4 h-4" />, category: 'context' },
  { id: 'class', label: 'AI 수업', desc: '컴퓨터를 잘 모르는 학생들을 대상으로 한 인공지능 기초 수업', icon: <BookOpen className="w-4 h-4" />, category: 'context' },
  { id: 'cooking', label: '냉장고 파먹기', desc: '냉장고에 남은 자투리 재료만으로 저녁을 해결해야 하는 상황', icon: <Utensils className="w-4 h-4" />, category: 'context' },
  { id: 'interview', label: '면접 준비', desc: '가고 싶었던 꿈의 기업 최종 임원 면접을 하루 앞둔 상황', icon: <UserCheck className="w-4 h-4" />, category: 'context' },
  { id: 'youtube', label: '유튜브 시작', desc: 'IT 기기 리뷰 채널을 처음 개설하고 첫 영상을 기획하는 단계', icon: <Video className="w-4 h-4" />, category: 'context' },
  { id: 'apology', label: '업무 실수 사과', desc: '중요한 이메일에서 오타를 내어 거래처에 사과해야 하는 상황', icon: <Mail className="w-4 h-4" />, category: 'context' },
  { id: 'birthday', label: '깜짝 생일파티', desc: '가장 친한 친구를 위해 잊지 못할 깜짝 생일 파티를 준비 중', icon: <Gift className="w-4 h-4" />, category: 'context' },
  // Added 11-20
  { id: 'wedding', label: '결혼식 축사', desc: '가장 친한 친구의 결혼식에서 낭독할 감동적인 축사 준비', icon: <Heart className="w-4 h-4" />, category: 'context' },
  { id: 'diet', label: '다이어트', desc: '여름 휴가를 한 달 앞두고 급하게 다이어트를 시작하는 상황', icon: <Dumbbell className="w-4 h-4" />, category: 'context' },
  { id: 'investment', label: '주식 투자', desc: '사회초년생이 처음으로 여유 자금을 주식에 투자하려는 상황', icon: <TrendingUp className="w-4 h-4" />, category: 'context' },
  { id: 'moving', label: '이사 준비', desc: '생애 첫 독립을 위해 포장이사를 준비하고 체크리스트를 점검 중', icon: <Truck className="w-4 h-4" />, category: 'context' },
  { id: 'hackathon', label: '해커톤 참가', desc: '무박 2일 해커톤 대회에서 팀원들과 아이디어를 구체화하는 단계', icon: <Code className="w-4 h-4" />, category: 'context' },
  { id: 'date', label: '첫 소개팅', desc: '이번 주말 설레는 첫 소개팅을 앞두고 장소와 대화 주제 고민', icon: <Coffee className="w-4 h-4" />, category: 'context' },
  { id: 'conflict', label: '층간소음 항의', desc: '윗집 층간소음 문제로 정중하지만 단호하게 쪽지를 남기려는 상황', icon: <MessageSquareWarning className="w-4 h-4" />, category: 'context' },
  { id: 'presentation', label: '발표 준비', desc: '승진이 걸린 중요한 프로젝트 발표 자료를 만들고 있는 상황', icon: <MonitorPlay className="w-4 h-4" />, category: 'context' },
  { id: 'gardening', label: '식물 키우기', desc: '베란다 텃밭에서 방울토마토와 상추를 처음 키워보는 상황', icon: <Sprout className="w-4 h-4" />, category: 'context' },
  { id: 'bookclub', label: '독서 모임', desc: '독서 모임의 발제자를 맡아 토론할 질문 리스트를 준비하는 상황', icon: <Book className="w-4 h-4" />, category: 'context' },
];

// TASKS (20 options)
const TASKS: Option[] = [
  { id: 'plan', label: '코스 추천', desc: '동선이 효율적이고 모두가 만족할 만한 일정표와 꿀팁 작성', icon: <List className="w-4 h-4" />, category: 'task' },
  { id: 'essay', label: '글귀 묘사', desc: '눈앞에 그려지듯 생생한 묘사와 서정적인 짧은 글귀 작성', icon: <Feather className="w-4 h-4" />, category: 'task' },
  { id: 'sns', label: 'SNS 홍보', desc: '클릭을 부르는 매력적인 인스타그램 캡션과 해시태그 작성', icon: <Instagram className="w-4 h-4" />, category: 'task' },
  { id: 'debug', label: '디버깅', desc: '예상되는 원인을 분석하고 해결할 수 있는 코드 및 조치사항 제시', icon: <Bug className="w-4 h-4" />, category: 'task' },
  { id: 'guide', label: '수업 지도안', desc: '흥미를 유발할 수 있는 도입부와 쉬운 예시가 포함된 수업 지도안 작성', icon: <FileText className="w-4 h-4" />, category: 'task' },
  { id: 'recipe', label: '레시피 개발', desc: '재료 손질부터 플레이팅까지 누구나 따라 할 수 있는 상세 레시피 작성', icon: <Utensils className="w-4 h-4" />, category: 'task' },
  { id: 'qna', label: '예상 질문', desc: '나올 법한 날카로운 예상 질문 10가지와 모범 답변 작성', icon: <MessageCircleQuestion className="w-4 h-4" />, category: 'task' },
  { id: 'script', label: '대본 작성', desc: '시청자의 이목을 끄는 오프닝과 짜임새 있는 영상 대본 작성', icon: <Film className="w-4 h-4" />, category: 'task' },
  { id: 'email', label: '이메일 초안', desc: '정중하면서도 진심이 느껴지는 비즈니스 이메일 초안 작성', icon: <Mail className="w-4 h-4" />, category: 'task' },
  { id: 'schedule', label: '타임테이블', desc: '분 단위로 꼼꼼하게 계획된 행사 큐시트 및 체크리스트 작성', icon: <Calendar className="w-4 h-4" />, category: 'task' },
  // Added 11-20
  { id: 'translate', label: '번역', desc: '원문의 의미를 살려 자연스럽고 매끄러운 한국어로 번역', icon: <Languages className="w-4 h-4" />, category: 'task' },
  { id: 'summary', label: '요약', desc: '긴 글의 핵심 내용을 파악하여 3줄로 간결하게 요약', icon: <FileText className="w-4 h-4" />, category: 'task' },
  { id: 'brainstorm', label: '아이디어', desc: '창의적이고 실현 가능한 아이디어 10가지를 브레인스토밍', icon: <Lightbulb className="w-4 h-4" />, category: 'task' },
  { id: 'correct', label: '교정/교열', desc: '오탈자를 수정하고 문맥에 맞게 문장을 다듬어 완성도 높이기', icon: <CheckCircle className="w-4 h-4" />, category: 'task' },
  { id: 'analyze', label: '분석', desc: '주어진 주제의 장단점을 분석하고 개선안을 논리적으로 도출', icon: <Search className="w-4 h-4" />, category: 'task' },
  { id: 'interview_q', label: '인터뷰 질문', desc: '상대방의 깊이 있는 답변을 이끌어낼 수 있는 심층 인터뷰 질문 작성', icon: <Mic className="w-4 h-4" />, category: 'task' },
  { id: 'naming', label: '네이밍', desc: '브랜드의 정체성을 담은 기억에 남는 이름과 슬로건 짓기', icon: <Tag className="w-4 h-4" />, category: 'task' },
  { id: 'lyrics', label: '작사', desc: '곡의 분위기에 맞는 감성적이고 운율이 살아있는 가사 작성', icon: <Music className="w-4 h-4" />, category: 'task' },
  { id: 'codereview', label: '코드 리뷰', desc: '코드의 성능, 가독성, 안정성을 높일 수 있는 구체적인 리뷰 작성', icon: <Code2 className="w-4 h-4" />, category: 'task' },
  { id: 'consult', label: '고민 상담', desc: '상황에 공감하며 현실적이고 따뜻한 위로와 조언 건네기', icon: <Heart className="w-4 h-4" />, category: 'task' },
];

// FORMATS (20 options)
const FORMATS: Option[] = [
  { id: 'table', label: '표 (Table)', desc: '한눈에 파악하기 쉬운 마크다운 표(Table) 형식', icon: <Table className="w-4 h-4" />, category: 'format' },
  { id: 'prose', label: '줄글', desc: '부드럽게 읽히는 줄글(Prose) 및 문단 형식', icon: <AlignLeft className="w-4 h-4" />, category: 'format' },
  { id: 'emoji', label: '이모지 리스트', desc: '이모지를 적극 활용한 불렛 포인트 리스트', icon: <Smile className="w-4 h-4" />, category: 'format' },
  { id: 'code', label: '코드 블록', desc: '복사 붙여넣기 가능한 마크다운 코드 블록', icon: <Code className="w-4 h-4" />, category: 'format' },
  { id: 'bullet', label: '개조식', desc: '핵심 내용만 간결하게 요약한 개조식 스타일', icon: <ListChecks className="w-4 h-4" />, category: 'format' },
  { id: 'json', label: 'JSON 데이터', desc: '프로그램에서 바로 사용할 수 있는 JSON 데이터 포맷', icon: <FileJson className="w-4 h-4" />, category: 'format' },
  { id: 'dialogue', label: '대화문', desc: '두 사람 이상의 대화가 오가는 희곡/스크립트 형식', icon: <MessageCircle className="w-4 h-4" />, category: 'format' },
  { id: 'poem', label: '시(Poem)', desc: '운율과 함축적인 의미가 담긴 시(Poem) 형식', icon: <Feather className="w-4 h-4" />, category: 'format' },
  { id: 'checklist', label: '체크리스트', desc: '확인란(Checkbox)이 포함된 할 일 목록 형식', icon: <CheckSquare className="w-4 h-4" />, category: 'format' },
  { id: 'email_fmt', label: '이메일 서식', desc: '수신인, 참조, 제목, 본문이 갖춰진 이메일 템플릿 형식', icon: <Mail className="w-4 h-4" />, category: 'format' },
  // Added 11-20
  { id: 'markdown', label: '마크다운', desc: '헤더(#)와 볼드(**) 등을 활용한 깔끔한 마크다운 문서', icon: <FileCode className="w-4 h-4" />, category: 'format' },
  { id: 'csv', label: 'CSV', desc: '데이터 분석을 위한 쉼표로 구분된 텍스트(CSV) 형식', icon: <FileSpreadsheet className="w-4 h-4" />, category: 'format' },
  { id: 'html', label: 'HTML', desc: '웹페이지에 바로 삽입할 수 있는 시맨틱한 HTML 태그 구조', icon: <Code2 className="w-4 h-4" />, category: 'format' },
  { id: 'sql', label: 'SQL', desc: '데이터베이스 조회를 위한 표준 SQL 쿼리문', icon: <Database className="w-4 h-4" />, category: 'format' },
  { id: 'scenario', label: '시나리오', desc: '장면 번호, 지문, 대사가 포함된 드라마 대본 형식', icon: <Film className="w-4 h-4" />, category: 'format' },
  { id: 'news', label: '뉴스 기사', desc: '표제, 부제, 리드문, 본문으로 구성된 보도자료 형식', icon: <Newspaper className="w-4 h-4" />, category: 'format' },
  { id: 'report', label: '보고서', desc: '개요-현황-문제점-해결방안-결론의 정식 보고서 형식', icon: <FileText className="w-4 h-4" />, category: 'format' },
  { id: 'mindmap', label: '마인드맵', desc: '중심 주제에서 하위 주제로 뻗어나가는 계층적 텍스트 구조', icon: <GitBranch className="w-4 h-4" />, category: 'format' },
  { id: 'swot', label: 'SWOT 분석', desc: '강점, 약점, 기회, 위협을 4분면으로 정리한 분석 틀', icon: <Grid2X2 className="w-4 h-4" />, category: 'format' },
  { id: 'recipe_card', label: '레시피 카드', desc: '준비물, 조리 시간, 난이도, 순서가 명확한 요리 카드 형식', icon: <Utensils className="w-4 h-4" />, category: 'format' },
];

type TabType = 'role' | 'context' | 'task' | 'format';

export default function PromptMasterClass() {
  const [activeTab, setActiveTab] = useState<TabType>('role');
  const [selectedRole, setSelectedRole] = useState<Option | null>(null);
  const [selectedContext, setSelectedContext] = useState<Option | null>(null);
  const [selectedTask, setSelectedTask] = useState<Option | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<Option | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (selectedRole && selectedContext && selectedTask && selectedFormat) {
      const prompt = `
# Role (역할)
당신은 ${selectedRole.desc}입니다.
전문가의 관점에서 통찰력 있고 신뢰할 수 있는 답변을 제공해주세요.

# Context (상황)
현재 상황은 다음과 같습니다: ${selectedContext.desc}.
이러한 배경을 충분히 고려하여 상황에 꼭 맞는 답변을 해주세요.

# Task (지시)
당신의 임무는 다음을 수행하는 것입니다: ${selectedTask.desc}.
구체적이고 실용적인 내용을 포함하여 완성도 높은 결과를 만들어주세요.

# Format (형식)
최종 결과물은 ${selectedFormat.desc}으로 작성해주세요.
가독성을 높이고 핵심 내용이 잘 전달되도록 구성해주세요.
`.trim();
      setGeneratedPrompt(prompt);
      setIsCopied(false);
    } else {
      setGeneratedPrompt('');
    }
  }, [selectedRole, selectedContext, selectedTask, selectedFormat]);

  const handleCopy = () => {
    if (!generatedPrompt) return;
    navigator.clipboard.writeText(generatedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedRole(null);
    setSelectedContext(null);
    setSelectedTask(null);
    setSelectedFormat(null);
    setGeneratedPrompt('');
    setActiveTab('role');
  };

  const handleSelection = (option: Option) => {
    switch (option.category) {
      case 'role':
        setSelectedRole(option);
        setTimeout(() => setActiveTab('context'), 200); // Auto-advance
        break;
      case 'context':
        setSelectedContext(option);
        setTimeout(() => setActiveTab('task'), 200);
        break;
      case 'task':
        setSelectedTask(option);
        setTimeout(() => setActiveTab('format'), 200);
        break;
      case 'format':
        setSelectedFormat(option);
        break;
    }
  };

  const getActiveOptions = () => {
    switch (activeTab) {
      case 'role': return ROLES;
      case 'context': return CONTEXTS;
      case 'task': return TASKS;
      case 'format': return FORMATS;
      default: return [];
    }
  };

  const getSelectedOptionForTab = (tab: TabType) => {
    switch (tab) {
      case 'role': return selectedRole;
      case 'context': return selectedContext;
      case 'task': return selectedTask;
      case 'format': return selectedFormat;
      default: return null;
    }
  };

  const tabs: { id: TabType; label: string; color: string }[] = [
    { id: 'role', label: 'R: Role', color: 'indigo' },
    { id: 'context', label: 'C: Context', color: 'purple' },
    { id: 'task', label: 'T: Task', color: 'emerald' },
    { id: 'format', label: 'F: Format', color: 'orange' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl mt-8">
      {/* Left Panel: Tabs & Grid - Width reduced from lg:w-1/2 to lg:w-[35%] */}
      <div className="w-full lg:w-[35%] flex flex-col bg-slate-50 border-r border-slate-200">
        
        {/* Header & Tabs */}
        <div className="bg-white border-b border-slate-200">
           <div className="p-4 flex justify-between items-center border-b border-slate-100">
             <div>
                <h3 className="text-lg font-extrabold text-slate-800">프롬프트 빌더</h3>
                <p className="text-xs font-bold text-slate-400">4단계(RCTF)를 순서대로 선택하세요.</p>
             </div>
             <button 
                onClick={handleReset} 
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                title="초기화"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
           </div>
           
           <div className="flex w-full">
             {tabs.map((tab) => {
               const isSelected = activeTab === tab.id;
               const hasValue = !!getSelectedOptionForTab(tab.id);
               return (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex-1 py-3 text-xs font-bold border-b-2 transition-colors relative ${
                     isSelected 
                       ? `border-${tab.color}-500 text-${tab.color}-700 bg-${tab.color}-50/50` 
                       : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                   }`}
                 >
                   {tab.label}
                   {hasValue && (
                     <span className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-${tab.color}-500`} />
                   )}
                 </button>
               );
             })}
           </div>
        </div>

        {/* Content Grid (Scrollable) */}
        <div className="flex-1 p-3 overflow-y-auto custom-scrollbar">
           <div className="grid grid-cols-2 gap-2 content-start">
             {getActiveOptions().map((opt) => {
               const selected = getSelectedOptionForTab(activeTab);
               const isSelected = selected?.id === opt.id;
               const color = tabs.find(t => t.id === activeTab)?.color || 'indigo';
               
               return (
                 <button
                   key={opt.id}
                   onClick={() => handleSelection(opt)}
                   className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all border shadow-sm h-[48px] ${
                     isSelected
                       ? `bg-${color}-50 border-${color}-300 ring-1 ring-${color}-300 text-${color}-900`
                       : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600'
                   }`}
                 >
                   <div className={`p-1 rounded-md flex-shrink-0 ${isSelected ? 'bg-white/60' : 'bg-slate-100'}`}>
                     {opt.icon}
                   </div>
                   <div className="min-w-0">
                     <div className="text-xs font-extrabold truncate">{opt.label}</div>
                   </div>
                   {isSelected && <Check className={`w-3.5 h-3.5 ml-auto text-${color}-600`} />}
                 </button>
               );
             })}
           </div>
        </div>
      </div>

      {/* Right Panel: Result & Copy */}
      <div className="flex-1 flex flex-col bg-slate-50/50">
        <div className="p-6 flex-1 flex flex-col h-full">
           <div className="mb-4 flex-shrink-0">
              <div className="flex justify-between items-center mb-2">
                 <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Result Preview</h4>
              </div>
              
              {/* Selection Chips */}
              <div className="flex flex-wrap gap-2 min-h-[28px]">
                {selectedRole && <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-[10px] font-bold border border-indigo-200">R: {selectedRole.label}</span>}
                {selectedContext && <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-700 text-[10px] font-bold border border-purple-200">C: {selectedContext.label}</span>}
                {selectedTask && <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold border border-emerald-200">T: {selectedTask.label}</span>}
                {selectedFormat && <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold border border-orange-200">F: {selectedFormat.label}</span>}
              </div>
           </div>

           {/* Text Area - Expanded Height */}
           <div className="flex-1 relative group flex flex-col">
             <textarea
               readOnly
               value={generatedPrompt || "좌측에서 4가지 요소를 모두 선택하면,\n이곳에 완성된 프롬프트가 나타납니다."}
               className={`w-full flex-1 p-5 rounded-xl border-2 resize-none font-mono text-xs md:text-sm leading-relaxed transition-colors focus:outline-none shadow-inner ${
                 generatedPrompt 
                   ? 'bg-white border-indigo-100 text-slate-700' 
                   : 'bg-slate-100/50 border-dashed border-slate-200 text-slate-400'
               }`}
             />
           </div>

           {/* Action Button */}
           <div className="mt-4 flex-shrink-0">
             <button
               onClick={handleCopy}
               disabled={!generatedPrompt}
               className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                 generatedPrompt
                   ? isCopied 
                      ? 'bg-emerald-500 text-white scale-95'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5'
                   : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
               }`}
             >
               {isCopied ? (
                 <>
                   <Check className="w-4 h-4" /> 복사 완료!
                 </>
               ) : (
                 <>
                   <Copy className="w-4 h-4" /> 프롬프트 복사하기
                 </>
               )}
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}