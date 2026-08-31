import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Stepper = styled.div<{ $disabled: boolean }>`
  ${mixin.flex({ display: "inline-flex", align: "center" })};
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 4px;
  overflow: hidden;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  .btn {
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 28px;
    height: 100%;
    padding: 0;
    border: none;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: background 0.15s ease;

    svg {
      width: 14px;
      height: 14px;
    }

    svg path {
      stroke: ${({ theme }) => theme.colors.gray800};
      transition: stroke 0.15s ease;
    }

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray100};
    }
    &:disabled {
      cursor: not-allowed;

      svg path {
        stroke: ${({ theme }) => theme.colors.gray300};
      }
    }
  }

  .value {
    min-width: 32px;
    height: 100%;
    padding: 0 4px;
    border: none;
    border-left: 1px solid ${({ theme }) => theme.colors.gray200};
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.gray900};
    background: ${({ theme }) => theme.colors.white};

    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: none;
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.gray500};
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("28")};
    border-radius: ${mixin.pxToVw("4")};

    .btn {
      width: ${mixin.pxToVw("28")};

      svg {
        width: ${mixin.pxToVw("14")};
        height: ${mixin.pxToVw("14")};
      }
    }

    .value {
      min-width: ${mixin.pxToVw("32")};
      padding: ${mixin.pxToVw("0 4")};
      font-size: ${mixin.pxToVw("13")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    height: 32px;
    border-radius: 4px;

    .btn {
      width: 32px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    .value {
      min-width: 36px;
      padding: 0 4px;
      font-size: 14px;
    }
  }
`;
