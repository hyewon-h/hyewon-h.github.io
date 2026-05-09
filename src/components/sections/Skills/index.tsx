import React from 'react';
import { skills } from '@/data/skills';
import { SkillLevel } from '@/data/types';
import * as S from './style';

const LEVEL_LABEL: Record<SkillLevel, string> = {
  high: '상',
  mid: '중',
  low: '하',
};

const Skills: React.FC = () => {
  return (
    <S.SkillsSection id="skills">
      <S.SkillsInner>
        <S.SectionLabel>Skills</S.SectionLabel>
        <S.SectionTitle>기술 스택</S.SectionTitle>

        <S.SkillsGrid>
          {skills.map((category) => (
            <S.SkillCategory key={category.category}>
              <S.CategoryTitle>{category.category}</S.CategoryTitle>
              <S.SkillList>
                {category.skills.map((skill) => (
                  <S.SkillItem key={skill.name}>
                    <S.SkillName>{skill.name}</S.SkillName>
                    <S.SkillLevelBadge $level={skill.level}>
                      {LEVEL_LABEL[skill.level]}
                    </S.SkillLevelBadge>
                  </S.SkillItem>
                ))}
              </S.SkillList>
            </S.SkillCategory>
          ))}
        </S.SkillsGrid>
      </S.SkillsInner>
    </S.SkillsSection>
  );
};

export default Skills;
