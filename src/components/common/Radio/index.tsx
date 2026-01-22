import React, { memo } from "react";
import * as S from "./style";

export interface IRadioProps {
  /** 라디오 그룹명 */
  name: string;
  /** 라디오 값 */
  value: string;
  /** 선택 상태 */
  checked?: boolean;
  /** 기본 선택 상태 */
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

const Radio: React.FC<IRadioProps> = ({
  name,
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
    <S.RadioWrapper className={className}>
      <S.RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <S.RadioCustom />
      {label && <S.RadioLabel>{label}</S.RadioLabel>}
    </S.RadioWrapper>
  );
};

export default memo(Radio);
