import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Card = styled.div<{ $clickable: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  .area-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.gray100};
  }

  .thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .area-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    gap: 4px;
    z-index: 1;
  }

  .badge {
    ${mixin.flex({ align: "center", justify: "center" })};
    height: 20px;
    padding: 0 6px;
    border-radius: 0;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${({ theme }) => theme.media.smMax} {
    .area-badge {
      top: ${mixin.pxToVw("8")};
      left: ${mixin.pxToVw("8")};
      gap: ${mixin.pxToVw("4")};
    }

    .badge {
      height: ${mixin.pxToVw("20")};
      padding: ${mixin.pxToVw("0 6")};
      font-size: ${mixin.pxToVw("11")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    .area-badge {
      top: 9px;
      left: 9px;
      gap: 5px;
    }
  }

  .badge.new {
    background: ${({ theme }) => theme.colors.primary};
  }

  .badge.ad {
    color: ${({ theme }) => theme.colors.gray600};
    background: ${({ theme }) => theme.colors.gray200};
  }

  .btn-like {
    position: absolute;
    top: 6px;
    right: 6px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 22px;
      height: 22px;
    }

    svg path {
      stroke: ${({ theme }) => theme.colors.white};
      stroke-width: 1.8;
      transition: fill 0.15s ease;
    }

    &.liked svg path {
      stroke: ${({ theme }) => theme.colors.primary};
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .tag-soldout {
    margin-top: 6px;
  }

  .area-info {
    padding: 10px 2px 0;
  }

  .brand {
    ${mixin.ellipsis(1)};
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray900};
  }

  .name {
    ${mixin.ellipsis(2)};
    margin-top: 2px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray600};
  }

  .area-price {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-top: 6px;
    flex-wrap: wrap;
  }

  .discount {
    font-size: 15px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }

  .price {
    font-size: 15px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gray900};
  }

  .origin {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray400};
    text-decoration: line-through;
  }

  @media ${({ theme }) => theme.media.smMax} {
    .btn-like {
      top: ${mixin.pxToVw("6")};
      right: ${mixin.pxToVw("6")};
      width: ${mixin.pxToVw("32")};
      height: ${mixin.pxToVw("32")};

      svg {
        width: ${mixin.pxToVw("22")};
        height: ${mixin.pxToVw("22")};
      }
    }

    .tag-soldout {
      margin-top: ${mixin.pxToVw("6")};
    }

    .area-info {
      padding: ${mixin.pxToVw("10 2 0")};
    }

    .brand {
      font-size: ${mixin.pxToVw("12")};
    }

    .name {
      margin-top: ${mixin.pxToVw("2")};
      font-size: ${mixin.pxToVw("13")};
    }

    .area-price {
      gap: ${mixin.pxToVw("6")};
      margin-top: ${mixin.pxToVw("6")};
    }

    .discount,
    .price {
      font-size: ${mixin.pxToVw("15")};
    }

    .origin {
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    .tag-soldout {
      margin-top: 7px;
    }

    .area-info {
      padding: 12px 2px 0;
    }

    .brand {
      font-size: 14px;
    }

    .name {
      margin-top: 3px;
      font-size: 15px;
    }

    .area-price {
      gap: 7px;
      margin-top: 7px;
    }

    .discount,
    .price {
      font-size: 17px;
    }

    .origin {
      font-size: 14px;
    }
  }
`;
