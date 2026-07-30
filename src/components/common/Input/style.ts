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
  color: ${({ theme }) => theme.colors?.gray400 || "#9ca3af"};

  &:hover {
    color: ${({ theme }) => theme.colors?.gray600 || "#4b5563"};
  }
`;

export const InputField = styled.input<IProps>`
  width: 100%;
  padding: ${({ $clearable }) =>
    $clearable ? "12px 36px 12px 16px" : "12px 16px"};
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? "#ff4757" : theme.colors?.gray300 || "#d1d5db"};
  font-size: 16px;
  font-family: inherit;
  background: #fff;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ $error, theme }) =>
      $error ? "#ff4757" : theme.colors?.primary || "#3b82f6"};
    box-shadow: 0 0 0 1px
      ${({ $error, theme }) =>
        $error ? "#ff475720" : theme.colors?.primaryLight || "#3b82f620"};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors?.gray100 || "#f3f4f6"};
    color: ${({ theme }) => theme.colors?.gray500 || "#6b7280"};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.gray400 || "#9ca3af"};
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4757;
  font-size: 14px;
  margin-top: 4px;
`;
