import { memo } from "react";
import { profile } from "@/data/profile";
import * as S from "./style";

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.HeroSection>
      <S.HeroInner>
        <S.HeroContent>
          {/* <S.HeroRole>{profile.role}</S.HeroRole> */}
          <S.HeroName
            dangerouslySetInnerHTML={{ __html: profile.nameEn }}
            className="instrument-serif"
          />
          <S.HeroTagline
            dangerouslySetInnerHTML={{ __html: profile.tagline }}
          />
          {/* <S.HeroDescription>{profile.description}</S.HeroDescription> */}
          <S.HeroCTA>
            <S.CTAButton
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </S.CTAButton>
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

        <S.ScrollIndicator
          onClick={handleScrollDown}
          aria-label="아래로 스크롤"
        >
          <S.ScrollLine />
        </S.ScrollIndicator>
      </S.HeroInner>
    </S.HeroSection>
  );
};

export default memo(Hero);
