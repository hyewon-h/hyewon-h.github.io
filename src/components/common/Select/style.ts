import styled from "styled-components";
import { mixin } from "@/styles/index";

export const SelectWrapper = styled.div`
  display: inline-block;
`;

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #888;
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("8 12")};
    border-radius: ${mixin.pxToVw("4")};
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 9px 14px;
    border-radius: 5px;
    font-size: 14px;
  }
`;
