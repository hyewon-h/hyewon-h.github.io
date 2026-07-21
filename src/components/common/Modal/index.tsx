import React, { memo, useEffect, useState } from "react";
import * as S from "./style";
import type { ModalType, ModalPlacement } from "./style";

export interface IProps {
  /** 모달 열림/닫힘 상태 */
  isOpen: boolean;
  /** 모달 닫기 함수 */
  onClose: () => void;
  /** 모달 제목 */
  title?: string;
  /** 모달 내용 */
  children: React.ReactNode;
  /** 배경 클릭시 닫기 비활성화 */
  disableBackdropClick?: boolean;
  /** ESC 키로 닫기 비활성화 */
  disableEscapeKeyDown?: boolean;
  /** 모달 크기 (type이 "modal"일 때만 적용) */
  size?: "small" | "medium" | "large" | "fullscreen";
  /** 모달 형태: "modal"(중앙) | "drawer"(가장자리 슬라이드) */
  type?: ModalType;
  /** drawer일 때 슬라이드 방향 */
  placement?: ModalPlacement;
  /** className */
  className?: string;
  /** 닫기 버튼 숨김 */
  hideCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  size = "medium",
  type = "modal",
  placement = "bottom",
  className,
  hideCloseButton = false,
}: IProps) => {
  // 언마운트를 퇴장 애니메이션이 끝난 뒤로 미루기 위한 상태
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      // 닫힘: 즉시 언마운트하지 않고 퇴장 애니메이션을 재생
      setIsClosing(true);
    }
  }, [isOpen, shouldRender]);

  // ESC 키 이벤트 처리
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !disableEscapeKeyDown) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, disableEscapeKeyDown]);

  if (!shouldRender) return null;

  // 배경 클릭 처리
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !disableBackdropClick) {
      onClose();
    }
  };

  // 퇴장 애니메이션이 끝나면 실제로 언마운트
  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return; // 자식 애니메이션 무시
    if (isClosing) {
      setIsClosing(false);
      setShouldRender(false);
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick} $isClosing={isClosing}>
      <S.ModalContainer
        $size={size}
        $type={type}
        $placement={placement}
        $isClosing={isClosing}
        className={className}
        onAnimationEnd={handleAnimationEnd}
      >
        {(title || !hideCloseButton) && (
          <S.ModalHeader>
            {title && <S.ModalTitle>{title}</S.ModalTitle>}
            {!hideCloseButton && (
              <S.CloseButton onClick={onClose} aria-label="모달 닫기">
                ✕
              </S.CloseButton>
            )}
          </S.ModalHeader>
        )}
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default memo(Modal);
