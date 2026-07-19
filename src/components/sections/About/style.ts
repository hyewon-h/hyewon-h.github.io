import { mixin } from "@/styles/index";
import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 72px 20px;
  background: ${({ theme }) => theme.colors.surface};

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("72 20")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 120px 0;
  }
`;

export const AboutInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("48")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 64px;
  }
`;

export const AboutText = styled.div``;

export const AboutDescription = styled.p`
  font-size: 14px;
  line-height: 170%;
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
  gap: 24px;
  margin-bottom: 28px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("24")};
    margin-bottom: ${mixin.pxToVw("28")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 32px;
    margin-bottom: 40px;
  }
`;

export const CareerItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};
  }

  @media ${({ theme }) => theme.media.pc} {
    grid-template-columns: 120px 1fr;
    gap: 16px;
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
    line-height: 170%;
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

export const SkillsBlock = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 24px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("24")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 32px;
  }
`;

export const SkillCategory = styled.div``;

export const SkillCategoryTitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0 0 12px;
`;

export const SkillList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 12px;
`;

export const SkillItem = styled.li``;

export const SkillName = styled.strong`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 4px;
`;

export const SkillDescription = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
  line-height: 160%;
  word-break: keep-all;
`;
