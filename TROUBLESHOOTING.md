# 문제 해결 가이드

## 로컬 환경에서 Google Sheets 연동이 안 될 때

로컬 환경에서도 Google Apps Script는 정상적으로 작동해야 합니다. 다음 사항을 확인하세요:

### 1. 환경 변수 확인

`.env` 파일이 프로젝트 루트에 있는지 확인하고, 다음과 같은 형식으로 설정되어 있는지 확인하세요:

```env
VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**중요**: 
- URL 끝이 `/exec`로 끝나야 합니다 (`/dev`가 아님)
- 환경 변수 이름은 `VITE_`로 시작해야 합니다
- `.env` 파일을 수정했다면 **개발 서버를 재시작**해야 합니다

### 2. 개발 서버 재시작

환경 변수를 수정한 후에는 반드시 개발 서버를 재시작하세요:

```bash
# 서버 중지 (Ctrl+C)
# 그 다음 다시 시작
npm run dev
```

### 3. 브라우저 콘솔 확인

브라우저 개발자 도구(F12)를 열고 Console 탭에서 다음을 확인하세요:

- `Google Sheets API URL: 설정됨` 또는 `설정되지 않음` 메시지
- `전송할 데이터:` 로그로 전송하려는 데이터 확인
- `응답 상태:` 로그로 HTTP 상태 코드 확인
- 에러 메시지 확인

### 4. Google Apps Script 배포 확인

1. **웹 앱 URL 확인**
   - Apps Script 편집기에서 **배포 > 배포 관리** 확인
   - 최신 배포 버전의 URL이 `.env` 파일의 URL과 일치하는지 확인

2. **액세스 권한 확인**
   - 배포 설정에서 **액세스 권한: 모든 사용자**로 설정되어 있어야 합니다
   - **실행 사용자: 나 자신**으로 설정되어 있어야 합니다

3. **배포 버전 확인**
   - 코드를 수정했다면 새 버전으로 재배포해야 합니다
   - **배포 > 배포 관리 > 수정 > 새 버전으로 배포**

### 5. Google Apps Script 실행 로그 확인

Apps Script에서 실행 로그를 확인하세요:

1. Apps Script 편집기에서 **실행 > 로그 보기** 클릭
2. 폼을 제출한 후 로그에서 에러 메시지 확인
3. 에러가 있다면 스크립트 코드를 확인하세요

### 6. 네트워크 탭 확인

브라우저 개발자 도구의 **Network (네트워크)** 탭에서:

1. 폼 제출 시 POST 요청이 발생하는지 확인
2. 요청 URL이 올바른지 확인
3. 요청 상태 코드 확인 (200이면 성공, 4xx/5xx면 에러)
4. 응답 본문 확인

### 7. CORS 에러가 발생하는 경우

Google Apps Script Web App은 기본적으로 CORS를 지원합니다. 만약 CORS 에러가 발생한다면:

1. 배포 설정에서 **액세스 권한: 모든 사용자**인지 확인
2. 웹 앱 URL이 올바른지 확인 (URL 끝이 `/exec`인지 확인)
3. 새 버전으로 재배포

### 8. 일반적인 문제

**문제**: 환경 변수가 인식되지 않음
- 해결: 개발 서버 재시작

**문제**: "API URL이 설정되지 않았습니다" 경고
- 해결: `.env` 파일 확인 및 개발 서버 재시작

**문제**: HTTP 401 또는 403 에러
- 해결: Google Apps Script 배포 권한 확인

**문제**: HTTP 404 에러
- 해결: 웹 앱 URL이 올바른지 확인

**문제**: 데이터는 전송되지만 스프레드시트에 저장되지 않음
- 해결: Apps Script 실행 로그 확인, 스크립트 코드 확인

### 9. 테스트 방법

브라우저 콘솔에서 직접 테스트:

```javascript
// 환경 변수 확인
console.log(import.meta.env.VITE_GOOGLE_SHEETS_API_URL);

// API 호출 테스트
fetch(import.meta.env.VITE_GOOGLE_SHEETS_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nickname: '테스트',
    phone: '010-1234-5678',
    source: 'instagram',
    level: '3',
    isMaker: false
  })
})
.then(r => r.text())
.then(console.log)
.catch(console.error);
```

이 테스트가 성공하면 스프레드시트에 데이터가 저장되어야 합니다.

