import React from 'react';

const PainCard = ({ name, content, result, delay }: { name: string, content: string, result: string, delay: string }) => (
    <div className={`bg-brand-gray p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden`} style={{ transitionDelay: delay }}>
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-6xl font-black font-mono">?</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center font-bold text-brand-red">@</div>
            <span className="font-bold text-white/60">{name}</span>
        </div>
        <p className="text-xl font-bold mb-6 leading-tight">
            "{content}"
        </p>
        <div className="inline-flex items-center gap-3 bg-brand-black/50 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-brand-orange text-sm font-black uppercase">Result:</span>
            <span className="text-sm font-medium">{result}</span>
        </div>
    </div>
);

export const EmpathySection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-brand-black relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.02] select-none pointer-events-none">
            PAIN
        </div>

        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-brand-red font-black tracking-widest uppercase text-sm mb-4 block">Archive of failure</span>
                <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85]">
                    Our Common<br/><span className="text-outline italic">Tragedies</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <PainCard 
                    name="lily_spicy"
                    content="열라면 정도 맵기라더니, 화장실이랑 하루종일 데이트함"
                    result="물 2리터 완샷"
                    delay="0ms"
                />
                <PainCard 
                    name="king_of_fire"
                    content="제일 매운맛 시켰는데 그냥 케찹맛... 사장님 매운게 뭔지 모르세요?"
                    result="입맛만 버림"
                    delay="100ms"
                />
                <PainCard 
                    name="map_zzil_01"
                    content="친구놈이 하나도 안 맵대서 갔다가 영혼 가출하고 돌아옴"
                    result="절교 위기"
                    delay="200ms"
                />
                <PainCard 
                    name="standard_kim"
                    content="불닭 맵기라고? 아닌데? 하나도 안 매운데? (맵부심)"
                    result="주변 갑분싸"
                    delay="300ms"
                />
            </div>

            <div className="mt-24 text-center">
                <p className="text-2xl md:text-4xl font-bold text-white/80 max-w-3xl mx-auto leading-tight italic">
                    "매움의 기준은 상대적입니다.<br/>
                    이제 <span className="text-brand-red font-black">당신만의 절대적인 기준</span>을 세워드립니다."
                </p>
            </div>
        </div>
    </section>
  );
};