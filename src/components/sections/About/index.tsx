import { memo } from "react";
import { profile } from "@/data/profile";
import { careers } from "@/data/career";
import { skills } from "@/data/skills";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import * as S from "./style";

const About = () => {
  return (
    <S.AboutSection id="about">
      <S.AboutInner>
        <SectionTitle label="About" title="소개" />

        <S.AboutGrid>
          <S.AboutText>
            <S.AboutDescription
              dangerouslySetInnerHTML={{ __html: profile.description }}
            />
          </S.AboutText>

          <S.CareerBlock>
            <S.CareerTitle>Experience</S.CareerTitle>
            <S.CareerList>
              {careers.map((career, i) => (
                <S.CareerItem key={i}>
                  <S.CareerPeriod>{career.period}</S.CareerPeriod>
                  <S.CareerInfo>
                    <S.CareerCompany>{career.company}</S.CareerCompany>
                    {/* <S.CareerRole>{career.role}</S.CareerRole> */}
                    <S.CareerDesc>
                      {career.description.map((desc, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      ))}
                    </S.CareerDesc>
                  </S.CareerInfo>
                </S.CareerItem>
              ))}
            </S.CareerList>
            <S.CareerTitle>Skills</S.CareerTitle>
            <S.SkillsBlock>
              {skills.map((category) => (
                <S.SkillCategory key={category.category}>
                  <S.SkillCategoryTitle>
                    {category.category}
                  </S.SkillCategoryTitle>
                  <S.SkillList>
                    {category.skills.map((skill) => (
                      <S.SkillItem key={skill.name}>
                        <S.SkillName>{skill.name}</S.SkillName>
                        {/* <S.SkillDescription>{skill.description}</S.SkillDescription> */}
                      </S.SkillItem>
                    ))}
                  </S.SkillList>
                </S.SkillCategory>
              ))}
            </S.SkillsBlock>
          </S.CareerBlock>
        </S.AboutGrid>
      </S.AboutInner>
    </S.AboutSection>
  );
};

export default memo(About);
