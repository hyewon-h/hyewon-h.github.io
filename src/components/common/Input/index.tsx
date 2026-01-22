import React, { memo } from "react";
import * as S from "./style";

export interface IInputProps {
  /** 인풋 타입 */
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  /** 플레이스홀더 */
  placeholder?: string;
  /** 값 */
  value?: string;
  /** 기본값 */
  defaultValue?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 필수 입력 여부 */
  required?: boolean;
  /** 읽기 전용 여부 */
  readOnly?: boolean;
  /** CSS 클래스명 */
  className?: string;
  /** 값 변경 이벤트 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 포커스 이벤트 핸들러 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** 포커스 해제 이벤트 핸들러 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
}

const Input: React.FC<IInputProps> = ({
  type = "text",
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  readOnly = false,
  className,
  onChange,
  onFocus,
  onBlur,
  error = false,
  errorMessage,
  ...props
}) => {
  return (
    <S.InputWrapper className={className}>
      <S.InputField
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        $error={error}
        {...props}
      />
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};

export default memo(Input);
