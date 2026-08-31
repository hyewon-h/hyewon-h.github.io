import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ShowcaseProductItem = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 12px;

  &:last-child {
    min-width: 100%;
    padding-right: 0;
  }

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }

  .area-img {
    flex: none;
    width: 54px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
  }

  .area-info {
    min-width: 0;

    .area-click {
      padding: 4px 16px 0 14px;
    }
  }

  .brand {
    font-size: 12px;
    font-weight: 600;
  }

  .detail {
    font-size: 12px;
    color: #e2e2e2;
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding-top: ${mixin.pxToVw("10")};
    padding-bottom: ${mixin.pxToVw("10")};
    padding-right: ${mixin.pxToVw("12")};

    .area-img {
      width: ${mixin.pxToVw("54")};
    }

    .area-info .area-click {
      padding: ${mixin.pxToVw("4 16 0 14")};
    }

    .brand,
    .detail {
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    flex-direction: column;
    align-items: stretch;
    width: 206px;
    min-width: 0;
    padding: 0;

    &:last-child {
      min-width: 0;
      padding-right: 0;
    }

    & + & {
      border-left: none;
    }

    .area-img {
      width: 100%;
    }

    .area-info .area-click {
      padding: 10px 2px 0;
    }

    .brand,
    .detail {
      font-size: 12px;
    }

    .detail {
      color: #fff;
    }
  }
`;
