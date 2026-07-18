import styled, { css } from 'styled-components';
import { mixin } from '@/styles/index';

interface IProps {
  $width?: string | number | undefined;
  $height?: string | number | undefined;
  $borderRadius?: string | number | undefined;
  $responsive?: boolean;
}

export const Box = styled.div<IProps>`
  position: relative;
  overflow: hidden;
  width: 100%;

  border-radius: ${({ $borderRadius }) =>
    typeof $borderRadius === 'number' ? `${$borderRadius}px` : $borderRadius};

  ${props => {
    if (
      props.$responsive &&
      typeof props.$width === 'number' &&
      typeof props.$height === 'number'
    ) {
      return css`
        padding-bottom: ${(props.$height / props.$width) * 100}%;
      `;
    }
    return css`
      width: ${typeof props.$width === 'number'
        ? `${props.$width}px`
        : props.$width};
      height: ${typeof props.$height === 'number'
        ? `${props.$height}px`
        : props.$height};

      @media ${({ theme }) => theme.media.smMax} {
        width: ${typeof props.$width === 'number'
          ? `${mixin.pxToVw(String(props.$width))}`
          : props.$width};
        height: ${typeof props.$height === 'number'
          ? `${mixin.pxToVw(String(props.$height))}`
          : props.$height};
      }
    `;
  }}

  .area-poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.4s ease 0.3s;
  }

  &.isLoaded {
    .img {
      opacity: 0;
    }
  }

  &.video {
    .pause-icon,
    .play-icon {
      position: absolute;
      top: 50% !important;
      left: 50% !important;
      transform: translateZ(0) translate(-50%, -50%) !important;
      z-index: 1;
      pointer-events: none;
      opacity: 0;
    }

    &.is-click-control {
      .pause-icon,
      .play-icon {
        opacity: 1;
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    border-radius: ${({ $borderRadius }) =>
      typeof $borderRadius === 'number'
        ? `${mixin.pxToVw(String($borderRadius))}`
        : $borderRadius};
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  background-color: #f6f6f6;

  &::-webkit-media-controls {
    display: none !important;
  }
`;
