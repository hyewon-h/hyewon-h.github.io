import { Profile } from "./types";
import avatarImg from "@/assets/images/profile_img_01.png";

export const profile: Profile = {
  name: "혜원",
  nameEn: `Creative<br/>Technologist`,
  role: "Web Publisher",
  tagline: `화려한 장식보다 본질에 집중합니다.<br/>쓰기 편한 인터페이스와 견고한 구조를 만듭니다.`,
  description: `기본이 탄탄한 시맨틱 마크업과 웹 접근성을 바탕으로, 최근에는 React를 활용한 컴포넌트 기반 설계와 UI 성능 최적화에 깊이 몰입하고 있습니다.<br/>단순히 시안을 화면으로 옮기는 것을 넘어, 유지보수하기 좋은 코드로 구조를 다듬고 사용자 경험을 매끄럽게 연결하는 과정에서 가장 즐거움을 느낍니다.`,
  avatar: avatarImg,
  tel: "010-6421-2199",
  email: "honghyewon1011@gmail.com",
  github: "https://github.com/hyewon-h",
};
