import React, { memo, useRef, useEffect } from 'react';
import Text from "@/components/common/Text";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import SwiperNavigation from "@/components/common/SwiperNavigation";
import SwiperPagination from "@/components/common/SwiperPagination";
import { getUniqueKey } from "@/utils/commonUtils";
import { Swiper as SwiperClass } from 'swiper/types';
import * as S from './style';

interface IProps {
  items?: React.ReactNode;
  title?: string;
  desc?: string;
  button?: React.ReactNode;
  isDesktop?: boolean;
}

const MainVisualBnrList = ({
  items,
  title,
  desc,
  button,
  isDesktop = false,
}: IProps) => {
  const childCnt = items instanceof Array ? items?.length : 0;
  const uniqueKey = `swiper-navi-${getUniqueKey()}`;
  const swiperRef = useRef<SwiperClass | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeSlideVideoRef = useRef<any>(null);
  const isVisibleRef = useRef(true);
  const chkVideoRef = useRef<((swiperInst: any) => void) | null>(null);

  const paramMo: any = {
    pagination:
      childCnt <= 5
        ? {
            dynamicBullets: false,
          }
        : {
            dynamicBullets: true,
            dynamicMainBullets: 3,
          },
    autoplay: { delay: 2000, disableOnInteraction: false },
    className: childCnt > 1 ? 'paging' : '',
  };

  const paramPc: any = {
    pagination: childCnt > 1 && {
      el: `.${uniqueKey}-page`,
      type: 'fraction',
    },
    paginationEl: childCnt > 1 && (
      <SwiperPagination
        type="fraction02Medium"
        className={`${uniqueKey}-page`}
      />
    ),
    navigation: childCnt > 1 && {
      prevEl: `.${uniqueKey}-navi .swiper-button-prev`,
      nextEl: `.${uniqueKey}-navi .swiper-button-next`,
    },
    navigationEl: childCnt > 1 && (
      <SwiperNavigation
        type="bottom01"
        size="medium"
        className={`${uniqueKey}-navi`}
      />
    ),
    keyboard: {
      enabled: true,
    },
    onSwiper: (swiper: SwiperClass) => {
      if (swiper) {
        swiperRef.current = swiper;
      }
    },
    autoplay:
      childCnt > 1
        ? { delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }
        : false,
  };

  const onSwiperOpt = (swiper: any) => {
    if (swiper) {
      swiperRef.current = swiper;
    }

    function autoPlay(swiperInst: any) {
      if (swiperInst.autoplay && isVisibleRef.current) {
        swiperInst.autoplay.start();
      }
    }

    function endedVideo() {
      swiper.slideNext(300);
      autoPlay(swiper);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      initVideo();
    }

    function initVideo() {
      if (activeSlideVideoRef.current) {
        activeSlideVideoRef.current.pause();
        activeSlideVideoRef.current.currentTime = 0;
        activeSlideVideoRef.current.removeEventListener('ended', endedVideo);
        activeSlideVideoRef.current = null;
      }
    }

    function chkVideo(swiperInst: any) {
      initVideo();
      const activeSlide = swiperInst.slides[swiperInst.activeIndex];
      activeSlideVideoRef.current =
        activeSlide?.getElementsByTagName('video')[0] ?? null;

      if (activeSlideVideoRef.current) {
        swiperInst.autoplay.stop();
        if (isVisibleRef.current) {
          activeSlideVideoRef.current
            ?.play()
            .then()
            .catch(() => {});
        }
        activeSlideVideoRef.current.addEventListener('ended', endedVideo);
      } else {
        autoPlay(swiperInst);
      }
    }

    chkVideoRef.current = chkVideo;

    if (swiper) {
      chkVideo(swiper);

      swiper.on('slideChangeTransitionEnd', (swiperInst: any) => {
        chkVideo(swiperInst);
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const wasVisible = isVisibleRef.current;
        isVisibleRef.current = entry.isIntersecting;

        const swiper = swiperRef.current;
        if (!swiper) return;

        if (!entry.isIntersecting && wasVisible) {
          swiper.autoplay?.stop();
          if (activeSlideVideoRef.current) {
            activeSlideVideoRef.current.pause();
          }
        } else if (entry.isIntersecting && !wasVisible) {
          if (chkVideoRef.current) {
            chkVideoRef.current(swiper);
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <S.MainVisualBnrList ref={containerRef}>
      <ItemsSwiper {...(isDesktop ? paramPc : paramMo)} onSwiper={onSwiperOpt}>
        {items}
      </ItemsSwiper>
      <S.TextBox>
        <Text block className="title">
          {title}
        </Text>
        {desc && (
          <Text block className="desc">
            {desc}
          </Text>
        )}
        {button && <S.ButtonBox>{button}</S.ButtonBox>}
      </S.TextBox>
    </S.MainVisualBnrList>
  );
};

export default memo(MainVisualBnrList);
