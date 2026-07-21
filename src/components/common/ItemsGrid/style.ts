import styled, { css } from "styled-components";

import { mixin } from "@/styles/index";

interface IProps {
  $perView?: number;
  $rowGap?: number;
  $colGap?: number;
  $align?: string;
  $md?: { perView?: number; rowGap?: number; colGap?: number };
  $xl?: { perView?: number; rowGap?: number; colGap?: number };
}

const getStyle = (perView: number, rowGap: number, colGap: number) => css`
  grid-template-columns: repeat(
    ${perView},
    minmax(calc(${100 / perView}% - ${colGap}px), 1fr)
  );
  gap: ${rowGap}px ${colGap}px;
`;

export const ItemsGrid = styled.div<IProps>`
  ${(props) => {
    const perView = props.$perView || 2;
    const colGap = props.$colGap || 0;
    const rowGap = props.$rowGap || 0;
    const align = props.$align || "";

    const mdPerView = props.$md?.perView || perView;
    const mdColGap = props.$md?.colGap || colGap;
    const mdRowGap = props.$md?.rowGap || rowGap;

    const xlPerView = props.$xl?.perView || mdPerView;
    const xlColGap = props.$xl?.colGap || mdColGap;
    const xlRowGap = props.$xl?.rowGap || mdRowGap;

    return css`
      width: 100%;
      display: grid;
      align-items: ${align};
      ${getStyle(perView, rowGap, colGap)};

      @media ${({ theme }) => theme.media.smMax} {
        grid-template-columns: repeat(
          ${perView},
          minmax(calc(${100 / perView}% - ${mixin.pxToVw(String(colGap))}), 1fr)
        );
        gap: ${mixin.pxToVw(String(rowGap))} ${mixin.pxToVw(String(colGap))};
      }

      @media ${({ theme }) => theme.media.md} {
        ${getStyle(mdPerView, mdRowGap, mdColGap)};
      }

      @media ${({ theme }) => theme.media.pc} {
        ${getStyle(xlPerView, xlRowGap, xlColGap)};
      }
    `;
  }}
`;
