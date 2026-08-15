import React, { memo, useCallback } from "react";
import * as S from "./style";

export interface IProps {
  /** 최소값 */
  min: number;
  /** 최대값 */
  max: number;
  /** 증가 단위 */
  step?: number;
  /** 현재 값 [하한, 상한] */
  value: [number, number];
  /** 값 변경 핸들러 */
  onChange: (value: [number, number]) => void;
  /** 두 thumb의 최소 간격 (기본: step) */
  minGap?: number;
  /** 라벨 표시 여부 (기본: true) */
  showLabels?: boolean;
  /** 라벨 포맷터 (기본: toLocaleString) */
  formatLabel?: (value: number) => string;
  /** CSS 클래스명 */
  className?: string;
}

const defaultFormat = (value: number) => value.toLocaleString("ko-KR");

const RangeSlider = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  minGap,
  showLabels = true,
  formatLabel = defaultFormat,
  className,
}: IProps) => {
  const gap = minGap ?? step;
  const [low, high] = value;

  // 백분율 (트랙 채움 위치 계산용)
  const toPercent = (v: number) => ((v - min) / (max - min)) * 100;

  const handleLow = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // 상한보다 gap 이상 넘지 않도록 클램프
      const next = Math.min(Number(e.target.value), high - gap);
      onChange([Math.max(min, next), high]);
    },
    [high, gap, min, onChange],
  );

  const handleHigh = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = Math.max(Number(e.target.value), low + gap);
      onChange([low, Math.min(max, next)]);
    },
    [low, gap, max, onChange],
  );

  return (
    <S.Wrapper className={className}>
      <S.SliderArea>
        <span className="rail" />
        <span
          className="track"
          style={{
            left: `${toPercent(low)}%`,
            width: `${toPercent(high) - toPercent(low)}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={low}
          onChange={handleLow}
          aria-label="최소값"
          aria-valuetext={formatLabel(low)}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={high}
          onChange={handleHigh}
          aria-label="최대값"
          aria-valuetext={formatLabel(high)}
        />
      </S.SliderArea>
      {showLabels && (
        <S.Labels>
          <span>{formatLabel(low)}</span>
          <span>{formatLabel(high)}</span>
        </S.Labels>
      )}
    </S.Wrapper>
  );
};

export default memo(RangeSlider);
