import { useEffect, useRef, useState } from "react";
import {
  formatCountdown,
  formatCountdownText,
  getRemainMs,
  getTimeLeftFromMs,
} from "../utils/countdownUtils";

interface UseCountdownOptions {
  interval?: number; // 갱신 주기 (밀리초, 기본: 1000)
  onExpire?: () => void; // 종료 시 한 번 호출
}

/**
 * 목표 시각까지 남은 시간을 1초마다 갱신하는 카운트다운 훅
 * 타임세일, 이벤트 마감, 쿠폰 만료 표시 등에 사용합니다
 *
 * @param targetDate - 종료 시각 (Date, timestamp, ISO 문자열)
 * @param options.interval - 갱신 주기 (기본: 1000ms)
 * @param options.onExpire - 종료 시점에 한 번 실행되는 콜백
 * @returns 남은 시간 값 + 두 자리 패딩된 포맷 + 문자열
 *
 * @example
 * // 타임세일 배너
 * const { formatted, isExpired } = useCountdown("2026-08-01T00:00:00");
 *
 * if (isExpired) return <p>종료된 이벤트입니다</p>;
 *
 * return (
 *   <p>
 *     {formatted.hours}:{formatted.minutes}:{formatted.seconds} 남음
 *   </p>
 * );
 *
 * @example
 * // 종료 시 목록 다시 불러오기
 * const { text } = useCountdown(endDate, {
 *   onExpire: () => refetchProducts(),
 * });
 *
 * return <span>{text}</span>;
 */
export const useCountdown = (
  targetDate: string | number | Date,
  options: UseCountdownOptions = {},
) => {
  const { interval = 1000, onExpire } = options;

  const [remainMs, setRemainMs] = useState(() => getRemainMs(targetDate));

  // 콜백을 ref로 보관해 인터벌이 매번 재생성되지 않도록 함
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    const next = getRemainMs(targetDate);
    setRemainMs(next);

    // 이미 종료된 시각이면 타이머를 걸지 않음
    if (next <= 0) {
      onExpireRef.current?.();
      return undefined;
    }

    const timer = setInterval(() => {
      const remain = getRemainMs(targetDate);
      setRemainMs(remain);

      if (remain <= 0) {
        clearInterval(timer);
        onExpireRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
    // targetDate가 Date 객체로 전달돼도 값 기준으로 비교되도록 timestamp 사용
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [new Date(targetDate).getTime(), interval]);

  const timeLeft = getTimeLeftFromMs(remainMs);

  return {
    ...timeLeft,
    formatted: formatCountdown(timeLeft),
    text: formatCountdownText(timeLeft),
  };
};
