export interface SpicyLevelData {
  level: number;
  label: string;
  emoji: string;
  description: string;
  example: string;
}

export interface SignupFormData {
  phone: string;
  nickname: string;
  level: string;
  source: string;
  location: string;
  isMaker: boolean;
  mapBTI: string;
}

export interface EmpathyCardProps {
  type: 'me' | 'other' | 'system';
  speaker?: string;
  content: string;
  result?: string;
}