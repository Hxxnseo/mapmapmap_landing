<div align="center">

# 🔥 맵맵맵 (MapMapMap)

**더 이상 속지 마세요**

대한민국 표준 맵기 가이드 플랫폼 랜딩 페이지

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📖 소개

사장님의 **"안 매워요"**에 뒤통수 맞은 당신을 위한 진짜 맵레벨 가이드.

맵맵맵은 매운 음식 큐레이션 및 맵기 표준화 플랫폼으로, 더 이상 속지 않기 위한 **대한민국 표준 맵기 가이드**를 제공합니다.

## ✨ 주요 기능

- 🔥 **맵기 레벨 표준화** - 0단계부터 6단계까지 체계적인 맵기 분류
- 📱 **반응형 디자인** - 모바일부터 데스크톱까지 완벽한 사용자 경험
- 📝 **사전예약 시스템** - Google Sheets와 연동된 실시간 데이터 수집
- 🎨 **모던한 UI/UX** - 다크 테마와 강렬한 브랜드 컬러로 시각적 임팩트
- ⚡ **빠른 성능** - Vite 기반의 최적화된 빌드 시스템

## 🚀 시작하기

### 필수 요구사항

- **Node.js** 18.0.0 이상
- **npm** 또는 **yarn**

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/Hxxnseo/mapmapmap_landing.git
cd mapmapmap_landing

# 의존성 설치
npm install

# 환경 변수 설정 (.env 파일 생성)
VITE_GOOGLE_SHEETS_API_URL=your_google_apps_script_url

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

개발 서버가 실행되면 `http://localhost:3000`에서 확인할 수 있습니다.

## 🔧 환경 변수 설정

### Google Sheets 연동

사전예약 폼 데이터를 Google Sheets에 저장하려면 다음 설정이 필요합니다:

1. **Google Apps Script 설정**

   - `google-apps-script.js` 파일의 코드를 Google Apps Script에 배포
   - 상세한 설정 방법은 [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) 참조

2. **환경 변수 설정**
   ```env
   VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## 📁 프로젝트 구조

```
mapmapmap_landing/
├── components/          # React 컴포넌트
│   ├── Hero.tsx        # 히어로 섹션
│   ├── SignupForm.tsx  # 사전예약 폼
│   ├── Features.tsx    # 주요 기능 소개
│   └── ...
├── google-apps-script.js  # Google Sheets 연동 스크립트
├── GOOGLE_SHEETS_SETUP.md # Google Sheets 설정 가이드
├── TROUBLESHOOTING.md     # 문제 해결 가이드
└── ...
```

## 🛠️ 기술 스택

- **Frontend Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend Integration**: Google Apps Script

## 📚 문서

- [Google Sheets 연동 설정 가이드](./GOOGLE_SHEETS_SETUP.md)
- [문제 해결 가이드](./TROUBLESHOOTING.md)

## 🎨 디자인 시스템

### 브랜드 컬러

- **Brand Red**: `#E62117` - 강렬하고 화끈한 느낌
- **Brand Orange**: `#FF5C00` - 따뜻하고 친근한 느낌
- **Brand Black**: `#0A0A0A` - 모던하고 프리미엄한 느낌

### 타이포그래피

- **Font Family**: Pretendard (한글 최적화 폰트)
- **Font Weight**: 400 (Regular), 700 (Bold), 900 (Black)

## 🚢 배포

### Vercel 배포 (권장)

1. GitHub 저장소를 Vercel에 연결
2. **환경 변수 설정** (중요!):
   - Vercel 대시보드 > 프로젝트 Settings > Environment Variables
   - Key: `VITE_GOOGLE_SHEETS_API_URL`
   - Value: Google Apps Script 웹 앱 URL (예: `https://script.google.com/macros/s/.../exec`)
   - Environment: Production, Preview, Development 모두 선택
   - 환경 변수 추가 후 **재배포** 필수!
3. 배포 완료!

> 💡 **중요**: 환경 변수를 설정한 후에는 반드시 재배포해야 합니다. 자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참조하세요.

### 기타 플랫폼

Vite 기반 프로젝트이므로 Netlify, Cloudflare Pages 등 다양한 플랫폼에서 배포 가능합니다. 각 플랫폼의 환경 변수 설정 방법은 [DEPLOYMENT.md](./DEPLOYMENT.md)를 참조하세요.

## 🤝 기여하기

프로젝트 개선을 위한 기여를 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 Private 프로젝트입니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 등록해주세요.

---

<div align="center">

**Made with 🔥 by 맵맵맵 Team**

더 이상 속지 마세요. 진짜 맵레벨을 경험하세요.

</div>
