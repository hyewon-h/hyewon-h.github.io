import styled from "styled-components";
import { mixin } from "@/styles/index";

export const TextEditor = styled.div`
  position: relative;
  padding: 10px 10px 30px;
  background: #fff;
  border: 1px solid #e2e2e2;

  .editor-container {
    position: relative;
    height: 126px;
    overflow: hidden;
  }

  .highlight-layer {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    pointer-events: none;
    font-size: 14px;
    line-height: 150%;
    word-break: break-all;

    .hashtag {
      color: #445ea1;
    }
  }

  .editor-textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    resize: none;
    padding: 0;
    overflow-y: auto;
    font-size: 14px;
    line-height: 150%;
    color: transparent;
    caret-color: black;
    background: transparent;
    word-break: break-all;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #acacac;
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("10 10 30")};

    .editor-container {
      height: ${mixin.pxToVw("126")};
    }

    .highlight-layer {
      font-size: ${mixin.pxToVw("14")};
    }

    .editor-textarea {
      font-size: ${mixin.pxToVw("14")};
    }

    .count {
      bottom: ${mixin.pxToVw("10")};
      right: ${mixin.pxToVw("10")};
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 12px 12px 34px;

    .editor-container {
      height: 145px;
    }

    .highlight-layer {
      font-size: 14px;
    }

    .editor-textarea {
      font-size: 14px;
    }

    .count {
      bottom: 12px;
      right: 12px;
      font-size: 12px;
    }
  }
`;
