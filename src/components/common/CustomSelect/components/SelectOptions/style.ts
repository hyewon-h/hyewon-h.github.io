import styled from "styled-components";
import { mixin } from "@/styles/index";

export const OptionsList = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #000;
  border-top: none;
  overflow-y: visible;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    &::-webkit-scrollbar {
      width: ${mixin.pxToVw("3")};
    }
    &::-webkit-scrollbar-track {
      border-radius: ${mixin.pxToVw("4")};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: ${mixin.pxToVw("4")};
    }
  }
`;

export const Option = styled.div`
  position: relative;
  ${mixin.flex({ align: "center" })};
  gap: 0 8px;
  font-size: 14px;
  padding: 13.5px 16px;
  border-top: 1px solid #eee;
  cursor: pointer;

  &.disabled {
    color: #bbb;
    cursor: not-allowed;
    background: #f6f6f6;
  }

  &.scheduled_delivery .option_name {
    margin-bottom: 20px;
  }

  .option_name {
    flex: 1;
    font-size: 14px;
    line-height: 130%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  em {
    font-size: 13px;
    color: #555;
  }
  .delivery_date {
    position: absolute;
    bottom: 14px;
    left: 16px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("0 8")};
    font-size: ${mixin.pxToVw("14")};
    padding: ${mixin.pxToVw("13.5 16")};

    &.scheduled_delivery .option_name {
      margin-bottom: ${mixin.pxToVw("20")};
    }

    .option_name {
      font-size: ${mixin.pxToVw("14")};
    }

    em {
      font-size: ${mixin.pxToVw("13")};
    }

    .delivery_date {
      bottom: ${mixin.pxToVw("14")};
      left: ${mixin.pxToVw("16")};
    }
  }
`;

export const RestockAlarmBtn = styled.button`
  width: 84px;
  height: 22px;
  ${mixin.flex({ display: "inline-flex", justify: "center", align: "center" })};
  flex-shrink: 0;
  font-size: 12px;
  border: 1px solid #000;
  background: #fff;
  color: #000;

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("84")};
    height: ${mixin.pxToVw("22")};
    font-size: ${mixin.pxToVw("12")};
  }
`;
