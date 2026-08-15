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

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};
    height: ${mixin.pxToVw("30")};
    padding: ${mixin.pxToVw("0 10")};
    border-radius: ${mixin.pxToVw("15")};
    font-size: ${mixin.pxToVw("13")};

    .remove {
      width: ${mixin.pxToVw("16")};
      height: ${mixin.pxToVw("16")};
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 5px;
    height: 34px;
    padding: 0 12px;
    border-radius: 17px;
    font-size: 13px;

    .remove {
      width: 18px;
      height: 18px;
      font-size: 12px;
    }
  }
`;
