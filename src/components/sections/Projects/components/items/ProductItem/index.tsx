import React, { memo } from "react";
import Img from "@/components/common/Img";
import Tag from "@/components/common/Tag";
import { IconHeart } from "@/components/common/svg";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface IProps {
  /** 상품 이미지 경로 */
  imgSrc: string;
  /** 브랜드명 */
  brand?: string;
  /** 상품명 */
  name: string;
  /** 판매가 */
  price: number;
  /** 정가 (지정 시 할인율 자동 계산 + 취소선 노출) */
  originPrice?: number;
  /** 품절 여부 */
  soldOut?: boolean;
  /** 신상품 뱃지 */
  isNew?: boolean;
  /** 광고 뱃지 */
  isAd?: boolean;
  /** 찜 상태 */
  liked?: boolean;
  /** 찜 토글 (지정 시 하트 버튼 노출) */
  onToggleLike?: () => void;
  /** 카드 클릭 */
  onClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

// 1000 → "1,000"
const formatPrice = (value: number) => value.toLocaleString("ko-KR");

const ProductItem = ({
  imgSrc,
  brand,
  name,
  price,
  originPrice,
  soldOut = false,
  isNew = false,
  isAd = false,
  liked = false,
  onToggleLike,
  onClick,
  className,
}: IProps) => {
  // 정가가 판매가보다 클 때만 할인율 계산
  const hasDiscount = !!originPrice && originPrice > price;
  const discountRate = hasDiscount
    ? Math.round(((originPrice - price) / originPrice) * 100)
    : 0;

  return (
    <S.Card
      className={classNameBind(["product-card", className || ""])}
      $clickable={!!onClick}
      onClick={onClick}
    >
      <div className="area-thumb">
        {(isNew || isAd) && (
          <div className="area-badge">
            {isNew && <span className="badge new">NEW</span>}
            {isAd && <span className="badge ad">AD</span>}
          </div>
        )}

        {onToggleLike && (
          <button
            type="button"
            className={classNameBind(["btn-like", liked ? "liked" : ""])}
            aria-label={liked ? "찜 해제" : "찜하기"}
            aria-pressed={liked}
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike();
            }}
          >
            <IconHeart />
          </button>
        )}

        <Img className="thumb" src={imgSrc} alt={name} />
      </div>

      <div className="area-info">
        {brand && <p className="brand">{brand}</p>}
        <p className="name">{name}</p>
        <div className="area-price">
          {hasDiscount && <span className="discount">{discountRate}%</span>}
          <span className="price">{formatPrice(price)}원</span>
          {hasDiscount && (
            <span className="origin">{formatPrice(originPrice!)}원</span>
          )}
        </div>
        {soldOut && <Tag className="tag-soldout">품절</Tag>}
      </div>
    </S.Card>
  );
};

export default memo(ProductItem);
