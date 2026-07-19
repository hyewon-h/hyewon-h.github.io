import { mixin } from "@/styles/index";
import styled, { css } from "styled-components";

export const HeroSection = styled.section`
  ${mixin.flex({ align: "center" })};
  min-height: 100vh;
  padding: 70px 20px 50px;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroInner = styled.div`
  ${mixin.flex({ direction: "column" })};
  width: 100%;
  max-width: 1326px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.smMax} {
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 120px 0 80px;
  }
`;

export const ProfileImg = styled.div`
  max-width: 600px;
  width: 100%;
  pointer-events: none;

  @media ${({ theme }) => theme.media.pc} {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  ${mixin.flex({ direction: "column", align: "center" })};
  gap: 16px;
  text-align: center;
`;

export const HeroName = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("40")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 88px;
  }
`;

export const HeroTagline = styled.p`
  font-size: 15px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("15")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 18px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 14px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray500};
  max-width: 560px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 16px;
  }
`;

export const HeroCTA = styled.div`
  ${mixin.flex({ wrap: "wrap" })};
  gap: 8px;
`;

const baseButton = css`
  ${mixin.flex({ display: "inline-flex", align: "center", justify: "center" })};
  min-width: 120px;
  height: 40px;
  padding: 0 28px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const CTAButton = styled.a`
  ${baseButton}
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const CTAButtonOutline = styled.a`
  ${baseButton}
  background: transparent;
  color: ${({ theme }) => theme.colors.gray700};
  border: 1px solid ${({ theme }) => theme.colors.gray300};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

export const ScrollIndicator = styled.button`
  ${mixin.flex({ justify: "center" })};
  margin: 30px auto 0;
  background: none;
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.smMax} {
    margin-top: ${mixin.pxToVw("48")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-top: 80px;
  }
`;

export const ScrollLine = styled.span`
  display: block;
  width: 1px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.gray400}
  );
  animation: scrollPulse 2s ease-in-out infinite;

  @keyframes scrollPulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scaleY(0.8);
    }
    50% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`;
