// ============================================
// 카운트다운 (남은 시간 계산 / 포맷)
// ============================================

// 남은 시간 정보
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number; // 남은 밀리초 (종료 시 0)
  isExpired: boolean; // 종료 여부
}

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// 두 자리 문자열로 변환 (7 -> "07")
export const padZero = (val: number, length = 2) =>
  String(Math.max(0, Math.floor(val))).padStart(length, "0");

// 목표 시각까지 남은 밀리초 (지났으면 0)
export const getRemainMs = (
  targetDate: string | number | Date,
  from: number = Date.now(),
) => {
  const target = new Date(targetDate).getTime();
  if (Number.isNaN(target)) return 0;
  return Math.max(0, target - from);
};

// 남은 밀리초를 일/시/분/초로 분해
export const getTimeLeftFromMs = (ms: number): TimeLeft => {
  const total = Math.max(0, ms);

  return {
    days: Math.floor(total / DAY),
    hours: Math.floor((total % DAY) / HOUR),
    minutes: Math.floor((total % HOUR) / MINUTE),
    seconds: Math.floor((total % MINUTE) / SECOND),
    total,
    isExpired: total <= 0,
  };
};

// 목표 시각까지 남은 시간 계산
export const getTimeLeft = (
  targetDate: string | number | Date,
  from: number = Date.now(),
) => getTimeLeftFromMs(getRemainMs(targetDate, from));

// 종료 여부 확인
export const isExpired = (
  targetDate: string | number | Date,
  from: number = Date.now(),
) => getRemainMs(targetDate, from) <= 0;

/**
 * 카운트다운 시계 포맷 (숫자를 두 자리로 패딩)
 *
 * @example
 * formatCountdown(getTimeLeft(endDate));
 * // { days: '02', hours: '05', minutes: '09', seconds: '00' }
 */
export const formatCountdown = (timeLeft: TimeLeft) => ({
  days: padZero(timeLeft.days),
  hours: padZero(timeLeft.hours),
  minutes: padZero(timeLeft.minutes),
  seconds: padZero(timeLeft.seconds),
});

/**
 * 카운트다운을 한 줄 문자열로 변환
 * 일수가 남아있으면 "02일 05:09:00", 하루 미만이면 "05:09:00"
 */
export const formatCountdownText = (timeLeft: TimeLeft) => {
  const { days, hours, minutes, seconds } = formatCountdown(timeLeft);
  const clock = `${hours}:${minutes}:${seconds}`;

  return timeLeft.days > 0 ? `${days}일 ${clock}` : clock;
};

/**
 * 남은 시간을 사람이 읽는 문구로 변환 (쿠폰/이벤트 마감 표시용)
 * 1분 미만 -> "1분 남음", 1시간 미만 -> "12분 남음",
 * 24시간 미만 -> "3시간 20분 남음", 그 이후 -> "5일 남음"
 *
 * @param targetDate - 종료 시각
 * @param maxDays - 이 일수 이상 남았으면 undefined 반환 (기본: 7일)
 */
export const getRemainTimeText = (
  targetDate: string | number | Date,
  maxDays = 7,
) => {
  if (!targetDate) return undefined;

  const { days, hours, minutes, total, isExpired: expired } =
    getTimeLeft(targetDate);

  if (expired) return undefined;
  if (days >= maxDays) return undefined;

  if (days > 0) return `${days + 1}일 남음`;
  if (hours > 0) {
    return minutes > 0 ? `${hours}시간 ${minutes}분 남음` : `${hours}시간 남음`;
  }
  if (total < MINUTE) return "1분 남음";

  return `${minutes}분 남음`;
};
