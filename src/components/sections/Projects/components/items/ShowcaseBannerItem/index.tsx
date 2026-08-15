import React, { memo, useEffect, useRef } from "react";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Img from "@/components/common/Img";
import ItemsScrollBar from "@/components/common/ItemsScrollBar";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import { classNameBind } from "@/utils/commonUtils";
import { Swiper as SwiperClass } from "swiper/types";
import * as S from "./style";

interface IProps {
  isActive?: boolean;
  title?: string;
  bannerImgSrc?: string[];
  className?: string;
  isDesktop?: boolean;
  onClickBanner?: () => void;
  productItems?: React.ReactNode;
  preventParentSwipe?: (enable: boolean) => void;
  shouldResetChild?: number;
}

const ShowcaseBannerItem = ({
  title,
  bannerImgSrc,
  className,
  productItems,
  onClickBanner,
  isDesktop = false,
  isActive,
  preventParentSwipe,
  shouldResetChild,
}: IProps) => {
  const cName = classNameBind(["showcase-banner-item item", className || ""]);
  const innerSwiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (innerSwiperRef.current) {
      if (isActive) {
        innerSwiperRef.current.autoplay?.start();
      } else {
        innerSwiperRef.current.autoplay?.stop();
      }
    }
  }, [isActive]);

  useEffect(() => {
    if (shouldResetChild && innerSwiperRef.current) {
      innerSwiperRef.current.slideTo(0);
    }
  }, [shouldResetChild]);

  const renderBannerImg = (src: string, priority = false) => (
    <Img
      className="banner-img"
      src={src}
      loading={priority ? "eager" : "lazy"}
      {...(title !== undefined && { alt: title })}
    />
  );

  const renderBanner = () => {
    if (!bannerImgSrc?.length) return null;

    if (bannerImgSrc.length === 1) {
      return (
        <Button
          className="banner-btn"
          {...(title !== undefined && { label: title })}
          {...(onClickBanner !== undefined && { onClick: onClickBanner })}
        >
          {renderBannerImg(bannerImgSrc[0] ?? "")}
        </Button>
      );
    }

    const isVirtual = bannerImgSrc.length > 5;
    // virtual(loop=false)일 때만 첫 슬라이드를 끝에 복제해 수동 loop 구현
    const slides = isVirtual
      ? [...bannerImgSrc, bannerImgSrc[0] ?? ""]
      : bannerImgSrc;

    return (
      <ItemsSwiper
        effect="fade"
        speed={200}
        loop={!isVirtual}
        pagination={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        virtual={isVirtual}
        onTransitionEnd={(swiper) => {
          if (isVirtual && swiper.realIndex === bannerImgSrc.length) {
            swiper.slideTo(0, 0, false);
            setTimeout(() => swiper.autoplay?.start(), 0);
          }
        }}
        onSwiper={(swiper) => {
          innerSwiperRef.current = swiper;
          // 공통 ItemsSwiper가 allowTouchMove를 노출하지 않아 인스턴스에 직접 설정
          swiper.allowTouchMove = false;
          if (!isActive) {
            swiper.autoplay?.stop();
          }
        }}
      >
        {slides.map((src, i) => (
          <Button
            // eslint-disable-next-line react/no-array-index-key
            key={`banner-${src}-${i}`}
            className="banner-btn"
            {...(title !== undefined && { label: title })}
            {...(onClickBanner !== undefined && { onClick: onClickBanner })}
          >
            {renderBannerImg(src, true)}
          </Button>
        ))}
      </ItemsSwiper>
    );
  };

  const renderMobileBanner = () => {
    if (!bannerImgSrc?.length) return null;

    return (
      <>
        <div className="banner-box">{renderBanner()}</div>

        {Array.isArray(productItems) && productItems.length > 0 && (
          // 공통 ItemsScrollBar가 터치 이벤트를 노출하지 않아 래퍼에서 처리
          <div
            className="product-scroll-area"
            onTouchStart={() => preventParentSwipe?.(true)}
            onTouchEnd={() => preventParentSwipe?.(false)}
            onTouchCancel={() => preventParentSwipe?.(false)}
          >
            <ItemsScrollBar perView={1.05} offsetLR={12} gap={1} snap>
              {productItems}
            </ItemsScrollBar>
          </div>
        )}

        <Button
          className="area-click title-mobile"
          {...(onClickBanner !== undefined && { onClick: onClickBanner })}
        >
          <Text className="text">{title}</Text>
        </Button>
      </>
    );
  };

  const renderDesktopBanner = () => (
    <div className="showcase-box">
      <Img className="bg" src={bannerImgSrc?.[0] ?? ""} alt="" />
      <div className="banner-box">{renderBanner()}</div>
      <div className="cont-box">
        <Text className="title-desktop">{title}</Text>
        <div className="prd-grid">{productItems}</div>
      </div>
    </div>
  );

  return (
    <S.ShowcaseBannerItem className={cName}>
      {isDesktop ? renderDesktopBanner() : renderMobileBanner()}
    </S.ShowcaseBannerItem>
  );
};

export default memo(ShowcaseBannerItem);
