import styled, { css } from "styled-components";
import { mixin } from "@/styles/index";

export interface IProps {
  $perView?: number;
  $offsetLR?: number;
  $gap?: number;
  $rowGap?: number;
  $line?: number;
  $snap?: boolean;
  $scrollAlign?: "left" | "center";
}

export const ItemsScrollBar = styled.div<IProps>`
  position: relative;
  ${mixin.flex({ align: "flex-start", justify: "flex-start" })};
  overflow-x: auto;
  overflow-y: hidden;

  ${({ $line = 1, $rowGap = 24 }) =>
    $line !== 1 &&
    css`
      flex-direction: column;
      row-gap: ${$rowGap}px;
      > .inner-items-scrollBar {
        ${mixin.flex({ align: "flex-start", justify: "flex-start" })};
        width: 100%;
      }
    `}

  ${({ $snap, $scrollAlign }) =>
    $snap &&
    css`
      scroll-snap-type: x mandatory;
      > .item {
        scroll-snap-align: ${$scrollAlign === "center" ? "center" : "start"};
        scroll-snap-stop: always;
      }
    `}

  &:not(.item-auto) > .item,
  &:not(.item-auto) .inner-items-scrollBar > .item {
    ${({ $offsetLR = 20, $gap = 5, $perView = 2 }) => {
      const view = $perView || 2;
      const margin = ($offsetLR / 375) * 100;
      const gapVw = ($gap / 375) * 100;
      const compVal = (margin - (margin - gapVw) * (view - 1)) / view;
      return css`
        min-width: calc(${100 / view}% - ${compVal}vw);
        max-width: calc(${100 / view}% - ${compVal}vw);
        padding-left: ${margin}vw;
        margin-left: ${gapVw - margin}vw;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          min-width: calc(${100 / view}% - ${compVal - margin}vw);
          padding-right: ${margin}vw;
          &.more {
            min-width: 22.935vw;
            height: ${view === 3 ? "calc(44.2vw - 5.333vw)" : "58.824vw"};
            padding-left: 0;
            margin-left: 2.666vw;
          }
        }
      `;
    }}
  }

  &.item-auto {
    flex-direction: column;
    column-gap: ${({ $gap = 5 }) => $gap}px;
    row-gap: ${({ $rowGap = 24 }) => $rowGap}px;
    padding: 0 ${({ $offsetLR = 20 }) => $offsetLR}px;

    .inner-items-scrollBar {
      width: max-content;
      ${mixin.flex({ align: "flex-start", justify: "flex-start" })};
      row-gap: inherit;
      column-gap: inherit;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    &:not(.item-auto) > .item,
    &:not(.item-auto) .inner-items-scrollBar > .item {
      ${({ $offsetLR = 20, $gap = 5, $perView = 2 }) => {
        const view = $perView || 2;
        const compVal = ($offsetLR - ($offsetLR - $gap) * (view - 1)) / view;
        return css`
          min-width: calc(${100 / view}% - ${compVal}px);
          max-width: calc(${100 / view}% - ${compVal}px);
          padding-left: ${$offsetLR}px;
          margin-left: ${$gap - $offsetLR}px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            min-width: calc(${100 / view}% - ${compVal - $offsetLR}px);
            padding-right: ${$offsetLR}px;
            &.more {
              min-width: 22.935vw;
              height: ${view === 3 ? "calc(44.2vw - 20px)" : "58.824vw"};
              padding-left: 0;
              margin-left: 10px;
            }
          }
        `;
      }}
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    &.item-auto {
      .inner-items-scrollBar {
        width: 100%;
        flex-wrap: wrap;
      }
    }
  }
`;
