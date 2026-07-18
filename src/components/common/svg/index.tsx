import styled from "styled-components";
import { mixin } from "@/styles/index";

// CRA(SVGR): svg를 React 컴포넌트로 쓰려면 default가 아니라 ReactComponent로 가져온다.
// (default import는 URL 문자열이라 styled()에 넣을 수 없음)
import { ReactComponent as IconArrowRight02Svg } from "./icon/icon_arrow_right_02.svg";
import { ReactComponent as IconPlay03Svg } from "./icon/icon_play_03.svg";
import { ReactComponent as IconPlay04Svg } from "./icon/icon_play_04.svg";

export const IconArrowRight02 = styled(IconArrowRight02Svg)`
  ${mixin.getSizeBox(8, 13)}
`;
export const IconPlay03 = styled(IconPlay03Svg)`
  ${mixin.getSizeBox(14, 14)}
`;
export const IconPlay04 = styled(IconPlay04Svg)`
  ${mixin.getSizeBox(13, 14)}
`;
