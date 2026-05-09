import styled from "styled-components";

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
`;
