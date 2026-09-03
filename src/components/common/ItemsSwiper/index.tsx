import React, { memo, useState, useCallback, useEffect, useMemo } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCreative,
  Virtual,
  FreeMode,
  Controller,
  Keyboard,
} from "swiper/modules";
import type {
  PaginationOptions,
  AutoplayOptions,
  Swiper as SwiperClass,
  NavigationOptions,
  VirtualOptions,
  CreativeEffectOptions,
  ControllerOptions,
} from "swiper/types";

import * as S from "./style";

interface IProps {
  children?: React.ReactElement | React.ReactElement[];
  selectedValue?: string | number | undefined;
  className?: string;
  spaceBetween?: number;
  speed?: number;
  slidesOffsetAfter?: number;
  slidesOffsetBefore?: number;
  resistanceRatio?: number;
  slidesPerView?: number | "auto" | undefined;
  slidesPerGroup?: number;
  effect?: string;
  creativeEffect?: CreativeEffectOptions;
  touchRatio?: number;
  loop?: boolean;
  loopAddBlankSlides?: boolean;
  loopAdditionalSlides?: number;
  /** loop에서 슬라이드가 부족할 때 자식을 복제해 채울 기준 개수 */
  loopedPerView?: null | number;
  nested?: boolean;
  autoHeight?: boolean;
  centeredSlides?: boolean;
  watchSlidesProgress?: boolean;
  slideToClickedSlide?: boolean;
  simulateTouch?: boolean;
  freeMode?: boolean | any;
  cssMode?: boolean | any;
  direction?: "horizontal" | "vertical";
  width?: null | number;
  initialSlide?: number;
  lazyPreloadPrevNext?: number;
  navigation?: boolean | NavigationOptions;
  /** Swiper 밖 형제로 렌더할 네비게이션 엘리먼트 (슬라이드 2개 이상일 때만 노출) */
  navigationEl?: React.ReactNode;
  autoplay?: boolean | AutoplayOptions;
  pagination?: boolean | PaginationOptions;
  /** Swiper 밖 형제로 렌더할 페이지네이션 엘리먼트 */
  paginationEl?: React.ReactNode;
  controller?: ControllerOptions | undefined;
  allowTouchMove?: boolean;
  preventInteractionOnTransition?: boolean;
  /** 활성 슬라이드에 isActive/parentSwiperRef를 주입할지 여부 */
  isActiveSlide?: boolean;
  virtual?: boolean | VirtualOptions;
  keyboard?: any;
  onSwiper?: (swiper: SwiperClass) => void;
  onTransitionEnd?: (swiper: SwiperClass) => void;
  onSlideChange?: (swiper: SwiperClass) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface SlideProps {
  value?: any;
  "data-swiper-slide-duplicate"?: boolean;
  parentSwiperRef?: any;
  isActive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ItemsSwiper: React.FunctionComponent<IProps> = ({
  children,
  selectedValue,
  className,
  spaceBetween = 0,
  speed = 300,
  slidesOffsetAfter = 0,
  slidesOffsetBefore = 0,
  resistanceRatio = 0.85,
  slidesPerView = 1,
  slidesPerGroup = 1,
  effect = "slide",
  creativeEffect,
  touchRatio,
  loop = true,
  loopAddBlankSlides = true,
  loopAdditionalSlides = 0,
  loopedPerView = null,
  nested = false,
  autoHeight = false,
  centeredSlides = false,
  watchSlidesProgress = false,
  slideToClickedSlide = false,
  simulateTouch = true,
  freeMode = false,
  cssMode = false,
  direction = "horizontal",
  width = null,
  initialSlide = 0,
  lazyPreloadPrevNext = 0,
  navigation = false,
  navigationEl,
  autoplay,
  pagination = {
    type: "bullets",
    clickable: true,
  },
  paginationEl,
  controller,
  allowTouchMove = true,
  preventInteractionOnTransition = false,
  isActiveSlide = true,
  virtual = false,
  keyboard = {
    enabled: false,
  },
  onSwiper,
  onTransitionEnd,
  onSlideChange,
  onMouseEnter,
  onMouseLeave,
}: IProps) => {
  const [_selectedValue, setSelectedValue] = useState(selectedValue);
  const [currentSwiper, setCurrentSwiper] = useState<SwiperClass>();
  const childrenLength = Array.isArray(children) ? children.length : 0;
  const [_childCnt, setChildCnt] = useState<number>(childrenLength);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // 슬라이드 이동 핸들러
  const onSwiperSlideTo = useCallback(
    (swiper: SwiperClass) => {
      if (Array.isArray(children) && _selectedValue !== undefined) {
        const idx = (children as React.ReactElement[]).findIndex(
          (v) => (v.props as any)?.value === _selectedValue,
        );
        if (swiper && idx !== -1 && swiper.params && swiper.realIndex !== idx)
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

  // loop인데 슬라이드가 loopedPerView를 채우기에 부족하면 자식을 복제해 보충
  const preparedChildren = useMemo(() => {
    if (!children || !Array.isArray(children)) return children;

    const childrenArray = children as React.ReactElement<SlideProps>[];
    const childCount = childrenArray.length;

    // virtual 모드는 Swiper가 직접 슬라이드를 관리하므로 복제하지 않음
    if (virtual) return childrenArray;

    if (
      loop &&
      childCount > 1 &&
      typeof loopedPerView === "number" &&
      loopedPerView > 1 &&
      loopedPerView + 3 > childCount
    ) {
      const duplicateCount = childCount * 2;
      const duplicates: React.ReactElement<SlideProps>[] = [];
      for (let i = 0; i < duplicateCount; i++) {
        const child = childrenArray[i % childCount];
        if (!child) continue;
        duplicates.push(
          React.cloneElement(
            child,
            child.type === React.Fragment
              ? { key: `duplicate-${i}` }
              : { key: `duplicate-${i}`, "data-swiper-slide-duplicate": true },
          ),
        );
      }

      return [...childrenArray, ...duplicates];
    }

    return childrenArray;
  }, [children, loop, loopedPerView, virtual]);

  // 슬라이드 렌더러
  const getListRender = useCallback(
    (el: React.ReactNode) => {
      if (Array.isArray(el)) {
        return el.map((v: React.ReactElement<SlideProps>, index: number) => {
          if (v) {
            const injectable =
              v.type !== React.Fragment && typeof v.type !== "string";

            return (
              <SwiperSlide
                // virtualIndex를 key로 쓰면 Swiper virtual+loop에서 숫자 key 중복 경고 발생
                // eslint-disable-next-line react/no-array-index-key
                key={`slide-${index}-${String(v.key)}`}
                {...(virtual && { virtualIndex: index })}
                data-value={v.props?.value ? v.props?.value : null}
                className={`items-swiper-slide ${
                  v.props["data-swiper-slide-duplicate"]
                    ? "swiper-slide-duplicate"
                    : ""
                }`}
              >
                {injectable
                  ? React.cloneElement(v, {
                      parentSwiperRef: currentSwiper,
                      isActive: isActiveSlide
                        ? index === activeSlideIndex
                        : false,
                    })
                  : v}
              </SwiperSlide>
            );
          }
          return null;
        });
      }
      return null;
    },
    [activeSlideIndex, currentSwiper, isActiveSlide, virtual],
  );

  return (
    <S.Box
      className={`items-swiper-box ${className || ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Swiper
        modules={[
          Pagination,
          Autoplay,
          Navigation,
          EffectFade,
          EffectCreative,
          Virtual,
          FreeMode,
          Controller,
          Keyboard,
        ]}
        pagination={_childCnt < 2 ? false : pagination}
        virtual={virtual}
        spaceBetween={spaceBetween}
        speed={speed}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={_childCnt < 2 ? false : loop}
        loopAddBlankSlides={loopAddBlankSlides}
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
        {...(creativeEffect !== undefined && { creativeEffect })}
        {...(touchRatio !== undefined && { touchRatio })}
        simulateTouch={simulateTouch}
        freeMode={freeMode}
        cssMode={cssMode}
        direction={direction}
        initialSlide={initialSlide}
        lazyPreloadPrevNext={lazyPreloadPrevNext}
        slidesOffsetAfter={slidesOffsetAfter}
        slidesOffsetBefore={slidesOffsetBefore}
        slideToClickedSlide={slideToClickedSlide}
        centeredSlides={centeredSlides}
        watchSlidesProgress={watchSlidesProgress}
        {...(controller !== undefined && { controller })}
        allowTouchMove={allowTouchMove}
        keyboard={keyboard}
        preventInteractionOnTransition={preventInteractionOnTransition}
        {...(onSlideChange !== undefined && { onSlideChange })}
        className="items-swiper list"
        onInit={(swiper: SwiperClass) => {
          setCurrentSwiper(swiper);
          onSwiperSlideTo(swiper);
        }}
        onTransitionEnd={(swiper: SwiperClass) => {
          if (onTransitionEnd) {
            onTransitionEnd(swiper);
          }
          setActiveSlideIndex(swiper.realIndex);
        }}
        onSwiper={(swiper: SwiperClass) => {
          if (onSwiper) {
            onSwiper(swiper);
          }
        }}
      >
        {getListRender(preparedChildren)}
      </Swiper>
      {paginationEl}
      {_childCnt > 1 && navigationEl}
    </S.Box>
  );
};

export default memo(ItemsSwiper);
