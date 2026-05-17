import styled from "styled-components";

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContactInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
`;

export const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 560px;
`;

export const ContactMessage = styled.p`
  font-size: 18px;
  line-height: 170%;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 16px 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
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
