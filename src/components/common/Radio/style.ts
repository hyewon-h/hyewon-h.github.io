import styled from "styled-components";

export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  &:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.6;
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
  border: 2px solid ${({ theme }) => theme.colors?.gray300 || "#d1d5db"};
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
    background: ${({ theme }) => theme.colors?.primary || "#3b82f6"};
    transition: transform 0.2s ease;
  }

  ${RadioInput}:checked + & {
    border-color: ${({ theme }) => theme.colors?.primary || "#3b82f6"};

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  ${RadioInput}:focus + & {
    box-shadow: 0 0 0 3px
      ${({ theme }) => theme.colors?.primaryLight || "#3b82f620"};
  }
`;

export const RadioLabel = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.gray700 || "#374151"};
  user-select: none;
`;
