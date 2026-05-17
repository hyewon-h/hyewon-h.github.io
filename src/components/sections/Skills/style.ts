import { mixin } from "@/styles/index";
import styled from "styled-components";

export const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 120px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const SkillsInner = styled.div`
  max-width: 1326px;
  margin: 0 auto;
`;

export const SkillsGrid = styled.div`
  ${mixin.flex({ direction: "column" })};
  gap: 10px;
`;

export const SkillCategory = styled.div`
  padding: 20px;
`;

export const CategoryTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0 0 20px;
`;

export const SkillList = styled.ul`
  ${mixin.flex({ direction: "column" })};
  gap: 12px;
`;

export const SkillItem = styled.li`
  ${mixin.flex({ align: "center", justify: "space-between" })};
`;

export const SkillName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
`;
