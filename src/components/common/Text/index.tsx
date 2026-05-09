import React, { forwardRef } from "react";
import * as S from "./style";

export interface ITextProps {
  /** CSS 클래스명 */
  className?: string;
  /** 자식 요소 */
  children: React.ReactNode;
  /** 폰트 크기 */
  size?: string | number;
  /** 폰트 굵기 */
  weight?: string | number;
  /** 줄 높이 */
  lineHeight?: string | number;
  /** 텍스트 색상 */
  color?: string;
  /** 텍스트 정렬 */
  align?: "left" | "center" | "right" | "justify";
  /** 최대 너비 */
  maxWidth?: string | number;
  /** 블록 스타일 (div) */
  block?: boolean;
  /** 문단 스타일 (p) */
  paragraph?: boolean;
  /** 밑줄 스타일 */
  underline?: boolean;
  /** 취소선 스타일 */
  del?: boolean;
  /** 굵은 텍스트 스타일 */
  strong?: boolean;
  /** 강조 텍스트 스타일 */
  em?: boolean;
  /** 이탤릭 텍스트 스타일 */
  italic?: boolean;
  /** 말줄임 줄 수 */
  ellipsis?: number;
}

const Text = forwardRef<HTMLElement, ITextProps>(
  (
    {
      className,
      children,
      size,
      weight,
      lineHeight,
      color,
      align,
      maxWidth,
      block = false,
      paragraph = false,
      underline = false,
      del = false,
      strong = false,
      em = false,
      italic = false,
      ellipsis = 0,
    },
    ref
  ) => {
    let as: "span" | "div" | "p" = "span";
    if (block) {
      as = "div";
    } else if (paragraph) {
      as = "p";
    }

    // undefined 값들을 필터링
    const textProps: any = {
      className,
      as,
      ref,
    };

    if (size !== undefined) textProps.$size = size;
    if (weight !== undefined) textProps.$weight = weight;
    if (lineHeight !== undefined) textProps.$lineHeight = lineHeight;
    if (color !== undefined) textProps.$color = color;
    if (align !== undefined) textProps.$align = align;
    if (maxWidth !== undefined) textProps.$maxWidth = maxWidth;
    if (underline) textProps.$underline = underline;
    if (del) textProps.$del = del;
    if (strong) textProps.$strong = strong;
    if (em) textProps.$em = em;
    if (italic) textProps.$italic = italic;
    if (ellipsis !== 0) textProps.$ellipsis = ellipsis;

    let childrenProp = children;

    if (!underline && del) childrenProp = <del>{children}</del>;
    if (italic) childrenProp = <i>{children}</i>;
    if (em) childrenProp = <em>{children}</em>;
    if (strong) childrenProp = <strong>{children}</strong>;

    return <S.Text {...textProps}>{childrenProp}</S.Text>;
  }
);

Text.displayName = "Text";
export default Text;
