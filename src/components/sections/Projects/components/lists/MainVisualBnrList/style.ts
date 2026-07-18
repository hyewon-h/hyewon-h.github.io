import styled from "styled-components";
import { mixin } from "@/styles/index";

export const MainVisualBnrList = styled.div`
  position: relative;
  overflow: hidden;

  .items-swiper {
    .video,
    .img {
      padding-bottom: 148%;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.03);
        transition: background-color 0.3s ease;
      }
    }

    .swiper {
      padding-bottom: 30px;

      .swiper-slide {
        overflow: hidden;

        video,
        &:has(video) {
          background-color: #222;
        }
      }

      .swiper-pagination {
        margin-bottom: -6px;

        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #eee;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    .items-swiper {
      .swiper {
        padding-bottom: ${mixin.pxToVw("30")};

        .swiper-pagination {
          margin-bottom: -${mixin.pxToVw("6")};
        }
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    .swiper-slide {
      .bg-img {
        position: absolute;
        width: 1460px;
        height: 2160px;
        left: calc(50% - 1460px / 2);
        top: calc(50% - 2160px / 2 + 0.14px);
        filter: blur(80px);

        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.06);
        }
      }

      .video,
      .img:not(.bg-img) {
        width: 746px;
        padding-bottom: 56.25942684766214%;
        margin: 0 auto;
      }
    }

    .items-swiper {
      .swiper {
        padding-bottom: 0;
      }

      .swiper-pagination {
        margin: 0;
      }
    }
  }
`;

export const TextBox = styled.div`
  width: calc(100% - 80px);
  bottom: 70px;
  position: absolute;
  left: 0;
  right: 0;

  margin: 0 auto;
  text-align: center;
  z-index: 1;
  pointer-events: none;

  .title {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    line-height: 130%;
  }

  .desc {
    color: #fff;
    font-size: 15px;
    margin-top: 8px;
    font-weight: 400;
    line-height: 130%;
  }

  @media ${({ theme }) => theme.media.smMax} {
    width: calc(100% - (${mixin.pxToVw("80")}));
    bottom: ${mixin.pxToVw("70")};

    .title {
      font-size: ${mixin.pxToVw("28")};
    }

    .desc {
      font-size: ${mixin.pxToVw("15")};
      margin-top: ${mixin.pxToVw("8")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    bottom: 118px;

    .title {
      font-size: 44px;
      line-height: 130%;
    }

    .desc {
      font-size: 18px;
      margin-top: 10px;
    }
  }
`;

export const ButtonBox = styled.div`
  ${mixin.flex({})};
  gap: 8px;
  margin-top: 20px;
  pointer-events: auto;

  .btn {
    min-width: 143px;
    padding: 0 18px;
    height: 40px;
    font-size: 13px;
    font-weight: 500;
    line-height: 130%;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("8")};
    margin-top: ${mixin.pxToVw("20")};

    .btn {
      min-width: ${mixin.pxToVw("143")};
      padding: ${mixin.pxToVw("0 18")};
      height: ${mixin.pxToVw("40")};
      font-size: ${mixin.pxToVw("13")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-top: 24px;

    .btn {
      height: 52px;
      font-size: 18px;
      font-weight: 600;
      line-height: 122.222%;
      margin: 0 20px;
    }
  }
`;
