import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 120px 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export const ContactInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0 0 56px;
  letter-spacing: -0.02em;
`;

export const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 560px;
`;

export const ContactMessage = styled.p`
  font-size: 18px;
  line-height: 1.7;
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
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

export const LinkLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  min-width: 48px;
`;

export const LinkValue = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
`;
