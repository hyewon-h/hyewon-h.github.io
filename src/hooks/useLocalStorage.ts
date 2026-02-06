import { useState } from "react";

/**
 * localStorage와 동기화되는 상태 관리 훅
 * 페이지를 새로고침해도 데이터가 유지됩니다
 *
 * @template T - 저장할 값의 타입
 * @param key - localStorage에 저장될 키 이름
 * @param initialValue - localStorage에 값이 없을 때 사용할 초기값
 * @returns [storedValue, setValue] - useState와 동일한 형태의 배열
 *
 * @example
 * // 다크모드 설정 저장
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 *
 * const toggleTheme = () => {
 *   setTheme(theme === 'light' ? 'dark' : 'light');
 * };
 *
 * @example
 * // 사용자 정보 저장
 * const [user, setUser] = useLocalStorage('user', null);
 *
 * const login = (userData) => {
 *   setUser(userData); // localStorage에 자동 저장됨
 * };
 *
 * @example
 * // 장바구니 저장
 * const [cart, setCart] = useLocalStorage('cart', []);
 *
 * const addToCart = (item) => {
 *   setCart([...cart, item]);
 * };
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // 초기값 설정: localStorage에서 값을 가져오거나 initialValue 사용
  const [storedValue, setStoredValue] = useState<T>(() => {
    // SSR 환경 체크
    if (typeof window === "undefined") return initialValue;

    try {
      // localStorage에서 값 가져오기
      const item = window.localStorage.getItem(key);
      // JSON 파싱하여 반환, 없으면 initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 파싱 에러 발생 시 초기값 반환
      console.error(error);
      return initialValue;
    }
  });

  /**
   * 값을 업데이트하고 localStorage에 저장
   * useState의 setValue와 동일하게 직접 값 또는 함수를 받을 수 있음
   */
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 함수 형태면 현재 값을 인자로 전달하여 실행
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // 상태 업데이트
      setStoredValue(valueToStore);

      // localStorage에 저장 (JSON 문자열로 변환)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // 저장 실패 시 에러 로깅
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
