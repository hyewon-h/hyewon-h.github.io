import styled from "styled-components";

export const AccordionWrapper = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #eee;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 16px;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
  &:hover {
    background: #f7f7f7;
  }
`;

export const AccordionContent = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ open }) => (open ? "16px" : "0 16px")};
  background: #fafafa;
`;
