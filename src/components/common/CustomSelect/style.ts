import styled from "styled-components";
import { mixin } from "@/styles/index";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & + .custom_select_wrapper {
    margin-top: 0.625rem;
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
    max-height: 14.375rem;
    overflow-y: auto;
  }
`;

export const Header = styled.div`
  height: 2.5rem;
  position: relative;
  padding: 0 2.8125rem 0 0.9375rem;
  font-size: 0.875rem;
  line-height: 2.375rem;
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
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    background: url("//static.wconcept.co.kr/mobile/images/common/svg/IconAccordianArrow20.svg")
      no-repeat center / 100%;
  }
  .active &::after {
    transform: translateY(-50%) rotate(180deg);
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
    width: 0.1875rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.375rem;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 0.375rem;
  }
`;

export const Option = styled.div`
  position: relative;
  ${mixin.flex({ align: "center" })};
  gap: 0 0.5rem;
  font-size: 0.875rem;
  padding: 0.84375rem 1rem;
  border-top: 1px solid #eee;
  cursor: pointer;
  &.disabled {
    color: #bbb;
    cursor: not-allowed;
    background: #f6f6f6;
  }
  &.scheduled_delivery .option_name {
    margin-bottom: 1.25rem;
  }
  .option_name {
    flex: 1;
    font-size: 0.875rem;
    line-height: 130%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  em {
    font-size: 0.8125rem;
    color: #555;
  }
  .delivery_date {
    position: absolute;
    bottom: 0.875rem;
    left: 1rem;
  }
`;

export const RestockAlarmBtn = styled.button`
  width: 5.25rem;
  height: 1.375rem;
  ${mixin.flex({ display: "inline-flex", justify: "center", align: "center" })};
  gap: 0 0.1875rem;
  font-size: 0.75rem;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  &::before {
    content: "";
    display: block;
    width: 0.875rem;
    height: 0.875rem;
    background: url("//static.wconcept.co.kr/web/images/svg/icon_notification_16.svg")
      no-repeat center / 100%;
  }
`;
