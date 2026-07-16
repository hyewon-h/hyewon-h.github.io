import React, { memo, useState, useCallback, useEffect } from "react";
import { FreeMode, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper as SwiperClass } from "swiper/types";
import * as S from "./style";

interface IProps {
  items1?: React.ReactNode;
  items2?: React.ReactNode;
}

const QuickMenuBar = ({ items1, items2 }: IProps) => {
  const [swiperItem1, setSwiperItem1] = useState<SwiperClass | null>(null);
  const [swiperItem2, setSwiperItem2] = useState<SwiperClass | null>(null);
  const [shouldDampen, setShouldDampen] = useState(false);

  const calculateTotalWidth = useCallback((swiper: SwiperClass) => {
    if (!swiper || !swiper.slides) return 0;

    let totalWidth = 0;
    swiper.slides.forEach((slide: HTMLElement) => {
      totalWidth += slide.offsetWidth;
    });

    const spaceBetweenTotal = (swiper.slides.length - 1) * 5; // (슬라이드 개수 - 1) * spaceBetween

    return totalWidth + spaceBetweenTotal;
  }, []);

  const checkLengthDifference = useCallback(() => {
    if (!swiperItem1 || !swiperItem2) return;

    const width1 = calculateTotalWidth(swiperItem1);
    const width2 = calculateTotalWidth(swiperItem2);

    // 스와이퍼 길이 차이가 100px 이상일 경우 저항 적용(0.02), 미만일 경우 부드럽게(0.1)
    const shouldApplyDamping = Math.abs(width1 - width2) >= 100;

    setShouldDampen(shouldApplyDamping);
  }, [swiperItem1, swiperItem2, calculateTotalWidth]);

  // ITEM RENDERER : getListRender
  const getListRender = useCallback((items: React.ReactNode) => {
    if (items instanceof Array) {
      return items?.map((v: React.ReactElement, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={i}>{v}</SwiperSlide>
      ));
    }

    return null;
  }, []);

  useEffect(() => {
    if (swiperItem1 && swiperItem2) {
      const timer = setTimeout(() => {
        checkLengthDifference();
      }, 150);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [checkLengthDifference, swiperItem1, swiperItem2]);

  return (
    <S.QuickMenuBar className="quickmenu-list">
      <Swiper
        modules={[FreeMode, Controller]}
        spaceBetween={6}
        slidesPerView="auto"
        freeMode
        className="list"
        onInit={(swiper: SwiperClass) => {
          setSwiperItem1(swiper);
        }}
        controller={{
          control: swiperItem2,
        }}
        resistance
        resistanceRatio={shouldDampen ? 0.02 : 0.1}
      >
        {getListRender(items1)}
      </Swiper>
      {items2 && (
        <Swiper
          modules={[FreeMode, Controller]}
          spaceBetween={6}
          slidesPerView="auto"
          freeMode
          className="list"
          onInit={(swiper: SwiperClass) => {
            setSwiperItem2(swiper);
          }}
          controller={{
            control: swiperItem1,
          }}
          resistance
          resistanceRatio={shouldDampen ? 0.02 : 0.1}
        >
          {getListRender(items2)}
        </Swiper>
      )}
    </S.QuickMenuBar>
  );
};

export default memo(QuickMenuBar);
