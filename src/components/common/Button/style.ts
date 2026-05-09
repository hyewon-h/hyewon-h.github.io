import styled from "styled-components";
import { mixin } from "@/styles/index";

interface IButtonProps {
  className?: string;
  disabled?: boolean;
  $icon?: React.ReactNode;
}

export const Button = styled.button<IButtonProps>`
  // ${mixin.flex({ display: "inline-flex" })};

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  border: none;
  background: transparent;
  cursor: pointer;

  svg + span {
    margin-left: 4px;
  }

  &[disabled],
  &.disabled {
    background: #dddddd !important;
    pointer-events: none;
  }

  /* iOS 지원 */
  @supports (-webkit-touch-callout: none) {
    margin: 0;
  }

  @media ${({ theme }) => theme.media.smMax} {
    svg + span {
      margin-left: ${mixin.pxToVw("4")};
    }
  }
`;
