import styled from "styled-components";

import { mixin } from "@/styles/index";

export const CardTypeBannerItem = styled.div`
  width: inherit;
  height: inherit;
  position: relative;

  .play-icon {
    position: absolute;
    z-index: 2;
  }

  &.isLoaded {
    .play-icon {
      opacity: 0;
    }
  }

  .area-emblem {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 201px;
      position: absolute;
      z-index: 0;
      top: 0;
      right: 0;
      background: linear-gradient(
        214.54deg,
        rgba(0, 0, 0, 0.15) 1.97%,
        rgba(0, 0, 0, 0) 34.93%
      );
    }

    .emblem {
      position: absolute;
      top: 20px;
      right: 24px;
      z-index: 1;
      padding-bottom: 0 !important;
      width: 66px;
      height: 48px;
    }
  }

  .textBox {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .ad-tag {
    ${mixin.flex({ display: "inline-flex" })};
    padding: 0 4px;
    min-width: 28px;
    height: 18px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 11px;
    font-weight: 400;
    line-height: 130%;
    position: relative;
    z-index: 1;
  }

  &.type-card {
    > .btn {
      min-height: ${mixin.pxToVw("432")};
      background: #f6f6f6
        url("//static.wconcept.co.kr/display/images/onerror_img_product.png")
        no-repeat center / cover;
    }

    .video {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .img {
      padding-bottom: 133.333%;
    }

    .textBox {
      padding: 44px 28px;
      text-align: left;
      transform: translateZ(0);
      z-index: 1;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-property: opacity;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        opacity: 0;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
        height: 177px;
      }

      &:has(.text) {
        .ad-tag {
          margin-bottom: 10px;
        }
      }
    }

    .ad-tag,
    .text {
      position: relative;
      color: #fff;
      transition-property: transform, opacity;
      transition-duration: 0.2s;
      transition-delay: 0.28s;
      transition-timing-function: ease-out;
      z-index: 1;

      &.title1,
      &.title2 {
        font-weight: 600;
        line-height: 120%;
        font-size: 24px;
      }

      &.subTitle {
        margin-top: 10px;
        line-height: 150%;
        font-size: 14px;
        font-weight: 400;
        padding-right: 20px;
      }
    }

    .play-icon {
      top: 12px;
      right: 12px;
    }
  }

  &.type-listBnn {
    position: relative;
    overflow: hidden;
    border-radius: 12px;

    .btn {
      width: 100%;
    }

    .thumbnail {
      padding-bottom: 132.8947368421053%;
    }

    .textBox {
      padding: 22px 14px;
      text-align: left;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      .ad-tag {
        margin-bottom: -8px;
      }

      &:has(.text) {
        .ad-tag {
          margin-bottom: 8px;
        }
      }
    }

    .title1,
    .title2 {
      position: relative;
      line-height: 120%;
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      z-index: 1;
    }

    .play-icon {
      top: 8px;
      right: 8px;

      + .area-emblem {
        opacity: 0;
      }
    }

    .area-emblem {
      &:before {
        height: 89px;
      }

      .emblem {
        top: 12px;
        right: 8px;
        width: 38px;
        height: 28px;
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    .area-emblem {
      &:before {
        height: ${mixin.pxToVw("201")};
      }

      .emblem {
        top: ${mixin.pxToVw("20")};
        right: ${mixin.pxToVw("24")};
        width: ${mixin.pxToVw("66")};
        height: ${mixin.pxToVw("48")};
      }
    }

    .ad-tag {
      padding: ${mixin.pxToVw("0 4")};
      height: ${mixin.pxToVw("18")};
      font-size: ${mixin.pxToVw("11")};
    }

    &.type-card {
      .textBox {
        padding: ${mixin.pxToVw("44 28")};

        &:after {
          height: ${mixin.pxToVw("177")};
        }

        &:has(.text) {
          .ad-tag {
            margin-bottom: ${mixin.pxToVw("10")};
          }
        }
      }

      .text {
        transform: translate3d(0, ${mixin.pxToVw("40")}, 0);

        &.title1,
        &.title2 {
          font-size: ${mixin.pxToVw("24")};
        }

        &.subTitle {
          margin-top: ${mixin.pxToVw("10")};
          font-size: ${mixin.pxToVw("14")};
          padding-right: ${mixin.pxToVw("20")};
        }
      }

      .play-icon {
        top: ${mixin.pxToVw("12")};
        right: ${mixin.pxToVw("12")};
      }
    }

    &.type-listBnn {
      border-radius: ${mixin.pxToVw("12")};

      .textBox {
        padding: ${mixin.pxToVw("22 14")};

        .ad-tag {
          margin-bottom: ${mixin.pxToVw("-8")};
        }

        &:has(.text) {
          .ad-tag {
            margin-bottom: ${mixin.pxToVw("8")};
          }
        }
      }

      .title1,
      .title2 {
        font-size: ${mixin.pxToVw("14")};
      }

      .play-icon {
        top: ${mixin.pxToVw("8")};
        right: ${mixin.pxToVw("8")};
      }

      .area-emblem {
        &:before {
          height: ${mixin.pxToVw("89")};
        }

        .emblem {
          top: ${mixin.pxToVw("12")};
          right: ${mixin.pxToVw("8")};
          width: ${mixin.pxToVw("38")};
          height: ${mixin.pxToVw("28")};
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.md} {
    &.type-card {
      .img {
        padding-bottom: 135.918%;
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    &.type-card {
      // ITDEV-20646
      .img img {
        transform: translateZ(0);
        backface-visibility: hidden;
      }

      .textBox {
        padding: 40px 36px;

        &:after {
          height: 192px;
        }

        &:has(.text) {
          .ad-tag {
            margin-bottom: 8px;
          }
        }
      }

      .text {
        transform: translate3d(0, 40px, 0);

        &.title1,
        &.title2 {
          line-height: 41.6px;
          font-size: 32px;
        }

        &.subTitle {
          line-height: 21.6px;
          margin-top: 12px;
          padding-right: 80px;
          font-size: 16px;
          padding-right: 0;
        }
      }

      .play-icon {
        top: 24px;
        right: 24px;
      }

      .area-emblem {
        &:before {
          height: 241px;
        }

        .emblem {
          top: 24px;
          right: 24px;
          width: 77px;
          height: 56px;
        }
      }
    }
  }
`;
