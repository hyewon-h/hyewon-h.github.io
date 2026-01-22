import React, { memo, useEffect } from "react";
import * as S from "./style";

export interface IModalProps {
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
  /** 모달 크기 */
  size?: "small" | "medium" | "large" | "fullscreen";
  /** className */
  className?: string;
  /** 닫기 버튼 숨김 */
  hideCloseButton?: boolean;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  size = "medium",
  className,
  hideCloseButton = false,
}) => {
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

  if (!isOpen) return null;

  // 배경 클릭 처리
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !disableBackdropClick) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalContainer size={size} className={className}>
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
