import styled from "styled-components";
import { mixin } from "@/styles/index";

export const RadioWrapper = styled.label`
  ${mixin.flex({ display: "inline-flex", align: "center" })};
  gap: 8px;
  cursor: pointer;
  position: relative;

  &:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("8")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 9px;
  }
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    transition: transform 0.2s ease;
  }

  ${RadioInput}:checked + & {
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  ${RadioInput}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryLight};
  }

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("20")};
    height: ${mixin.pxToVw("20")};

    &::before {
      width: ${mixin.pxToVw("8")};
      height: ${mixin.pxToVw("8")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    width: 23px;
    height: 23px;

    &::before {
      width: 9px;
      height: 9px;
    }
  }
`;

export const RadioLabel = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray700};
  user-select: none;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 16px;
  }
`;
