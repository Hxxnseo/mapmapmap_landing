
import React, { useState } from 'react';
import { SignupFormData } from '../types';
import { SPICY_LEVELS } from '../constants';
import { CheckCircle2, X, ArrowRight, Check, Info, ChevronDown, Shield, Sparkles, Loader2, ExternalLink } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const SignupForm: React.FC = () => {
  const initialFormState: SignupFormData = {
    phone: '',
    nickname: '',
    level: '2',
    source: '',
    location: '',
    isMaker: false,
    mapBTI: ''
  };

  const [formData, setFormData] = useState<SignupFormData>(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<'offer' | 'done'>('offer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

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
    if (!privacyAgreed) {
      setSubmitError('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setModalStep('offer');
    setShowModal(true);
  };

  const submitToGoogleSheets = async (isMaker: boolean) => {
    const apiUrl = import.meta.env.VITE_GOOGLE_SHEETS_API_URL;
    
    console.log('Google Sheets API URL:', apiUrl ? '설정됨' : '설정되지 않음');
    
    if (!apiUrl) {
      console.warn('Google Sheets API URL이 설정되지 않았습니다. .env 파일을 확인하세요.');
      setSubmitError('Google Sheets API URL이 설정되지 않았습니다. 환경 변수를 확인하세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      nickname: formData.nickname,
      phone: formData.phone,
      source: formData.source,
      level: formData.level,
      isMaker: isMaker,
      mapBTI: formData.mapBTI,
    };

    console.log('전송할 데이터:', payload);

    try {
      console.log('요청 URL:', apiUrl);
      // Google Apps Script CORS 문제 해결: Content-Type을 text/plain으로 변경하여 preflight 요청 방지
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log('응답 상태:', response.status, response.statusText);

      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status} ${response.statusText}`);
      }

      const text = await response.text();
      console.log('응답 텍스트:', text);
      
      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        console.error('JSON 파싱 실패:', e);
        throw new Error('서버 응답을 파싱할 수 없습니다.');
      }

      if (!result.success) {
        throw new Error(result.error || '데이터 저장에 실패했습니다.');
      }

      console.log('✅ 데이터가 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('Google Sheets 전송 실패:', error);
      setSubmitError(error instanceof Error ? error.message : '데이터 저장에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMakerJoin = async () => {
    setFormData(prev => ({ ...prev, isMaker: true }));
    await submitToGoogleSheets(true);
    setModalStep('done');
  };

  const handleSkip = async () => {
    setFormData(prev => ({ ...prev, isMaker: false }));
    await submitToGoogleSheets(false);
    setModalStep('done');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData(initialFormState);
    setPrivacyAgreed(false);
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
                오픈 기념 한정 혜택<br/>
                지금 바로 등록하세요
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
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-red">Nickname *</label>
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
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-red">Phone Number *</label>
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
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40">Where did you find us? *</label>
            </div>

            <div className="pt-4">
                <p className="text-xs font-black uppercase text-white/40 mb-6 tracking-widest">Select Your Level *</p>
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

            <div className="group relative">
                <input
                    type="text"
                    name="mapBTI"
                    value={formData.mapBTI}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl font-bold focus:border-brand-red outline-none transition-colors peer placeholder-transparent"
                    placeholder="MapBTI Result"
                />
                <label className="absolute left-0 -top-2 text-xs font-black uppercase text-white/40 transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-red">맵BTI Result</label>
                <a
                    href="/mapbti.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-brand-orange hover:text-brand-red transition-colors text-sm font-bold"
                >
                    <span>맵BTI 하러가기</span>
                    <ExternalLink size={16} />
                </a>

            </div>

            <div className="pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-2 border-white/20 bg-transparent checked:bg-brand-red checked:border-brand-red focus:ring-2 focus:ring-brand-red/50 focus:outline-none transition-all cursor-pointer appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-xs checked:after:font-black"
                    />
                    <span className="text-sm text-white/60 leading-relaxed flex-1">
                        <span className="text-brand-red font-bold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowPrivacyModal(true);
                            }}
                            className="text-white underline hover:text-brand-red transition-colors ml-1"
                        >
                            개인정보 수집 및 이용
                        </button>
                        <span> 내용 보기</span>
                    </span>
                </label>
            </div>

            <button 
                type="submit" 
                disabled={!privacyAgreed}
                className="w-full bg-white text-black py-8 rounded-[2rem] text-2xl font-black uppercase hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-2 flex items-center justify-center gap-4 group shadow-xl mt-8 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                                <h4 className="font-bold text-white text-lg">메이커 특별 제안</h4>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed mb-4">
                                저희와 함께 맵맵맵의 매운 음식 리뷰 데이터를 책임지는 <span className="text-white font-bold">메이커</span>가 되어주세요.<br/>
                                활동 동의 시 <span className="text-white font-bold underline decoration-brand-red">한정판 Maker 뱃지</span>를 프로필에 달아드립니다.
                            </p>
                            <ul className="text-xs text-white/40 space-y-1 list-disc pl-4">
                                <li>베타 테스트 우선 참여권</li>
                                <li>일정 개수 이상 리뷰 작성 시 메이커 자격 수여</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <button 
                                onClick={handleMakerJoin}
                                disabled={isSubmitting}
                                className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <Sparkles size={18} className="text-brand-orange group-hover:text-white transition-colors" />
                                )}
                                <span>{isSubmitting ? '저장 중...' : '네, 메이커도 할래요!'}</span>
                            </button>
                            <button 
                                onClick={handleSkip}
                                disabled={isSubmitting}
                                className="w-full text-white/40 py-4 rounded-2xl font-bold text-sm hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? '저장 중...' : '아니요, 사전예약만 할게요'}
                            </button>
                            {submitError && (
                                <div className="text-red-400 text-xs text-center mt-2">
                                    {submitError}
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    // Step 2: Final Confirmation
                    <div className="bg-brand-gray rounded-[3rem] p-12 max-w-sm w-full relative z-10 text-center border border-white/10 animate-float">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(230,33,23,0.5)] ${formData.isMaker ? 'bg-gradient-to-br from-brand-orange to-brand-red' : 'bg-brand-black border-2 border-white/10'}`}>
                            {formData.isMaker ? <Shield className="text-white w-12 h-12" /> : <CheckCircle2 className="text-white w-12 h-12" />}
                        </div>
                        
                        <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
                            {formData.isMaker ? "Welcome, Maker!" : "All Set!"}
                        </h3>
                        
                        <p className="text-white/60 font-medium leading-relaxed mb-2">
                            {formData.isMaker 
                                ? "메이커 등록이 완료되었습니다." 
                                : "성공적으로 대기 명단에 올랐습니다."
                            }
                        </p>
                        
                        {formData.isMaker && (
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-6 mt-4">
                                <p className="text-brand-orange text-xs font-bold">✨ Maker 뱃지는 맵맵맵 정식 출시 후 확인하실 수 있습니다.</p>
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

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
            <LegalModal
                type="privacy"
                onClose={() => setShowPrivacyModal(false)}
            />
        )}
      </div>
    </section>
  );
};
