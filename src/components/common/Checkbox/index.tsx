import React, { memo } from "react";
import * as S from "./style";

export interface ICheckboxProps {
  /** 체크박스 값 */
  value?: string;
  /** 체크 상태 */
  checked?: boolean;
  /** 기본 체크 상태 */
  defaultChecked?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** CSS 클래스명 */
  className?: string;
  /** 값 변경 이벤트 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  value,
  checked,
  defaultChecked,
  disabled = false,
  label,
  className,
  onChange,
  ...props
}) => {
  return (
    <S.CheckboxWrapper className={className}>
      <S.CheckboxInput
        type="checkbox"
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <S.CheckboxCustom>
        <S.CheckIcon>✓</S.CheckIcon>
      </S.CheckboxCustom>
      {label && <S.CheckboxLabel>{label}</S.CheckboxLabel>}
    </S.CheckboxWrapper>
  );
};

export default memo(Checkbox);
