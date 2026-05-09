import { useEffect, useRef, useState } from "react";
import { useScrollNavi } from "@/hooks/useScrollNavi";
import { useToggle } from "@/hooks/useToggle";
import { useClickOutside } from "@/hooks/useClickOutside";
import { profile } from "@/data/profile";
import Navigation, { NAV_ITEMS } from "../Navigation";
import * as S from "./style";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavi(SECTION_IDS);
  const { value: isMobileNavOpen, setTrue: openMobileNav, setFalse: closeMobileNav } = useToggle();
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useClickOutside(mobileNavRef, closeMobileNav);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 nav 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileNavOpen]);

  return (
    <>
      <S.HeaderWrapper $isScrolled={isScrolled}>
        <S.HeaderInner>
          <S.Logo
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {profile.nameEn}
          </S.Logo>

          <S.DesktopNav>
            <Navigation
              activeSection={activeSection}
              onNavClick={scrollToSection}
            />
          </S.DesktopNav>

          <S.HamburgerButton
            type="button"
            aria-label={isMobileNavOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileNavOpen}
            onClick={isMobileNavOpen ? closeMobileNav : openMobileNav}
          >
            <span />
            <span />
            <span />
          </S.HamburgerButton>
        </S.HeaderInner>
      </S.HeaderWrapper>

      {isMobileNavOpen && <S.Overlay onClick={closeMobileNav} />}

      <S.MobileNav $isOpen={isMobileNavOpen} ref={mobileNavRef}>
        <S.MobileNavInner>
          <S.MobileNavClose
            type="button"
            aria-label="메뉴 닫기"
            onClick={closeMobileNav}
          >
            ✕
          </S.MobileNavClose>
          <Navigation
            activeSection={activeSection}
            onNavClick={scrollToSection}
            onClose={closeMobileNav}
          />
        </S.MobileNavInner>
      </S.MobileNav>
    </>
  );
};

export default Header;
