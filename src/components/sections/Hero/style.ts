import styled from 'styled-components';

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
  max-width: 900px;
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
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeroName = styled.h1`
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

export const HeroTagline = styled.p`
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0;
  line-height: 1.5;
`;

export const HeroDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
  max-width: 560px;
  line-height: 1.7;
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
  border-radius: 8px;
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
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const CTAButtonOutline = styled.a`
  ${baseButton}
  background: transparent;
  color: ${({ theme }) => theme.colors.gray700};
  border: 2px solid ${({ theme }) => theme.colors.gray300};

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

  @media (max-width: 600px) {
    margin-top: 48px;
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
    0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
    50% { opacity: 1; transform: scaleY(1); }
  }
`;
