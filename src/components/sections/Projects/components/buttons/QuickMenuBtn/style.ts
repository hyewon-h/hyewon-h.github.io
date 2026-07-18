import styled from "styled-components";
import Button from "@/components/common/Button";
import { mixin } from "@/styles/index";

interface IProps {
  bgColor?: string;
  fontColor: string;
  hasImg: boolean;
}

export const QuickMenuBtn = styled(Button)<IProps>`
  position: relative;
  ${mixin.flex({ justify: "flex-start" })};
  gap: 7px;
  height: 42px;
  padding: ${({ hasImg }) => (hasImg ? "4px 12px 4px 7px" : "4px 12px")};
  border-radius: 2px;
  background: ${({ bgColor }) => bgColor};

  .img {
    width: 28px;
    height: 28px;
    border-radius: 2px;
    overflow: hidden;
    background-color: #eee;
  }

  .text {
    line-height: 130%;
    font-size: 13px;
    font-weight: 600;
    color: ${({ fontColor }) => fontColor};
  }

  .ad-tag {
    position: absolute;
    top: 4px;
    left: 23px;
    display: inline-block;
    height: 14px;
    padding: 0 3px;
    color: #fff;
    text-align: center;
    font-size: 8px;
    font-weight: 500;
    line-height: 14px;
    border-radius: 1000px;
    background: #bbb;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("7")};
    height: ${mixin.pxToVw("42")};
    padding: ${({ hasImg }) =>
      hasImg ? mixin.pxToVw("4 12 4 7") : mixin.pxToVw("4 12")};
    border-radius: ${mixin.pxToVw("2")};

    .img {
      width: ${mixin.pxToVw("28")};
      height: ${mixin.pxToVw("28")};
      border-radius: ${mixin.pxToVw("2")};
    }

    .text {
      font-size: ${mixin.pxToVw("13")};
    }

    .ad-tag {
      top: ${mixin.pxToVw("4")};
      left: ${mixin.pxToVw("23")};
      height: ${mixin.pxToVw("14")};
      padding: ${mixin.pxToVw("0 3")};
      font-size: ${mixin.pxToVw("8")};
      line-height: ${mixin.pxToVw("14")};
      border-radius: ${mixin.pxToVw("1000")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    height: 48px;
    gap: 8px;
    padding: ${({ hasImg }) => (hasImg ? "8px 12px 8px 8px" : "8px 14px")};

    .img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 15px;
    }

    .ad-tag {
      left: 30px;
      min-width: 17px;
    }
  }
`;
