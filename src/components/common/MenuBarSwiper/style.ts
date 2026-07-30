import styled from "styled-components";

export const MenuBarSwiper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #fff;

  .swiper {
    .swiper-slide {
      width: auto;

      &:first-child {
        margin-left: 0 !important;
      }

      &:last-child {
        margin-right: 0 !important;
      }

      .item {
        width: inherit;
        height: inherit;
      }

      .area-click {
        white-space: nowrap;
        position: relative;
      }
    }
  }
`;
