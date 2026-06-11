import React from "react";
import * as S from "./style";

type IProps = {
  label: React.ReactNode;
  title: React.ReactNode;
  className?: string;
};

const Title = ({ label, title, className }: IProps) => (
  <S.TitleWrapper className={className}>
    <S.Label>{label}</S.Label>
    <S.TitleText>{title}</S.TitleText>
  </S.TitleWrapper>
);

export default Title;
