
import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Row 1: Left Heavy */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
            <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-brand-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-brand-gray border border-white/5">
                    <img src="https://placehold.co/800x600/222222/E62117/png?text=Standard+Level" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" alt="Standardization" />
                    <div className="absolute bottom-8 left-8 bg-brand-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <Target className="text-brand-red mb-3 w-8 h-8" />
                        <h3 className="text-2xl font-black mb-1 italic uppercase underline decoration-brand-red">Standardization</h3>
                        <p className="text-white/60 text-sm">모든 프랜차이즈 맵기 레벨 통일</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
                <h4 className="text-brand-orange font-black uppercase tracking-tighter text-4xl mb-6">01. 맵기 절대 기준</h4>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                    "사장님, 신라면 정도로 해주세요"는 이제 그만.<br/>
                    <span className="text-white font-bold">맵레벨 0~5</span> 시스템으로 세상 모든 매운맛을 정렬했습니다. 엽떡 오리지널은 전국 어디서나 레벨 3입니다.
                </p>
            </div>
        </div>

        {/* Row 2: Right Heavy */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-brand-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden bg-brand-gray border border-white/5">
                    <img src="https://placehold.co/800x600/222222/FF5C00/png?text=Sync+Reviews" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" alt="Sync Review" />
                    <div className="absolute bottom-8 right-8 bg-brand-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-right">
                        <Zap className="text-brand-orange mb-3 w-8 h-8 ml-auto" />
                        <h3 className="text-2xl font-black mb-1 italic uppercase underline decoration-brand-orange">Sync Review</h3>
                        <p className="text-white/60 text-sm">나와 같은 맵수용자들의 필터링</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 lg:pr-12">
                <h4 className="text-brand-orange font-black uppercase tracking-tighter text-4xl mb-6">02. 맵동기 동기화</h4>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
                    맵찔이의 "매워요"와 맵고수의 "매워요"는 다릅니다.<br/>
                    <span className="text-white font-bold">당신과 같은 레벨</span>을 가진 유저들의 데이터만 큐레이션하여 당신의 실패 확률을 0%로 줄입니다.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
