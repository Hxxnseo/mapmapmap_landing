
import React from 'react';

const PainCard = ({ name, content, result, delay }: { name: string, content: string, result: string, delay: string }) => (
    <div className={`bg-brand-gray p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden`} style={{ transitionDelay: delay }}>
        <div className="absolute top-2 right-2 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-6xl font-black font-mono">🚨</span>
        </div>
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/5 overflow-hidden border-2 border-white/5 group-hover:border-brand-red/30 transition-colors duration-500 shrink-0">
                <img 
                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${name}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-500"
                />
            </div>
            <span className="font-bold text-white/90 text-lg tracking-tight">{name}</span>
        </div>
        <p className="text-xl font-bold mb-6 leading-tight break-keep text-white/80">
            "{content}"
        </p>
        <div className="inline-flex items-center gap-3 bg-brand-black/50 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-brand-orange text-sm font-black uppercase">Result:</span>
            <span className="text-sm font-medium text-white/70">{result}</span>
        </div>
    </div>
);

export const EmpathySection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
            L I A R
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24 relative z-10">
                <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">
                    대국민 맵기 사기 피해 실태조사
                </span>
                <h2 className="text-5xl md:text-8xl font-black leading-[0.95] break-keep">
                    사장님...<br/>
                    <span className="text-brand-red">신라면 정도</span>라면서요?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <PainCard 
                    name="mapzzil2"
                    content="사장님 신라면 안 드셔보셨죠? 이게 신라면이면 난 평생 진라면 순한맛만 먹고 살아야 함 ㅠㅠ"
                    result="쿨피스값만 2만원"
                    delay="0ms"
                />
                <PainCard 
                    name="spicy_kueen_99"
                    content="지옥맛 시켰는데 혀가 간지럽지도 않음. 사장님 맵심이 부족하시네... 고춧가루 아끼면 망해요."
                    result="재방문 의사 X"
                    delay="100ms"
                />
                <PainCard 
                    name="dating_fail"
                    content="썸남이랑 가서 '맛있게 매운맛' 시켰다가 둘 다 콧물 파티하고 옴. 분위기 어쩔거야 하..."
                    result="그날 연락 끊김"
                    delay="200ms"
                />
                <PainCard 
                    name="buldak_lover"
                    content="불닭 맵기라며? 한 입 먹고 젓가락 던짐. 캡사이신 들이부은 맛이랑 매운맛은 다르다고요 제발!!"
                    result="위장약 엔딩"
                    delay="300ms"
                />
            </div>

            <div className="mt-24 text-center relative z-10">
                <p className="text-2xl md:text-4xl font-bold text-white/80 max-w-3xl mx-auto leading-tight italic break-keep">
                    사장님의 ‘맛있게 매워요’는 더 이상 믿을 수 없습니다<br/>
                    이제 내 혀와 장을 위한 <span className="text-brand-red font-black border-brand-red">객관적인 팩트</span>가 필요합니다.
                </p>
            </div>
        </div>
    </section>
  );
};
