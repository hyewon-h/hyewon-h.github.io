import { mixin } from "@/styles/index";
import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.surface};
`;

export const AboutInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
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
  line-height: 180%;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const CareerBlock = styled.div``;

export const CareerTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0 0 24px;
`;

export const CareerList = styled.ul`
  ${mixin.flex({ direction: "column" })};
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
`;

export const CareerInfo = styled.div``;

export const CareerCompany = styled.strong`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 12px;
`;

export const CareerRole = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const CareerDesc = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;

  li {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 160%;
    padding-left: 12px;
    position: relative;

    &::before {
      display: block;
      content: "";
      width: 2px;
      height: 2px;
      position: absolute;
      top: 10px;
      left: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gray300};
    }
  }
`;
