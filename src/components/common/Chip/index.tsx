import React, { memo } from "react";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface IProps {
  /** 칩 내용 */
  children: React.ReactNode;
  /** 칩 클릭 (지정 시 클릭 가능) */
  onClick?: () => void;
  /** 삭제 (지정 시 ✕ 버튼 노출) */
  onRemove?: () => void;
  /** className */
  className?: string;
}

const Chip = ({ children, onClick, onRemove, className }: IProps) => (
  <S.Chip
    className={classNameBind(["chip", className || ""])}
    $clickable={!!onClick}
    onClick={onClick}
  >
    <span className="label">{children}</span>
    {onRemove && (
      <button
        type="button"
        className="remove"
        aria-label="삭제"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        ✕
      </button>
    )}
  </S.Chip>
);

export default memo(Chip);
