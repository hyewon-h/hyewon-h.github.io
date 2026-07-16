/* eslint-disable react/display-name */
import React, { memo, forwardRef } from "react";
import * as S from "./style";

export interface IProps {
  /** 버튼 타입: 'button' | 'submit' | 'reset' */
  type?: "button" | "submit" | "reset";
  /** 링크 URL */
  href?: string;
  /** 자식 요소 */
  children?: React.ReactNode;
  /** aria-label */
  label?: string;
  /** CSS 클래스명 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 링크 타겟 */
  target?: string;
  /** rel */
  rel?: string;
  /** 아이콘 */
  icon?: React.ReactNode;
  /** role */
  role?: string;
  /** aria-controls */
  ariaControls?: string;
  /** aria-selected */
  ariaSelected?: boolean;
  /** aria-expanded */
  ariaExpanded?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 마우스 진입 이벤트 핸들러 */
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 마우스 이탈 이벤트 핸들러 */
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 포커스 이벤트 핸들러 */
  onFocus?: (e: React.FocusEvent<HTMLButtonElement, Element>) => void;
  /** 블러 이벤트 핸들러 */
  onBlur?: (e: React.FocusEvent<HTMLButtonElement, Element>) => void;
}

const Button = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      type = "button",
      href,
      className,
      disabled = false,
      target,
      rel,
      icon,
      label,
      role,
      ariaControls,
      ariaSelected,
      ariaExpanded,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      children,
    },
    ref,
  ) => {
    return (
      <S.Button
        ref={ref as React.Ref<HTMLButtonElement>}
        as={href ? "a" : "button"}
        className={className}
        type={href ? undefined : type}
        href={href}
        target={target}
        rel={target ? rel : undefined}
        disabled={disabled}
        role={role}
        aria-label={label}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        aria-expanded={ariaExpanded}
        {...(onClick !== undefined && { onClick })}
        {...(onMouseEnter !== undefined && { onMouseEnter })}
        {...(onMouseLeave !== undefined && { onMouseLeave })}
        {...(onFocus !== undefined && { onFocus })}
        {...(onBlur !== undefined && { onBlur })}
      >
        {icon && icon}
        {children}
      </S.Button>
    );
  },
);

export default memo(Button);
