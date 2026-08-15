import styled, { css } from "styled-components";
import { mixin } from "@/styles/index";

export const TabsWrapper = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  ${mixin.flex({})};
  border-bottom: 1px solid #eee;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  padding: 10px 20px;
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  font-size: 14px;
  transition: border 0.2s;

  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 1px solid #000;
      font-weight: 600;
    `};

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("10 20")};
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 12px 23px;
    font-size: 14px;
  }
`;

export const TabPanel = styled.div`
  padding: 16px 0;

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("16 0")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 18px 0;
  }
`;
