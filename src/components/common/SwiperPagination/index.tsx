'use client';

import { memo } from 'react';
import { classNameBind } from '@/utils/commonUtils';

import * as S from './style';

interface IProps {
  className?: string;
  type?:
    | 'fraction01'
    | 'fraction02Small'
    | 'fraction02Medium'
    | 'fraction03'
    | 'bullets01'
    | 'progressbar01'
    | undefined;
  bgType?: 'white' | 'black' | undefined;
  onClick?: () => void;
}

const SwiperPagination = ({
  className,
  type = 'fraction01',
  bgType = 'white',
  onClick,
}: IProps) => (
  <S.SwiperPagination
    className={classNameBind([
      `swiper-pagination-${type || ''}`,
      className || '',
    ])}
    $bgType={bgType}
    onClick={onClick}
  />
);

export default memo(SwiperPagination);
