import styled, { css } from "styled-components";
import { mixin } from "@/styles/index";

export const TabsWrapper = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  ${mixin.flex({})};
  border-bottom: 1px solid #eee;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  transition:
    border 0.2s,
    color 0.2s;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid #007bff;
      color: #007bff;
      font-weight: bold;
    `}
`;

export const TabPanel = styled.div`
  padding: 16px 0;
`;
