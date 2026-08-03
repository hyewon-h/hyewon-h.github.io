import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ProjectCard = styled.article<{ $clickable: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  overflow: hidden;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  text-align: left;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: 0 14px 34px rgba(17, 24, 39, 0.08);
    transform: translateY(-2px);

    img {
      transform: scale(1.06);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const ProjectThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};

  img {
    transition: transform 0.3s ease;
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
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("17")};
  }
`;

export const ProjectDesc = styled.p`
  font-size: 14px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }
`;

export const ProjectTags = styled.div`
  ${mixin.flex({ wrap: "wrap" })};
  gap: 6px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};
  }
`;
