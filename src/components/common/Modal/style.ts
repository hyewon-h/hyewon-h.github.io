import styled, { css, keyframes } from "styled-components";
import { mixin } from "@/styles/index";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translate(-50%, -60%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
`;
const slideOut = keyframes`
  from { opacity: 1; transform: translate(-50%, -50%); }
  to { opacity: 0; transform: translate(-50%, -60%); }
`;

const drawerBottomIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;
const drawerBottomOut = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;
const drawerLeftIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const drawerLeftOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;
const drawerRightIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const drawerRightOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

export type ModalType = "modal" | "drawer";
export type ModalPlacement = "bottom" | "left" | "right";

const drawerFrames: Record<ModalPlacement, [typeof fadeIn, typeof fadeIn]> = {
  bottom: [drawerBottomIn, drawerBottomOut],
  left: [drawerLeftIn, drawerLeftOut],
  right: [drawerRightIn, drawerRightOut],
};

export const ModalBackdrop = styled.div<{ $isClosing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  ${mixin.flex({ align: "center", justify: "center" })};
  z-index: 1000;
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.25s
    ease-out both;
`;

export const ModalContainer = styled.div<{
  $size: string;
  $type?: ModalType;
  $placement?: ModalPlacement;
  $isClosing?: boolean;
}>`
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-height: 95vh;
  overflow: hidden;

  ${({ $size }) =>
    $size === "fullscreen" &&
    css`
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
    `}

  @media ${({ theme }) => theme.media.pc} {
    max-height: 90vh;

    ${({ $size }) => {
      switch ($size) {
        case "small":
          return css`
            width: 90%;
            max-width: 400px;
          `;
        case "medium":
          return css`
            width: 90%;
            max-width: 600px;
          `;
        case "large":
          return css`
            width: 90%;
            max-width: 1326px;
          `;
        case "fullscreen":
          return css`
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
          `;
        default:
          return css`
            width: 90%;
            max-width: 600px;
          `;
      }
    }}
  }

  /* drawer: 가장자리에서 슬라이드. placement 방향에 따라 위치 지정 */
  ${({ $type, $placement = "bottom" }) =>
    $type === "drawer" &&
    css`
      max-width: none;
      border-radius: 0;

      ${$placement === "bottom" &&
      css`
        inset: auto 0 0 0;
        width: 100%;
        max-height: 90vh;
        transform: none;
        border-radius: 16px 16px 0 0;
      `}
      ${$placement === "left" &&
      css`
        inset: 0 auto 0 0;
        width: 88%;
        max-width: 400px;
        height: 100%;
        max-height: none;
        transform: none;
      `}
      ${$placement === "right" &&
      css`
        inset: 0 0 0 auto;
        width: 88%;
        max-width: 400px;
        height: 100%;
        max-height: none;
        transform: none;
      `}
    `}

  /* 애니메이션: 형태/방향 + 닫힘 여부에 따라 입장/퇴장 선택 (both로 종료 상태 유지) */
  ${({ $type, $placement = "bottom", $size, $isClosing }) => {
    let frames;
    if ($type === "drawer") {
      frames = drawerFrames[$placement][$isClosing ? 1 : 0];
    } else if ($size === "fullscreen") {
      frames = $isClosing ? fadeOut : fadeIn;
    } else {
      frames = $isClosing ? slideOut : slideIn;
    }
    return css`
      animation: ${frames} 0.3s ease-out both;
    `;
  }}
`;

export const ModalHeader = styled.div`
  ${mixin.flex({ align: "center", justify: "space-between" })};
  padding: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

  @media ${({ theme }) => theme.media.smMax} {
    padding: ${mixin.pxToVw("12 20")};
  }
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("16")};
  }
`;

export const CloseButton = styled.button`
  padding: 4px;
`;

export const ModalContent = styled.div`
  overflow-y: auto;
  max-height: calc(95vh - 100px);

  @media ${({ theme }) => theme.media.smMax} {
    max-height: calc(95vh - ${mixin.pxToVw("100")});
  }

  @media ${({ theme }) => theme.media.pc} {
    max-height: inherit;
  }
`;
