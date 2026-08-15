import styled from "styled-components";

interface IProps {
  $width?: string | number;
  $height?: string | number;
  $cover?: boolean;
}

export const Wrapper = styled.div<IProps>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  ${({ $width }) =>
    $width && `width: ${typeof $width === "number" ? `${$width}px` : $width};`}
  ${({ $height }) =>
    $height &&
    `height: ${typeof $height === "number" ? `${$height}px` : $height};`}
  ${({ $cover }) => $cover && `position: relative; overflow: hidden;`}
`;

export const Img = styled.img<IProps>`
  display: block;
  max-width: 100%;

  /* cover 모드에서는 wrapper가 relative이므로 절대 위치로 채움 */
  ${({ $cover }) =>
    $cover
      ? `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;`
      : ``}

  ${({ $width }) =>
    $width && `width: ${typeof $width === "number" ? `${$width}px` : $width};`}
  ${({ $height }) =>
    $height &&
    `height: ${typeof $height === "number" ? `${$height}px` : $height};`}

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

export default Wrapper;
