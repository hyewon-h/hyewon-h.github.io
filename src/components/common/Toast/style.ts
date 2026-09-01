import styled, { css, keyframes } from "styled-components";
import { mixin } from "@/styles/index";

export type ToastType = "success" | "error" | "info" | "warning";

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(8px); }
`;

export const ToastViewport = styled.div`
  position: fixed;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
  z-index: 9999;
  ${mixin.flex({ direction: "column", align: "center" })};
  gap: 8px;
  width: max-content;
  max-width: calc(100vw - 32px);
  pointer-events: none;

  @media ${({ theme }) => theme.media.smMax} {
    bottom: ${mixin.pxToVw("32")};
    gap: ${mixin.pxToVw("8")};
  }

  @media ${({ theme }) => theme.media.pc} {
    bottom: 37px;
    gap: 9px;
  }
`;

const typeColor = {
  success: "success",
  error: "error",
  info: "info",
  warning: "warning",
} as const;

export const ToastItem = styled.div<{ $type: ToastType; $closing: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gray900};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  pointer-events: auto;
  animation: ${({ $closing }) =>
    $closing
      ? css`
          ${fadeOut} 0.2s ease forwards
        `
      : css`
          ${slideUp} 0.24s ease
        `};

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ $type, theme }) => theme.colors[typeColor[$type]]};
  }

  .message {
    font-size: 14px;
    line-height: 1.4;
    word-break: keep-all;
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-left: 4px;
    padding: 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.gray400};
    cursor: pointer;

    svg {
      width: 14px;
      height: 14px;
    }

    svg path {
      stroke: currentColor;
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("10")};
    padding: ${mixin.pxToVw("10 14")};
    border-radius: ${mixin.pxToVw("4")};

    .icon {
      width: ${mixin.pxToVw("20")};
      height: ${mixin.pxToVw("20")};
      font-size: ${mixin.pxToVw("13")};
    }

    .message {
      font-size: ${mixin.pxToVw("14")};
    }

    .close {
      width: ${mixin.pxToVw("20")};
      height: ${mixin.pxToVw("20")};
      margin-left: ${mixin.pxToVw("4")};

      svg {
        width: ${mixin.pxToVw("14")};
        height: ${mixin.pxToVw("14")};
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 12px;
    padding: 14px 18px;

    .icon {
      width: 23px;
      height: 23px;
      font-size: 13px;
    }

    .message {
      font-size: 14px;
    }

    .close {
      width: 23px;
      height: 23px;
      margin-left: 5px;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
