import React, { memo, useCallback, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";

import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface MenuBarItem {
  /** 식별/선택 값 */
  value: string | number;
  /** 표시 내용 */
  label: React.ReactNode;
}

interface IProps {
  /** 메뉴 아이템 목록 */
  items: MenuBarItem[];
  /** 선택된 값 (해당 아이템으로 자동 스크롤) */
  selectedValue?: string | number;
  /** 아이템 선택 콜백 */
  onChange?: (value: string | number) => void;
  /** 선택 아이템 정렬: center(기본, 오버플로 시 중앙) | left(좌측) */
  align?: "center" | "left";
  /** 오버플로 시 펼침(드롭다운) 버튼 사용 여부 */
  foldable?: boolean;
  /** 슬라이드 이동 속도(ms) */
  speed?: number;
  /** className */
  className?: string;
}

const MenuBarSwiper = ({
  items,
  selectedValue,
  onChange,
  align = "center",
  foldable = true,
  speed = 300,
  className,
}: IProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isOverflow, setIsOverflow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 콘텐츠가 컨테이너보다 넓은지(=가려지는 아이템이 있는지) 확인
  const checkOverflow = useCallback((sw?: SwiperClass) => {
    if (!sw?.el || !sw?.wrapperEl) return;
    setIsOverflow(sw.el.clientWidth < sw.wrapperEl.scrollWidth);
  }, []);

  // align="center"이고 오버플로 + 선택값이 있을 때만 중앙 정렬
  // (align="left"이거나 짧은 목록이면 좌측 정렬 유지)
  const centered =
    align === "center" && isOverflow && selectedValue !== undefined;

  // 선택값 변경/접힘 전환 시 선택된 아이템을 중앙으로 정렬
  // (펼침 상태에서는 wrap 그리드라 정렬하지 않음)
  useEffect(() => {
    if (!swiper || selectedValue === undefined || isOpen) return undefined;
    const idx = items.findIndex(
      (item) => String(item.value) === String(selectedValue),
    );
    if (idx < 0) return undefined;
    // 펼침→접힘 전환 및 centeredSlides 재계산 후 정렬되도록 한 틱 뒤 실행
    const timer = setTimeout(() => swiper.slideTo(idx, speed, false), 50);
    return () => clearTimeout(timer);
  }, [swiper, selectedValue, isOpen, items, speed]);

  const showFoldBtn = foldable && isOverflow;

  const handleSelect = useCallback(
    (value: string | number) => {
      onChange?.(value);
      setIsOpen(false);
    },
    [onChange],
  );

  const cName = classNameBind([
    "menubar-swiper",
    showFoldBtn ? "now-fold" : "",
    isOpen ? "is-open" : "",
    className || "",
  ]);

  return (
    <S.MenuBarSwiper className={cName}>
      <Swiper
        modules={[FreeMode]}
        slidesPerView="auto"
        freeMode
        spaceBetween={0}
        speed={speed}
        centeredSlides={centered}
        centeredSlidesBounds
        onSwiper={(sw) => {
          setSwiper(sw);
          checkOverflow(sw);
        }}
        onResize={checkOverflow}
      >
        {items.map((item) => (
          <SwiperSlide key={item.value} data-value={item.value}>
            <button
              type="button"
              className={classNameBind([
                "item",
                String(item.value) === String(selectedValue) ? "active" : "",
              ])}
              onClick={() => handleSelect(item.value)}
            >
              {item.label}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {showFoldBtn && (
        <button
          type="button"
          className="fold-btn"
          aria-expanded={isOpen}
          aria-label={isOpen ? "메뉴 접기" : "메뉴 펼치기"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </S.MenuBarSwiper>
  );
};

export default memo(MenuBarSwiper);
