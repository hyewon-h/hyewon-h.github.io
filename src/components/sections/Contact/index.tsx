import { memo } from "react";
import { profile } from "@/data/profile";
import Title from "@/components/common/Title";
import * as S from "./style";

const Contact = () => {
  return (
    <S.ContactSection id="contact">
      <S.ContactInner>
        <Title label="Contact" title="연락하기" />

        <S.ContactBody>
          <S.ContactMessage>
            새로운 기회나 협업에 관심이 있으시다면 편하게 연락 주세요.
          </S.ContactMessage>

          <S.ContactLinks>
            <S.ContactLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.LinkLabel>GitHub</S.LinkLabel>
              <S.LinkValue>
                {profile.github.replace("https://", "")}
              </S.LinkValue>
            </S.ContactLink>

            {profile.email && (
              <S.ContactLink href={`mailto:${profile.email}`}>
                <S.LinkLabel>Email</S.LinkLabel>
                <S.LinkValue>{profile.email}</S.LinkValue>
              </S.ContactLink>
            )}

            {profile.blog && (
              <S.ContactLink
                href={profile.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.LinkLabel>Blog</S.LinkLabel>
                <S.LinkValue>
                  {profile.blog.replace("https://", "")}
                </S.LinkValue>
              </S.ContactLink>
            )}
          </S.ContactLinks>
        </S.ContactBody>
      </S.ContactInner>
    </S.ContactSection>
  );
};

export default memo(Contact);
