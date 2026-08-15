import styled from "styled-components";
import { mixin } from "@/styles/index";

export const CheckboxWrapper = styled.label`
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

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease;
  ${mixin.flex({ align: "center", justify: "center" })};

  ${CheckboxInput}:checked + & {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${CheckboxInput}:focus + & {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primaryLight};
  }

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("20")};
    height: ${mixin.pxToVw("20")};
    border-radius: ${mixin.pxToVw("4")};
  }

  @media ${({ theme }) => theme.media.pc} {
    width: 23px;
    height: 23px;
    border-radius: 5px;
  }
`;

export const CheckIcon = styled.span`
  color: white;
  font-size: 14px;
  font-weight: bold;
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease;

  ${CheckboxInput}:checked ~ ${CheckboxCustom} & {
    opacity: 1;
    transform: scale(1);
  }

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 14px;
  }
`;

export const CheckboxLabel = styled.span`
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
