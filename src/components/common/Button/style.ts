import styled from "styled-components";
import { mixin } from "../../../styles/index";

interface IButtonProps {
  className?: string;
  disabled?: boolean;
  $icon?: React.ReactNode;
}

export const Button = styled.button<IButtonProps>`
  ${mixin.flex({ display: "inline-flex" })}

  /* 기본 스타일 */
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  border: none;
  background: transparent;
  cursor: pointer;

  /* 아이콘과 텍스트 간격 */
  svg + span {
    margin-left: 4px;
  }

  /* 비활성화 상태 */
  &[disabled],
  &.disabled {
    background: #dddddd !important;
    pointer-events: none;
  }

  /* iOS 지원 */
  @supports (-webkit-touch-callout: none) {
    margin: 0;
  }

  /* 반응형 */
  @media ${({ theme }) => theme.media?.smMax || "(max-width: 768px)"} {
    svg + span {
      margin-left: ${mixin.pxToVw ? mixin.pxToVw("4") : "4px"};
    }
  }
`;
