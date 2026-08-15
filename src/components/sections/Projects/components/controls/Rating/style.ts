import styled from "styled-components";

export const Rating = styled.div<{ $size: number; $gap: number }>`
  position: relative;
  display: inline-flex;
  line-height: 0;

  .stars {
    display: inline-flex;
    gap: ${({ $gap }) => $gap}px;

    svg {
      width: ${({ $size }) => $size}px;
      height: ${({ $size }) => $size}px;
      flex-shrink: 0;
    }

    svg path {
      stroke-width: 1.5;
    }
  }

  .stars.base svg path {
    stroke: ${({ theme }) => theme.colors.gray300};
    fill: none;
  }

  .stars.fill {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;

    svg path {
      stroke: ${({ theme }) => theme.colors.warning};
      fill: ${({ theme }) => theme.colors.warning};
    }
  }

  .control {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    gap: ${({ $gap }) => $gap}px;
    height: ${({ $size }) => $size}px;

    .slot {
      display: inline-flex;
      width: ${({ $size }) => $size}px;
      height: 100%;
    }

    .hit {
      height: 100%;
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
    }

    .hit.half {
      width: 50%;
    }

    .hit.full {
      width: 100%;
    }
  }
`;
