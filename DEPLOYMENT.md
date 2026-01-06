# 배포 가이드

## Vercel 배포 시 환경 변수 설정

배포 환경에서는 환경 변수를 별도로 설정해야 합니다.

### Vercel에서 환경 변수 설정하기

1. **Vercel 대시보드 접속**

   - https://vercel.com/dashboard 에서 프로젝트 선택

2. **Settings 메뉴 이동**

   - 프로젝트 설정 페이지에서 **Settings** 탭 클릭

3. **Environment Variables 섹션 찾기**

   - 좌측 메뉴에서 **Environment Variables** 클릭

4. **환경 변수 추가**

   - **Key**: `VITE_GOOGLE_SHEETS_API_URL`
   - **Value**: Google Apps Script 웹 앱 URL (예: `https://script.google.com/macros/s/.../exec`)
   - **Environment**: Production, Preview, Development 모두 선택
   - **Add** 버튼 클릭

5. **재배포**
   - 환경 변수를 추가한 후 **Deployments** 탭으로 이동
   - 최신 배포의 **⋯ (옵션)** 메뉴 클릭
   - **Redeploy** 선택하여 재배포

### 환경 변수 확인

재배포 후 다음을 확인하세요:

1. 배포가 완료될 때까지 대기
2. 배포된 사이트에서 브라우저 콘솔 확인
3. `Google Sheets API URL: 설정됨` 메시지가 나타나야 합니다

### 다른 플랫폼 배포 시

#### Netlify

1. **Site settings > Build & deploy > Environment**
2. **Add a variable** 클릭
3. Key: `VITE_GOOGLE_SHEETS_API_URL`, Value: Google Apps Script URL
4. **Deploy settings**에서 재배포

#### Cloudflare Pages

1. **Settings > Environment Variables**
2. **Add variable** 클릭
3. Variable name: `VITE_GOOGLE_SHEETS_API_URL`, Value: Google Apps Script URL
4. 재배포

### 중요 사항

- 환경 변수 이름은 반드시 `VITE_` 접두사로 시작해야 합니다
- 환경 변수를 변경한 후에는 **반드시 재배포**해야 합니다
- 환경 변수는 빌드 타임에 주입되므로, 코드 변경 없이 환경 변수만 추가해도 재배포가 필요합니다
