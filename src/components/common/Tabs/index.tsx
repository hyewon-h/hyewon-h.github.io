import React, { useState, ReactNode } from "react";
import * as S from "./style";

export interface Tab {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  initialIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <S.TabsWrapper>
      <S.TabList>
        {tabs.map((tab, idx) => (
          <S.TabButton
            key={tab.label}
            active={activeIndex === idx}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </S.TabButton>
        ))}
      </S.TabList>
      <S.TabPanel>{tabs[activeIndex]?.content}</S.TabPanel>
    </S.TabsWrapper>
  );
};

export default Tabs;
