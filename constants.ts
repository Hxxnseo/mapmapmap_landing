
import { SpicyLevelData } from "./types";

// 사용자의 첫 방문 시점을 기억하여 72시간을 계산합니다.
// 브라우저를 새로고침해도 타이머가 초기화되지 않아 실제 '한정 시간'의 느낌을 줍니다.
const getDynamicLaunchDate = () => {
  // Fix: 기존 키값(mapmapmap_golden_window_end) 변경을 통해 타이머 오류가 있던 사용자의 카운트다운을 초기화
  const STORAGE_KEY = 'mapmapmap_golden_window_end_v2';
  const storedDate = localStorage.getItem(STORAGE_KEY);
  
  if (storedDate) {
    const end = new Date(storedDate);
    // 만약 이미 시간이 지났다면 (테스트용 등을 위해) 현재 시점에서 다시 72시간을 설정할 수도 있지만,
    // 여기서는 실제 서비스처럼 만료된 상태를 유지하거나 필요시 재설정하는 로직을 가집니다.
    return end;
  }

  // 첫 방문 시: 현재 시간 + 72시간 설정
  const newEnd = new Date();
  newEnd.setHours(newEnd.getHours() + 72);
  localStorage.setItem(STORAGE_KEY, newEnd.toISOString());
  return newEnd;
};

export const LAUNCH_DATE = getDynamicLaunchDate();

export const SPICY_LEVELS: SpicyLevelData[] = [
  {
    level: 0,
    label: "Lv.0 맵찔이",
    emoji: "🐥",
    description: "전혀 못 먹어",
    example: "진라면 순한맛도 매움... 케찹이 좋아",
  },
  {
    level: 1,
    label: "Lv.1 입문자",
    emoji: "👼",
    description: "잘 못 먹어",
    example: "신라면 정도는 가능! 근데 콧물 나",
  },
  {
    level: 2,
    label: "Lv.2 보통사람",
    emoji: "🌶️",
    description: "보통이야",
    example: "열라면 즐겨먹음. 한국인 평균?",
  },
  {
    level: 3,
    label: "Lv.3 매니아",
    emoji: "🌶️🌶️",
    description: "좀 잘 먹어",
    example: "불닭, 엽떡 오리지널 맛있게 먹음",
  },
  {
    level: 4,
    label: "Lv.4 맵고수",
    emoji: "🔥🔥",
    description: "아주 잘 먹어",
    example: "엽떡 매운맛? 스트레스 풀려!",
  },
  {
    level: 5,
    label: "Lv.5 지옥",
    emoji: "💀",
    description: "인류의 한계",
    example: "핵불닭, 디진다돈까스... 고통을 즐김",
  },
];

export const TOTAL_REGISTRATIONS = 184;
export const GOAL_REGISTRATIONS = 500;
