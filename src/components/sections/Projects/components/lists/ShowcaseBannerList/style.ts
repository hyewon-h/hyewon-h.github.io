import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ShowcaseBannerList = styled.div`
  position: relative;

  /* 공통 ItemsSwiper에 className을 넘길 수 없어 래퍼에서 swiper 엘리먼트를 제어 */
  &.paging {
    .items-swiper {
      position: static;
      height: 100%;
      padding-bottom: 30px;
    }

    .swiper-pagination {
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);

      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
        margin: 0 3px;
        background: #eee;
        opacity: 1;
      }

      .swiper-pagination-bullet-active {
        background: #000;
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    &.paging {
      .items-swiper {
        padding-bottom: ${mixin.pxToVw("30")};
      }

      .swiper-pagination {
        bottom: ${mixin.pxToVw("6")};
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    /* 페이지네이션(가운데) + 이전/다음(양옆) 하단 컨트롤 영역 */
    .banner-controls {
      position: relative;
      ${mixin.flex({ align: "center", justify: "center" })};
      width: 120px;
      margin: 48px auto 0;
    }

    .swiper-navigation-bottom01 {
      .swiper-button-prev,
      .swiper-button-next {
        svg path {
          fill: #000;
        }
      }

      .swiper-button-disabled {
        svg path {
          fill: #ccc;
        }
      }
    }

    .swiper-button-disabled {
      path {
        fill: #ccc;
      }
    }

    .swiper-pagination-fraction {
      margin-top: 0;
      line-height: 130%;
      font-size: 17px;
      font-weight: 500;
      color: #000;
    }
  }
`;
