import styled, { css } from "styled-components";
import { mixin } from "@/styles/index";

interface IProps {
  className?: string;
  $type?: "black" | "white" | "bottom01" | undefined;
  $size?: "xsmall" | "small" | "medium" | undefined;
  $bgType?: "white" | "black" | undefined;
  $offsetTop?: number;
}

export const SwiperNavigation = styled.div<IProps>`
  .swiper-button-autoplay-control,
  .swiper-button-next,
  .swiper-button-prev {
    ${mixin.flex({ display: "inline-flex" })};
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s;

    svg {
      width: 8px;
      height: 13px;
      transform: translateX(1px);

      path {
        fill: #fff;
      }
    }

    &.swiper-button-autoplay-control {
      .play {
        ${mixin.flex({})};

        svg {
          width: auto;
          height: auto;
          transform: none;
        }
      }

      .pause {
        ${mixin.flex({})};

        .line {
          display: inline-block;
          background-color: #fff;
        }
      }
    }

    &:not(.swiper-button-disabled):hover {
      background: rgba(0, 0, 0, 0.7);
    }

    &.swiper-button-disabled {
      cursor: default;
      pointer-events: auto;
      display: none;
    }
  }

  .swiper-button-next {
    right: 8px;
  }

  .swiper-button-prev {
    left: 8px;

    svg {
      transform: rotate(180deg) translateX(0px);
    }
  }

  ${(props) => {
    if (props.$offsetTop) {
      return css`
        .swiper-button-next,
        .swiper-button-prev {
          transform: unset;
          top: ${`${props.$offsetTop}px` || "auto"};
        }
      `;
    }

    return null;
  }}

  ${(props) => {
    if (props.$size === "xsmall") {
      return css`
        .swiper-button-autoplay-control,
        .swiper-button-next,
        .swiper-button-prev {
          width: 28px;
          height: 28px;
          border-radius: 4px;

          svg {
            width: 7px;
            height: 12px;

            path {
              fill: #fff;
            }
          }

          &.swiper-button-autoplay-control {
            .play {
              svg {
                width: 14px;
                height: 14px;
              }
            }

            .pause {
              width: 14px;
              column-gap: 4px;

              .line {
                width: 2px;
                height: 10px;
              }
            }
          }
        }
      `;
    }

    if (props.$size === "medium") {
      return css`
        .swiper-button-autoplay-control,
        .swiper-button-next,
        .swiper-button-prev {
          width: 44px;
          height: 44px;
          border-radius: 7px;

          svg {
            width: 9px;
            height: 14px;

            path {
              fill: #fff;
            }
          }
        }
      `;
    }

    return null;
  }}

  ${(props) => {
    if (props.$type === "white") {
      return css`
        .swiper-button-autoplay-control,
        .swiper-button-next,
        .swiper-button-prev {
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent !important;
          &:not(.swiper-button-disabled):hover {
            border: 1px solid #fff;
          }
        }
      `;
    }

    if (props.$type === "bottom01") {
      return css`
        .swiper-button-autoplay-control,
        .swiper-button-next,
        .swiper-button-prev {
          width: ${props.$size === "medium" ? "18px" : "14px"};
          height: ${props.$size === "medium" ? "18px" : "14px"};
          border-radius: 0;
          background: transparent !important;
          backdrop-filter: none;

          svg {
            width: ${props.$size === "medium" ? "10px" : "8px"};
            height: ${props.$size === "medium" ? "16px" : "13px"};

            path {
              fill: #000;
            }
          }

          &.swiper-button-autoplay-control {
            .play {
              svg {
                width: 13px;
                height: 14px;
              }
            }

            .pause {
              width: 10.5px;
              column-gap: 5.5px;

              .line {
                width: 2.5px;
                height: 15px;
                background-color: #000;
              }
            }
          }

          &.swiper-button-disabled {
            display: inline-flex;

            svg {
              path {
                fill: #ccc;
              }
            }
          }
        }
      `;
    }

    if (props.$type === "black") {
      return css`
        .swiper-button-autoplay-control,
        .swiper-button-next,
        .swiper-button-prev {
          opacity: 1;
          visibility: visible;
          background: rgba(0, 0, 0, 0.1);
        }
      `;
    }

    return null;
  }}

${(props) => {
    if (props.$bgType === "black") {
      return css`
        &.swiper-navigation-bottom01 {
          .swiper-button-autoplay-control,
          .swiper-button-next,
          .swiper-button-prev {
            svg {
              path {
                fill: #fff;
              }
            }

            &.swiper-button-disabled {
              svg {
                path {
                  fill: #777;
                }
              }
            }
          }
        }
      `;
    }
    return null;
  }}
`;
