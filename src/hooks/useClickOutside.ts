import { useEffect, RefObject } from "react";

/**
 * 특정 요소 외부 클릭을 감지하는 훅
 * 모달, 드롭다운, 팝업 등을 닫을 때 유용합니다
 *
 * @param ref - 감지할 요소의 ref 객체
 * @param callback - 외부 클릭 시 실행할 콜백 함수
 *
 * @example
 * // 모달 외부 클릭 시 닫기
 * const modalRef = useRef<HTMLDivElement>(null);
 *
 * useClickOutside(modalRef, () => {
 *   setIsOpen(false);
 * });
 *
 * return (
 *   <div ref={modalRef} className="modal">
 *     모달 내용
 *   </div>
 * );
 *
 * @example
 * // 드롭다운 메뉴
 * const dropdownRef = useRef<HTMLDivElement>(null);
 *
 * useClickOutside(dropdownRef, () => {
 *   setShowDropdown(false);
 * });
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    /**
     * 클릭 이벤트 핸들러
     * 클릭한 요소가 ref 요소의 내부가 아니면 콜백 실행
     */
    const handleClick = (event: MouseEvent) => {
      // ref가 없거나, 클릭한 요소가 ref 내부에 있으면 무시
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // mousedown 이벤트로 외부 클릭 감지
    // (click 대신 mousedown을 사용하면 드래그 시작점도 감지 가능)
    document.addEventListener("mousedown", handleClick);

    // 클린업: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};
