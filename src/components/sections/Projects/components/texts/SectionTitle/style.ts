import styled from "styled-components";
import { mixin } from "@/styles/index";

export const TitleWrapper = styled.div`
  margin-bottom: 24px;

  @media ${({ theme }) => theme.media.smMax} {
    margin-bottom: ${mixin.pxToVw("24")};
  }

  @media ${({ theme }) => theme.media.pc} {
    margin-bottom: 56px;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("26")};
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
