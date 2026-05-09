import styled, { css } from "styled-components";

export interface ItemsScrollBarStyleProps {
  perView?: number;
  offsetLR?: number;
  gap?: number;
  snap?: boolean;
}

export const ItemsScrollBar = styled.div<ItemsScrollBarStyleProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;

  ${({ snap }) =>
    snap &&
    css`
      scroll-snap-type: x mandatory;
      > .item {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }
    `}

  > .item {
    ${({ offsetLR = 20, gap = 5, perView = 2 }) => {
      const margin = (offsetLR / 375) * 100;
      const gapVw = (gap / 375) * 100;
      const compVal = (margin - (margin - gapVw) * (perView - 1)) / perView;
      return css`
        min-width: calc(${100 / perView}% - ${compVal}vw);
        max-width: calc(${100 / perView}% - ${compVal}vw);
        padding-left: ${margin}vw;
        margin-left: ${gapVw - margin}vw;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          min-width: calc(${100 / perView}% - ${compVal - margin}vw);
          padding-right: ${margin}vw;
          &.more {
            min-width: 22.935vw;
            height: ${perView === 3 ? "calc(44.2vw - 5.333vw)" : "58.824vw"};
            padding-left: 0;
            margin-left: 2.666vw;
          }
        }
      `;
    }}
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${({ theme }) => theme.media.sm} {
    > .item {
      ${({ offsetLR = 20, gap = 5, perView = 2 }) => {
        const compVal = (offsetLR - (offsetLR - gap) * (perView - 1)) / perView;
        return css`
          min-width: calc(${100 / perView}% - ${compVal}px);
          max-width: calc(${100 / perView}% - ${compVal}px);
          padding-left: ${offsetLR}px;
          margin-left: ${gap - offsetLR}px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            min-width: calc(${100 / perView}% - ${compVal - offsetLR}px);
            padding-right: ${offsetLR}px;
            &.more {
              min-width: 22.935vw;
              height: ${perView === 3 ? "calc(44.2vw - 20px)" : "58.824vw"};
              padding-left: 0;
              margin-left: 10px;
            }
          }
        `;
      }}
    }
  }
`;
