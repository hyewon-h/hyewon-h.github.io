import styled from "styled-components";
import { mixin } from "@/styles/index";

export const TitleWrapper = styled.div`
  margin-bottom: 34px;

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("34")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 56px;
  }
`;

export const Label = styled.span`
  display: block;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("24")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 40px;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 170%;
  word-break: keep-all;
  white-space: pre-line;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("13")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 16px;
  }
`;
