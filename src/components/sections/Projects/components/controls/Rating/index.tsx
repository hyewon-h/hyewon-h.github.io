import { memo, useState } from "react";
// SVGR: 크기/색상을 CSS로 제어하기 위해 raw 컴포넌트로 가져온다
import { ReactComponent as StarSvg } from "@/components/common/svg/icon/icon_star.svg";
import * as S from "./style";

export interface IProps {
  /** 현재 별점 (소수 가능, 예: 3.5) */
  value: number;
  /** 최대 별 개수 (기본: 5) */
  max?: number;
  /** 별 크기 px (기본: 20) */
  size?: number;
  /** 별 사이 간격 px (기본: 2) */
  gap?: number;
  /** 별점 변경 (지정 시 클릭 가능) */
  onChange?: (value: number) => void;
  /** 0.5 단위 선택/표시 허용 (기본: false) */
  allowHalf?: boolean;
  /** 읽기 전용 (onChange가 있어도 클릭 막음) */
  readOnly?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

const Rating = ({
  value,
  max = 5,
  size = 20,
  gap = 2,
  onChange,
  allowHalf = false,
  readOnly = false,
  className,
}: IProps) => {
  // 호버 중일 때 미리보기 값 (없으면 null)
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const interactive = !!onChange && !readOnly;
  const display = hoverValue ?? value;

  // 채움 비율(%) — 0~max 범위를 0~100으로
  const fillPercent = (Math.min(Math.max(display, 0), max) / max) * 100;

  const stars = Array.from({ length: max });

  const handleSelect = (next: number) => {
    if (!interactive) return;
    onChange?.(next);
  };

  return (
    <S.Rating
      className={className}
      $size={size}
      $gap={gap}
      role={interactive ? "slider" : "img"}
      aria-label={`${max}점 만점에 ${value}점`}
      aria-valuenow={value}
    >
      {/* 바닥: 빈 별 */}
      <span className="stars base" aria-hidden="true">
        {stars.map((_, i) => (
          <StarSvg key={i} />
        ))}
      </span>

      {/* 채움: value 비율만큼 노출 */}
      <span
        className="stars fill"
        style={{ width: `${fillPercent}%` }}
        aria-hidden="true"
      >
        {stars.map((_, i) => (
          <StarSvg key={i} />
        ))}
      </span>

      {/* 인터랙션: 별마다 half/full 클릭 영역 */}
      {interactive && (
        <div className="control" onMouseLeave={() => setHoverValue(null)}>
          {stars.map((_, i) => (
            <span className="slot" key={i}>
              {allowHalf && (
                <button
                  type="button"
                  className="hit half"
                  aria-label={`${i + 0.5}점`}
                  onMouseEnter={() => setHoverValue(i + 0.5)}
                  onClick={() => handleSelect(i + 0.5)}
                />
              )}
              <button
                type="button"
                className={allowHalf ? "hit half" : "hit full"}
                aria-label={`${i + 1}점`}
                onMouseEnter={() => setHoverValue(i + 1)}
                onClick={() => handleSelect(i + 1)}
              />
            </span>
          ))}
        </div>
      )}
    </S.Rating>
  );
};

export default memo(Rating);
