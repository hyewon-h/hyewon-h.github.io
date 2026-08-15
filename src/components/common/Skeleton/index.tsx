import { memo } from "react";
import * as S from "./style";

export interface IProps {
  /** 너비 (숫자는 px로 변환) */
  width?: string | number;
  /** 높이 (숫자는 px로 변환) */
  height?: string | number;
  /** 모서리 반경 (숫자는 px로 변환) */
  radius?: string | number;
  /** 형태: 'text'(텍스트 줄) | 'rect'(사각형) | 'circle'(원형) */
  variant?: "text" | "rect" | "circle";
  /** 반복 개수 (여러 줄/블록 렌더링) */
  count?: number;
  /** CSS 클래스명 */
  className?: string;
}

const toCssSize = (value?: string | number) =>
  typeof value === "number" ? `${value}px` : value;

const Skeleton = ({
  width,
  height,
  radius,
  variant = "text",
  count = 1,
  className,
}: IProps) => {
  const size = Math.max(1, count);
  const cssWidth = toCssSize(width);
  const cssHeight = toCssSize(height);
  const cssRadius = toCssSize(radius);

  return (
    <>
      {Array.from({ length: size }).map((_, index) => (
        <S.Skeleton
          key={index}
          className={className}
          $variant={variant}
          {...(cssWidth !== undefined && { $width: cssWidth })}
          {...(cssHeight !== undefined && { $height: cssHeight })}
          {...(cssRadius !== undefined && { $radius: cssRadius })}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default memo(Skeleton);
