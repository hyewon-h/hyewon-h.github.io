import React, { memo, useMemo } from "react";
import { Button as StyledButton } from "./style";

export interface IButtonProps {
  /** 'button' | 'submit' | 'reset' */
  type?: "button" | "submit" | "reset";
  /** href */
  href?: string;
  /** children */
  children?: React.ReactNode;
  /** className */
  className?: string;
  /** disabled */
  disabled?: boolean;
  /** target */
  target?: string;
  /** icon */
  icon?: React.ReactNode;
  /** onClick */
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
    <StyledButton {...buttonProps} as={href ? "a" : "button"}>
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default memo(Button);
