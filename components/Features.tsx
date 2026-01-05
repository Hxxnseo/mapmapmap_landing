
import React from 'react';
import { Target, Zap, Check, AlertTriangle, XCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Row 1: Left Heavy - Standardization */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-40">
            <div className="lg:w-1/2 relative group w-full">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-brand-red/20 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Graphic Container */}
                <div className="relative aspect-[4/3] md:aspect-video rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/10 flex flex-col shadow-2xl">
                    {/* Header of the 'device' or 'card' */}
                    <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02]">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="ml-auto text-[10px] font-mono text-white/30 tracking-widest">SPICY_STANDARD_PROTOCOL_V1</div>
                    </div>

                    {/* Content: The Scale */}
                    <div className="flex-1 p-8 flex items-center justify-center relative">
                        {/* Grid lines background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="relative z-10 w-full max-w-sm space-y-3">
                            {[
                                { lv: 5, label: 'HELL', bar: 'w-full bg-gradient-to-r from-brand-red to-purple-600' },
                                { lv: 4, label: 'CRAZY', bar: 'w-[80%] bg-brand-red' },
                                { lv: 3, label: 'MANIA', bar: 'w-[60%] bg-brand-orange' },
                                { lv: 2, label: 'NORMAL', bar: 'w-[40%] bg-yellow-500' },
                                { lv: 1, label: 'BEGINNER', bar: 'w-[20%] bg-green-500' },
                                { lv: 0, label: 'NOOB', bar: 'w-[0%] bg-green-500' },
                            ].map((item) => (
                                <div key={item.lv} className="flex items-center gap-4 group/item">
                                    <span className="font-mono text-xs text-white/40 w-8">LV.{item.lv}</span>
                                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative">
                                        <div className={`absolute top-0 left-0 h-full ${item.bar} opacity-50 group-hover/item:opacity-100 transition-all duration-300 shadow-[0_0_10px_currentColor]`}></div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-white/20 w-16 text-right group-hover/item:text-white transition-colors">{item.label}</span>
                                </div>
                            ))}
                            
                            {/* Overlay Card indicating specific standard */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-black/90 backdrop-blur-md border border-brand-red/50 p-6 rounded-2xl shadow-2xl text-center transform group-hover:scale-105 transition-transform duration-500">
                                <div className="text-brand-red font-black text-5xl mb-1 drop-shadow-[0_0_15px_rgba(230,33,23,0.8)]">3.0</div>
                                <div className="text-white font-bold text-sm tracking-widest uppercase mb-2">Standard</div>
                                <div className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full">엽기떡볶이 오리지널</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 lg:pl-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/20 text-brand-red">
                        <Target size={24} />
                    </div>
                    <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Absolute Criteria</span>
                </div>
                <h4 className="text-white font-black uppercase tracking-tighter text-4xl md:text-5xl mb-6 leading-[0.9]">
                    01. 맵기 절대 기준<br/>
                    <span className="text-white/20">The Standard.</span>
                </h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium">
                    "사장님, 신라면 정도로 해주세요"는 이제 그만.<br/>
                    <span className="text-white font-bold underline decoration-brand-red underline-offset-4">맵레벨 0~5</span> 시스템으로 세상 모든 매운맛을 정렬했습니다. 엽떡 오리지널은 전국 어디서나 레벨 3입니다.
                </p>
            </div>
        </div>

        {/* Row 2: Right Heavy - Sync Review */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2 relative group w-full">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Graphic Container */}
                <div className="relative aspect-[4/3] md:aspect-video rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/10 flex flex-col shadow-2xl">
                    {/* Header */}
                    <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                        <span className="text-[10px] font-mono text-white/30 tracking-widest">SYNC_REVIEW_FILTERING_SYSTEM</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                            <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                        </div>
                    </div>

                    {/* Content: Review filtering simulation */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative overflow-hidden">
                        {/* Abstract connection lines */}
                        <div className="absolute inset-0 flex justify-center">
                            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                        </div>

                        {/* Review Item 1: Mismatch (Blurry/Hidden style) */}
                        <div className="relative mb-4 opacity-30 scale-95 blur-[2px] transition-all duration-500 hover:opacity-50 hover:blur-0">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-black">LV.5</div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-white/10 rounded mb-1"></div>
                                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                </div>
                                <XCircle className="text-red-500/50" size={20} />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">TOO SPICY FOR YOU</span>
                            </div>
                        </div>

                        {/* Review Item 2: Match (Highlighted) */}
                        <div className="relative z-10 transform scale-105 transition-transform duration-500">
                             <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-red opacity-30 blur rounded-2xl"></div>
                             <div className="relative bg-brand-gray p-5 rounded-xl border border-brand-orange/50 flex gap-4 items-start shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-brand-orange text-black flex items-center justify-center font-black text-sm">LV.2</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-white">동네맵찔이</span>
                                        <span className="text-[10px] text-brand-orange font-bold px-2 py-0.5 bg-brand-orange/10 rounded-full border border-brand-orange/20">PERFECT MATCH</span>
                                    </div>
                                    <p className="text-sm text-white/90 leading-snug">
                                        "이거 딱 우리 레벨이에요! 신라면보다 살짝 덜 매운 정도? 안심하고 드세요 ㅋㅋ"
                                    </p>
                                </div>
                                <div className="absolute -top-2 -right-2 bg-green-500 text-black p-1 rounded-full border-2 border-[#111]">
                                    <Check size={12} strokeWidth={4} />
                                </div>
                            </div>
                        </div>

                        {/* Review Item 3: Mismatch (Blurry) */}
                        <div className="relative mt-4 opacity-30 scale-95 blur-[2px] transition-all duration-500 hover:opacity-50 hover:blur-0">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-black">LV.0</div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-white/10 rounded"></div>
                                </div>
                                <AlertTriangle className="text-yellow-500/50" size={20} />
                            </div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">TOO BLAND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 lg:pr-8">
                <div className="flex items-center gap-3 mb-6 lg:justify-end">
                    <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Smart Filtering</span>
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 text-brand-orange">
                        <Zap size={24} />
                    </div>
                </div>
                <h4 className="text-white font-black uppercase tracking-tighter text-4xl md:text-5xl mb-6 leading-[0.9] lg:text-right">
                    02. 맵동기 동기화<br/>
                    <span className="text-white/20">Sync Review.</span>
                </h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium lg:text-right">
                    맵찔이의 "매워요"와 맵고수의 "매워요"는 다릅니다.<br/>
                    <span className="text-white font-bold underline decoration-brand-orange underline-offset-4">당신과 같은 레벨</span>을 가진 유저들의 데이터만 큐레이션하여 당신의 실패 확률을 0%로 줄입니다.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
