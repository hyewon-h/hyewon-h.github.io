import React from "react";
import * as S from "./style";

type IProps = {
  label?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ label, title, subTitle, className }: IProps) => (
  <S.TitleWrapper className={className}>
    <S.Label>{label}</S.Label>
    <S.Title>{title}</S.Title>
    <S.SubTitle>{subTitle}</S.SubTitle>
  </S.TitleWrapper>
);

export default SectionTitle;
