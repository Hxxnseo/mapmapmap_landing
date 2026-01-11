
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockups = [
  {
    src: '/mockup-1.png',
    title: '나와 같은 레벨만 보기',
    desc: '내 맵기 레벨과 같은 사람들의 리뷰만 필터링'
  },
  {
    src: '/mockup-2.png',
    title: '레벨별 맵기 반응',
    desc: '맵찔이부터 고수까지, 각 레벨의 생생한 반응'
  },
  {
    src: '/mockup-3.png',
    title: 'MAP-BTI 맞춤 추천',
    desc: '나와 같은 미각 유형이 좋아한 맛집만 쏙쏙'
  }
];

export const AppPreview: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mockups.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + mockups.length) % mockups.length);
  const next = () => setCurrent((c) => (c + 1) % mockups.length);

  return (
    <section className="py-32 px-4 bg-brand-black overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4">App Preview</span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          핵심 기능 미리보기 👀
        </h2>
        <p className="text-white/60 mb-12 text-lg">이런 기능들을 준비하고 있어요!</p>

        {/* Slider Container */}
        <div className="w-full max-w-md relative group">
          {/* Main Image */}
          <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
            <img 
              src={mockups[current].src} 
              alt={mockups[current].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <h3 className="text-xl font-bold text-white mb-1">{mockups[current].title}</h3>
              <p className="text-white/60 text-sm">{mockups[current].desc}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-x-6"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-6"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-3 mt-8">
          {mockups.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-brand-red w-8' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
        
        <p className="mt-10 text-sm text-white/40 bg-white/5 px-6 py-3 rounded-full border border-white/10">
          <span className="text-brand-red font-bold">🚀 2026년 상반기 출시 예정</span> | 사전등록하면 제일 먼저 써볼 수 있어요
        </p>
      </div>
    </section>
  );
};
