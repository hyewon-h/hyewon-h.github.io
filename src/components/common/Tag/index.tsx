import React, { memo } from "react";
import * as S from "./style";

export interface IProps {
  /** 태그 내용 */
  children: React.ReactNode;
  /** className */
  className?: string;
}

const Tag = ({ children, className }: IProps) => (
  <S.Tag className={className}>{children}</S.Tag>
);

export default memo(Tag);
