import styled from "styled-components";

export const CheckboxWrapper = styled.label`
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

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors?.gray300 || "#d1d5db"};
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${CheckboxInput}:checked + & {
    background: ${({ theme }) => theme.colors?.primary || "#3b82f6"};
    border-color: ${({ theme }) => theme.colors?.primary || "#3b82f6"};
  }

  ${CheckboxInput}:focus + & {
    box-shadow: 0 0 0 3px
      ${({ theme }) => theme.colors?.primaryLight || "#3b82f620"};
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
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.gray700 || "#374151"};
  user-select: none;
`;
