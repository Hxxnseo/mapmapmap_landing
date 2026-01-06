
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

type LegalType = 'privacy' | 'terms';

interface LegalModalProps {
  type: LegalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  // 모달이 열려있을 때 뒷배경 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const content = {
    privacy: (
      <div className="space-y-6 text-white/80">
        <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">개인정보 처리방침</h3>
        
        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제1조 (목적)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                팀 MapMapMap(이하 '회사')은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
            </p>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제2조 (수집하는 개인정보 항목)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                회사는 서비스 사전 예약 및 베타 테스트 참여를 위해 아래와 같은 정보를 수집합니다.
            </p>
            <ul className="list-disc pl-5 text-sm text-white/60 space-y-1">
                <li>필수항목: 휴대전화번호, 닉네임, 매운맛 레벨(자가진단), 유입경로</li>
                <li>선택항목: 메이커 활동 동의 여부</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제3조 (개인정보의 처리 및 보유기간)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc pl-5 text-sm text-white/60 space-y-1">
                <li>보유 기간: 서비스 정식 런칭 후 1년 또는 사전 예약 취소 요청 시까지</li>
                <li>파기 절차: 보유 기간 경과 후 지체 없이 파기</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제4조 (문의처)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                개인정보와 관련된 문의사항은 아래의 연락처로 문의 주시기 바랍니다.<br/>
                이메일: privacy@mapmapmap.com
            </p>
        </div>
      </div>
    ),
    terms: (
      <div className="space-y-6 text-white/80">
        <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">서비스 이용약관</h3>
        
        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제1조 (목적)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                본 약관은 팀 MapMapMap(이하 '회사')이 제공하는 매운맛 큐레이션 서비스(이하 '서비스')의 이용과 관련하여 회사와 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제2조 (정의)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                '서비스'라 함은 회사가 제공하는 매운 음식점 정보 제공, 레벨 측정, 커뮤니티 등 제반 서비스를 의미합니다. '사전 예약자'란 본 약관에 동의하고 서비스 출시 알림을 신청한 자를 의미합니다.
            </p>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제3조 (서비스의 내용)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                회사는 다음과 같은 서비스를 제공합니다. 단, 구체적인 서비스의 형태는 정식 출시 시점에 변경될 수 있습니다.
            </p>
            <ul className="list-disc pl-5 text-sm text-white/60 space-y-1">
                <li>사용자 맞춤형 매운맛 레벨 분석</li>
                <li>위치 기반 매운 음식점 큐레이션</li>
                <li>사용자 간 리뷰 공유 및 데이터 동기화</li>
            </ul>
        </div>

        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제4조 (면책조항)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                회사가 제공하는 '매운맛 레벨'은 주관적인 데이터를 통계화한 참고 지표일 뿐이며, 절대적인 의학적/과학적 기준이 아닙니다. 회사는 서비스 이용 과정에서 발생한 회원의 신체적 불편(복통 등)에 대해 법적 책임을 지지 않습니다. 본인의 컨디션에 맞게 즐겨주세요.
            </p>
        </div>
        
        <div className="space-y-2">
            <h4 className="font-bold text-white text-lg">제5조 (기타)</h4>
            <p className="text-sm leading-relaxed text-white/60">
                본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따릅니다.
            </p>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#111] rounded-[2rem] shadow-2xl border border-white/10 flex flex-col max-h-[80vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
            {content[type]}
        </div>

        <div className="p-6 border-t border-white/5 bg-[#0a0a0a] rounded-b-[2rem] flex justify-end">
            <button 
                onClick={onClose}
                className="px-8 py-3 bg-white text-black font-black uppercase rounded-xl hover:bg-brand-red hover:text-white transition-colors text-sm"
            >
                I Understand
            </button>
        </div>
      </div>
    </div>
  );
};
