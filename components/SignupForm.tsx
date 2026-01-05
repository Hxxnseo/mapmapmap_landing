
import React, { useState } from 'react';
import { SignupFormData } from '../types';
import { SPICY_LEVELS } from '../constants';
import { CheckCircle2, X, ArrowRight, Check, Info, ChevronDown, Shield, Sparkles } from 'lucide-react';

export const SignupForm: React.FC = () => {
  const initialFormState: SignupFormData = {
    phone: '',
    nickname: '',
    level: '2',
    source: '',
    location: '',
    isMaker: false
  };

  const [formData, setFormData] = useState<SignupFormData>(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<'offer' | 'done'>('offer');

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
    setModalStep('offer');
    setShowModal(true);
  };

  const handleMakerJoin = () => {
    setFormData(prev => ({ ...prev, isMaker: true }));
    setModalStep('done');
  };

  const handleSkip = () => {
    setFormData(prev => ({ ...prev, isMaker: false }));
    setModalStep('done');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData(initialFormState);
    setTimeout(() => setModalStep('offer'), 300);
  };

  return (
    <section id="signup-form" className="py-40 px-6 bg-brand-black border-t border-white/5 relative">
      <div className="max-w-xl mx-auto relative z-10">
        <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-[900] uppercase tracking-tighter mb-4 italic">
                Get Early<br/><span className="text-brand-red">Access</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-medium">
                오픈 기념 단 <span className="text-white font-bold">100시간 동안만</span> 드리는 한정 혜택.<br/>
                지금 바로 대기 명단에 합류하세요.
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
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

            <button 
                type="submit" 
                className="w-full bg-white text-black py-8 rounded-[2rem] text-2xl font-black uppercase hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-2 flex items-center justify-center gap-4 group shadow-xl mt-8"
            >
                Submit Application
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
        </form>

        {/* Multi-step Success Modal */}
        {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={handleCloseModal}></div>
                
                {modalStep === 'offer' ? (
                    // Step 1: Maker Offer
                    <div className="bg-brand-gray rounded-[3rem] p-8 md:p-12 max-w-md w-full relative z-10 border border-white/10 animate-float overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange to-brand-red"></div>
                        
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black mb-2 uppercase italic tracking-tighter text-white">Registration<br/>Complete!</h3>
                            <p className="text-white/60 text-sm font-medium">
                                {formData.nickname}님, 사전예약이 완료되었습니다.
                            </p>
                        </div>

                        <div className="bg-[#111] border border-brand-red/30 rounded-2xl p-6 mb-8 relative group">
                            <div className="absolute -top-3 -right-3 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                                추천
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
                                    <Shield size={20} />
                                </div>
                                <h4 className="font-bold text-white text-lg">메이커즈 특별 제안</h4>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed mb-4">
                                맵맵맵의 초기 멤버(메이커즈)가 되어주세요.<br/>
                                활동 동의 시 <span className="text-white font-bold underline decoration-brand-red">한정판 Maker 뱃지</span>를 프로필에 달아드립니다.
                            </p>
                            <ul className="text-xs text-white/40 space-y-1 list-disc pl-4">
                                <li>베타 테스트 우선 참여권</li>
                                <li>간단한 매운맛 리뷰 미션 수행</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <button 
                                onClick={handleMakerJoin}
                                className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-2 group"
                            >
                                <Sparkles size={18} className="text-brand-orange group-hover:text-white transition-colors" />
                                <span>네, 메이커즈도 할래요!</span>
                            </button>
                            <button 
                                onClick={handleSkip}
                                className="w-full text-white/40 py-4 rounded-2xl font-bold text-sm hover:text-white transition-colors"
                            >
                                아니요, 사전예약만 할게요
                            </button>
                        </div>
                    </div>
                ) : (
                    // Step 2: Final Confirmation
                    <div className="bg-brand-gray rounded-[3rem] p-12 max-w-sm w-full relative z-10 text-center border border-white/10 animate-float">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(230,33,23,0.5)] ${formData.isMaker ? 'bg-gradient-to-br from-brand-orange to-brand-red' : 'bg-brand-black border-2 border-white/10'}`}>
                            {formData.isMaker ? <Shield className="text-white w-12 h-12" /> : <CheckCircle2 className="text-white w-12 h-12" />}
                        </div>
                        
                        <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
                            {formData.isMaker ? "Welcome, Agent!" : "All Set!"}
                        </h3>
                        
                        <p className="text-white/60 font-medium leading-relaxed mb-2">
                            {formData.isMaker 
                                ? "메이커즈 등록이 완료되었습니다." 
                                : "성공적으로 대기 명단에 올랐습니다."
                            }
                        </p>
                        
                        {formData.isMaker && (
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 mt-4">
                                <p className="text-brand-orange text-xs font-bold">✨ Maker 뱃지를 맵맵맵에서 확인하실 수 있습니다.</p>
                            </div>
                        )}

                        <p className="text-white/40 text-sm mt-8 mb-10">
                            곧 런칭 소식과 함께 찾아뵙겠습니다.
                        </p>
                        
                        <button 
                            onClick={handleCloseModal}
                            className="w-full bg-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/20 transition-colors border border-white/5"
                        >
                            확인
                        </button>
                    </div>
                )}
            </div>
        )}
      </div>
    </section>
  );
};
