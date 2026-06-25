import styled, { css } from "styled-components";

import { mixin } from "@/styles/index";

interface IProps {
  className?: string;
  $bgType?: "white" | "black" | undefined;
}

export const SwiperPagination = styled.div<IProps>`
  transform: translateZ(0);

  &.swiper-pagination-fraction01 {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 20px;
    padding: 5px 8px;
    font-size: 10px;
    bottom: auto;
    left: auto;
    width: auto;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    font-weight: 500;
    line-height: 110%;
    color: #fff;
    z-index: 1;
  }

  &.swiper-pagination-fraction02Small,
  &.swiper-pagination-fraction02Medium {
    text-align: center;
    font-weight: 500;
    line-height: 130%;
    margin-top: 48px;
  }

  &.swiper-pagination-fraction02Small {
    font-size: 15px;
  }

  &.swiper-pagination-fraction02Medium {
    font-size: 17px;
  }

  &.swiper-pagination-fraction03 {
    position: absolute;
    bottom: 21px;
    right: 42px;
    left: auto;
    top: auto;
    font-size: 12px;
    font-weight: 600;
    width: auto;
    height: 16px;
    display: inline-block;
    text-align: center;
    line-height: 16px;
    color: #eee;
    z-index: 1;

    .swiper-pagination-total {
      margin-left: 6px;
    }

    .swiper-pagination-current {
      margin-right: 6px;
    }
  }

  &.swiper-pagination-bullets01 {
    position: absolute;
    bottom: 12px;
    width: 100%;
    text-align: center;
    z-index: 2;
    font-size: 0;

    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      margin: 0 2px;
      opacity: 0.3;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }

  &.swiper-pagination-progressbar01 {
    position: relative;
    width: 1202px;
    height: 18px;
    margin-top: 16px;
    background: transparent;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #eee;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }

    .swiper-pagination-progressbar-fill {
      background: #000;
      margin-top: 7px;
      height: 3px;
    }

    & + .swiper-navigation-bottom01 {
      text-align: right;
      position: absolute;
      bottom: 0;
      right: 38px;
      width: auto;

      .swiper-button-prev {
        margin-right: 12px;
      }

      .swiper-button-next {
        margin-left: 12px;
      }

      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 10px;
        background-color: #e2e2e2;
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    &.swiper-pagination-fraction01 {
      top: ${mixin.pxToVw("20")};
      right: ${mixin.pxToVw("20")};
      border-radius: ${mixin.pxToVw("20")};
      padding: ${mixin.pxToVw("5 8")};
      font-size: ${mixin.pxToVw("10")};
    }

    &.swiper-pagination-fraction03 {
      bottom: ${mixin.pxToVw("21")};
      right: ${mixin.pxToVw("42")};
      font-size: ${mixin.pxToVw("12")};
      height: ${mixin.pxToVw("16")};
      line-height: ${mixin.pxToVw("16")};

      .swiper-pagination-total {
        margin-left: ${mixin.pxToVw("6")};
      }

      .swiper-pagination-current {
        margin-right: ${mixin.pxToVw("6")};
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    &.swiper-pagination-bullets01 {
      bottom: 20px;
    }
  }

  ${(props) => {
    if (props.$bgType === "black") {
      return css`
        &.swiper-pagination-fraction02Medium {
          color: #fff;
        }
      `;
    }
    return null;
  }}
`;
