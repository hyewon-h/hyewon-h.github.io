import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Stepper = styled.div<{ $disabled: boolean }>`
  ${mixin.flex({ display: "inline-flex", align: "center" })};
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 8px;
  overflow: hidden;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  .btn {
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 36px;
    height: 100%;
    padding: 0;
    border: none;
    background: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.gray800};
    cursor: pointer;
    transition: background 0.15s ease;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.gray100};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.gray300};
      cursor: not-allowed;
    }
  }

  .value {
    min-width: 40px;
    height: 100%;
    padding: 0 4px;
    border: none;
    border-left: 1px solid ${({ theme }) => theme.colors.gray200};
    border-right: 1px solid ${({ theme }) => theme.colors.gray200};
    text-align: center;
    font-size: 14px;
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
    height: ${mixin.pxToVw("36")};
    border-radius: ${mixin.pxToVw("8")};

    .btn {
      width: ${mixin.pxToVw("36")};
      font-size: ${mixin.pxToVw("18")};
    }

    .value {
      min-width: ${mixin.pxToVw("40")};
      padding: ${mixin.pxToVw("0 4")};
      font-size: ${mixin.pxToVw("14")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    height: 41px;
    border-radius: 9px;

    .btn {
      width: 41px;
      font-size: 21px;
    }

    .value {
      min-width: 46px;
      padding: 0 5px;
      font-size: 16px;
    }
  }
`;
