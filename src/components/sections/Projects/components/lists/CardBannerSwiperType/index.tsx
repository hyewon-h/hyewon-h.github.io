/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { memo, useRef, useEffect, useState, useMemo, JSX } from "react";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import SwiperNavigation from "@/components/common/SwiperNavigation";
import SwiperPagination from "@/components/common/SwiperPagination";
import { SwiperClass } from "swiper/react";
import * as S from "./style";

interface IProps {
  items?: React.JSX.Element | React.JSX.Element[];
  viewAllBtn?: React.ReactNode;
  isDesktop?: boolean;
  onSlideChange?: (swiper: SwiperClass) => void;
  onTransitionEnd?: (swiper: SwiperClass) => void;
  autoPlayEnabled?: boolean; // 모바일 autoplay 외부 제어 (기본값: true)
}

const groupItems = ($items: JSX.Element | JSX.Element[] | undefined): any => {
  const perView = 3; // 3개 = 1set

  // items가 단일 요소이거나 정의되지 않은 경우 실행 안함
  if (!$items || !Array.isArray($items)) {
    return [[$items]];
  }

  const result: JSX.Element[][] = [];
  const itemsCopy = [...$items];

  // 마지막 set이 perView 미만인 경우 1set의 배너 채움
  const remainder = itemsCopy.length % perView;
  if (remainder > 0) {
    // 추가 아이템 클래스 추가 버전(1세트에 아이템이 부족인 경우 css 대응)
    // const extraItems = itemsCopy
    //   .slice(0, perView - remainder)
    //   .map(item => React.cloneElement(item, { className: 'extra-item' }));

    // 추가 아이템 랜덤(아이템 10개 이상부터 이전/다음판 아이템 제외 랜덤)
    const availableItems = itemsCopy.slice(
      itemsCopy.length > 9 ? perView : 1,
      (itemsCopy.length > 9 ? itemsCopy.length - perView : itemsCopy.length) -
        remainder,
    );

    // 랜덤 선택
    const extraItems: JSX.Element[] = [];
    for (let i = 0; i < perView - remainder; i++) {
      if (availableItems.length === 0) {
        // availableItems가 비었으면 원본에서 랜덤 선택
        const fallbackIndex = Math.floor(Math.random() * itemsCopy.length);
        const fallbackItem = itemsCopy[fallbackIndex];
        if (fallbackItem) extraItems.push(fallbackItem);
      } else {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        const randomItem = availableItems[randomIndex];
        if (randomItem) extraItems.push(randomItem);
        availableItems.splice(randomIndex, 1); // 선택된 아이템 제거
      }
    }

    // 최종 아이템
    itemsCopy.push(...extraItems);
  }

  // 세트로 항목 그룹화
  for (let i = 0; i < itemsCopy.length; i += perView) {
    result.push(itemsCopy.slice(i, i + perView));
  }

  return result;
};

const CardBannerSwiperType = ({
  items,
  viewAllBtn,
  isDesktop = false,
  onSlideChange,
  onTransitionEnd,
  autoPlayEnabled = true,
}: IProps) => {
  const [swiperReady, setSwiperReady] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // PC버전 세트구성
  const groupedItems = useMemo(
    () => (isDesktop && items ? groupItems(items) : items),
    [isDesktop, items],
  );

  // PC버전 progressbar 다시 계산
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !isDesktop || !swiperReady) return;

    const handleProgress = () => {
      const currentIndex = swiper.realIndex % groupedItems.length;
      const calculatedProgress = (currentIndex + 1) / groupedItems.length;

      const progressBar = document.querySelector(
        ".cards-type-swiper-progressbar .swiper-pagination-progressbar-fill",
      );

      if (progressBar && progressBar instanceof HTMLElement) {
        progressBar.style.transform = `translate3d(0px, 0px, 0px) scaleX(${calculatedProgress}) scaleY(1)`;
        progressBar.style.transitionDuration = `300ms`;
      }
    };

    handleProgress();

    swiper.on("slideChange", handleProgress);

    return () => {
      if (swiper) {
        swiper.off("slideChange", handleProgress);
      }
    };
  }, [isDesktop, groupedItems.length, swiperReady]);

  // PC버전 currentIndex 계산, autoplay 컨트롤
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !isDesktop || !swiperReady) return;

    const handleProgress = () => {
      const currentIndex = swiper.realIndex % groupedItems.length;
      setActiveIndex(currentIndex);

      if (isAutoPlay) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
    };

    handleProgress();

    swiper.on("transitionEnd", handleProgress);

    return () => {
      if (swiper) {
        swiper.off("transitionEnd", handleProgress);
      }
    };
  }, [groupedItems.length, isAutoPlay, isDesktop, swiperReady]);

  // PC버전 초기에 swiperRef null값 방지를 위해 상태관리
  useEffect(() => {
    if (isDesktop && swiperRef.current) {
      setSwiperReady(true);
    }
  }, [isDesktop]);

  // 모바일 autoplay 외부 제어: autoPlayEnabled가 true로 바뀔 때 autoplay 시작
  useEffect(() => {
    if (isDesktop) return;
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (autoPlayEnabled) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [autoPlayEnabled, isDesktop]);

  // PC버전 swiperEl 마우스 이벤트
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !isDesktop) return;

    const swiperEl = swiper.el;

    if (swiperEl) {
      const handleMouseEnter = () => {
        setIsHover(true);
      };

      const handleMouseLeave = () => {
        setIsHover(false);

        setTimeout(() => {
          if (isAutoPlay) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.start();
          }
        }, 30);
      };

      swiperEl.addEventListener("mouseenter", handleMouseEnter);
      swiperEl.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        swiperEl.removeEventListener("mouseenter", handleMouseEnter);
        swiperEl.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return undefined;
  }, [isAutoPlay, isDesktop]);

  // 아이템 6개 부터 creativeEffect 모션 오류 없음
  // 아이템 5개 이하부터 슬라이드 2배 복사
  const paramMo: any = {
    autoplay: autoPlayEnabled
      ? { delay: 2000, disableOnInteraction: false }
      : false,
    touchRatio: 0.7,
    spaceBetween: 0,
    effect: "creative",
    creativeEffect: {
      limitProgress: 2,
      prev: {
        translate: ["-117%", 0, 0],
        rotate: [0, 0, 0],
        shadow: true,
      },
      next: {
        translate: [0, 0, -40],
        rotate: [0, 0, -7],
        shadow: true,
      },
    },
    virtual: !!(Array.isArray(items) && items.length > 5),
    onSwiper: (swiper: SwiperClass) => {
      if (swiper) {
        swiperRef.current = swiper;
      }
    },
    onTransitionEnd: (swiper: SwiperClass) => {
      if (swiper && Array.isArray(items) && items.length > 5) {
        // console.log(
        //   'idx swiper.activeIndex => ',
        //   swiper.activeIndex,
        //   items.length
        // );

        // 클론처음 -> 처음
        if (swiper.activeIndex === items.length + 1) {
          swiper.slideToLoop(0, 1);
        }

        // 클론끝 -> 끝
        if (swiper.activeIndex === 0) {
          swiper.slideToLoop(items.length - 1, 1);
        }
      }
    },
  };

  const paramPc: any = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 18,
    slidesPerView: "auto",
    preventInteractionOnTransition: true,
    navigation: {
      prevEl: ".cards-type-swiper .swiper-button-prev",
      nextEl: ".cards-type-swiper .swiper-button-next",
    },
    navigationEl: (
      <SwiperNavigation
        type="bottom01"
        size="medium"
        className="cards-type-swiper"
        onClickAutoplayControlBtn={(state) => {
          if (swiperRef.current) {
            setIsAutoPlay(state);
            if (state) {
              swiperRef.current?.autoplay.stop();
            } else {
              swiperRef.current?.autoplay.start();
            }
          }
        }}
      />
    ),
    pagination: {
      el: ".cards-type-swiper-progressbar",
      type: "progressbar",
    },
    keyboard: {
      enabled: true,
    },
    paginationEl: (
      <SwiperPagination
        type="progressbar01"
        className="cards-type-swiper-progressbar"
      />
    ),
    onSwiper: (swiper: SwiperClass) => {
      if (swiper) {
        swiperRef.current = swiper;
        setSwiperReady(true);
      }
    },
  };

  return (
    <S.CardBannerSwiperType>
      <ItemsSwiper
        speed={400}
        centeredSlides
        loopedPerView={3}
        loopAdditionalSlides={1}
        onSlideChange={onSlideChange}
        onTransitionEnd={onTransitionEnd}
        {...(isDesktop ? paramPc : paramMo)}
      >
        {isDesktop && Array.isArray(groupedItems)
          ? groupedItems.map((group, index) => (
              <React.Fragment key={index}>
                {group.map((item: JSX.Element, itemIndex: number) => {
                  let isActive = false;
                  let parentSwiperRef = null;

                  // Check if the current group is the active group
                  if (index === activeIndex) {
                    // Find the first video item in the active group
                    const firstVideoIndex = group.findIndex(
                      (groupItem: JSX.Element) =>
                        groupItem.props.videoSrc || groupItem.props.vid,
                    );

                    // Set isActive and parentSwiperRef for the first video item
                    if (itemIndex === firstVideoIndex && swiperReady) {
                      isActive = true;
                      parentSwiperRef = swiperRef.current;
                    }
                  }

                  const props =
                    groupedItems.length <= 1
                      ? { isActive }
                      : {
                          isActive,
                          parentSwiperRef,
                          parentAutoPlay: !isAutoPlay,
                          parentHover: isHover,
                        };

                  return React.cloneElement(item, props);
                })}
              </React.Fragment>
            ))
          : items}
      </ItemsSwiper>
      {viewAllBtn}
    </S.CardBannerSwiperType>
  );
};

export default memo(CardBannerSwiperType);
