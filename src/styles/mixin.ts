'use client';

import { css, keyframes } from 'styled-components';

export const topShow = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
  `;
export const topHide = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
  `;
export const bottomShow = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
  `;
export const bottomHide = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
  `;
export const leftShow = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
  `;
export const leftHide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
  `;
export const rightShow = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
  `;
export const rightHide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
  `;

export const blink = keyframes`
  0% { opacity: 0; }
  65% { opacity: 1; }
  100% { opacity: 0; }
  `;

export const pxToRem = (size: string, standard = 16): string =>
  size
    ?.split(' ')
    ?.map(v => `${Number(v) / standard}rem`)
    ?.join(' ');

export const pxToVw = (size: string, standard = 375) =>
  size
    ?.split(' ')
    ?.map(v => `${(Number(v) / standard) * 100}vw`)
    ?.join(' ');

export const getSizeBox = (w: number, h: number) =>
  `width: ${w}px; height: ${h}px;`;

export const a11y = () => css`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;

export const ellipsis = (line = 1) => css`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  -webkit-box-align: initial;
  word-break: ${line === 1 ? 'break-all' : 'keep-all'};
  overflow-wrap: break-word;
`;

export const flex = ({
  display = 'flex',
  direction = 'row',
  wrap = 'nowrap',
  align = 'center',
  justify = 'center',
}) => css`
  display: ${display};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
`;
