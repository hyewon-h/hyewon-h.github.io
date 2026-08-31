import { memo } from "react";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface IProps {
  /** 이미지 경로 */
  src: string;
  /** 대체 텍스트 */
  alt?: string;
  /** 너비 */
  width?: string | number;
  /** 높이 */
  height?: string | number;
  /** object-fit: cover 적용 여부 */
  cover?: boolean;
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
  cover = true,
  ...props
}: IProps) => {
  const imgProps: any = {
    src,
    alt,
    onError,
    onLoad,
    loading,
    ...props,
  };

  const wrapperProps: any = {};
  wrapperProps.className = classNameBind(["img", className || ""]);
  if (width !== undefined) wrapperProps.$width = width;
  if (height !== undefined) wrapperProps.$height = height;
  if (cover) wrapperProps.$cover = cover;

  const innerImgProps: any = {
    ...imgProps,
    $cover: cover,
  };

  return (
    <S.Wrapper {...wrapperProps}>
      <S.Img {...innerImgProps} />
    </S.Wrapper>
  );
};

export default memo(Img);
