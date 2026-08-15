import { useState, ReactNode } from "react";
import * as S from "./style";

export interface Tab {
  label: string;
  content: ReactNode;
}

export interface IProps {
  tabs: Tab[];
  initialIndex?: number;
}

const Tabs = ({ tabs, initialIndex = 0 }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <S.TabsWrapper>
      <S.TabList className="tab-list">
        {tabs.map((tab, idx) => (
          <S.TabButton
            key={tab.label}
            $active={activeIndex === idx}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </S.TabButton>
        ))}
      </S.TabList>
      <S.TabPanel className="tab-panel">
        {tabs[activeIndex]?.content}
      </S.TabPanel>
    </S.TabsWrapper>
  );
};

export default Tabs;
