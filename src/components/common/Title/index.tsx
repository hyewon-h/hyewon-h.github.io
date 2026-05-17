import React from "react";
import * as S from "./style";

type TitleProps = {
  label: React.ReactNode;
  title: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ label, title, className }) => (
  <S.TitleWrapper className={className}>
    <S.Label>{label}</S.Label>
    <S.TitleText>{title}</S.TitleText>
  </S.TitleWrapper>
);

export default Title;
