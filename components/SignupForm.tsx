
import React, { useState } from 'react';
import { SignupFormData } from '../types';
import { SPICY_LEVELS } from '../constants';
import { CheckCircle2, X, ArrowRight, Check, Info, ChevronDown } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    phone: '',
    nickname: '',
    level: '2',
    source: '',
    location: '',
    isSupporter: false
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

            <div className="group relative">
                <div className="relative">
                    <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-brand-red outline-none transition-colors appearance-none cursor-pointer rounded-none"
                        style={{ color: formData.source ? '#fff' : 'rgba(255,255,255,0.3)' }}
                    >
                        <option value="" disabled className="hidden">선택해주세요</option>
                        <option value="instagram" className="bg-brand-black text-white">인스타그램</option>
                        <option value="threads" className="bg-brand-black text-white">쓰레드</option>
                        <option value="referral" className="bg-brand-black text-white">지인 추천</option>
                        <option value="other" className="bg-brand-black text-white">기타</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40">Where did you find us?</label>
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

            {/* Supporter Agreement Section */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-brand-red/30">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                        <Info size={20} className="text-brand-red" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">맵맵맵 서포터즈 모집</h4>
                        <p className="text-sm text-white/60 leading-relaxed mb-3">
                            대한민국 매운맛의 표준을 함께 만들어갈 정예 요원이 되어주세요.<br/>
                            서포터즈로 활동하시면 <span className="text-brand-red font-bold">한정판 'OG' 엠블럼</span>을 드립니다.
                        </p>
                        <ul className="text-xs text-white/40 space-y-1 list-disc pl-4 mb-4">
                            <li>월 1회 이상 매운 음식 리뷰 작성 (간단 인증)</li>
                            <li>신규 기능 베타 테스트 우선 참여</li>
                            <li>데이터 검증 및 오류 제보</li>
                        </ul>
                    </div>
                </div>
                
                <label className="flex items-center gap-4 cursor-pointer group select-none bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-all ${formData.isSupporter ? 'bg-brand-red border-brand-red' : 'border-white/30 group-hover:border-white/50'}`}>
                        {formData.isSupporter && <Check size={14} className="text-white" strokeWidth={4} />}
                    </div>
                    <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.isSupporter}
                        onChange={(e) => setFormData(prev => ({ ...prev, isSupporter: e.target.checked }))}
                    />
                    <span className={`font-bold text-sm md:text-base ${formData.isSupporter ? 'text-white' : 'text-white/50'}`}>
                        서포터즈 활동에 동의하고 <span className="text-brand-red">엠블럼 받기</span>
                    </span>
                </label>
            </div>

            <button 
                type="submit" 
                className="w-full bg-white text-black py-8 rounded-[2rem] text-2xl font-black uppercase hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-2 flex items-center justify-center gap-4 group shadow-xl"
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
                    <p className="text-white/60 font-medium leading-relaxed mb-2">
                        환영합니다 <b>{formData.nickname}</b>님.
                    </p>
                    {formData.isSupporter && (
                        <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-3 mb-6">
                            <p className="text-brand-red text-sm font-bold">✨ 서포터즈 엠블럼 획득 완료!</p>
                        </div>
                    )}
                    <p className="text-white/40 text-sm mb-10">
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
