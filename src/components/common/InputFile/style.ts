import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Layout = styled.div`
  position: relative;
  ${mixin.flex({ display: "inline-flex", align: "center", justify: "center" })};
  height: 40px;
  padding: 0 20px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  cursor: pointer;

  &.disabled {
    background-color: #f6f6f6;
    color: #bbb;
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("40")};
    padding: ${mixin.pxToVw("0 20")};
  }

  @media ${({ theme }) => theme.media.pc} {
    height: 56px;

    .text {
      font-size: 17px;
    }
  }
`;

export const InputFile = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: inherit;

  &:disabled {
    cursor: not-allowed;
  }
`;
