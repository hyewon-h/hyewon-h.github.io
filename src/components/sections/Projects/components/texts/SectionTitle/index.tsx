import React from "react";
import * as S from "./style";

type IProps = {
  label?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

const SectionTitle = ({
  label,
  title,
  subTitle,
  description,
  className,
}: IProps) => (
  <S.TitleWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}
    <S.Title>{title}</S.Title>
    {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
    {description && <S.Description>{description}</S.Description>}
  </S.TitleWrapper>
);

export default SectionTitle;
