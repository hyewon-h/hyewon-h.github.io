import React, { memo } from "react";
import * as S from "./style";

export interface IImgProps {
  /** 이미지 경로 */
  src: string;
  /** 대체 텍스트 */
  alt: string;
  /** 너비 */
  width?: string | number;
  /** 높이 */
  height?: string | number;
  /** CSS 클래스명 */
  className?: string;
  /** 로딩 실패 시 콜백 */
  onError?: () => void;
  /** 로딩 완료 시 콜백 */
  onLoad?: () => void;
  /** 지연 로딩 설정 */
  loading?: "lazy" | "eager";
}

const Img: React.FC<IImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  onError,
  onLoad,
  loading = "lazy",
  ...props
}) => {
  // undefined 값들을 필터링
  const imgProps: any = {
    src,
    alt,
    className,
    onError,
    onLoad,
    loading,
    ...props,
  };

  // width, height가 정의된 경우에만 추가
  if (width !== undefined) imgProps.width = width;
  if (height !== undefined) imgProps.height = height;

  return <S.Img {...imgProps} />;
};

export default memo(Img);
