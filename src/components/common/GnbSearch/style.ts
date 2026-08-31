import styled from "styled-components";
import { mixin } from "@/styles/index";

export const GnbSearch = styled.div`
  position: relative;
  width: 400px;
  max-width: 100%;

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("400")};
  }

  @media ${({ theme }) => theme.media.pc} {
    width: 460px;
  }
`;

export const SearchField = styled.div`
  ${mixin.flex({ align: "center" })};
  gap: 8px;
  height: 44px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 22px;
  background: #fff;
  transition: border-color 0.15s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.gray900};
  }

  .icon {
    flex-shrink: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray500};
  }

  input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray900};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  .clear {
    flex-shrink: 0;
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 18px;
    height: 18px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray500};
    background: ${({ theme }) => theme.colors.gray100};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("8")};
    height: ${mixin.pxToVw("44")};
    padding: ${mixin.pxToVw("0 12")};
    border-radius: ${mixin.pxToVw("22")};

    .icon {
      font-size: ${mixin.pxToVw("16")};
    }

    input {
      font-size: ${mixin.pxToVw("14")};
    }

    .clear {
      width: ${mixin.pxToVw("18")};
      height: ${mixin.pxToVw("18")};
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 9px;
    height: 51px;
    padding: 0 14px;
    border-radius: 25px;

    .icon {
      font-size: 16px;
    }

    input {
      font-size: 14px;
    }

    .clear {
      width: 21px;
      height: 21px;
      font-size: 12px;
    }
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 100;
  width: 541px;
  max-width: 92vw;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  ${mixin.flex({ wrap: "wrap" })};

  h3 {
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray900};
  }

  .recent,
  .popular {
    padding: 24px;
    min-height: 320px;
  }

  .recent {
    width: 59%;
  }

  .popular {
    width: 41%;
    border-left: 1px solid ${({ theme }) => theme.colors.gray100};
  }

  .head {
    ${mixin.flex({ align: "center", justify: "space-between" })};

    .clear-all {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray400};
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .is-empty {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray400};
  }

  .bottom {
    width: 100%;
    padding: 12px 20px;
    text-align: right;
    border-top: 1px solid ${({ theme }) => theme.colors.gray100};

    button {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.gray500};
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.media.smMax} {
    width: ${mixin.pxToVw("541")};
    top: calc(100% + ${mixin.pxToVw("8")});
    border-radius: ${mixin.pxToVw("4")};

    h3 {
      margin-bottom: ${mixin.pxToVw("16")};
      font-size: ${mixin.pxToVw("15")};
    }

    .recent,
    .popular {
      padding: ${mixin.pxToVw("24")};
      min-height: ${mixin.pxToVw("320")};
    }

    .head .clear-all {
      font-size: ${mixin.pxToVw("13")};
    }

    .is-empty {
      font-size: ${mixin.pxToVw("14")};
    }

    .bottom {
      padding: ${mixin.pxToVw("12 20")};

      button {
        font-size: ${mixin.pxToVw("13")};
      }
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    width: 622px;
    top: calc(100% + 9px);
    border-radius: 4px;

    h3 {
      margin-bottom: 18px;
      font-size: 15px;
    }

    .recent,
    .popular {
      padding: 28px;
      min-height: 368px;
    }

    .head .clear-all {
      font-size: 13px;
    }

    .is-empty {
      font-size: 14px;
    }

    .bottom {
      padding: 14px 23px;

      button {
        font-size: 13px;
      }
    }
  }
`;

export const RecentList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 12px;

  li {
    ${mixin.flex({ align: "center", justify: "space-between" })};
    gap: 8px;
  }

  .word {
    flex: 1;
    ${mixin.ellipsis(1)};
    text-align: left;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray700};
    background: none;
    border: none;
    cursor: pointer;
  }

  .del {
    flex-shrink: 0;
    ${mixin.flex({ align: "center", justify: "center" })};
    width: 19px;
    height: 19px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray400};
    background: none;
    border: none;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("12")};

    li {
      gap: ${mixin.pxToVw("8")};
    }

    .word {
      font-size: ${mixin.pxToVw("15")};
    }

    .del {
      width: ${mixin.pxToVw("19")};
      height: ${mixin.pxToVw("19")};
      font-size: ${mixin.pxToVw("12")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 14px;

    li {
      gap: 9px;
    }

    .word {
      font-size: 15px;
    }

    .del {
      width: 22px;
      height: 22px;
      font-size: 12px;
    }
  }
`;

export const PopularList = styled.ol`
  ${mixin.flex({ direction: "column" })};
  gap: 12px;

  li button {
    ${mixin.flex({ align: "center" })};
    gap: 10px;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
  }

  .rank {
    min-width: 18px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray900};
  }

  .word {
    ${mixin.ellipsis(1)};
    font-size: 15px;
    text-align: left;
    color: ${({ theme }) => theme.colors.gray700};
  }

  .new {
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("12")};

    li button {
      gap: ${mixin.pxToVw("10")};
    }

    .rank {
      min-width: ${mixin.pxToVw("18")};
      font-size: ${mixin.pxToVw("14")};
    }

    .word {
      font-size: ${mixin.pxToVw("15")};
    }

    .new {
      font-size: ${mixin.pxToVw("11")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 14px;

    li button {
      gap: 12px;
    }

    .rank {
      min-width: 21px;
      font-size: 14px;
    }

    .word {
      font-size: 15px;
    }

    .new {
      font-size: 11px;
    }
  }
`;
