import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray900};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px;

  @media ${({ theme }) => theme.media.pc} {
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 40px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
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
