import styled from "styled-components";
import { mixin } from "@/styles/index";

interface IProps {
  $error?: boolean;
  $clearable?: boolean;
}

export const InputWrapper = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;
`;

export const InputInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray400};

  &:hover {
    color: ${({ theme }) => theme.colors.gray600};
  }

  @media ${({ theme }) => theme.media.smMax} {
    right: ${mixin.pxToVw("10")};
  }

  @media ${({ theme }) => theme.media.pc} {
    right: 12px;
  }
`;

export const InputField = styled.input<IProps>`
  width: 100%;
  padding: ${({ $clearable }) =>
    $clearable ? "12px 36px 12px 16px" : "12px 16px"};
  border: 1px solid
    ${({ $error, theme }) => ($error ? "#ff4757" : theme.colors.gray300)};
  font-size: 16px;
  font-family: inherit;
  background: #fff;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ $error, theme }) =>
      $error ? "#ff4757" : theme.colors.primary};
    box-shadow: 0 0 0 1px
      ${({ $error, theme }) =>
        $error ? "#ff475720" : theme.colors.primaryLight};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray500};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${({ $clearable }) =>
      $clearable ? mixin.pxToVw("12 36 12 16") : mixin.pxToVw("12 16")};
    font-size: ${mixin.pxToVw("16")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: ${({ $clearable }) =>
      $clearable ? "14px 41px 14px 18px" : "14px 18px"};
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4757;
  font-size: 14px;
  margin-top: 4px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
    margin-top: ${mixin.pxToVw("4")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 14px;
    margin-top: 5px;
  }
`;
