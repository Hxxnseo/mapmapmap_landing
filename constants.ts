
import { SpicyLevelData } from "./types";

// 2026년 1월 5일 오후 8:00부터 100시간 카운트다운
// 모든 사용자에게 동일한 고정된 종료 시간을 사용합니다.
const getFixedLaunchDate = () => {
  // 2026년 1월 5일 오후 8:00 (20:00) KST
  const startDate = new Date('2026-01-05T20:00:00+09:00');
  
  // 시작 시간 + 100시간 = 종료 시간
  const endDate = new Date(startDate.getTime() + 100 * 60 * 60 * 1000);
  
  return endDate;
};

export const LAUNCH_DATE = getFixedLaunchDate();

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
    label: "Lv.1 맵초보",
    emoji: "👼",
    description: "잘 못 먹어",
    example: "신라면 정도는 가능! 근데 콧물 나",
  },
  {
    level: 2,
    label: "Lv.2 맵보통",
    emoji: "🌶️",
    description: "보통이야",
    example: "열라면 즐겨먹음. 한국인 평균?",
  },
  {
    level: 3,
    label: "Lv.3 맵니아",
    emoji: "🔥",
    description: "좀 잘 먹어",
    example: "불닭, 엽떡 오리지널 맛있게 먹음",
  },
  {
    level: 4,
    label: "Lv.4 맵고수",
    emoji: "💣",
    description: "아주 잘 먹어",
    example: "엽떡 매운맛? 스트레스 풀려!",
  },
  {
    level: 5,
    label: "Lv.5 맵친자",
    emoji: "💀",
    description: "인류의 한계",
    example: "핵불닭, 디진다돈까스... 고통을 즐김",
  },
];

export const TOTAL_REGISTRATIONS = 184;
export const GOAL_REGISTRATIONS = 500;
