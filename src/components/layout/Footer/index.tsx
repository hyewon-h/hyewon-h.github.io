import { memo } from "react";
import { profile } from "@/data/profile";
import * as S from "./style";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.FooterInner>
        <S.FooterLinks>
          <S.FooterLink
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </S.FooterLink>
          {profile.blog && (
            <S.FooterLink
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </S.FooterLink>
          )}
          {profile.email && (
            <S.FooterLink href={`mailto:${profile.email}`}>
              Contact
            </S.FooterLink>
          )}
        </S.FooterLinks>
        <S.Copyright>
          © {year} {profile.nameEn}. All rights reserved.
        </S.Copyright>
      </S.FooterInner>
    </S.FooterWrapper>
  );
};

export default memo(Footer);
