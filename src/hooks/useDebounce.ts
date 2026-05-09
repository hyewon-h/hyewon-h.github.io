import { useState, useEffect } from "react";

/**
 * 값이 변경된 후 일정 시간이 지나야 업데이트되는 디바운스 훅
 * 검색창, 자동저장 등 빈번한 입력에서 API 호출을 줄일 때 유용합니다
 *
 * @template T - 디바운스할 값의 타입
 * @param value - 디바운스할 값
 * @param delay - 지연 시간 (밀리초, 기본: 500ms)
 * @returns 디바운스된 값 (delay 시간이 지난 후 업데이트됨)
 *
 * @example
 * // 검색창에서 사용
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 300);
 *
 * useEffect(() => {
 *   // 300ms 후에 한 번만 API 호출됨
 *   if (debouncedSearch) {
 *     fetchSearchResults(debouncedSearch);
 *   }
 * }, [debouncedSearch]);
 *
 * @example
 * // 자동 저장
 * const [content, setContent] = useState('');
 * const debouncedContent = useDebounce(content, 1000);
 *
 * useEffect(() => {
 *   // 1초간 입력이 없을 때 자동 저장
 *   saveToServer(debouncedContent);
 * }, [debouncedContent]);
 */
export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // delay 후에 값을 업데이트하는 타이머 설정
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // value나 delay가 변경되면 이전 타이머를 클리어
    // (사용자가 계속 입력하면 타이머가 계속 리셋됨)
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
