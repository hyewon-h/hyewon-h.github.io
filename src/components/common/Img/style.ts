import styled from "styled-components";

interface IImageProps {
  width?: string | number;
  height?: string | number;
}

export const Img = styled.img<IImageProps>`
  display: block;
  max-width: 100%;
  height: auto;

  ${({ width }) =>
    width && `width: ${typeof width === "number" ? `${width}px` : width};`}
  ${({ height }) =>
    height && `height: ${typeof height === "number" ? `${height}px` : height};`}
  
  /* 로딩 중 스켈레톤 효과 */
  &[src=""] {
    background: linear-gradient(
      90deg,
      #f0f0f0 25%,
      transparent 37%,
      #f0f0f0 63%
    );
    background-size: 400% 100%;
    animation: skeleton 1.5s ease-in-out infinite;
  }

  @keyframes skeleton {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
