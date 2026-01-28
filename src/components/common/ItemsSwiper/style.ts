import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Box = styled.div`
  position: relative;

  .items-swiper {
    &.pagination-bullets {
      padding-bottom: ${mixin.pxToVw("36")};
    }
    &.center {
      .swiper-wrapper {
        justify-content: center;
      }
    }
  }

  .swiper-slide .btn {
    width: 100%;
  }

  .swiper-pagination-bullets {
    position: absolute;
    width: 100%;
    bottom: 0;
    .swiper-pagination-bullet {
      width: ${mixin.pxToVw("6")};
      height: ${mixin.pxToVw("6")};
      background-color: #e9e9e9;
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background-color: #000;
      }
    }
  }

  .swiper-pagination-fraction {
    position: absolute;
    top: ${mixin.pxToVw("12")};
    right: ${mixin.pxToVw("20")};
    bottom: auto;
    left: auto;
    width: auto;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${mixin.pxToVw("24")};
    text-align: center;
    padding: ${mixin.pxToVw("5 10")};
    font-family: ${({ theme }) => theme.fontFamily.light};
    font-weight: 300;
    font-size: ${mixin.pxToVw("12")};
    line-height: ${mixin.pxToVw("16")};
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.2px;
    .swiper-pagination-current {
      font-family: ${({ theme }) => theme.fontFamily.semibold};
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    .items-swiper {
      &.pagination-bullets {
        padding-bottom: 36px;
      }
    }
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
      }
    }
    .swiper-pagination-fraction {
      top: 12px;
      right: 20px;
      border-radius: 24px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.2px;
    }
  }

  @media ${({ theme }) => theme.media.xl} {
    .swiper-button-prev,
    .swiper-button-next {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 54px;
      height: 54px;
      z-index: 1;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.04);
      transition: background 0.2s;
      svg {
        width: 15px;
        height: 26px;
        path {
          opacity: 1 !important;
        }
      }
      &.swiper-button-disabled {
        opacity: 0;
        cursor: default;
        pointer-events: auto;
      }
    }
    .swiper-button-prev {
      left: 0;
      svg {
        transform: rotate(180deg);
      }
    }
    .swiper-button-next {
      right: 0;
    }
    &:hover .swiper-button-prev:not(.swiper-button-disabled),
    &:hover .swiper-button-next:not(.swiper-button-disabled) {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;
