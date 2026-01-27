import React, { useState, ReactNode } from "react";
import {
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./style";

export interface AccordionPanel {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  panels: AccordionPanel[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  panels,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const togglePanel = (idx: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === idx ? [] : [idx]));
    }
  };

  return (
    <AccordionWrapper>
      {panels.map((panel, idx) => (
        <AccordionItem key={panel.title}>
          <AccordionHeader onClick={() => togglePanel(idx)}>
            {panel.title}
          </AccordionHeader>
          <AccordionContent open={openIndexes.includes(idx)}>
            {panel.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;
