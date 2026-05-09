import { mixin } from "@/styles/index";
import styled from "styled-components";
import { SkillLevel } from "@/data/types";

export const SkillsSection = styled.section`
  padding: 120px 24px;
  background: ${({ theme }) => theme.colors.background};
`;

export const SkillsInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0 0 56px;
  letter-spacing: -0.02em;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media ${({ theme }) => theme.media.smMax} {
    grid-template-columns: 1fr;
    gap: ${mixin.pxToVw("32")};
  }
`;

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 12px;
  padding: 28px;
`;

export const CategoryTitle = styled.h3`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray400};
  margin: 0 0 20px;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkillName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray700};
`;

const levelColors: Record<SkillLevel, string> = {
  high: "#3b82f6",
  mid: "#06b6d4",
  low: "#9ca3af",
};

const levelBgColors: Record<SkillLevel, string> = {
  high: "#eff6ff",
  mid: "#ecfeff",
  low: "#f9fafb",
};

export const SkillLevelBadge = styled.span<{ $level: SkillLevel }>`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 4px;
  color: ${({ $level }) => levelColors[$level]};
  background: ${({ $level }) => levelBgColors[$level]};
`;
