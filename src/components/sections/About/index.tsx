import { memo } from "react";
import { profile } from "@/data/profile";
import { careers } from "@/data/career";
import * as S from "./style";

const About = () => {
  return (
    <S.AboutSection id="about">
      <S.AboutInner>
        <S.SectionLabel>About</S.SectionLabel>
        <S.SectionTitle>소개</S.SectionTitle>

        <S.AboutGrid>
          <S.AboutText>
            <S.AboutDescription>{profile.description}</S.AboutDescription>
          </S.AboutText>

          <S.CareerBlock>
            <S.CareerTitle>Experience</S.CareerTitle>
            <S.CareerList>
              {careers.map((career, i) => (
                <S.CareerItem key={i}>
                  <S.CareerPeriod>{career.period}</S.CareerPeriod>
                  <S.CareerInfo>
                    <S.CareerCompany>{career.company}</S.CareerCompany>
                    <S.CareerRole>{career.role}</S.CareerRole>
                    <S.CareerDesc>
                      {career.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </S.CareerDesc>
                  </S.CareerInfo>
                </S.CareerItem>
              ))}
            </S.CareerList>
          </S.CareerBlock>
        </S.AboutGrid>
      </S.AboutInner>
    </S.AboutSection>
  );
};

export default memo(About);
