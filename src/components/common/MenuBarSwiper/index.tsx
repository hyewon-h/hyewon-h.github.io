import React, { memo, useEffect, useState } from "react";

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
  selectedValue?: string | number | undefined;
  /** 아이템 선택 콜백 */
  onChange?: (value: string | number) => void;
  /** 선택 아이템 정렬: center(기본, 오버플로 시 중앙) | left(좌측) */
  align?: "center" | "left";
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
  speed = 300,
  className,
}: IProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const centered = align === "center" && selectedValue !== undefined;

  useEffect(() => {
    if (!swiper || selectedValue === undefined) return undefined;
    const idx = items.findIndex(
      (item) => String(item.value) === String(selectedValue),
    );
    if (idx < 0) return undefined;
    const timer = setTimeout(() => swiper.slideTo(idx, speed, false), 50);
    return () => clearTimeout(timer);
  }, [swiper, selectedValue, items, speed]);

  const cName = classNameBind(["menubar-swiper", className || ""]);

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
        onSwiper={(sw) => setSwiper(sw)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.value} data-value={item.value}>
            <button
              type="button"
              className={classNameBind([
                "item",
                String(item.value) === String(selectedValue) ? "active" : "",
              ])}
              onClick={() => onChange?.(item.value)}
            >
              {item.label}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.MenuBarSwiper>
  );
};

export default memo(MenuBarSwiper);
