import React, { memo, useCallback } from "react";
import * as S from "./style";

export interface IProps {
  /** 현재 수량 */
  value: number;
  /** 최소 수량 (기본: 1) */
  min?: number;
  /** 최대 수량 (기본: 99) */
  max?: number;
  /** 증감 단위 (기본: 1) */
  step?: number;
  /** 수량 변경 핸들러 */
  onChange: (value: number) => void;
  /** 직접 입력 허용 여부 (기본: true) */
  editable?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

// 값을 [min, max] 범위로 보정
const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const QuantityStepper = ({
  value,
  min = 1,
  max = 99,
  step = 1,
  onChange,
  editable = true,
  disabled = false,
  className,
}: IProps) => {
  const commit = useCallback(
    (next: number) => {
      if (disabled) return;
      const clamped = clamp(next, min, max);
      if (clamped !== value) onChange(clamped);
    },
    [disabled, min, max, value, onChange],
  );

  // 입력 도중엔 부분값을 허용하되, 빈 값/NaN은 무시
  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = Number(e.target.value);
      if (Number.isNaN(raw)) return;
      commit(raw);
    },
    [commit],
  );

  return (
    <S.Stepper className={className} $disabled={disabled}>
      <button
        type="button"
        className="btn minus"
        aria-label="수량 감소"
        onClick={() => commit(value - step)}
        disabled={disabled || value <= min}
      >
        −
      </button>
      <input
        className="value"
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleInput}
        readOnly={!editable}
        disabled={disabled}
        aria-label="수량"
      />
      <button
        type="button"
        className="btn plus"
        aria-label="수량 증가"
        onClick={() => commit(value + step)}
        disabled={disabled || value >= max}
      >
        +
      </button>
    </S.Stepper>
  );
};

export default memo(QuantityStepper);
