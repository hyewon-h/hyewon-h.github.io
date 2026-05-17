import { mixin } from "@/styles/index";
import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1326px;
  margin: 0 auto;
  padding: 120px 0 80px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeroRole = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeroName = styled.h1`
  font-size: 88px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const HeroTagline = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 150%;
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray500};
  max-width: 560px;
  line-height: 170%;
`;

export const HeroCTA = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`;

const baseButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 28px;
  font-size: 15px;
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
  display: flex;
  justify-content: center;
  margin-top: 80px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media ${({ theme }) => theme.media.smMax} {
    margin-top: ${mixin.pxToVw("48")};
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
