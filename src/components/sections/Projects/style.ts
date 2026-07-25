import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ProjectsSection = styled.section`
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

export const ProjectsInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
`;

// Tab
export const TabBar = styled.div`
  ${mixin.flex({})};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  margin-bottom: 32px;

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("32")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 48px;
  }
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: ${({ $isActive }) => ($isActive ? 500 : 400)};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.gray900 : theme.colors.gray500};
  border: none;
  border-bottom: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.primary : "transparent"};
  background: none;
  cursor: pointer;
  margin-bottom: -1px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &::after {
    content: attr(data-label);
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-weight: 500;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

// Portfolio grid
export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

export const ProjectCard = styled.article<{ $clickable?: boolean }>`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  overflow: hidden;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:hover {
    img {
      transform: scale(1.08);
    }
  }
`;

export const ProjectThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  img {
    transition: transform 0.3s ease;
  }
`;

export const ProjectCardBody = styled.div`
  padding: 20px;
  ${mixin.flex({ direction: "column" })};
  gap: 10px;
`;

export const ProjectTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const ProjectDesc = styled.p`
  font-size: 14px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const ProjectTags = styled.div`
  ${mixin.flex({ wrap: "wrap" })};
  gap: 6px;
`;

export const ProjectLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Work projects
export const WorkList = styled.div`
  ${mixin.flex({ direction: "column", align: "stretch" })};
  gap: 48px;
`;

export const WorkCategory = styled.div``;

export const WorkCategoryTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray500};
  margin-bottom: 14px;
`;

export const WorkItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const WorkItemHeader = styled.button`
  ${mixin.flex({ align: "center", justify: "space-between" })};
  width: 100%;
  padding: 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray50};
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("16")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 20px 24px;
  }
`;

export const WorkItemMeta = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 2px;
`;

export const WorkItemTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray800};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
  }
`;

export const WorkItemPeriod = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray400};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
  }
`;

export const WorkItemChevron = styled.span<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? "90deg" : "0deg")});
  transition: transform 0.2s ease;

  @media ${({ theme }) => theme.media.smMax} {
    svg {
      width: ${mixin.pxToVw("20")};
      height: ${mixin.pxToVw("20")};
    }
  }
`;

export const WorkItemBody = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
  padding: 16px;

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("16")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 24px;
  }
`;

export const WorkSummary = styled.p`
  font-size: 13px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("13")};
  }
`;

export const WorkSubSection = styled.div``;

export const WorkSubTitle = styled.h4`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 10px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
    margin-bottom: ${mixin.pxToVw("10")};
  }
`;

export const WorkSubList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;

  li {
    font-size: 13px;
    line-height: 160%;
    color: ${({ theme }) => theme.colors.gray600};
    padding-left: 14px;
    position: relative;

    &::before {
      content: "·";
      position: absolute;
      left: 4px;
      color: ${({ theme }) => theme.colors.gray600};
      font-weight: 600;
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};

    li {
      font-size: ${mixin.pxToVw("13")};
      padding-left: ${mixin.pxToVw("14")};
    }
  }
`;

export const WorkTags = styled.div`
  ${mixin.flex({ wrap: "wrap" })};
  gap: 4px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};
  }
`;
