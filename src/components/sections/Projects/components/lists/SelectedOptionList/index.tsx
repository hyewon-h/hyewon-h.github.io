import { memo } from "react";
import { IconX } from "@/components/common/svg";
import QuantityStepper from "@/components/sections/Projects/components/controls/QuantityStepper";
import * as S from "./style";

export interface SelectedOptionItem {
  /** 옵션 고유 키 (CustomSelect의 optionvalue ?? value) */
  id: string;
  /** 옵션명 */
  label: string;
  /** 선택 수량 */
  quantity: number;
  /** 옵션 추가금 (원, 기본: 0) */
  surcharge?: number;
  /** 옵션별 단가 (미지정 시 공통 price 사용) */
  price?: number;
}

export interface IProps {
  /** 선택된 옵션 목록 (비어 있으면 렌더링하지 않음) */
  items: SelectedOptionItem[];
  /** 상품 기본 단가 (원) */
  price: number;
  /** 수량 변경 핸들러 */
  onChangeQuantity: (id: string, quantity: number) => void;
  /** 옵션 삭제 핸들러 (지정 시 삭제 버튼 노출) */
  onRemove?: (id: string) => void;
  /** 최소 수량 (기본: 1) */
  minQuantity?: number;
  /** 최대 수량 (기본: 99) */
  maxQuantity?: number;
  /** CSS 클래스명 */
  className?: string;
}

const formatPrice = (value: number) => value.toLocaleString("ko-KR");

/** CustomSelect에서 고른 옵션을 옵션/추가금/수량/총 금액으로 보여주는 영역 */
const SelectedOptionList = ({
  items,
  price,
  onChangeQuantity,
  onRemove,
  minQuantity = 1,
  maxQuantity = 99,
  className,
}: IProps) => {
  if (items.length === 0) return null;

  // 옵션 단가 = (옵션 단가 ?? 상품 기본가) + 추가금
  const getUnitPrice = (item: SelectedOptionItem) =>
    (item.price ?? price) + (item.surcharge ?? 0);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + getUnitPrice(item) * item.quantity,
    0,
  );

  return (
    <S.SelectedOptionList className={className}>
      {items.map((item) => (
        <S.OptionItem key={item.id} className="selected_option_item">
          {onRemove && (
            <S.RemoveBtn
              type="button"
              aria-label={`${item.label} 옵션 삭제`}
              onClick={() => onRemove(item.id)}
            >
              <IconX />
            </S.RemoveBtn>
          )}

          {/* 1행: 옵션명 + 추가금 */}
          <div className="option_row">
            <span className="option_name">{item.label}</span>
            {!!item.surcharge && (
              <em className="surcharge">+{formatPrice(item.surcharge)}원</em>
            )}
          </div>

          {/* 2행: 수량 */}
          <div className="quantity_row">
            <QuantityStepper
              value={item.quantity}
              min={minQuantity}
              max={maxQuantity}
              onChange={(quantity) => onChangeQuantity(item.id, quantity)}
            />
          </div>

          {/* 3행: 총 금액 (우측 정렬) */}
          <div className="total_row">
            <strong>{formatPrice(getUnitPrice(item) * item.quantity)}원</strong>
          </div>
        </S.OptionItem>
      ))}

      {items.length > 1 && (
        <S.TotalBar>
          <span className="label">총 상품 금액</span>
          <strong className="amount">
            <em>총 {totalQuantity}개</em>
            {formatPrice(totalAmount)}원
          </strong>
        </S.TotalBar>
      )}
    </S.SelectedOptionList>
  );
};

export default memo(SelectedOptionList);
