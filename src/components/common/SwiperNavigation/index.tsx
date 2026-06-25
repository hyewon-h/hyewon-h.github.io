'use client';

import { memo, useCallback, useState } from 'react';
import { classNameBind } from '@/utils/commonUtils';

import Button from '@/components/common/Button';
import {
  IconArrowRight02,
  IconPlay03,
  IconPlay04,
} from '@/components/common/svg';

import * as S from './style';

interface IProps {
  className?: string;
  type?: 'black' | 'white' | 'bottom01' | undefined;
  size?: 'xsmall' | 'small' | 'medium' | undefined;
  bgType?: 'white' | 'black' | undefined;
  offsetTop?: number;
  onClickAutoplayControlBtn?: (value: boolean) => void;
}

const SwiperNavigation = ({
  className,
  type = 'black',
  size = 'small',
  bgType = 'white',
  offsetTop,
  onClickAutoplayControlBtn,
}: IProps) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 자동재생 상태 전달
  const handleClickAutoplayControl = useCallback(() => {
    if (typeof onClickAutoplayControlBtn === 'function')
      onClickAutoplayControlBtn(isAutoPlay);

    setIsAutoPlay(!isAutoPlay);
  }, [isAutoPlay, onClickAutoplayControlBtn]);

  const param = {
    className: classNameBind([
      `swiper-navigation-${type || ''}`,
      className || '',
    ]),
    $type: type,
    $size: size,
    $bgType: bgType,
    ...(offsetTop !== undefined && { $offsetTop: offsetTop }),
  };

  return (
    <S.SwiperNavigation {...param}>
      <div className="swiper-button-prev" aria-label="이전 슬라이드 보기">
        <IconArrowRight02 />
      </div>
      <div className="swiper-button-next" aria-label="다음 슬라이드 보기">
        <IconArrowRight02 />
      </div>
      {onClickAutoplayControlBtn && (
        <Button
          className={`swiper-button-autoplay-control ${
            isAutoPlay ? 'is-autoplay' : ''
          }`}
          onClick={handleClickAutoplayControl}
        >
          {isAutoPlay ? (
            <span className="pause">
              <span className="line" />
              <span className="line" />
            </span>
          ) : (
            <span className="play">
              {type === 'bottom01' ? <IconPlay04 /> : <IconPlay03 />}
            </span>
          )}
        </Button>
      )}
    </S.SwiperNavigation>
  );
};

export default memo(SwiperNavigation);
