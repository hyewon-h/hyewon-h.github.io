import styled from "styled-components";
// SVGR: 크기/색상을 CSS로 제어하기 위해 raw 컴포넌트로 가져온다
import { ReactComponent as ArrowBottomSvg } from "@/components/common/svg/icon/icon_arrow_bottom_01.svg";
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

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("40")};
    padding: ${mixin.pxToVw("0 45 0 15")};
    font-size: ${mixin.pxToVw("14")};
    line-height: ${mixin.pxToVw("38")};
  }
`;

export const ArrowIcon = styled(ArrowBottomSvg)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  ${mixin.getSizeBox(20, 20)};
  color: inherit;
  .active & {
    transform: translateY(-50%) rotate(180deg);
  }

  @media ${({ theme }) => theme.media.smMax} {
    right: ${mixin.pxToVw("16")};
    width: ${mixin.pxToVw("20")};
    height: ${mixin.pxToVw("20")};
  }
`;
