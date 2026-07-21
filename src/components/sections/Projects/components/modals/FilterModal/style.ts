import styled from "styled-components";
import { mixin } from "@/styles/index";

export const FilterModal = styled.div`
  ${mixin.flex({ direction: "column" })};
  width: 100%;
`;

// 필터 그룹 패널(탭 콘텐츠) 스크롤 영역
export const Panel = styled.div`
  min-height: 240px;
  max-height: 46vh;
  overflow-y: auto;
  padding: 4px 2px;
`;

export const PanelTitle = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};

  .sub {
    margin-left: 6px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

// 체크박스 리스트
export const CheckList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 4px;
`;

export const CheckRow = styled.li`
  ${mixin.flex({ align: "center", justify: "space-between" })};
  padding: 8px 4px;

  .cnt {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

// 컬러 그리드
export const ColorGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px 8px;

  @media ${({ theme }) => theme.media.smMax} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ColorItem = styled.li`
  ${mixin.flex({ direction: "column", align: "center" })};
  gap: 6px;
  text-align: center;

  .name {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray700};
  }

  .cnt {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const Swatch = styled.button<{ $hex: string; $active: boolean }>`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ $hex }) => $hex};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: ${({ theme, $active }) =>
    $active ? `0 0 0 2px ${theme.colors.primary}` : "none"};
  transition: box-shadow 0.15s ease;

  &::after {
    content: "✓";
    position: absolute;
    inset: 0;
    ${mixin.flex({ align: "center", justify: "center" })};
    font-size: 16px;
    color: #fff;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.15s ease;
  }
`;

// 가격
export const PriceBox = styled.div`
  padding: 8px 4px;
`;

export const PriceInputs = styled.div`
  ${mixin.flex({ align: "center", justify: "space-between" })};
  gap: 8px;
  margin-bottom: 20px;

  .field {
    position: relative;
    flex: 1;

    input {
      text-align: right;
      padding-right: 28px;
    }

    .unit {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }

  .between {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

// 좌/우 핸들이 있는 이중 range 슬라이더
export const Slider = styled.div`
  position: relative;
  height: 20px;

  /* 겹쳐진 두 개의 range 인풋: 트랙은 투명하게 두고 thumb(핸들)만 조작 가능 */
  input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    margin: 0;
    background: none;
    pointer-events: none; /* 트랙 클릭 막고 thumb에만 이벤트 허용 */
    -webkit-appearance: none;
    appearance: none;
  }

  /* min 핸들을 위로 올려 겹칠 때도 잡히도록 */
  input.thumb-min {
    z-index: 3;
  }
  input.thumb-max {
    z-index: 2;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    pointer-events: auto;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const PriceTrack = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  right: 8px;
  height: 4px;
  transform: translateY(-50%);
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray200};
  pointer-events: none;
`;

export const PriceFill = styled.div<{ $left: number; $right: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ $left }) => `${$left}%`};
  right: ${({ $right }) => `${100 - $right}%`};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
`;

// 선택된 필터 칩 바
export const ChipBar = styled.div`
  ${mixin.flex({ align: "center" })};
  gap: 8px;
  padding: 12px 0;
  margin-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const ResetBtn = styled.button`
  ${mixin.flex({ align: "center" })};
  gap: 4px;
  flex-shrink: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray600};
  background: none;
  border: none;
  cursor: pointer;

  .icon {
    font-size: 14px;
  }
`;

export const ChipList = styled.ul`
  ${mixin.flex({ align: "center" })};
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 2px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled.li`
  ${mixin.flex({ align: "center" })};
  gap: 4px;
  flex-shrink: 0;
  height: 30px;
  padding: 0 10px;
  border-radius: 15px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray800};
  background: ${({ theme }) => theme.colors.gray100};

  button {
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 16px;
    height: 16px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray500};
    background: none;
    border: none;
    cursor: pointer;
  }
`;

// 하단 버튼
export const Footer = styled.div`
  ${mixin.flex({ align: "center" })};
  gap: 8px;
  padding-top: 16px;
`;

export const CancelBtn = styled.button`
  flex-shrink: 0;
  min-width: 96px;
  height: 52px;
  border-radius: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray700};
  background: ${({ theme }) => theme.colors.gray100};
  border: none;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  flex: 1;
  height: 52px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.92;
  }
`;

export const EmptyMsg = styled.p`
  padding: 40px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray400};
`;
