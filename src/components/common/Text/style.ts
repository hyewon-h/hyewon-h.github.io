import { mixin } from "@/styles/index";
import styled, { css } from "styled-components";

interface ITextStyleProps {
  className?: string;
  $size?: string | number;
  $weight?: string | number;
  $lineHeight?: string | number;
  $color?: string;
  $align?: "left" | "center" | "right" | "justify";
  $maxWidth?: string | number;
  $underline?: boolean;
  $del?: boolean;
  $strong?: boolean;
  $em?: boolean;
  $italic?: boolean;
  $ellipsis?: number;
}

export const Text = styled.span<ITextStyleProps>`
  ${({ $size }) =>
    $size && `font-size: ${typeof $size === "number" ? `${$size}px` : $size};`}
  ${({ $lineHeight }) =>
    $lineHeight &&
    `line-height: ${
      typeof $lineHeight === "number" ? `${$lineHeight}px` : $lineHeight
    };`}
  ${({ $color }) => $color && `color: ${$color};`}
  ${({ $align }) => $align && `text-align: ${$align};`}
  ${({ $weight }) => $weight && `font-weight: ${$weight};`}
  ${({ $maxWidth }) =>
    $maxWidth &&
    `max-width: ${
      typeof $maxWidth === "number" ? `${$maxWidth}px` : $maxWidth
    };`}
  ${({ $underline, $del }) =>
    !$del && $underline && `text-decoration: underline;`}

  ${(props) => {
    if (props.$ellipsis && props.$ellipsis > 0) {
      return css`
        ${mixin.ellipsis(props.$ellipsis)}
      `;
    }
    return null;
  }}

  em, strong {
    font-weight: inherit;
  }

  @media ${({ theme }) => theme.media.smMax} {
    ${({ $size }) =>
      $size &&
      typeof $size === "number" &&
      `font-size: ${mixin.pxToVw(String($size))};`}
    ${({ $lineHeight }) =>
      $lineHeight &&
      typeof $lineHeight === "number" &&
      `line-height: ${mixin.pxToVw(String($lineHeight))};`}
  }
`;
