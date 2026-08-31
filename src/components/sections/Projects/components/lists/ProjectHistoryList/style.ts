import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ProjectHistoryList = styled.div`
  ${mixin.flex({ direction: "column", align: "stretch" })};
  gap: 40px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("40")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 56px;
  }
`;

export const CategorySection = styled.section``;

export const CategoryTitle = styled.h3`
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.gray500};

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("18")};
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 18px;
    font-size: 14px;
  }
`;

export const HistoryGroup = styled.div`
  ${mixin.flex({ direction: "column", align: "stretch" })};
  gap: 0;
`;

export const HistoryItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 0 0 28px;

  &:last-child {
    padding-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 28px;
    bottom: 0;
    left: 10px;
    width: 1px;
    background: ${({ theme }) => theme.colors.gray200};
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("12")};
    padding: 0 0 ${mixin.pxToVw("28")};

    &::after {
      top: ${mixin.pxToVw("28")};
      left: ${mixin.pxToVw("10")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 24px;
    padding: 0 0 28px;

    &::after {
      top: 12px;
      left: 180px;
    }
  }
`;

export const HistoryAside = styled.div`
  position: relative;
  padding-left: 28px;
  padding-top: 0;

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 8px;
    z-index: 1;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding-left: ${mixin.pxToVw("28")};

    &::after {
      top: ${mixin.pxToVw("10")};
      left: ${mixin.pxToVw("8")};
      width: ${mixin.pxToVw("5")};
      height: ${mixin.pxToVw("5")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    padding-left: 0;
    padding-top: 4px;

    &::after {
      top: 12px;
      right: -28px;
      left: auto;
      width: 6px;
      height: 6px;
    }
  }
`;

export const Period = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.gray100};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray700};

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("6 10")};
    font-size: ${mixin.pxToVw("12")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const HistoryContent = styled.div`
  padding-left: 28px;

  @media ${({ theme }) => theme.media.smMax} {
    padding-left: ${mixin.pxToVw("28")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding-left: 18px;
  }
`;

export const TitleRow = styled.div`
  ${mixin.flex({ align: "center", wrap: "wrap" })};
  gap: 10px;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("10")};
    margin-bottom: ${mixin.pxToVw("10")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 145%;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("20")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 22px;
  }
`;

export const SiteLink = styled.a`
  ${mixin.flex({ align: "center" })};
  gap: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("13")};

    svg {
      width: ${mixin.pxToVw("14")};
      height: ${mixin.pxToVw("14")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 13px;
  }
`;

export const Summary = styled.p`
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 175%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("18")};
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 18px;
    font-size: 15px;
  }
`;

export const Section = styled.section`
  margin-bottom: 18px;

  &:last-of-type {
    margin-bottom: 16px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("18")};

    &:last-of-type {
      margin-bottom: ${mixin.pxToVw("16")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 18px;

    &:last-of-type {
      margin-bottom: 16px;
    }
  }
`;

export const SectionTitle = styled.h5`
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("10")};
    font-size: ${mixin.pxToVw("12")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

export const BulletList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 6px;

  li {
    position: relative;
    padding-left: 14px;
    font-size: 13px;
    line-height: 165%;
    color: ${({ theme }) => theme.colors.gray600};

    &::before {
      content: "·";
      position: absolute;
      top: 0;
      left: 4px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray600};
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};

    li {
      padding-left: ${mixin.pxToVw("14")};
      font-size: ${mixin.pxToVw("13")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 6px;

    li {
      padding-left: 14px;
      font-size: 14px;
    }
  }
`;

export const TagRow = styled.div`
  ${mixin.flex({ wrap: "wrap" })};
  gap: 6px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 6px;
  }
`;
