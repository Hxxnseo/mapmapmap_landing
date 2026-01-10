
import React, { useState, useEffect } from 'react';
import { TOTAL_REGISTRATIONS, LAUNCH_DATE } from '../constants';
import { Clock, Zap, Gift, Shield, Coins, Crown, Pill } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 99, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor(distance / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 md:px-6 bg-brand-red relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,white_20px,white_21px)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Copy & Timer */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white text-brand-red px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-[0.2em] mb-6 shadow-xl self-center lg:self-start animate-bounce">
              <Zap size={14} fill="currentColor" />
              Time Attack
            </div>
            
            <h2 className="text-5xl md:text-7xl font-[900] text-white leading-[0.9]  italic tracking-tighter mb-6">
              사전등록<br/>
              <span className="text-brand-black">5,000p</span> 한정혜택
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-bold max-w-md leading-snug mb-10 mx-auto lg:mx-0">
                지금 고민하는 순간,<br/>
                지급되는 포인트가 <span className="bg-brand-black text-white px-1">1/10로 줄어듭니다</span><br/>
                지금 당장 맵맵맵의 '메이커'를 노려보세요
            </p>

            {/* Visual Timer */}
            {/* <div className="bg-brand-black/20 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 inline-block max-w-lg mx-auto lg:mx-0">
                <div className="flex justify-center gap-4 md:gap-8">
                    {[
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds }
                    ].map((t, i) => (
                        <div key={i} className="text-center">
                            <div className="bg-white text-brand-red rounded-xl p-2 min-w-[3.5rem] md:min-w-[4.5rem]">
                                <div className="text-3xl md:text-4xl font-black font-mono tabular-nums leading-none">
                                    {t.value.toString().padStart(2, '0')}
                                </div>
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mt-2">{t.label}</div>
                        </div>
                    ))}
                </div>
            </div> */}
          </div>

          {/* Right Column: Benefit Details */}
          <div className="w-full max-w-md lg:max-w-lg mx-auto">
            <div className="bg-brand-black p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 h-full flex flex-col">
                
                <h3 className="text-white font-black text-2xl italic uppercase mb-8 flex items-center gap-2">
                    <Gift className="text-brand-orange" />
                    Exclusive Benefits
                </h3>

                <div className="space-y-6 flex-1">
                    {/* Benefit 1 */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-brand-red/50 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                <Coins size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-bold text-white text-lg">최대 5,000P 지급</h4>
                                    <span className="text-[10px] bg-brand-red text-white px-2 py-0.5 rounded-full font-bold animate-pulse">x10배</span>
                                </div>
                                <p className="text-white/40 text-xs mb-3">
                                    100시간 내 등록 시 <span className="text-white font-bold underline">5,000P</span> (이후 500P)
                                </p>
                                
                                {/* 포인트 가치 설명 */}
                                <div className="bg-gradient-to-r from-brand-orange/20 to-brand-red/20 rounded-xl p-4 border border-brand-orange/30">
                                    <p className="text-brand-orange font-bold text-sm mb-2">💰 5,000P = 현금 5,000원 가치!</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">🍜</span>
                                            <span>맵맵맵 <span className="text-white font-bold">제휴 맛집 할인</span>에 사용</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">🎁</span>
                                            <span><span className="text-white font-bold">굿즈 & 상품권</span> 교환</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">💊</span>
                                            <span><span className="text-white font-bold">위장약 & 쿨피스</span> 구매 (매운맛 필수템!)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-brand-red/50 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Crown size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">맵맵맵 메이커 자격</h4>
                                <p className="text-white/60 text-sm leading-snug mb-3">
                                    함께 앱을 만들어가는 <span className="text-white font-bold">'메이커(Maker)'</span> 지원 가능
                                </p>
                                <ul className="space-y-1">
                                    <li className="flex items-center gap-2 text-xs text-white/50">
                                        <Shield size={12} className="text-purple-400" />
                                        <span>프로필용 <span className="text-white font-bold">한정판 Maker 뱃지</span> 지급</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-right">
                          <span className="text-white/50 text-xs">* 메이커는 추후 사전 등록 인원 중 선정됩니다</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/30 text-xs font-medium">
                        * 마감 임박: 현재 <span className="text-brand-red font-bold underline">{TOTAL_REGISTRATIONS}명</span>이 혜택을 선점했습니다.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
