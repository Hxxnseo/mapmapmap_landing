
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-brand-black px-6">
      {/* Background Graphic Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-red/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[100px] rounded-full"></div>

      {/* Main Copy */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="overflow-hidden mb-2">
            <span className="inline-block text-brand-orange font-black text-sm md:text-base tracking-[0.2em] animate-pulse">
                대한민국 표준 맵기 가이드
            </span>
        </div>
        
        <h1 className="text-[16vw] md:text-[10rem] font-[900] leading-[1] tracking-tighter mb-8 break-keep">
            <div className="flex items-center gap-4">
                <span className="shrink-0">더 이상</span>
                <div className="w-[16vw] h-[10vw] md:w-[12rem] md:h-[8rem] overflow-hidden rounded-full border-2 border-brand-red inline-block rotate-[-10deg] shrink-0">
                    <img src="https://placehold.co/400x400/E62117/FFFFFF/png?text=NO+MORE" className="w-full h-full object-cover" alt="Spicy Concept" />
                </div>
            </div>
            <div className="text-right flex flex-col items-end md:flex-row md:justify-end md:gap-8">
                <span className="text-brand-red">속지</span>
                <span className="text-outline italic">마세요</span>
            </div>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mt-4">
            <p className="text-lg md:text-2xl font-medium text-white/60 max-w-md leading-tight break-keep">
                사장님의 <span className="text-white">"안 매워요"</span>에<br/>
                뒤통수 맞은 당신을 위한<br/>
                <span className="text-white">진짜 맵레벨</span> 가이드
            </p>

            <button 
                onClick={scrollToForm}
                className="group flex items-center gap-4 bg-white text-black px-8 py-6 rounded-full hover:bg-brand-red hover:text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform hover:scale-105 active:scale-95 shadow-2xl shrink-0"
            >
                <span className="text-xl font-black tracking-tighter italic">지금 사전예약하기</span>
                <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center group-hover:bg-white transition-colors">
                    <ArrowRight className="text-white group-hover:text-brand-black transition-colors" />
                </div>
            </button>
        </div>
      </div>

      {/* Marquee Text - Updated to reflect 100 hours */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden py-4 border-y border-white/5 bg-white/5 backdrop-blur-sm select-none">
        <div className="flex whitespace-nowrap animate-marquee font-black text-xs md:text-sm tracking-widest text-white/40">
            {Array(10).fill(0).map((_, i) => (
                <span key={i} className="mx-8 flex items-center gap-2">
                    <span className="text-brand-red">●</span><span className="text-brand-red ml-4 italic">고민하는 순간 혜택 종료</span>
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};
