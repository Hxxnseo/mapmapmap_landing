
import React, { useState } from 'react';
import { Instagram, Mail } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="py-24 px-6 bg-brand-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">
                  MAP<span className="text-brand-red">MAP</span>MAP
              </h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                  우리는 당신의 위장과 자존심을 동시에 지킵니다. 매운맛의 새로운 표준, 맵맵맵.
              </p>
          </div>

          <div className="grid grid-cols-2 gap-20">
              <div>
                  <p className="text-xs font-black uppercase text-white/20 mb-6 tracking-widest">Connect</p>
                  <ul className="space-y-4 text-sm font-bold">
                      <li><a href="https://www.instagram.com/mapmapmap.zip/" target="_blank" className="hover:text-brand-red transition-colors uppercase">Instagram</a></li>
                      <li><a href="https://www.threads.com/@mapmapmap.zip" target="_blank" className="hover:text-brand-red transition-colors uppercase">Threads</a></li>
                      <li><a href="mailto:mapmapmap.zip@gmail.com" className="hover:text-brand-red transition-colors uppercase">Contact Us</a></li>
                  </ul>
              </div>
              <div>
                  <p className="text-xs font-black uppercase text-white/20 mb-6 tracking-widest">Legal</p>
                  <ul className="space-y-4 text-sm font-bold opacity-40">
                      <li>
                        <button 
                            onClick={() => setActiveModal('privacy')} 
                            className="hover:text-white transition-colors text-left"
                        >
                            Privacy
                        </button>
                      </li>
                      <li>
                        <button 
                            onClick={() => setActiveModal('terms')}
                            className="hover:text-white transition-colors text-left"
                        >
                            Terms
                        </button>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <span>Made by MapMapMap</span>
          <span>© 2025 All Rights Reserved</span>
        </div>
      </footer>

      {activeModal && (
        <LegalModal 
            type={activeModal} 
            onClose={() => setActiveModal(null)} 
        />
      )}
    </>
  );
};
