import styled, { keyframes } from "styled-components";
import { mixin } from "@/styles/index";

interface IProps {
  $width?: string;
  $height?: string;
  $radius?: string;
  $variant: "text" | "rect" | "circle";
}

// 좌 → 우로 흐르는 하이라이트(shimmer)
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Skeleton = styled.span<IProps>`
  display: block;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height, $variant }) =>
    $height || ($variant === "text" ? "1em" : "100%")};
  border-radius: ${({ $radius, $variant }) =>
    $variant === "circle" ? "50%" : $radius || "4px"};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray200} 25%,
    ${({ theme }) => theme.colors.gray100} 37%,
    ${({ theme }) => theme.colors.gray200} 63%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease infinite;

  /* text 변형은 줄바꿈 대비 살짝 축소 + 라운드 처리 */
  ${({ $variant }) =>
    $variant === "text" &&
    `
    border-radius: 4px;
    transform: scale(1, 0.7);
  `}

  & + & {
    margin-top: 8px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    border-radius: ${({ $radius, $variant }) =>
      $variant === "circle"
        ? "50%"
        : $radius
          ? $radius
          : mixin.pxToVw("4")};

    & + & {
      margin-top: ${mixin.pxToVw("8")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    border-radius: ${({ $radius, $variant }) =>
      $variant === "circle" ? "50%" : $radius || "4px"};

    & + & {
      margin-top: 9px;
    }
  }
`;
