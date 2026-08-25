import { memo, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import Img from "@/components/common/Img";
import * as S from "./style";

// public 하위 에셋은 빌드 없이 정적 제공되므로 절대 URL 문자열로 참조
const ASSETS = `${process.env.PUBLIC_URL}/assets/images`;

// 스크롤에 따라 순서대로 전환되는 프로필 프레임 (01.png ~ 06.png)
const AVATAR_FRAMES = Array.from(
  { length: 6 },
  (_, i) => `${ASSETS}/0${i + 1}.png`,
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);

  // 프레임 전환 시 깜빡임 없도록 미리 로드
  useEffect(() => {
    AVATAR_FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Hero 섹션이 뷰포트 상단을 지나가는 비율(0~1)에 맞춰 프레임 전환
  useEffect(() => {
    let ticking = false;

    const updateFrame = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-top / (height / 3), 0), 1);
      const nextIndex = Math.min(
        AVATAR_FRAMES.length - 1,
        Math.floor(progress * AVATAR_FRAMES.length),
      );
      setFrameIndex(nextIndex);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateFrame);
    };

    updateFrame();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.HeroSection ref={sectionRef}>
      <S.HeroInner>
        <S.ProfileImg>
          <Img
            src={AVATAR_FRAMES[frameIndex] ?? AVATAR_FRAMES[0]!}
            alt={profile.name}
          />
        </S.ProfileImg>
        <S.HeroContent>
          <S.HeroName dangerouslySetInnerHTML={{ __html: profile.nameEn }} />
          <S.HeroTagline
            dangerouslySetInnerHTML={{ __html: profile.tagline }}
          />
          <S.HeroCTA>
            {/* <S.CTAButton
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </S.CTAButton> */}
            <S.CTAButtonOutline
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollDown();
              }}
            >
              About Me
            </S.CTAButtonOutline>
          </S.HeroCTA>
        </S.HeroContent>

        {/* <S.ScrollIndicator
          onClick={handleScrollDown}
          aria-label="아래로 스크롤"
        >
          <S.ScrollLine />
        </S.ScrollIndicator> */}
      </S.HeroInner>
    </S.HeroSection>
  );
};

export default memo(Hero);
