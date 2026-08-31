import { memo } from "react";
import Img from "@/components/common/Img";
import Text from "@/components/common/Text";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface IProps {
  /** 상품 이미지 경로 */
  imgSrc: string;
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  name?: string;
  /** CSS 클래스명 */
  className?: string;
}

const ShowcaseProductItem = ({ imgSrc, brand, name, className }: IProps) => {
  const cName = classNameBind(["item product-item", className || ""]);

  return (
    <S.ShowcaseProductItem className={cName}>
      <Img className="area-img" src={imgSrc} />
      <div className="area-info">
        <div className="area-click">
          <Text block className="brand">
            {brand}
          </Text>
          <Text block className="detail">
            {name}
          </Text>
        </div>
      </div>
    </S.ShowcaseProductItem>
  );
};

export default memo(ShowcaseProductItem);
