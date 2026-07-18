/* eslint-disable consistent-return */
import React, { memo, useCallback, useState, useEffect } from "react";
import { classNameBind } from "@/utils/commonUtils";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Img from "@/components/common/Img";
import { Swiper as SwiperClass } from "swiper/types";
import Video from "@/components/common/Video";
import * as S from "./style";

interface IProps {
  title1?: string;
  title2?: string;
  subTitle?: string;
  imgSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
  className?: string;
  type?: "card" | "listBnn" | undefined;
  isDesktop?: boolean;
  parentSwiperRef?: SwiperClass;
  isActive?: boolean;
  parentAutoPlay?: boolean;
  parentHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  emblemUrl?: string;
  isAd?: boolean;
}

const CardTypeBannerItem = ({
  title1,
  title2,
  subTitle,
  imgSrc,
  videoSrc,
  videoPoster,
  className,
  isDesktop = false,
  type,
  parentSwiperRef,
  isActive = false,
  parentAutoPlay = false,
  parentHover = false,
  onClick,
  emblemUrl,
  isAd = false,
}: IProps) => {
  // 비디오 관련
  const [videoEl, setVideoEl] = useState<any>(null);
  const [isVideoPlay, setIsVideoPlay] = useState(false);

  const cName = classNameBind([
    "cardtype-bnn-item",
    type ? `type-${type}` : "",
    isVideoPlay ? "isLoaded" : "",
    className || "",
  ]);

  // 영상이면 일단 자동재생 멈춤
  useEffect(() => {
    if (type === "card" && videoSrc && isActive) {
      if (parentSwiperRef) parentSwiperRef?.autoplay?.stop();
    }
  }, [isActive, parentSwiperRef, type, videoSrc]);

  // pc버전 자동재생 컨트롤(부모가 자동재생 중이거나 마우스 오버시)
  useEffect(() => {
    if (isDesktop && isActive) {
      const videoElement = videoEl?.player;
      if (!videoElement) return;

      if (parentAutoPlay) {
        if (parentHover) {
          videoElement.loop = true;
        } else {
          videoElement.loop = false;
        }
      } else {
        videoElement.loop = true;
      }

      setTimeout(() => {
        parentSwiperRef?.autoplay?.stop();
      }, 20);
    }
  }, [
    isActive,
    isDesktop,
    parentAutoPlay,
    parentHover,
    parentSwiperRef,
    videoEl,
  ]);

  // 비디오 음소거 자동재생
  useEffect(() => {
    const videoElement = videoEl?.player;
    if (!videoElement) return;

    if (isActive) {
      videoElement
        .play()
        .then(() => {
          setIsVideoPlay(true);
        })
        .catch(() => {
          // Handle error if needed
        });
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
      setIsVideoPlay(false);
      parentSwiperRef?.autoplay?.start();
    }

    return () => {
      videoElement.pause();
      videoElement.currentTime = 0;
      setIsVideoPlay(false);
    };
  }, [isActive, parentSwiperRef, videoEl]);

  const getButtonRender = useCallback(
    () => (
      <Button {...(onClick !== undefined && { onClick })}>
        {type === "card" && videoSrc ? (
          <Video
            src={videoSrc}
            {...(videoPoster !== undefined && { poster: videoPoster })}
            muted
            handleComplete={(el) => {
              if (isActive) parentSwiperRef?.autoplay?.stop();
              if (el) setVideoEl(el);
            }}
            handleEnded={() => {
              if (isActive && parentSwiperRef) {
                // 영상이 끝나면 항상 다음 슬라이드로 이동
                parentSwiperRef.autoplay?.start();
                parentSwiperRef.slideNext(600);
              }
            }}
          />
        ) : (
          <Img className="thumbnail" src={imgSrc || ""} />
        )}

        {/* {((isDesktop && isActive && vid) || (!isDesktop && vid)) && (
          <PlayIcon size={isDesktop ? "lg" : "sm"} />
        )} */}

        {emblemUrl && (
          <span className="area-emblem">
            <Img className="emblem" src={emblemUrl || ""} />
          </span>
        )}

        {(title1 || title2 || subTitle || isAd) && (
          <span className="textBox">
            {isAd && <span className="ad-tag">광고</span>}
            {title1 && (
              <Text className="title1" ellipsis={1}>
                {title1}
              </Text>
            )}
            {title2 && (
              <Text className="title2" ellipsis={1}>
                {title2}
              </Text>
            )}
            {subTitle && (
              <Text className="subTitle" ellipsis={1}>
                {subTitle}
              </Text>
            )}
          </span>
        )}
      </Button>
    ),
    [
      emblemUrl,
      imgSrc,
      isActive,
      isAd,
      onClick,
      parentSwiperRef,
      subTitle,
      title1,
      title2,
      type,
      videoPoster,
      videoSrc,
    ],
  );

  return (
    <S.CardTypeBannerItem className={cName}>
      {getButtonRender()}
    </S.CardTypeBannerItem>
  );
};

export default memo(CardTypeBannerItem);
