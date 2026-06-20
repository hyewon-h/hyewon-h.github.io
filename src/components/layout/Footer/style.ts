import styled from "styled-components";
import { mixin } from "@/styles/index";

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.gray50};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const FooterInner = styled.div`
  ${mixin.flex({ direction: "column", align: "center" })};
  gap: 12px;
  max-width: 1326px;
  margin: 0 auto;
  padding: 32px 20px;

  @media ${({ theme }) => theme.media.pc} {
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 40px;
  }
`;

export const FooterLinks = styled.div`
  ${mixin.flex({})};
  gap: 20px;
`;

export const FooterLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray400};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Copyright = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray600};
`;
