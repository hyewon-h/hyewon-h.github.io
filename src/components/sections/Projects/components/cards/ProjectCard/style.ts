import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ProjectCard = styled.article<{ $clickable: boolean }>`
  width: 100%;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  text-align: left;
  transition: transform 0.2s ease;

  &:hover img {
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ProjectThumbnailWrap = styled.div`
  position: relative;
`;

export const ProjectThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};

  .img {
    height: 100%;

    img {
      transition: transform 0.3s ease;
    }
  }
`;

export const ProjectTags = styled.div`
  position: absolute;
  left: 12px;
  bottom: 0;
  z-index: 1;
  transform: translateY(50%);
  display: flex;
  gap: 4px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.smMax} {
    left: ${mixin.pxToVw("12")};
    gap: ${mixin.pxToVw("4")};
  }
`;

export const ProjectTag = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.white};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("22")};
    padding: ${mixin.pxToVw("0 8")};
    font-size: ${mixin.pxToVw("11")};
  }
`;

export const ProjectCardBody = styled.div`
  padding: 20px;
  ${mixin.flex({ direction: "column" })};
  gap: 10px;

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("20")};
    gap: ${mixin.pxToVw("10")};
  }
`;

export const ProjectMeta = styled.div`
  ${mixin.flex({ align: "center", wrap: "wrap" })};
  gap: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray400};

  span + span::before {
    content: "·";
    margin-right: 6px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};
    font-size: ${mixin.pxToVw("12")};

    span + span::before {
      margin-right: ${mixin.pxToVw("6")};
    }
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.gray900};
  ${mixin.ellipsis(1)};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("17")};
  }
`;

export const ProjectDesc = styled.p`
  font-size: 14px;
  line-height: 170%;
  min-height: 6.8em;
  color: ${({ theme }) => theme.colors.gray600};
  ${mixin.ellipsis(4)};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }
`;
