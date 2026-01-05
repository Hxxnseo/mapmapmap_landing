
import React, { useState, useEffect } from 'react';
import { TOTAL_REGISTRATIONS, LAUNCH_DATE } from '../constants';
import { Clock, Zap, Gift, Shield } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 71, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-brand-red relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,white_20px,white_21px)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white text-brand-red px-4 py-1 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-6 shadow-xl">
              <Zap size={14} fill="currentColor" />
              Limited Golden Window
            </div>
            <h2 className="text-6xl md:text-8xl font-[900] text-white leading-[0.85] uppercase italic tracking-tighter mb-8">
              Time is<br/>Running <span className="text-brand-black">Out</span>
            </h2>
            <p className="text-white/80 text-xl font-bold max-w-md leading-tight">
                오픈 기념 딱 72시간.<br/>
                이 시간이 지나면 평생 후회할<br/>
                <span className="text-white underline decoration-brand-black decoration-4">대장급 혜택</span>이 사라집니다.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div className="bg-brand-black p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 relative">
                {/* Visual Timer */}
                <div className="flex justify-between mb-12">
                    {[
                        { label: 'Hrs', value: timeLeft.hours },
                        { label: 'Min', value: timeLeft.minutes },
                        { label: 'Sec', value: timeLeft.seconds }
                    ].map((t, i) => (
                        <div key={i} className="text-center">
                            <div className="text-5xl md:text-6xl font-black font-mono tabular-nums text-brand-red mb-2">
                                {t.value.toString().padStart(2, '0')}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{t.label}</div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                            <Gift className="text-white" size={24} />
                        </div>
                        <div>
                            <h4 className="font-black text-white uppercase text-sm tracking-tight">5,000 Points Bonus</h4>
                            <p className="text-white/40 text-xs font-medium italic">리뷰 10개 분량 즉시 지급</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 group-hover:-rotate-12 transition-transform">
                            <Shield className="text-brand-red" size={24} />
                        </div>
                        <div>
                            <h4 className="font-black text-white uppercase text-sm tracking-tight">VIP "OG" Status</h4>
                            <p className="text-white/40 text-xs font-medium italic">평생 유지되는 맵고수 엠블럼</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-black text-brand-red leading-none">{TOTAL_REGISTRATIONS}</div>
                        <div className="text-[10px] font-black uppercase text-white/40 mt-1">People Joined</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-black text-white uppercase tracking-tighter italic">Hurry Up!</div>
                        <div className="w-24 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-brand-red animate-pulse" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
