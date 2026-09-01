import styled from "styled-components";
import { mixin } from "@/styles/index";

export const SelectedOptionList = styled.div`
  margin-top: 12px;

  @media ${({ theme }) => theme.media.smMax} {
    margin-top: ${mixin.pxToVw("12")};
  }
`;

export const OptionItem = styled.div`
  position: relative;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.background};

  & + & {
    margin-top: 8px;
  }

  /* 1행: 옵션명 + 추가금 (삭제 버튼 자리만큼 우측 여백) */
  .option_row {
    ${mixin.flex({ align: "flex-start" })};
    gap: 0 8px;
    padding-right: 24px;
  }
  .option_name {
    flex: 1;
    min-width: 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray900};
    ${mixin.ellipsis(2)};
  }
  .surcharge {
    flex-shrink: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray500};
  }

  /* 2행: 수량 */
  .quantity_row {
    margin-top: 10px;
  }

  /* 3행: 총 금액 */
  .total_row {
    margin-top: 10px;
    text-align: right;

    strong {
      font-size: 15px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray900};
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("14 16")};

    & + & {
      margin-top: ${mixin.pxToVw("8")};
    }

    .option_row {
      gap: ${mixin.pxToVw("0 8")};
      padding-right: ${mixin.pxToVw("24")};
    }
    .option_name {
      font-size: ${mixin.pxToVw("13")};
    }
    .surcharge {
      font-size: ${mixin.pxToVw("13")};
    }

    .quantity_row {
      margin-top: ${mixin.pxToVw("10")};
    }

    .total_row {
      margin-top: ${mixin.pxToVw("10")};

      strong {
        font-size: ${mixin.pxToVw("15")};
      }
    }
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  ${mixin.flex({ align: "center", justify: "center" })};
  ${mixin.getSizeBox(20, 20)};
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }

  svg path {
    stroke: ${({ theme }) => theme.colors.gray500};
    transition: stroke 0.15s ease;
  }

  &:hover svg path {
    stroke: ${({ theme }) => theme.colors.gray900};
  }

  @media ${({ theme }) => theme.media.smMax} {
    top: ${mixin.pxToVw("12")};
    right: ${mixin.pxToVw("12")};
    width: ${mixin.pxToVw("20")};
    height: ${mixin.pxToVw("20")};

    svg {
      width: ${mixin.pxToVw("14")};
      height: ${mixin.pxToVw("14")};
    }
  }
`;

export const TotalBar = styled.div`
  ${mixin.flex({ align: "center", justify: "space-between" })};
  gap: 0 12px;
  margin-top: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.gray50};

  .label {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray600};
  }

  .amount {
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray900};

    em {
      margin-right: 6px;
      font-size: 13px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("0 12")};
    margin-top: ${mixin.pxToVw("8")};
    padding: ${mixin.pxToVw("16")};

    .label {
      font-size: ${mixin.pxToVw("13")};
    }

    .amount {
      font-size: ${mixin.pxToVw("17")};

      em {
        margin-right: ${mixin.pxToVw("6")};
        font-size: ${mixin.pxToVw("13")};
      }
    }
  }
`;
