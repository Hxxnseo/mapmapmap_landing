
import React from 'react';
import { Fingerprint, Filter, MapPin, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Fingerprint,
      title: 'MAP-BTI 측정',
      subtitle: 'Know Your Limit',
      description: '49개 질문으로 당신의 맵기 레벨을 정밀 분석',
      highlight: '32가지 유형',
      color: 'brand-red'
    },
    {
      number: '02',
      icon: Filter,
      title: '맞춤 필터링',
      subtitle: 'Same Level Only',
      description: '나와 같은 레벨 사람들의 리뷰만 필터링',
      highlight: '신뢰할 수 있는 리뷰',
      color: 'brand-orange'
    },
    {
      number: '03',
      icon: MapPin,
      title: '맛집 발견',
      subtitle: 'No More Fail',
      description: '실패 없는 나만의 매운맛집 찾기',
      highlight: '맵기 실패 0%',
      color: 'green-500'
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,33,23,0.05),transparent_70%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-brand-red font-bold tracking-[0.3em] uppercase text-xs mb-6 bg-brand-red/10 px-4 py-2 rounded-full border border-brand-red/20">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            3단계로 끝나는<br/>
            <span className="text-brand-red">맵기 실패</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            더 이상 "생각보다 안 매워요" 리뷰에 속지 마세요
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {/* Connection Line - Desktop */}
          {/* <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-brand-red via-brand-orange to-green-500 opacity-30"></div> */}
          
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Number Badge */}
                <div className={`inline-flex items-center gap-2 mb-6`}>
                  <span className={`text-${step.color} font-mono font-black text-sm`}>{step.number}</span>
                  <div className={`h-[1px] w-8 bg-${step.color}/50`}></div>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`text-${step.color}`} size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-1">{step.title}</h3>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">{step.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                
                {/* Highlight Badge */}
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-${step.color}/10 text-${step.color} border border-${step.color}/20`}>
                  {step.highlight}
                </span>
              </div>
              
              {/* Arrow - Mobile */}
              {/* {index < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ArrowRight className="text-white/20 rotate-90" size={24} />
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/40 text-sm mb-4">지금 바로 내 MAP-BTI 확인하기</p>
          <a 
            href="/mapbti.html" 
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red/90 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(230,33,23,0.3)]"
          >
            MAP-BTI 시작하기
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
