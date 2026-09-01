import { memo } from "react";
import { IconRefresh, IconX } from "@/components/common/svg";
import * as S from "./style";

export interface SummaryFilterItem {
  key: string;
  label: string;
}

interface IProps {
  totalCount: number;
  filters?: SummaryFilterItem[];
  emptyLabel?: string;
  onRemove?: (key: string) => void;
  onReset?: () => void;
  className?: string;
}

const FilterSummaryBar = ({
  totalCount,
  filters = [],
  emptyLabel = "전체",
  onRemove,
  onReset,
  className,
}: IProps) => {
  const hasFilters = filters.length > 0;

  return (
    <S.FilterSummaryBar className={className}>
      <S.ResultText>
        <strong>{totalCount}</strong>개
      </S.ResultText>

      <S.FilterRow>
        {hasFilters ? (
          filters.map((filter) => (
            <S.FilterChip key={filter.key}>
              <span>{filter.label}</span>
              {onRemove && (
                <button
                  type="button"
                  aria-label={`${filter.label} 필터 제거`}
                  onClick={() => onRemove(filter.key)}
                >
                  <IconX />
                </button>
              )}
            </S.FilterChip>
          ))
        ) : (
          <S.EmptyChip>{emptyLabel}</S.EmptyChip>
        )}

        {hasFilters && onReset && (
          <S.ResetButton type="button" onClick={onReset}>
            <IconRefresh />
            초기화
          </S.ResetButton>
        )}
      </S.FilterRow>
    </S.FilterSummaryBar>
  );
};

export default memo(FilterSummaryBar);
