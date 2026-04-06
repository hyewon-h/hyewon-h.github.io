import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(8px)' : 'none')};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 1px 0 rgba(0, 0, 0, 0.08)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s;

  @media ${({ theme }) => theme.media.pc} {
    height: 70px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${({ theme }) => theme.media.pc} {
    padding: 0 40px;
  }
`;

export const Logo = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  letter-spacing: -0.3px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 20px;
  }
`;

export const DesktopNav = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.pc} {
    display: block;
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray800};
    border-radius: 2px;
    transition: background-color 0.2s;
  }

  &:hover span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.pc} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const MobileNav = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  width: 260px;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;

  @media ${({ theme }) => theme.media.pc} {
    display: none;
  }
`;

export const MobileNavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;

  nav ul {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-top: 16px;
  }

  nav ul a {
    font-size: 16px;
    padding: 12px 16px;
    width: 100%;
  }
`;

export const MobileNavClose = styled.button`
  align-self: flex-end;
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray600};
  border-radius: 6px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray900};
  }
`;
