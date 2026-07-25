import { memo } from "react";
import { profile } from "@/data/profile";
import { IconPhone, IconMail, IconUserStar } from "@/components/common/svg";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import * as S from "./style";

const Contact = () => {
  return (
    <S.ContactSection id="contact">
      <S.ContactInner>
        <SectionTitle
          label="Contact"
          title="연락하기"
          description="새로운 기회나 협업에 관심이 있으시다면 편하게 연락 주세요."
        />

        <S.ContactBody>
          <S.ContactLinks>
            <S.ContactLink href={`tel:${profile.tel}`}>
              <IconPhone />
              <S.LinkLabel>Phone</S.LinkLabel>
              <S.LinkValue>{profile.tel}</S.LinkValue>
            </S.ContactLink>

            <S.ContactLink href={`mailto:${profile.email}`}>
              <IconMail />
              <S.LinkLabel>Email</S.LinkLabel>
              <S.LinkValue>{profile.email}</S.LinkValue>
            </S.ContactLink>

            <S.ContactLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconUserStar />
              <S.LinkLabel>GitHub</S.LinkLabel>
              <S.LinkValue>
                {profile.github.replace("https://", "")}
              </S.LinkValue>
            </S.ContactLink>
          </S.ContactLinks>
        </S.ContactBody>
      </S.ContactInner>
    </S.ContactSection>
  );
};

export default memo(Contact);
