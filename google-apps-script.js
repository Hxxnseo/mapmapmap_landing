/**
 * Google Apps Script 코드
 * 
 * 사용 방법:
 * 1. Google Sheets를 새로 생성하세요
 * 2. 확장 프로그램 > Apps Script 메뉴로 이동
 * 3. 아래 코드를 붙여넣으세요
 * 4. 저장 후 배포 > 새 배포 > 유형: 웹 앱 선택
 * 5. 실행 사용자: 나 자신, 액세스 권한: 모든 사용자로 설정
 * 6. 배포 후 생성되는 웹 앱 URL을 복사하세요
 * 7. .env 파일에 VITE_GOOGLE_SHEETS_API_URL=웹앱URL 추가
 */

function doPost(e) {
  try {
    // 요청 데이터 파싱
    const data = JSON.parse(e.postData.contents);

    // 스프레드시트 열기
    // 방법 1: 스크립트 속성 사용 (권장)
    const properties = PropertiesService.getScriptProperties();
    let SPREADSHEET_ID = properties.getProperty('SPREADSHEET_ID');

    // 방법 2: 스크립트 속성이 없으면 현재 스프레드시트 사용
    if (!SPREADSHEET_ID) {
      SPREADSHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();
      properties.setProperty('SPREADSHEET_ID', SPREADSHEET_ID);
    }

    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();

    // 헤더가 없는 경우 헤더 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['타임스탬프', '닉네임', '전화번호', '신청 경로', '맵기 레벨', '메이커 여부', 'MapBTI 결과']);
    }

    // 신청 경로 한글 변환
    const sourceMap = {
      'instagram': '인스타그램',
      'threads': '쓰레드',
      'referral': '지인 추천',
      'other': '기타'
    };
    const sourceKorean = sourceMap[data.source] || data.source;

    // 데이터 추가
    const timestamp = new Date();
    const row = [
      timestamp,
      data.nickname || '',
      data.phone || '',
      sourceKorean || '',
      data.level || '',
      data.isMaker ? '예' : '아니오',
      data.mapBTI || ''
    ];

    sheet.appendRow(row);

    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: '데이터가 성공적으로 저장되었습니다.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 특정 스프레드시트 ID를 설정하는 함수 (선택사항)
 * 다른 스프레드시트를 사용하려면 이 함수를 실행하세요
 * 실행 > 함수 실행 > setupSpreadsheetId 선택하여 한 번만 실행
 */
function setupSpreadsheetId() {
  const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'; // 여기에 다른 스프레드시트 ID를 입력하세요
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', SPREADSHEET_ID);
  Logger.log('스프레드시트 ID가 설정되었습니다: ' + SPREADSHEET_ID);
}
