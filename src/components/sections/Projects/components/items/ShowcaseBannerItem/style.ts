import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ShowcaseBannerItem = styled.div`
  position: relative;
  margin: 0 20px;

  .area-click {
    position: relative;
    display: block;
    width: 100%;
    z-index: 1;
  }

  .title-mobile {
    ${mixin.flex({ align: "center", justify: "center" })};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.03);
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    .text {
      width: 230px;
      ${mixin.ellipsis(2)};
      line-height: 120%;
      font-size: 24px;
      font-weight: 600;
      color: #fff;
      z-index: 1;
    }
  }

  .banner-btn {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .banner-img {
    width: 100%;
    height: 400px;
    transform: translate3d(0, 0, 0);
    will-change: opacity;
  }

  .product-scroll-area {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    .items-scrollBar {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }

    & + .title-mobile {
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${mixin.pxToVw("200")};
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }
    }

    .product-item {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 12px;

      &:last-child {
        min-width: 100%;
        padding-right: 0;

        .area-info .like-pick {
          right: 5px;
        }
      }

      .area-img {
        width: 54px !important;
      }

      .area-info {
        .area-click {
          padding: 4px 16px 0 14px;
        }

        .like-pick {
          right: 10px;

          &:not(.active) {
            svg {
              path {
                stroke: #bbb;
              }
            }
          }
        }
      }

      + .product-item {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
      }

      .detail {
        color: #e2e2e2;
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    .title-mobile {
      .text {
        width: ${mixin.pxToVw("230")};
        font-size: ${mixin.pxToVw("24")};
      }
    }

    .product-scroll-area {
      .product-item {
        padding-top: ${mixin.pxToVw("10")};
        padding-bottom: ${mixin.pxToVw("10")};
        padding-right: ${mixin.pxToVw("12")};

        &:last-child {
          .area-info .like-pick {
            right: ${mixin.pxToVw("5")};
          }
        }

        .area-img {
          width: ${mixin.pxToVw("54")} !important;
        }

        .area-info {
          .area-click {
            padding: ${mixin.pxToVw("4 16 0 14")};
          }

          .like-pick {
            right: ${mixin.pxToVw("10")};
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    margin: 0;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-filter: blur(30px);
      filter: blur(30px);
      transform: translate3d(0, 0, 0);
    }

    .showcase-box {
      position: relative;
      ${mixin.flex({ align: "flex-start", justify: "space-between" })};
      height: 638px;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1a1a1a;
        opacity: 0.4;
        z-index: 1;
      }
    }

    .banner-box {
      width: 522px;
      z-index: 2;
    }

    .banner-btn {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.03);
      }
    }

    .banner-img {
      width: 522px;
      height: 638px;
      aspect-ratio: auto;
      z-index: 2;
    }

    .cont-box {
      position: relative;
      width: 804px;
      height: 638px;
      padding-top: 95px;
      padding-left: 75px;

      .title-desktop {
        position: relative;
        width: 648px;
        line-height: 120%;
        font-size: 34px;
        font-weight: 600;
        color: #fff;
        z-index: 2;
        ${mixin.ellipsis(1)};
      }

      .prd-grid {
        position: relative;
        ${mixin.flex({ align: "flex-start", justify: "flex-start" })};
        column-gap: 18px;
        padding-top: 40px;
        z-index: 2;

        .product-item {
          width: 206px;

          .detail {
            color: #fff;
          }
        }
      }
    }
  }
`;
