import React, { memo, useEffect, useRef } from "react";

import * as S from "./style";

export interface IProps {
  children?: React.ReactNode;
  /** 1줄에 보이는 개수 (0: 아이템 너비를 컨텐츠 크기로 자동 지정) */
  perView?: number;
  /** 아이템 간 간격(px) (column-gap) */
  gap?: number;
  /** 줄 간 간격(px) (row-gap) */
  rowGap?: number;
  /** 좌우 여백(px) */
  offsetLR?: number;
  /** 보이는 줄 개수 */
  line?: number;
  /** 스크롤 스냅 활성화 */
  snap?: boolean;
  /** 마운트 시 스크롤 초기화 */
  scrollInit?: boolean;
  className?: string;
  /** 선택된 아이템으로 스크롤 이동 */
  selectedIndex?: number;
  /** 스크롤 정렬 방식 */
  scrollAlign?: "left" | "center";
}

/**
 * 가로 스크롤 스냅 컴포넌트
 * - perView: 한 화면에 보여줄 아이템 개수 (0: 아이템 너비를 컨텐츠 크기로 자동 지정)
 * - gap: 아이템 간 간격(px, column-gap)
 * - rowGap: 줄 간 간격(px, row-gap)
 * - offsetLR: 좌우 여백(px)
 * - line: 보이는 줄 개수
 * - snap: 스크롤 스냅 활성화
 * - scrollInit: 마운트 시 스크롤 초기화
 * - selectedIndex: 선택된 아이템으로 스크롤 이동
 * - scrollAlign: 스크롤 정렬 방식 (left | center)
 */
const ItemsScrollBar = ({
  children,
  className,
  perView = 2,
  offsetLR = 20,
  gap = 5,
  rowGap = 24,
  line = 1,
  snap = false,
  scrollInit = false,
  selectedIndex,
  scrollAlign = "left",
}: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // perView === 0: 아이템 너비를 컨텐츠 크기로 자동 지정 (item-auto)
  const isItemAuto = perView === 0;

  useEffect(() => {
    if (scrollInit && ref.current) {
      ref.current.scrollTo({ left: 0 });
    }
  }, [children, scrollInit]);

  useEffect(() => {
    if (selectedIndex === undefined) return undefined;

    // 아이템 너비(이미지 등)가 확정된 뒤 위치를 읽도록 다음 프레임에 스크롤
    // (offsetLeft 오측정 방지)
    const id = requestAnimationFrame(() => {
      const container = ref.current;
      if (!container) return;
      // item-auto 모드에서는 아이템이 inner-items-scrollBar로 한 번 감싸짐
      const itemParent = isItemAuto
        ? (container.children[0] as HTMLElement)
        : container;
      const item = itemParent?.children[selectedIndex] as
        | HTMLElement
        | undefined;
      if (!item) return;
      const scrollLeft =
        scrollAlign === "center"
          ? item.offsetLeft + item.offsetWidth / 2 - container.offsetWidth / 2
          : isItemAuto
          ? item.offsetLeft - offsetLR
          : item.offsetLeft;
      if (typeof container.scrollTo === "function") {
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      } else {
        container.scrollLeft = scrollLeft;
      }
    });

    return () => cancelAnimationFrame(id);
  }, [selectedIndex, scrollAlign, offsetLR, isItemAuto]);

  // 배열을 줄 수(line)만큼의 청크로 나누는 함수
  const chunkArray = (child: React.ReactNode, size: number) => {
    const array = React.Children.toArray(child);

    // 아이템 개수가 size 이하면 전체를 하나의 청크로 반환
    if (array.length <= size) {
      return [array];
    }

    const remainder = array.length % size;
    const chunkedArray = [];
    let startIndex = 0;

    for (let i = 0; i < size; i++) {
      const endIndex =
        startIndex + Math.floor(array.length / size) + (i < remainder ? 1 : 0);
      chunkedArray.push(array.slice(startIndex, endIndex));
      startIndex = endIndex;
    }

    return chunkedArray;
  };

  const renderContent = () => {
    if (line === 1) {
      // item-auto는 inner-items-scrollBar로 감싸 가로 정렬
      if (isItemAuto) {
        return <div className="inner-items-scrollBar">{children}</div>;
      }
      return <>{children}</>;
    }

    // 멀티라인: 줄 수만큼 청크로 나눠 각 줄을 inner-items-scrollBar로 묶음
    return chunkArray(children, line).map((chunk, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="inner-items-scrollBar" key={index}>
        {chunk.map((item, itemIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={itemIndex}>{item}</React.Fragment>
        ))}
      </div>
    ));
  };

  return (
    <S.ItemsScrollBar
      className={`items-scrollBar list${isItemAuto ? " item-auto" : ""}${
        className ? " " + className : ""
      }`}
      $perView={perView}
      $offsetLR={offsetLR}
      $gap={gap}
      $rowGap={rowGap}
      $line={line}
      $snap={snap}
      $scrollAlign={scrollAlign}
      ref={ref}
    >
      {renderContent()}
    </S.ItemsScrollBar>
  );
};

export default memo(ItemsScrollBar);
