import React, { memo, useState, useCallback, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import type {
  PaginationOptions,
  AutoplayOptions,
  Swiper as SwiperClass,
  NavigationOptions,
} from "swiper/types";

import * as S from "./style";

interface IProps {
  children?: React.ReactElement | React.ReactElement[];
  selectedValue?: string | number | undefined;
  spaceBetween?: number;
  speed?: number;
  slidesOffsetAfter?: number;
  slidesOffsetBefore?: number;
  resistanceRatio?: number;
  slidesPerView?: number | "auto" | undefined;
  slidesPerGroup?: number;
  effect?: string;
  loop?: boolean;
  loopAdditionalSlides?: number;
  nested?: boolean;
  autoHeight?: boolean;
  centeredSlides?: boolean;
  watchSlidesProgress?: boolean;
  slideToClickedSlide?: boolean;
  simulateTouch?: boolean;
  width?: null | number;
  navigation?: boolean | NavigationOptions;
  autoplay?: boolean | AutoplayOptions;
  pagination?: boolean | PaginationOptions;
  onSwiper?: (swiper: SwiperClass) => void;
  onTransitionEnd?: (swiper: SwiperClass) => void;
}

const ItemsSwiper: React.FunctionComponent<IProps> = ({
  children,
  selectedValue,
  spaceBetween = 0,
  speed = 300,
  slidesOffsetAfter = 0,
  slidesOffsetBefore = 0,
  resistanceRatio = 0.85,
  slidesPerView = 1,
  slidesPerGroup = 1,
  effect = "slide",
  loop = true,
  loopAdditionalSlides = 0,
  nested = false,
  autoHeight = false,
  centeredSlides = false,
  watchSlidesProgress = false,
  slideToClickedSlide = false,
  simulateTouch = false,
  width = null,
  navigation = false,
  autoplay,
  pagination = {
    type: "bullets",
    clickable: true,
  },
  onSwiper,
  onTransitionEnd,
}: IProps) => {
  const [_selectedValue, setSelectedValue] = useState(selectedValue);
  const [currentSwiper, setCurrentSwiper] = useState<SwiperClass>();
  const childrenLength = Array.isArray(children) ? children.length : 0;
  const [_childCnt, setChildCnt] = useState<number>(childrenLength);

  // 슬라이드 이동 핸들러
  const onSwiperSlideTo = useCallback(
    (swiper: SwiperClass) => {
      if (Array.isArray(children) && _selectedValue !== undefined) {
        const idx = (children as React.ReactElement[]).findIndex(
          (v) => (v.props as any)?.value === _selectedValue,
        );
        if (swiper && idx !== -1 && swiper.params)
          swiper.slideToLoop(idx, speed, false);
      }
    },
    [_selectedValue, speed, children],
  );

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const count = Array.isArray(children) ? children.length : 0;
    setChildCnt(count);
  }, [children]);

  useEffect(() => {
    if (_selectedValue && currentSwiper) onSwiperSlideTo(currentSwiper);
  }, [_selectedValue, currentSwiper, onSwiperSlideTo]);

  // 슬라이드 렌더러
  const getListRender = useCallback((el: React.ReactNode) => {
    if (Array.isArray(el)) {
      return el.map((v: React.ReactElement<any>) => {
        if (v) {
          return (
            <SwiperSlide
              key={v.key}
              data-value={v.props?.value ? v.props?.value : null}
            >
              {v}
            </SwiperSlide>
          );
        }
        return null;
      });
    }
    return null;
  }, []);

  return (
    <S.Box>
      <Swiper
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        pagination={_childCnt < 2 ? false : pagination}
        spaceBetween={spaceBetween}
        speed={speed}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={_childCnt < 2 ? false : loop}
        loopAdditionalSlides={loopAdditionalSlides}
        nested={nested}
        autoHeight={autoHeight}
        resistanceRatio={resistanceRatio}
        autoplay={_childCnt < 2 ? false : (autoplay ?? false)}
        navigation={navigation}
        width={width}
        effect={
          effect as
            | "slide"
            | "fade"
            | "cube"
            | "coverflow"
            | "creative"
            | "cards"
        }
        simulateTouch={simulateTouch}
        slidesOffsetAfter={slidesOffsetAfter}
        slidesOffsetBefore={slidesOffsetBefore}
        slideToClickedSlide={slideToClickedSlide}
        centeredSlides={centeredSlides}
        watchSlidesProgress={watchSlidesProgress}
        className="items-swiper list"
        onInit={(swiper: SwiperClass) => {
          setCurrentSwiper(swiper);
          onSwiperSlideTo(swiper);
        }}
        onTransitionEnd={(swiper: SwiperClass) => {
          if (onTransitionEnd) {
            onTransitionEnd(swiper);
          }
        }}
        onSwiper={(swiper: SwiperClass) => {
          if (onSwiper) {
            onSwiper(swiper);
          }
        }}
      >
        {getListRender(children)}
      </Swiper>
    </S.Box>
  );
};

export default memo(ItemsSwiper);
