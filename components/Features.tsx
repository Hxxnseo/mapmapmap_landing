
import React from 'react';
import { Target, Zap, Check, AlertTriangle, XCircle, Flame } from 'lucide-react';

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
                        <div className="ml-auto text-[10px] font-mono text-white/30 tracking-widest">PERSONAL_SPICE_ANALYZER</div>
                    </div>

                    {/* Content: The Scale */}
                    <div className="flex-1 p-8 flex items-center justify-center relative">
                        {/* Grid lines background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="relative z-10 w-full max-w-sm space-y-3">
                            {[
                                { lv: 5, label: 'DANGER', bar: 'w-full bg-gradient-to-r from-brand-red to-purple-600' },
                                { lv: 4, label: 'WARNING', bar: 'w-[80%] bg-brand-red' },
                                { lv: 3, label: 'CAUTION', bar: 'w-[60%] bg-brand-orange' },
                                { lv: 2, label: 'SAFE', bar: 'w-[40%] bg-yellow-500' },
                                { lv: 1, label: 'EASY', bar: 'w-[20%] bg-green-500' },
                                { lv: 0, label: 'BEGINNER', bar: 'w-[0%] bg-white/10' },
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
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-black/90 backdrop-blur-md border border-brand-red/50 p-6 rounded-2xl shadow-2xl text-center transform group-hover:scale-105 transition-transform duration-500 w-64">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">My Limit</span>
                                </div>
                                <div className="text-white font-black text-3xl mb-1">LEVEL 2.5</div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3">
                                     <div className="h-full bg-brand-orange w-[50%]"></div>
                                </div>
                                <div className="text-[10px] text-white/40 mt-2 flex justify-between">
                                    <span>Safe Zone</span>
                                    <span className="text-brand-red font-bold">Max Limit</span>
                                </div>
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
                    <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Personalized Standard</span>
                </div>
                <h4 className="text-white font-black uppercase tracking-tighter text-4xl md:text-5xl mb-6 leading-[0.9]">
                    01. 나만의 맵기 기준<br/>
                    <span className="text-white/20">Your Standard.</span>
                </h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium break-keep">
                    "남들이 뭐라든, <span className="text-white font-bold">내 입에 매우면 매운 겁니다.</span><br/>
                    빅데이터로 분석한 객관적인 지표로 당신의 혀가 어디까지 버틸 수 있는지 정확하게 알려드립니다."
                </p>
            </div>
        </div>

        {/* Row 2: Right Heavy - Map-Gosu Filter */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2 relative group w-full">
                {/* Background Glow - Red for Spicy/Gosu vibe */}
                <div className="absolute -inset-4 bg-brand-red/20 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Graphic Container */}
                <div className="relative aspect-[4/3] md:aspect-video rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/10 flex flex-col shadow-2xl">
                    {/* Header */}
                    <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                        <span className="text-[10px] font-mono text-white/30 tracking-widest">MAP_GOSU_VERIFICATION_PROTOCOL</span>
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

                        {/* Review Item 1: Weak user (Mismatch/Filtered) */}
                        <div className="relative mb-4 opacity-30 scale-95 blur-[2px] transition-all duration-500 hover:opacity-50 hover:blur-0">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-black">LV.1</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-white/50">맵린이1호</span>
                                    </div>
                                    <p className="text-xs text-white/40">"너무 매워요 ㅠㅠ 쿨피스 필수..."</p>
                                </div>
                                <XCircle className="text-white/20" size={20} />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white/50 border border-white/10">UNRELIABLE SOURCE</span>
                            </div>
                        </div>

                        {/* Review Item 2: Map-Gosu (Match/Highlighted) */}
                        <div className="relative z-10 transform scale-105 transition-transform duration-500">
                             <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-purple-600 opacity-40 blur rounded-2xl"></div>
                             <div className="relative bg-brand-gray p-5 rounded-xl border border-brand-red/50 flex gap-4 items-start shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-purple-600 text-white flex items-center justify-center font-black text-sm shadow-lg">LV.4</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-white">불닭마스터</span>
                                        <span className="text-[10px] text-brand-red font-bold px-2 py-0.5 bg-brand-red/10 rounded-full border border-brand-red/20 flex items-center gap-1">
                                            <Check size={10} strokeWidth={4} /> TRUSTED
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/90 leading-snug break-keep">
                                        "사장님이 '지옥맛'이라더니 진짜네요 ㅋㅋㅋ 불닭보다 2배? 딱 스트레스 풀리는 맛입니다. 추천!"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Review Item 3: Average user (Mismatch/Filtered) */}
                        <div className="relative mt-4 opacity-30 scale-95 blur-[2px] transition-all duration-500 hover:opacity-50 hover:blur-0">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-black">LV.2</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-white/50">보통사람</span>
                                    </div>
                                    <p className="text-xs text-white/40">"그냥 적당히 매콤하네요~"</p>
                                </div>
                                <AlertTriangle className="text-white/20" size={20} />
                            </div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white/50 border border-white/10">TOO BLAND</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/2 lg:pr-8">
                <div className="flex items-center gap-3 mb-6 lg:justify-end">
                    <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Gosu Only Filter</span>
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center border border-brand-red/20 text-brand-red">
                        <Flame size={24} fill="currentColor" />
                    </div>
                </div>
                <h4 className="text-white font-black uppercase tracking-tighter text-4xl md:text-5xl mb-6 leading-[0.9] lg:text-right">
                    02. 맵고수 검증 필터<br/>
                    <span className="text-white/20">Real Gosu Only.</span>
                </h4>
                <p className="text-xl text-white/60 leading-relaxed font-medium lg:text-right break-keep">
                    "'엄청나게 매워요'에 속아 맵기 실패한 적 있죠?<br/>
                    이제 <span className="text-white font-bold underline decoration-brand-red underline-offset-4">진짜 고수</span>들의 검증된 리뷰만 확인하세요."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
