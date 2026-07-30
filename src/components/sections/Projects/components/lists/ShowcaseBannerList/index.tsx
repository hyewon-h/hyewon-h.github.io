import React, { memo, useCallback, useRef, useState } from "react";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import SwiperNavigation from "@/components/common/SwiperNavigation";
import SwiperPagination from "@/components/common/SwiperPagination";
import { classNameBind, getUniqueKey } from "@/utils/commonUtils";
import { Swiper as SwiperClass } from "swiper/types";
import * as S from "./style";

interface IProps {
  items?: React.JSX.Element | React.JSX.Element[];
  isDesktop?: boolean;
}

const ShowcaseBannerList = ({ items, isDesktop = false }: IProps) => {
  const childCnt = Array.isArray(items) ? items.length : 0;
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldResetChild, setShouldResetChild] = useState(0);

  // 인스턴스별 고유 선택자 (재렌더에도 유지되어야 swiper 초기화 시점의 선택자와 일치)
  const uniqueKey = useRef(`showcase-banner-${getUniqueKey()}`).current;

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
    // 자식 swiper 리셋을 위한 트리거
    setShouldResetChild((prev) => prev + 1);
  }, []);

  // 자식(상품 스크롤) 조작 중 부모 스와이프 잠금
  const preventSwipe = useCallback((enable: boolean) => {
    if (swiperRef.current) {
      swiperRef.current.allowTouchMove = !enable;
    }
  }, []);

  const handleSwiper = useCallback(
    (swiper: SwiperClass) => {
      swiperRef.current = swiper;
      // 공통 ItemsSwiper가 onSlideChange를 노출하지 않아 인스턴스에 직접 연결
      swiper.on("slideChange", handleSlideChange);
    },
    [handleSlideChange],
  );

  const itemsWithProps = Array.isArray(items)
    ? items.map((item, index) =>
        React.cloneElement(item, {
          key: item.key ?? `showcase-banner-item-${index}`,
          isActive: index === activeIndex,
          preventParentSwipe: preventSwipe,
          shouldResetChild,
        }),
      )
    : items;

  // 데스크톱 파라미터
  const desktopParam: any = {
    autoplay: false,
    loop: false,
    pagination: {
      el: `.${uniqueKey}-page`,
      type: "fraction",
    },
    navigation: {
      prevEl: `.${uniqueKey}-navi .swiper-button-prev`,
      nextEl: `.${uniqueKey}-navi .swiper-button-next`,
    },
  };

  // 모바일 파라미터
  const useVirtual = childCnt > 3;
  const mobileParam: any = {
    pagination:
      childCnt <= 3
        ? { dynamicBullets: false }
        : {
            dynamicBullets: true,
            dynamicMainBullets: 3,
          },
    virtual: useVirtual,
    onTransitionEnd: (swiper: SwiperClass) => {
      if (swiper && useVirtual) {
        // 클론처음 -> 처음
        if (swiper.activeIndex === childCnt + 1) {
          swiper.slideToLoop(0, 1);
        }
        // 클론끝 -> 끝
        if (swiper.activeIndex === 0) {
          swiper.slideToLoop(childCnt - 1, 1);
        }
      }
    },
  };

  return (
    <S.ShowcaseBannerList
      className={classNameBind([
        "showcase-banner-list",
        !isDesktop && childCnt > 1 ? "paging" : "",
      ])}
    >
      <ItemsSwiper
        {...(isDesktop ? desktopParam : mobileParam)}
        onSwiper={handleSwiper}
      >
        {itemsWithProps}
      </ItemsSwiper>

      {/* 공통 ItemsSwiper가 navigationEl/paginationEl을 렌더하지 않아 형제로 배치 */}
      {isDesktop && childCnt > 1 && (
        <div className="banner-controls">
          <SwiperPagination
            type="fraction02Medium"
            className={`${uniqueKey}-page`}
          />
          <SwiperNavigation
            type="bottom01"
            size="medium"
            className={`${uniqueKey}-navi`}
          />
        </div>
      )}
    </S.ShowcaseBannerList>
  );
};

export default memo(ShowcaseBannerList);
