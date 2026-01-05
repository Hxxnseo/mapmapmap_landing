
import React, { useState } from 'react';
import { SignupFormData } from '../types';
import { SPICY_LEVELS } from '../constants';
import { CheckCircle2, X, ArrowRight } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    phone: '',
    nickname: '',
    level: '2',
    source: 'instagram',
    location: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    let formatted = val;
    if (val.length > 3 && val.length <= 7) formatted = `${val.slice(0, 3)}-${val.slice(3)}`;
    else if (val.length > 7) formatted = `${val.slice(0, 3)}-${val.slice(3, 7)}-${val.slice(7)}`;
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section id="signup-form" className="py-40 px-6 bg-brand-black border-t border-white/5 relative">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter mb-4 italic">
                Get Early<br/><span className="text-brand-red">Access</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium">
                오픈 기념 단 <span className="text-white font-bold">72시간 동안만</span> 드리는 한정 혜택.<br/>
                지금 바로 대기 명단에 합류하세요.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="group relative">
                <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-brand-red outline-none transition-colors peer placeholder-transparent"
                    placeholder="Mobile"
                />
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-red">Mobile Number</label>
            </div>

            <div className="group relative">
                <input 
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-brand-red outline-none transition-colors peer placeholder-transparent"
                    placeholder="Nickname"
                />
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-red">Your Nickname</label>
            </div>

            <div className="pt-4">
                <p className="text-xs font-black uppercase text-white/40 mb-6 tracking-widest">Select Your Initial Level</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {SPICY_LEVELS.map((lvl) => (
                        <button
                            key={lvl.level}
                            type="button"
                            onClick={() => setFormData(prev => ({...prev, level: lvl.level.toString()}))}
                            className={`aspect-square flex flex-col items-center justify-center rounded-2xl border-2 transition-all duration-300 ${formData.level === lvl.level.toString() ? 'border-brand-red bg-brand-red/10 scale-105' : 'border-white/5 bg-brand-gray/30 hover:border-white/20 opacity-50'}`}
                        >
                            <span className="text-2xl mb-1">{lvl.emoji}</span>
                            <span className="text-[10px] font-black">{lvl.level}</span>
                        </button>
                    ))}
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full bg-white text-black py-8 rounded-[2rem] text-2xl font-black uppercase hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-2 flex items-center justify-center gap-4 group"
            >
                Submit Application
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
        </form>

        {/* Success Modal */}
        {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>
                <div className="bg-brand-gray rounded-[3rem] p-12 max-w-sm w-full relative z-10 text-center border border-white/10 animate-float">
                    <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(230,33,23,0.5)]">
                        <CheckCircle2 className="text-white w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Approved!</h3>
                    <p className="text-white/60 font-medium leading-relaxed mb-10">
                        환영합니다 <b>{formData.nickname}</b>님.<br/>
                        곧 당신의 혀를 구원할 소식을 들고 찾아가겠습니다.
                    </p>
                    <button 
                        onClick={() => setShowModal(false)}
                        className="w-full bg-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/20 transition-colors border border-white/5"
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};
