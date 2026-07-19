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
  ${mixin.flex({})};
  gap: 10px;
`;

export const SkillCategory = styled.div`
  width: 240px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.surface};
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
  gap: 4px;
`;

export const SkillItem = styled.li`
  position: relative;
  width: 100%;
  height: 100px;
  perspective: 1000px;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  ${SkillItem}:hover & {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  padding: 14px 16px;
  box-sizing: border-box;
`;

export const CardFront = styled(CardFace)`
  ${mixin.flex({ align: "center" })};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

export const CardBack = styled(CardFace)`
  ${mixin.flex({ align: "center" })};
  transform: rotateY(180deg);
  background: ${({ theme }) => theme.colors.primary};
`;

export const SkillName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const SkillDescription = styled.p`
  font-size: 11.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6;
  margin: 0;
  word-break: keep-all;
`;
