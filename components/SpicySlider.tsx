import React, { useState } from 'react';
import { SPICY_LEVELS } from '../constants';

export const SpicySlider: React.FC = () => {
  const [level, setLevel] = useState(2);
  const currentData = SPICY_LEVELS[level];

  return (
    <section className="py-32 px-6 bg-brand-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase">
                Identify<br/>Your <span className="text-brand-red italic">Soul</span><br/>Spicy
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium max-w-xs">
                나의 매운맛 수용 한계치를<br/>직관적으로 확인해보세요.
            </p>

            {/* Numeric Indicators */}
            <div className="mt-12 space-y-4">
                {SPICY_LEVELS.map((lvl, i) => (
                    <button 
                        key={i}
                        onClick={() => setLevel(i)}
                        className={`flex items-center gap-6 w-full group text-left transition-all duration-300 ${level === i ? 'opacity-100' : 'opacity-20 hover:opacity-50'}`}
                    >
                        <span className="text-2xl font-black font-mono">0{i}</span>
                        <div className={`h-[1px] flex-grow transition-all duration-500 ${level === i ? 'bg-brand-red scale-x-100' : 'bg-white scale-x-50 origin-left'}`}></div>
                        <span className="text-xl font-bold uppercase">{lvl.label.split(' ')[1]}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Dynamic Card Area */}
        <div className="relative group">
            <div className={`absolute inset-0 bg-brand-red/20 blur-[80px] rounded-full transition-opacity duration-700 ${level > 3 ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className={`relative bg-brand-gray/40 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 ${level > 4 ? 'animate-wiggle' : ''}`}>
                {/* Level Tag */}
                <div className="absolute top-8 right-8 bg-brand-red text-white text-xs font-black px-4 py-2 rounded-full">
                    LEVEL. {level}
                </div>

                <div className="flex flex-col h-full">
                    <span className="text-[10rem] mb-4 block filter grayscale-0 drop-shadow-[0_10px_30px_rgba(230,33,23,0.3)] transition-all duration-500 transform scale-110 group-hover:scale-125">
                        {currentData.emoji}
                    </span>
                    
                    <h3 className="text-4xl font-black mb-4 flex items-baseline gap-2">
                        {currentData.label}
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                            <p className="text-2xl font-bold">{currentData.description}</p>
                        </div>
                        <div>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Standard</p>
                            <p className="text-lg text-white/80 leading-relaxed italic">"{currentData.example}"</p>
                        </div>
                    </div>
                </div>

                {/* Progress Bar Inside Card */}
                <div className="mt-12 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-red transition-all duration-700 ease-out shadow-[0_0_20px_#E62117]"
                        style={{ width: `${(level/5)*100}%` }}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};