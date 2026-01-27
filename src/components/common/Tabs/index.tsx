import React, { useState, ReactNode } from "react";
import { TabsWrapper, TabList, TabButton, TabPanel } from "./style";

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
    <TabsWrapper>
      <TabList>
        {tabs.map((tab, idx) => (
          <TabButton
            key={tab.label}
            active={activeIndex === idx}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      <TabPanel>{tabs[activeIndex]?.content}</TabPanel>
    </TabsWrapper>
  );
};

export default Tabs;
