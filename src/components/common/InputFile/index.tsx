import React, { forwardRef, memo, useMemo, useCallback } from "react";

import Text from "@/components/common/Text";
import { classNameBind } from "@/utils/commonUtils";

import * as S from "./style";

export interface IProps {
  /** 입력 필드의 고유 식별자 */
  id?: string;
  /** 입력 필드의 이름 */
  name?: string;
  /** 버튼에 표시될 텍스트 */
  text?: string;
  /** 허용되는 파일 타입 */
  accept?: string;
  /** 멀티 파일 여부 */
  multiple?: boolean;
  /** 입력 필드 비활성화 여부 */
  disabled?: boolean;
  /** 추가적인 CSS 클래스 */
  className?: string;
  /** 카메라 사용 여부 */
  capture?: "user" | "environment" | boolean;
  /** 파일 선택 시 호출될 콜백 함수 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 파일 선택 인풋
 * - 실제 input[type=file]은 투명하게 깔고, 보이는 건 텍스트 버튼
 */
const InputFile = forwardRef<HTMLInputElement, IProps>(
  (
    {
      id,
      name,
      text,
      accept = "image/gif, image/jpeg, image/png, ",
      multiple,
      disabled,
      className,
      capture,
      onChange,
    },
    ref,
  ) => {
    const param = useMemo(
      () => ({
        className: classNameBind([
          "input",
          disabled ? "disabled" : "",
          className || "",
        ]),
      }),
      [disabled, className],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e);
        }
      },
      [onChange],
    );

    // exactOptionalPropertyTypes: 값이 없는 속성은 아예 넘기지 않음
    const paramInp: React.InputHTMLAttributes<HTMLInputElement> = {
      type: "file",
      accept,
      onChange: handleChange,
      ...(id !== undefined && { id }),
      ...(name !== undefined && { name }),
      ...(multiple !== undefined && { multiple }),
      ...(disabled !== undefined && { disabled }),
      ...(capture !== undefined && { capture }),
    };

    return (
      <S.Layout {...param}>
        <Text
          className="text"
          block
          size={14}
          weight={500}
          color="#000"
          align="center"
        >
          {text}
        </Text>
        <S.InputFile ref={ref} {...paramInp} lang="ko" />
      </S.Layout>
    );
  },
);

InputFile.displayName = "InputFile";

export default memo(InputFile);
