import React, { memo, useMemo } from "react";
import * as S from "./style";

export interface IButtonProps {
  /** 버튼 타입: 'button' | 'submit' | 'reset' */
  type?: "button" | "submit" | "reset";
  /** 링크 URL */
  href?: string;
  /** 자식 요소 */
  children?: React.ReactNode;
  /** CSS 클래스명 */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 링크 타겟 */
  target?: string;
  /** 아이콘 */
  icon?: React.ReactNode;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  href,
  className,
  disabled = false,
  target,
  icon,
  onClick,
  children,
  ...props
}) => {
  const buttonProps = useMemo(
    () => ({
      href: href || undefined,
      className,
      type: href ? undefined : type,
      target,
      disabled,
      onClick,
      ...props,
    }),
    [href, className, type, target, disabled, onClick, props]
  );

  return (
    <S.Button {...buttonProps} as={href ? "a" : "button"}>
      {icon && icon}
      {children}
    </S.Button>
  );
};

export default memo(Button);
