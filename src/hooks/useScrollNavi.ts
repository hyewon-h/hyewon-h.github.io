import { useEffect, useRef, useState, useCallback } from "react";

export const useScrollNavi = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const isManualScrolling = useRef(false);
  const sectionIdsRef = useRef(sectionIds);

  // sectionIds 변경 시 ref 동기화 (실제론 모듈 상수라 변경 없음)
  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  });

  useEffect(() => {
    const getActiveSection = () => {
      // 뷰포트 상단 30% 지점을 기준으로 해당 지점을 지나간 마지막 섹션을 활성화
      const threshold = window.innerHeight * 0.3;
      let current = sectionIdsRef.current[0] ?? "";

      for (const id of sectionIdsRef.current) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      return current;
    };

    let timer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (isManualScrolling.current) return;
      if (timer !== null) return;
      timer = setTimeout(() => {
        setActiveSection(getActiveSection());
        timer = null;
      }, 80);
    };

    // 초기 활성 섹션 설정
    setActiveSection(getActiveSection());
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer !== null) clearTimeout(timer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    isManualScrolling.current = true;
    setActiveSection(sectionId);
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isManualScrolling.current = false;
    }, 1000);
  }, []);

  return { activeSection, scrollToSection };
};
