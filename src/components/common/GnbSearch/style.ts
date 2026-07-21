import styled from "styled-components";
import { mixin } from "@/styles/index";

export const GnbSearch = styled.div`
  position: relative;
  width: 400px;
  max-width: 100%;
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
  border-radius: 8px;
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
    color: ${({ theme }) => theme.colors.gray700};
  }

  .new {
    font-size: 11px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
