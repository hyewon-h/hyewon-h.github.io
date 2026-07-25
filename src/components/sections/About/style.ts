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

export const CareerBlock = styled.div``;

export const CareerTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray500};
  margin-bottom: 14px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
    margin-bottom: ${mixin.pxToVw("14")};
  }
`;

export const CareerList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 24px;
  margin-bottom: 34px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("24")};
    margin-bottom: ${mixin.pxToVw("34")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 32px;
    margin-bottom: 40px;
  }
`;

export const CareerItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("2")};
  }

  @media ${({ theme }) => theme.media.pc} {
    grid-template-columns: 120px 1fr;
    gap: 16px;
  }
`;

export const CareerPeriod = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray400};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
  }
`;

export const CareerInfo = styled.div``;

export const CareerCompany = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 12px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
    margin-bottom: ${mixin.pxToVw("12")};
  }
`;

export const CareerRole = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
    margin-bottom: ${mixin.pxToVw("12")};
  }
`;

export const CareerDesc = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;

  li {
    position: relative;
    font-size: 13px;
    line-height: 160%;
    word-break: keep-all;
    padding-left: 9px;
    color: ${({ theme }) => theme.colors.gray600};

    &::before {
      display: block;
      content: "";
      width: 2px;
      height: 2px;
      position: absolute;
      top: 9px;
      left: 0;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.gray600};
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};

    li {
      font-size: ${mixin.pxToVw("13")};
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
    flex-direction: row;
    gap: 32px;
  }
`;

export const SkillCategory = styled.div``;

export const SkillCategoryTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray900};
  text-transform: uppercase;
  margin-bottom: 12px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
    margin-bottom: ${mixin.pxToVw("12")};
  }
`;

export const SkillList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};
  }
`;

export const SkillName = styled.div`
  font-size: 13px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("13")};
  }
`;
