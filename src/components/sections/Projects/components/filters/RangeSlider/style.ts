import styled from "styled-components";
import { mixin } from "@/styles/index";

const thumbStyle = `
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  pointer-events: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const SliderArea = styled.div`
  position: relative;
  height: 18px;

  /* 회색 기본 트랙 */
  .rail {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    transform: translateY(-50%);
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.gray200};
  }

  /* 선택 구간 채움 */
  .track {
    position: absolute;
    top: 50%;
    height: 4px;
    transform: translateY(-50%);
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
  }

  /* 겹쳐 놓은 두 개의 range input */
  input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 18px;
    margin: 0;
    background: none;
    -webkit-appearance: none;
    appearance: none;
    pointer-events: none; /* 트랙은 통과, thumb만 활성 */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${thumbStyle};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  input[type="range"]::-moz-range-thumb {
    ${thumbStyle};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("18")};

    .rail,
    .track {
      height: ${mixin.pxToVw("4")};
      border-radius: ${mixin.pxToVw("2")};
    }

    input[type="range"] {
      height: ${mixin.pxToVw("18")};
    }

    input[type="range"]::-webkit-slider-thumb,
    input[type="range"]::-moz-range-thumb {
      width: ${mixin.pxToVw("18")};
      height: ${mixin.pxToVw("18")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    height: 21px;

    .rail,
    .track {
      height: 5px;
      border-radius: 3px;
    }

    input[type="range"] {
      height: 21px;
    }

    input[type="range"]::-webkit-slider-thumb,
    input[type="range"]::-moz-range-thumb {
      width: 21px;
      height: 21px;
    }
  }
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray800};

  @media ${({ theme }) => theme.media.smMax} {
    margin-top: ${mixin.pxToVw("10")};
    font-size: ${mixin.pxToVw("13")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-top: 12px;
    font-size: 15px;
  }
`;
