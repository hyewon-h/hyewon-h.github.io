import { mixin } from "@/styles/index";
import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 120px 24px;
  background: ${({ theme }) => theme.colors.surface};
`;

export const AboutInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0 0 56px;
  letter-spacing: -0.02em;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;

  @media ${({ theme }) => theme.media.smMax} {
    grid-template-columns: 1fr;
    gap: ${mixin.pxToVw("48")};
  }
`;

export const AboutText = styled.div``;

export const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0;
  white-space: pre-line;
`;

export const CareerBlock = styled.div``;

export const CareerTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0 0 24px;
`;

export const CareerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const CareerItem = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;

  @media ${({ theme }) => theme.media.smMax} {
    grid-template-columns: 1fr;
    gap: ${mixin.pxToVw("6")};
  }
`;

export const CareerPeriod = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray400};
  padding-top: 3px;
  white-space: nowrap;
`;

export const CareerInfo = styled.div``;

export const CareerCompany = styled.strong`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 2px;
`;

export const CareerRole = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

export const CareerDesc = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 1.6;
    padding-left: 12px;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.gray300};
      font-size: 12px;
    }
  }
`;
