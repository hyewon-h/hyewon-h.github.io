import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & + .custom_select_wrapper {
    margin-top: 10px;
  }
  &.active .custom_select_header {
    border-bottom: none;
    border-color: #000;
    color: #000;
  }
  &.disabled .custom_select_header {
    background: #f6f6f6;
    color: #bbb;
    cursor: not-allowed;
  }
  &.active .custom_select_options {
    display: block;
  }
  &.static .custom_select_options {
    position: static;
  }
  &.height230 .custom_select_options {
    max-height: 230px;
    overflow-y: auto;
  }

  @media ${({ theme }) => theme.media.smMax} {
    & + .custom_select_wrapper {
      margin-top: ${mixin.pxToVw("10")};
    }
    &.height230 .custom_select_options {
      max-height: ${mixin.pxToVw("230")};
    }
  }
`;

export const Header = styled.div`
  height: 40px;
  position: relative;
  padding: 0 45px 0 15px;
  font-size: 14px;
  line-height: 38px;
  background: #fff;
  border: 1px solid #e2e2e2;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  &.placeholder {
    color: #acacac;
  }
  &::after {
    content: "";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url("//static.wconcept.co.kr/mobile/images/common/svg/IconAccordianArrow20.svg")
      no-repeat center / 100%;
  }
  .active &::after {
    transform: translateY(-50%) rotate(180deg);
  }

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("40")};
    padding: ${mixin.pxToVw("0 45 0 15")};
    font-size: ${mixin.pxToVw("14")};
    line-height: ${mixin.pxToVw("38")};

    &::after {
      right: ${mixin.pxToVw("16")};
      width: ${mixin.pxToVw("20")};
      height: ${mixin.pxToVw("20")};
    }
  }
`;

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
  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 6px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    &::-webkit-scrollbar {
      width: ${mixin.pxToVw("3")};
    }
    &::-webkit-scrollbar-track {
      border-radius: ${mixin.pxToVw("6")};
    }
    &::-webkit-scrollbar-thumb {
      border-radius: ${mixin.pxToVw("6")};
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
  gap: 0 3px;
  font-size: 12px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  &::before {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    background: url("//static.wconcept.co.kr/web/images/svg/icon_notification_16.svg")
      no-repeat center / 100%;
  }

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("84")};
    height: ${mixin.pxToVw("22")};
    gap: ${mixin.pxToVw("0 3")};
    font-size: ${mixin.pxToVw("12")};

    &::before {
      width: ${mixin.pxToVw("14")};
      height: ${mixin.pxToVw("14")};
    }
  }
`;
