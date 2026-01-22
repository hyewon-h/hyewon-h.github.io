import styled from "styled-components";

interface IInputFieldProps {
  $error?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputField = styled.input<IInputFieldProps>`
  padding: 12px 16px;
  border: 1px solid
    ${({ $error, theme }) =>
      $error ? "#ff4757" : theme.colors?.gray300 || "#d1d5db"};
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ $error, theme }) =>
      $error ? "#ff4757" : theme.colors?.primary || "#3b82f6"};
    box-shadow: 0 0 0 3px
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
