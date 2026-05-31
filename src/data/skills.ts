import { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    category: "Core",
    skills: [
      {
        name: "Semantic HTML5",
        description:
          "웹 표준과 웹 접근성(WA)을 준수하며, 기계와 사람 모두가 이해하기 쉬운 논리적인 문서 구조를 설계합니다.",
      },
      {
        name: "Modern CSS3 / SCSS",
        description:
          "크로스 브라우징과 반응형 웹을 유연하게 구현하며, SCSS를 활용해 유지보수가 용이하고 체계적인 스타일 구조를 만듭니다.",
      },
      {
        name: "JavaScript (ES6+)",
        description:
          "DOM 조작과 비동기 통신을 매끄럽게 처리하며, 데이터 흐름을 이해하고 동적인 UI 인터랙션을 구현합니다.",
      },
      {
        name: "TypeScript",
        description:
          "정적 타이핑을 통해 컴포넌트의 데이터 구조를 명확히 정의하고, 런타임 에러를 방지하여 코드의 안정성을 높입니다.",
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        name: "React.js / Next.js",
        description:
          "재사용 가능한 컴포넌트 단위로 UI를 설계하고, 가상 DOM의 특성을 이해하여 렌더링 성능 최적화를 고민합니다.",
      },
      {
        name: "Tailwind CSS",
        description:
          "유틸리티 클래스를 활용해 일관된 디자인 시스템을 빠르게 화면에 녹여내며, 프로덕션 빌드 시 CSS 용량을 최적화합니다.",
      },
      {
        name: "styled-components",
        description:
          "CSS-in-JS의 장점을 살려 컴포넌트 종속적인 스타일을 격리하고, props 기반의 동적 스타일링을 유연하게 다룹니다.",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Figma / Zeplin",
        description:
          "디자이너의 의도(그리드, 타이포그래피, 여백)를 정밀하게 분석하고 프로덕트에 완벽하게 싱크를 맞춥니다.",
      },
      {
        name: "Git / GitHub",
        description:
          "브랜치 전략을 이해하고 코드 리뷰와 협업 흐름을 존중하며, 깔끔한 커밋 컨벤션을 유지하려 노력합니다.",
      },
    ],
  },
];
