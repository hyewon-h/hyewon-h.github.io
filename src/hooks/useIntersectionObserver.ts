import { useEffect, useState, RefObject } from "react";

/**
 * 요소가 뷰포트에 보이는지 감지하는 훅
 * 무한 스크롤, 레이지 로딩, 스크롤 애니메이션에 사용됩니다
 *
 * @param ref - 감지할 요소의 ref 객체
 * @param options - IntersectionObserver 옵션
 * @param options.threshold - 요소가 얼마나 보여야 감지할지 (0~1, 기본: 0)
 * @param options.root - 기준이 되는 요소 (기본: 브라우저 뷰포트)
 * @param options.rootMargin - root의 마진 (예: '50px', 기본: '0px')
 * @returns 요소가 뷰포트에 보이는지 여부 (boolean)
 *
 * @example
 * // 무한 스크롤
 * const loaderRef = useRef<HTMLDivElement>(null);
 * const isVisible = useIntersectionObserver(loaderRef, { threshold: 0.5 });
 *
 * useEffect(() => {
 *   if (isVisible) {
 *     loadMoreItems(); // 요소가 보이면 더 로드
 *   }
 * }, [isVisible]);
 *
 * @example
 * // 이미지 레이지 로딩
 * const imgRef = useRef<HTMLDivElement>(null);
 * const isVisible = useIntersectionObserver(imgRef, {
 *   threshold: 0.1,
 *   rootMargin: '50px', // 화면에 나타나기 50px 전에 미리 로드
 * });
 *
 * return (
 *   <div ref={imgRef}>
 *     {isVisible ? <img src={src} /> : <div>로딩 중...</div>}
 *   </div>
 * );
 *
 * @example
 * // 스크롤 애니메이션
 * const sectionRef = useRef<HTMLElement>(null);
 * const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });
 *
 * return (
 *   <section
 *     ref={sectionRef}
 *     className={isVisible ? 'fade-in' : 'fade-out'}
 *   >
 *     내용
 *   </section>
 * );
 */
export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // ref가 없으면 조기 리턴
    if (!ref.current) return;

    /**
     * IntersectionObserver 콜백
     * entries 배열의 첫 번째 요소를 확인하여 뷰포트 가시성 판단
     */
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setIsIntersecting(entry.isIntersecting);
      }
    }, options);

    // 요소 관찰 시작
    observer.observe(ref.current);

    // 클린업: 관찰 중지
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};
