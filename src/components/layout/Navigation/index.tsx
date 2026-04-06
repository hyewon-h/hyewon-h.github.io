import React from 'react';
import * as S from './style';

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

interface NavigationProps {
  activeSection: string;
  onNavClick: (id: string) => void;
  onClose?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavClick, onClose }) => {
  const handleClick = (id: string) => {
    onNavClick(id);
    onClose?.();
  };

  return (
    <nav aria-label="주요 메뉴">
      <S.NavList>
        {NAV_ITEMS.map(({ id, label }) => (
          <S.NavItem key={id}>
            <S.NavLink
              href={`#${id}`}
              $isActive={activeSection === id}
              aria-current={activeSection === id ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
            >
              {label}
            </S.NavLink>
          </S.NavItem>
        ))}
      </S.NavList>
    </nav>
  );
};

export default Navigation;
