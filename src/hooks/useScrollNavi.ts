import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollNaviOptions {
  /** 섹션 활성화 기준점 (기본: 화면 높이의 30%) */
  offset?: number;
  /** 스크롤 이벤트 쓰로틀링 (기본: 100ms) */
  throttle?: number;
}

/**
 * 스크롤 위치에 따라 네비게이션 활성 섹션을 자동으로 추적하는 훅
 * @param sectionIds - 추적할 섹션 ID 배열 (예: ['about', 'projects', 'contact'])
 * @param options - 옵션 설정
 */
export const useScrollNavi = (
  sectionIds: string[],
  options?: UseScrollNaviOptions,
) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const isManualScrolling = useRef(false);
  const throttleTimer = useRef<NodeJS.Timeout | null>(null);

  const config = {
    offset: options?.offset ?? window.innerHeight * 0.3,
    throttle: options?.throttle ?? 100,
  };

  // 현재 스크롤 위치에서 활성 섹션 찾기
  const findActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    let currentSection = sectionIds[0];

    // 각 섹션을 순회하며 현재 위치 계산
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const sectionTop = scrollY + rect.top;

      // 스크롤 위치가 섹션 상단 + offset을 넘었으면 해당 섹션 활성화
      if (scrollY + config.offset >= sectionTop) {
        currentSection = id;
      }
    }

    return currentSection;
  }, [sectionIds, config.offset]);

  // 스크롤 이벤트 핸들러 (쓰로틀링 적용)
  const handleScroll = useCallback(() => {
    // 수동 스크롤 중이면 무시
    if (isManualScrolling.current) return;

    // 쓰로틀링
    if (throttleTimer.current) return;

    throttleTimer.current = setTimeout(() => {
      const newActiveSection = findActiveSection();
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
      throttleTimer.current = null;
    }, config.throttle);
  }, [findActiveSection, activeSection, config.throttle]);

  // 네비게이션 클릭 핸들러
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // 수동 스크롤 시작
    isManualScrolling.current = true;
    setActiveSection(sectionId);

    // 부드러운 스크롤
    element.scrollIntoView({ behavior: "smooth" });

    // 스크롤 완료 후 자동 감지 재개 (1초 후)
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  }, []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 초기 섹션 설정
    const initialSection = findActiveSection();
    setActiveSection(initialSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
    };
  }, [handleScroll, findActiveSection]);

  return {
    activeSection,
    scrollToSection,
  };
};
