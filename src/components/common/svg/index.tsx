import styled from "styled-components";
import { mixin } from "@/styles/index";

// CRA(SVGR): svg를 React 컴포넌트로 쓰려면 default가 아니라 ReactComponent로 가져온다.
// (default import는 URL 문자열이라 styled()에 넣을 수 없음)
import { ReactComponent as IconMenuSvg } from "./icon/icon_menu.svg";
import { ReactComponent as IconArrowRight01Svg } from "./icon/icon_arrow_right_01.svg";
import { ReactComponent as IconArrowRight02Svg } from "./icon/icon_arrow_right_02.svg";
import { ReactComponent as IconPlay03Svg } from "./icon/icon_play_03.svg";
import { ReactComponent as IconPlay04Svg } from "./icon/icon_play_04.svg";
import { ReactComponent as IconChevronsDownSvg } from "./icon/icon_chevrons_down.svg";
import { ReactComponent as IconCircleXSvg } from "./icon/icon_circle_x.svg";
import { ReactComponent as IconContainerSvg } from "./icon/icon_container.svg";
import { ReactComponent as IconHeadphoneOffSvg } from "./icon/icon_headphone_off.svg";
import { ReactComponent as IconHeadphonesSvg } from "./icon/icon_headphones.svg";
import { ReactComponent as IconHeartSvg } from "./icon/icon_heart.svg";
import { ReactComponent as IconLoaderSvg } from "./icon/icon_loader.svg";
import { ReactComponent as IconMailSvg } from "./icon/icon_mail.svg";
import { ReactComponent as IconMoveRightSvg } from "./icon/icon_move_right.svg";
import { ReactComponent as IconPhoneSvg } from "./icon/icon_phone.svg";
import { ReactComponent as IconSmartphoneSvg } from "./icon/icon_smartphone.svg";
import { ReactComponent as IconSquareXSvg } from "./icon/icon_square_x.svg";
import { ReactComponent as IconStarSvg } from "./icon/icon_star.svg";
import { ReactComponent as IconTabletSmartphoneSvg } from "./icon/icon_tablet_smartphone.svg";
import { ReactComponent as IconUserStarSvg } from "./icon/icon_user_star.svg";
import { ReactComponent as IconXSvg } from "./icon/icon_x.svg";

export const IconMenu = styled(IconMenuSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconArrowRight01 = styled(IconArrowRight01Svg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconArrowRight02 = styled(IconArrowRight02Svg)`
  ${mixin.getSizeBox(8, 13)}
`;
export const IconPlay03 = styled(IconPlay03Svg)`
  ${mixin.getSizeBox(14, 14)}
`;
export const IconPlay04 = styled(IconPlay04Svg)`
  ${mixin.getSizeBox(13, 14)}
`;
export const IconChevronsDown = styled(IconChevronsDownSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconCircleX = styled(IconCircleXSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconContainer = styled(IconContainerSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconHeadphoneOff = styled(IconHeadphoneOffSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconHeadphones = styled(IconHeadphonesSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconHeart = styled(IconHeartSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconLoader = styled(IconLoaderSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconMail = styled(IconMailSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconMoveRight = styled(IconMoveRightSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconPhone = styled(IconPhoneSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconSmartphone = styled(IconSmartphoneSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconSquareX = styled(IconSquareXSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconStar = styled(IconStarSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconTabletSmartphone = styled(IconTabletSmartphoneSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconUserStar = styled(IconUserStarSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
export const IconX = styled(IconXSvg)`
  ${mixin.getSizeBox(20, 20)}
`;
