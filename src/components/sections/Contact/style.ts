import styled from "styled-components";
import { mixin } from "@/styles/index";

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 72px 20px;
  background: ${({ theme }) => theme.colors.background};

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("72 20")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 120px 0;
  }
`;

export const ContactInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
`;

export const ContactBody = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 28px;
  max-width: 560px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("28")};
  }

  @media ${({ theme }) => theme.media.pc} {
    gap: 40px;
  }
`;

export const ContactLinks = styled.div`
  width: 100%;
  ${mixin.flex({ direction: "column", align: "stretch" })};
  gap: 6px;

  @media ${({ theme }) => theme.media.smMax} {
    gap: ${mixin.pxToVw("6")};
  }

  @media ${({ theme }) => theme.media.pc} {
    width: auto;
    gap: 8px;
  }
`;

export const ContactLink = styled.a`
  ${mixin.flex({ align: "center" })};
  gap: 8px;
  text-decoration: none;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  transition: background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("16")};

    svg {
      width: ${mixin.pxToVw("20")};
      height: ${mixin.pxToVw("20")};
    }
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 16px 20px;
  }
`;

export const LinkLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  min-width: 48px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("12")};
    min-width: ${mixin.pxToVw("48")};
  }
`;

export const LinkValue = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }
`;
