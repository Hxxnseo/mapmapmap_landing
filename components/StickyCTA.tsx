
import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export const StickyCtA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="bg-brand-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm truncate">🚀 2026년 상반기 출시</p>
            <p className="text-white/50 text-xs truncate">선착순 혜택 놓치지 마세요!</p>
          </div>
          
          {/* Right: CTA Button */}
          <button
            onClick={scrollToForm}
            className="shrink-0 bg-brand-red hover:bg-brand-red/90 text-white font-bold px-5 py-3 rounded-xl text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            사전예약
            <ArrowRight size={16} />
          </button>
          
          {/* Close Button */}
          <button
            onClick={() => {
              setIsDismissed(true);
              setIsVisible(false);
            }}
            className="shrink-0 text-white/30 hover:text-white/60 transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
