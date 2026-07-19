import { Project } from "./types";

const ASSETS = `${process.env.PUBLIC_URL}/assets/images`;

// 회사 작업은 workProjects.ts 참고
export const projects: Project[] = [
  {
    id: 1,
    title: "샘플 프로젝트",
    description: "샘플 프로젝트입니다.",
    tags: ["React", "TypeScript"],
    thumbnailUrl: `${ASSETS}/shiru02.jpeg`,
    period: "2026",
    role: "Web Publisher",
    detail: {
      type: "mainVisual",
      title: "메인 비주얼 타이틀",
      desc: "메인 비주얼 설명",
      slides: [
        { imgSrc: `${ASSETS}/shiru01.jpeg`, value: "배너1" },
        { imgSrc: `${ASSETS}/shiru02.jpeg`, value: "배너2" },
        { videoSrc: `${ASSETS}/video01.mp4`, value: "배너3" },
        { imgSrc: `${ASSETS}/shiru03.jpeg`, value: "배너4" },
        { imgSrc: `${ASSETS}/shiru04.jpeg`, value: "배너5" },
        { videoSrc: `${ASSETS}/video02.mp4`, value: "배너6" },
      ],
    },
  },
  {
    id: 2,
    title: "샘플 프로젝트 2",
    description: "카드 배너 스와이퍼 샘플 프로젝트입니다.",
    tags: ["React", "TypeScript"],
    thumbnailUrl: `${ASSETS}/shiru05.jpeg`,
    period: "2026",
    role: "Web Publisher",
    detail: {
      type: "cardBanner",
      items: [
        {
          imgSrc: `${ASSETS}/shiru06.jpeg`,
          title1: "카드 타이틀 1",
          subTitle: "서브 타이틀 1",
        },
        {
          imgSrc: `${ASSETS}/shiru07.jpeg`,
          title1: "카드 타이틀 2",
          subTitle: "서브 타이틀 2",
        },
        {
          videoSrc: `${ASSETS}/video01.mp4`,
          title1: "카드 타이틀 3",
          subTitle: "서브 타이틀 3",
        },
        {
          imgSrc: `${ASSETS}/shiru08.jpeg`,
          title1: "카드 타이틀 4",
          subTitle: "서브 타이틀 4",
        },
        {
          imgSrc: `${ASSETS}/shiru09.jpeg`,
          title1: "카드 타이틀 5",
          subTitle: "서브 타이틀 5",
        },
        {
          videoSrc: `${ASSETS}/video02.mp4`,
          title1: "카드 타이틀 6",
          subTitle: "서브 타이틀 6",
        },
      ],
    },
  },
];
