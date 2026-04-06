import React from "react";
import * as S from "./style";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  ...rest
}) => (
  <S.SelectWrapper>
    <S.StyledSelect value={value} onChange={onChange} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.StyledSelect>
  </S.SelectWrapper>
);

export default Select;
