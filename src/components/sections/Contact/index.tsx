import React from 'react';
import { profile } from '@/data/profile';
import * as S from './style';

const Contact: React.FC = () => {
  return (
    <S.ContactSection id="contact">
      <S.ContactInner>
        <S.SectionLabel>Contact</S.SectionLabel>
        <S.SectionTitle>연락하기</S.SectionTitle>

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
              <S.LinkValue>{profile.github.replace('https://', '')}</S.LinkValue>
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
                <S.LinkValue>{profile.blog.replace('https://', '')}</S.LinkValue>
              </S.ContactLink>
            )}
          </S.ContactLinks>
        </S.ContactBody>
      </S.ContactInner>
    </S.ContactSection>
  );
};

export default Contact;
