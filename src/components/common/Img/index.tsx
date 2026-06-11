import { memo } from "react";
import * as S from "./style";

export interface IProps {
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

const Img = ({
  src,
  alt,
  width,
  height,
  className,
  onError,
  onLoad,
  loading = "lazy",
  ...props
}: IProps) => {
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

  // width, height가 정의된 경우에만 추가 (transient prop으로 전달해 CSS로만 적용)
  if (width !== undefined) imgProps.$width = width;
  if (height !== undefined) imgProps.$height = height;

  return <S.Img {...imgProps} />;
};

export default memo(Img);
