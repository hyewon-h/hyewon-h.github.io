import { useState, useCallback } from "react";

/**
 * 불리언 상태를 쉽게 토글할 수 있는 훅
 *
 * @param initialValue - 초기 상태값 (기본: false)
 * @returns {object} 토글 상태와 제어 함수들
 * @returns {boolean} value - 현재 토글 상태
 * @returns {function} toggle - 상태를 반전시키는 함수
 * @returns {function} setTrue - 상태를 true로 설정하는 함수
 * @returns {function} setFalse - 상태를 false로 설정하는 함수
 *
 * @example
 * // 모달 열기/닫기
 * const { value: isOpen, toggle, setTrue: open, setFalse: close } = useToggle();
 *
 * @example
 * // 사이드바 토글
 * const { value: isSidebarOpen, toggle: toggleSidebar } = useToggle(true);
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  /** 현재 상태를 반전시킵니다 (true ↔ false) */
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  /** 상태를 true로 설정합니다 */
  const setTrue = useCallback(() => setValue(true), []);

  /** 상태를 false로 설정합니다 */
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
};
