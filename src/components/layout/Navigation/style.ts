import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.media.pc} {
    gap: 4px;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a<{ $isActive: boolean }>`
  display: block;
  padding: 8px 12px;
  font-size: 15px;
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.gray700};
  border-radius: 6px;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.media.pc} {
    font-size: 14px;
  }
`;
