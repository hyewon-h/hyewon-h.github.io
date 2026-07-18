import { memo } from "react";
import { skills } from "@/data/skills";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import * as S from "./style";

const Skills = () => {
  return (
    <S.SkillsSection id="skills">
      <S.SkillsInner>
        <SectionTitle label="Capabilities" title="기술 스택" />

        <S.SkillsGrid>
          {skills.map((category) => (
            <S.SkillCategory key={category.category}>
              <S.CategoryTitle>{category.category}</S.CategoryTitle>
              <S.SkillList>
                {category.skills.map((skill) => (
                  <S.SkillItem key={skill.name}>
                    <S.CardInner>
                      <S.CardFront>
                        <S.SkillName>{skill.name}</S.SkillName>
                      </S.CardFront>
                      <S.CardBack>
                        <S.SkillDescription>
                          {skill.description}
                        </S.SkillDescription>
                      </S.CardBack>
                    </S.CardInner>
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
