import styled from "styled-components";
import { mixin } from "@/styles/index";

export const CategoryMenuBar = styled.div`
  position: relative;
  overflow: hidden;
  background: #fff;

  .menu-core {
    .swiper {
      transition: padding 0.2s ease;
    }

    .swiper-slide {
      width: auto;

      &:not(:last-child) {
        margin-right: 8px;
      }
    }
  }

  .item {
    white-space: nowrap;
    padding: 8px 4px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray500};
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.15s ease;

    &.active {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.now-fold:not(.is-open) {
    .menu-core .swiper {
      padding-right: 44px;
    }
  }

  .menu-expanded {
    ${mixin.flex({ wrap: "wrap", align: "flex-start" })};
    gap: 4px 8px;
    padding-right: 40px;
  }

  .fold-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 40px;
    height: 40px;
    background: #fff;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray700};

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      width: 30px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #fff 30%,
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
    }

    .arrow {
      transition: transform 0.2s ease;
    }
  }

  &.is-open {
    .fold-btn svg {
      transform: rotate(180deg);
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    &.now-fold:not(.is-open) {
      .menu-core .swiper {
        padding-right: ${mixin.pxToVw("44")};
      }
    }
  }
`;
