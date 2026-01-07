
import React from 'react';

export const AppPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#151525] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          앱 미리보기 👀✨
        </h2>
        <p className="text-brand-text mb-12">열심히 만드는 중이라구!</p>

        {/* Mockup Youtube Container */}
        <div className="w-full px-10 md:w-2/3 md:px-0">
          <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.youtube.com/embed/pQgE60SXx0k?si=p129Mom71JjW1UVr"
              title="App Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <p className="mt-8 text-sm text-brand-text">지금 열심히 개발 중! 🔨 사전등록하면 제일 먼저 써볼 수 있어!</p>
      </div>
    </section>
  );
};
