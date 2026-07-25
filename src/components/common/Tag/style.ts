import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
  background: ${({ theme }) => theme.colors.gray100};
  padding: 3px 8px;
  border-radius: 4px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
    padding: ${mixin.pxToVw("3")} ${mixin.pxToVw("8")};
    border-radius: ${mixin.pxToVw("4")};
  }
`;
