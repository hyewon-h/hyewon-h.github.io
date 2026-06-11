import { useState, ReactNode } from "react";
import * as S from "./style";

export interface AccordionPanel {
  title: string;
  content: ReactNode;
}

export interface IProps {
  panels: AccordionPanel[];
  allowMultiple?: boolean;
}

const Accordion = ({ panels, allowMultiple = false }: IProps) => {
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
    <S.AccordionWrapper>
      {panels.map((panel, idx) => (
        <S.AccordionItem key={panel.title}>
          <S.AccordionHeader onClick={() => togglePanel(idx)}>
            {panel.title}
          </S.AccordionHeader>
          <S.AccordionContent $open={openIndexes.includes(idx)}>
            {panel.content}
          </S.AccordionContent>
        </S.AccordionItem>
      ))}
    </S.AccordionWrapper>
  );
};

export default Accordion;
