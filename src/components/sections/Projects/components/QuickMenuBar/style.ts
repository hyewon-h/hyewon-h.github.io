import styled from "styled-components";
import { mixin } from "@/styles/index";

export const QuickMenuBar = styled.div`
  .swiper {
    padding: 0 16px;
    overflow: visible;

    + .swiper {
      padding-top: 6px;
    }

    .swiper-slide {
      width: auto !important;
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    .swiper {
      padding: ${mixin.pxToVw("0 16")};

      + .swiper {
        padding-top: ${mixin.pxToVw("6")};
      }
    }
  }
`;
