
import React from 'react';

export const AppPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#151525] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          앱 미리보기 👀✨
        </h2>
        <p className="text-brand-text mb-12">열심히 만드는 중이라구!</p>

        {/* Mockup Carousel Container */}
        <div className="flex justify-center gap-6 overflow-x-auto pb-8 snap-x">
             {/* Mockup 1 */}
            <div className="snap-center shrink-0 w-[240px] md:w-[280px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl p-2 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>
                <div className="w-full h-[480px] bg-white rounded-[2.5rem] overflow-hidden relative">
                    <img 
                        src="https://placehold.co/280x500/111111/FFFFFF/png?text=Theme+Curation" 
                        alt="Home Screen" 
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <span className="text-brand-orange font-bold text-sm">HOME</span>
                        <h4 className="text-white font-bold text-xl">오늘 뭐 먹지?<br/>테마별 매운맛 추천</h4>
                    </div>
                </div>
            </div>

             {/* Mockup 2 */}
             <div className="snap-center shrink-0 w-[240px] md:w-[280px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl p-2 relative transform translate-y-4 md:translate-y-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>
                <div className="w-full h-[480px] bg-[#1A1A2E] rounded-[2.5rem] overflow-hidden relative flex flex-col items-center justify-center">
                    <div className="w-full h-full absolute inset-0 bg-[url('https://placehold.co/280x500/111111/E62117/png?text=Map+View')] bg-cover opacity-50 mix-blend-overlay"></div>
                    <div className="z-10 text-center p-4">
                        <div className="text-4xl mb-4">🗺️</div>
                        <h4 className="text-white font-bold text-xl mb-2">맵기 지도</h4>
                        <p className="text-gray-300 text-sm">내 레벨 기준<br/><span className="text-green-400">Safe</span> / <span className="text-red-500">Warning</span> 표시</p>
                    </div>
                </div>
            </div>

            {/* Mockup 3 */}
            <div className="snap-center shrink-0 w-[240px] md:w-[280px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl p-2 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>
                <div className="w-full h-[480px] bg-white rounded-[2.5rem] overflow-hidden relative">
                    <img 
                        src="https://placehold.co/280x500/111111/FFFFFF/png?text=OG+Badge" 
                        alt="Review Screen" 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-center">
                        <div className="bg-brand-red p-3 rounded-full mb-4">
                             <span className="text-2xl text-white">🔥</span>
                        </div>
                        <h4 className="text-white font-bold text-xl">OG 맵고수 뱃지</h4>
                        <p className="text-gray-300 text-sm mt-2">사전등록 한정판<br/>프로필 뱃지 지급!</p>
                    </div>
                </div>
            </div>
        </div>
        
        <p className="mt-8 text-sm text-brand-text">지금 열심히 개발 중! 🔨 사전등록하면 제일 먼저 써볼 수 있어!</p>
      </div>
    </section>
  );
};
