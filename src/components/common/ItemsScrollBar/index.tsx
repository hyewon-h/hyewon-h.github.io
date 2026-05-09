import React, { memo, useEffect, useRef } from "react";

import * as S from "./style";

export interface ItemsScrollBarProps {
  children?: React.ReactNode;
  perView?: number;
  gap?: number;
  offsetLR?: number;
  snap?: boolean;
  scrollInit?: boolean;
  className?: string;
}

/**
 * 가로 스크롤 스냅 컴포넌트
 * - perView: 한 화면에 보여줄 아이템 개수
 * - gap: 아이템 간 간격(px)
 * - offsetLR: 좌우 여백(px)
 * - snap: 스크롤 스냅 활성화
 * - scrollInit: 마운트 시 스크롤 초기화
 */
const ItemsScrollBar = ({
  children,
  className,
  perView = 2,
  offsetLR = 20,
  gap = 5,
  snap = false,
  scrollInit = false,
}: ItemsScrollBarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollInit && ref.current) {
      ref.current.scrollTo({ left: 0 });
    }
  }, [children, scrollInit]);

  return (
    <S.ItemsScrollBar
      className={`items-scrollBar list${className ? " " + className : ""}`}
      perView={perView}
      offsetLR={offsetLR}
      gap={gap}
      snap={snap}
      ref={scrollInit ? ref : undefined}
    >
      {children}
    </S.ItemsScrollBar>
  );
};

export default memo(ItemsScrollBar);
