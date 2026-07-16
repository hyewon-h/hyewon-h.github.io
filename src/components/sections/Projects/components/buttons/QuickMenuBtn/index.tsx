import { memo } from "react";
import { classNameBind } from "@/utils/commonUtils";
import Text from "@/components/common/Text";
import Img from "@/components/common/Img";
import * as S from "./style";

interface IProps {
  text?: string;
  imgSrc?: string;
  bgColor?: string;
  fontColor?: string;
  className?: string;
  onClick: () => void;
  isAd?: boolean;
}

const QuickMenuBtn = ({
  text,
  imgSrc,
  bgColor,
  fontColor,
  className,
  onClick,
  isAd = false,
}: IProps) => {
  const cName = classNameBind(["quick-menu-btn", className || ""]);

  return (
    <S.QuickMenuBtn
      className={cName}
      bgColor={bgColor || "#f6f6f6"}
      fontColor={fontColor || "#000"}
      hasImg={!!imgSrc}
      onClick={onClick}
    >
      {imgSrc && <Img src={imgSrc} />}
      <Text>{text}</Text>
      {isAd && <span className="ad-tag">AD</span>}
    </S.QuickMenuBtn>
  );
};

export default memo(QuickMenuBtn);
