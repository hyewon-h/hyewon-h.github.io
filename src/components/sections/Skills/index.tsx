import { memo } from "react";
import { skills } from "@/data/skills";
import Title from "@/components/common/Title";
import * as S from "./style";

const Skills = () => {
  return (
    <S.SkillsSection id="skills">
      <S.SkillsInner>
        <Title label="Capabilities" title="기술 스택" />

        <S.SkillsGrid>
          {skills.map((category) => (
            <S.SkillCategory key={category.category}>
              <S.CategoryTitle>{category.category}</S.CategoryTitle>
              <S.SkillList>
                {category.skills.map((skill) => (
                  <S.SkillItem key={skill.name}>
                    <S.SkillName>{skill.name}</S.SkillName>
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

export default memo(Skills);
