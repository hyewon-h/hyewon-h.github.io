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

export const ContactMessage = styled.p`
  font-size: 14px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray600};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 18px;
  }
`;

export const ContactLinks = styled.div`
  ${mixin.flex({ direction: "column", align: "stretch" })};
  gap: 10px;
`;

export const ContactLink = styled.a`
  ${mixin.flex({ align: "center" })};
  gap: 16px;
  text-decoration: none;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("16")};
  }

  @media ${({ theme }) => theme.media.pc} {
    padding: 16px 20px;
  }
`;

export const LinkLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  min-width: 48px;
`;

export const LinkValue = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
`;
