import styled, { css, keyframes } from "styled-components";

// 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

// 모달 배경
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

// 모달 컨테이너
export const ModalContainer = styled.div<{ size: string }>`
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow: hidden;
  animation: ${slideIn} 0.3s ease-out;

  ${({ size }) => {
    switch (size) {
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
          max-width: 900px;
        `;
      case "fullscreen":
        return css`
          width: 95%;
          height: 95%;
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

  @media ${({ theme }) => theme.media.smMax} {
    width: 95%;
    max-height: 95vh;
  }
`;

// 모달 헤더
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

// 모달 제목
export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0;
`;

// 닫기 버튼
export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray500};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray700};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

// 모달 내용
export const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
  max-height: calc(90vh - 100px);

  @media ${({ theme }) => theme.media.smMax} {
    padding: 16px;
    max-height: calc(95vh - 100px);
  }
`;
