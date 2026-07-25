import styled from "styled-components";
import { mixin } from "@/styles/index";

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #eee;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 16px;
  text-align: left;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
    padding: ${mixin.pxToVw("16")};
  }
`;

export const AccordionContent = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? "500px" : "0")};
  font-size: 14px;
  padding: ${({ $open }) => ($open ? "16px" : "0 16px")};
  background: #fafafa;
  overflow: hidden;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
    padding: ${({ $open }) =>
      $open ? `${mixin.pxToVw("16")}` : `0 ${mixin.pxToVw("16")}`};
  }
`;
