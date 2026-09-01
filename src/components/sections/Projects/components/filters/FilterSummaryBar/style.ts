import styled, { css } from "styled-components";
import { mixin } from "@/styles/index";

export const FilterSummaryBar = styled.div`
  ${mixin.flex({ align: "center", justify: "space-between", wrap: "wrap" })};
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  background: ${({ theme }) => theme.colors.background};

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("12")};
    padding: ${mixin.pxToVw("16 18")};
  }
`;

export const ResultText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray600};

  strong {
    margin-right: 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray900};
  }

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};

    strong {
      margin-right: ${mixin.pxToVw("4")};
    }
  }
`;

export const FilterRow = styled.div`
  ${mixin.flex({ align: "center", wrap: "wrap", justify: "flex-end" })};
  gap: 8px;

  @media ${({ theme }) => theme.media.smMax} {
    width: 100%;
    justify-content: flex-start;
    gap: ${mixin.pxToVw("8")};
  }
`;

const chipStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 50px;
  font-size: 13px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};
    min-height: ${mixin.pxToVw("32")};
    padding: 0 ${mixin.pxToVw("12")};
    font-size: ${mixin.pxToVw("13")};
  }
`;

export const FilterChip = styled.div`
  ${chipStyle}
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  background: rgba(179, 37, 118, 0.06);
  color: ${({ theme }) => theme.colors.primaryDark};

  button {
    ${mixin.flex({ align: "center", justify: "center" })};
    color: currentColor;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const EmptyChip = styled.span`
  ${chipStyle}
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ResetButton = styled.button`
  ${mixin.flex({ align: "center", justify: "center" })};
  gap: 4px;
  min-height: 32px;
  font-size: 13px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.gray600};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("4")};
    min-height: ${mixin.pxToVw("32")};
    font-size: ${mixin.pxToVw("13")};
    padding: 0 ${mixin.pxToVw("12")};

    svg {
      width: ${mixin.pxToVw("14")};
      height: ${mixin.pxToVw("14")};
    }
  }
`;
