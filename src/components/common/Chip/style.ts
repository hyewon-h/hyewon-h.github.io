import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Chip = styled.span<{ $clickable: boolean }>`
  ${mixin.flex({ align: "center" })};
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;
  height: 30px;
  padding: 0 10px;
  border-radius: 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray800};
  background: ${({ theme }) => theme.colors.gray100};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  .label {
    ${mixin.ellipsis(1)};
  }

  .remove {
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 16px;
    height: 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray500};
    background: none;
    border: none;
    cursor: pointer;
  }
`;
