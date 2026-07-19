import styled from "styled-components";
import { mixin } from "@/styles/index";

export const CardBannerSwiperType = styled.div`
  .swiper {
    padding: 0 25px;
  }

  .swiper-wrapper {
    height: ${mixin.pxToVw("432")};
    padding: 14px 0;
  }

  .swiper-slide {
    position: relative;
    border-radius: 24px;
    overflow: hidden;

    .video,
    .area-poster {
      background-color: transparent;
    }

    &.swiper-slide-active ~ .swiper-slide {
      .textBox:after {
        opacity: 0;
      }

      .textBox {
        .ad-tag,
        .text {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
        }
      }
    }

    // &.swiper-slide-next ~ .swiper-slide {
    //   opacity: 0 !important;
    // }

    &:not(.swiper-slide-active) {
      cursor: default;

      .btn {
        pointer-events: none;
      }

      .video .area-poster {
        display: block;
      }
    }

    .swiper-slide-shadow {
      background: linear-gradient(180deg, #cbc5c1 0%, #929192 100%);
      transform: translateZ(0);
      z-index: 1;
    }

    .textBox:after {
      opacity: 1 !important;
    }

    .textBox {
      .ad-tag,
      .text {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .btn-allview {
    position: absolute;
    bottom: 32px;
    right: calc(50% - 139px);
    z-index: 1;
  }

  @media ${({ theme }) => theme.media.moLandscape} {
    .swiper {
      width: 375px !important;
      height: 455px !important;
      padding: 0 25px !important;
    }

    .swiper-wrapper {
      padding: 14px 0 !important;
    }

    .swiper-slide {
      width: 325px !important;
      height: 432px !important;

      .type-card > .btn {
        min-height: 432px;
      }
    }

    .btn-allview {
      bottom: 32px !important;
      right: calc(50% - 139px) !important;
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    .swiper {
      padding: ${mixin.pxToVw("0 25")};
    }

    .swiper-wrapper {
      padding: ${mixin.pxToVw("14 0")};
    }

    .swiper-slide {
      border-radius: ${mixin.pxToVw("24")};
    }

    .btn-allview {
      bottom: ${mixin.pxToVw("32")};
      right: ${mixin.pxToVw("42")};
    }
  }

  @media ${({ theme }) => theme.media.md} {
    .swiper {
      padding: ${mixin.pxToVw("0 25")};
    }

    .swiper-wrapper {
      padding: ${mixin.pxToVw("14 0")};
    }

    .btn-allview {
      bottom: ${mixin.pxToVw("32")};
      right: ${mixin.pxToVw("42")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    .swiper {
      padding: 0;
      max-width: 2221px;
    }

    .swiper-wrapper {
      height: auto;
      padding: 20px 0 0;
    }

    .swiper-slide {
      width: auto;
      max-width: 1326px;
      ${mixin.flex({ justify: "space-between" })};
      column-gap: 18px;

      .cardtype-bnn-item {
        width: 430px;
        height: 573px;
        border-radius: 24px;
        overflow: hidden;
      }

      .img:after,
      .video:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        /* transition: background-color 0.3s ease; */
      }

      .type-card > .btn {
        min-height: 100%;
      }

      .textBox:after {
        opacity: 0 !important;
      }

      .textBox .text {
        opacity: 0;
        transform: none !important;
        transition-duration: 0.1s;
      }

      .area-emblem {
        opacity: 0;
      }

      &.swiper-slide-active {
        .img:after,
        .video:after {
          background-color: rgba(0, 0, 0, 0);
        }

        .textBox:after {
          opacity: 1 !important;
        }

        .textBox .text {
          opacity: 1;
        }

        .area-emblem {
          opacity: 1;
        }
      }
    }

    .swiper-pagination-progressbar01 {
      left: 50%;
      margin-left: -662px;

      & + .swiper-navigation-bottom01 {
        right: 50%;
        margin-right: -626px;
      }
    }

    .items-swiper:has(.swiper-pagination-progressbar01) {
      padding-bottom: 13px;

      .swiper-pagination-progressbar01 + .swiper-navigation-bottom01 {
        bottom: 13px;
      }
    }

    /* 1세트에 아이템이 부족인 경우 대응 */
    /* .swiper:has(.extra-item) {
      .swiper-slide {
        background-color: #fff;
        z-index: 0;

        .extra-item {
          .img:after,
          .xgplayer:after {
            display: none;
          }
        }
      }

      .swiper-slide:has(&.swiper-slide ~ .swiper-slide-prev),
      .swiper-slide-prev:has(.extra-item) {
        transform: translateX(448px);
      }

      .swiper-slide:has(&.swiper-slide ~ .swiper-slide-prev),
      .swiper-slide-prev:has(.extra-item + .extra-item) {
        transform: translateX(896px);
      }

      .swiper-slide-active {
        z-index: 1;

        &:has(.extra-item) + .swiper-slide-next {
          transform: translateX(-448px);
        }

        &:has(.extra-item + .extra-item) ~ .swiper-slide {
          transform: translateX(-896px);
        }
      }
    } */
  }
`;
