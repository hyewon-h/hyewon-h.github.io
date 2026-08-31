import { Project } from "./types";

const ASSETS = `${process.env.PUBLIC_URL}/assets/images`;

// 프로젝트 카드 썸네일: 실제 캡쳐 이미지로 교체 전까지 사용하는 임시 더미
const THUMBNAIL_PLACEHOLDER = `${ASSETS}/thumbnail-placeholder.svg`;

// 회사 작업은 workProjects.ts 참고
export const projects: Project[] = [
  {
    id: 1,
    title: "메인 비주얼 배너",
    description:
      "이미지·영상 슬라이드를 함께 지원하는 메인 비주얼 배너입니다. 타이틀/설명 텍스트와 슬라이드를 조합해 랜딩 상단에 사용합니다.",
    tags: ["Swiper", "Video Slide"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
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
    title: "카드형 배너 스와이퍼",
    description:
      "이미지·영상 카드를 가로로 넘겨보는 스와이퍼입니다. 데스크톱/모바일에서 노출 개수가 반응형으로 달라집니다.",
    tags: ["Swiper", "Responsive Slide"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
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
  {
    id: 3,
    title: "커머스 필터 모달",
    description:
      "카테고리·컬러·가격(듀얼 레인지 슬라이더)·혜택·브랜드를 탭으로 묶은 필터 모달입니다. 선택 항목은 칩으로 노출되고 개별 삭제·전체 리셋, 실시간 결과 개수 계산을 지원합니다.",
    tags: ["Filter Modal", "Dual Range Slider"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "filterModal",
    },
  },
  {
    id: 4,
    title: "쇼케이스 배너 리스트",
    description:
      "배너 슬라이드 안에 상품 캐러셀이 중첩된 구조입니다. 배너가 전환되면 활성화된 슬라이드의 상품 스와이퍼만 자동재생되고, 상품을 넘기는 동안엔 부모 배너 스와이프가 잠깁니다.",
    tags: ["Swiper", "Nested Carousel"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "showcaseBanner",
      banners: [
        {
          title: "배너 타이틀 1",
          bannerImgSrc: [
            `${ASSETS}/shiru05.jpeg`,
            `${ASSETS}/shiru06.jpeg`,
            `${ASSETS}/shiru07.jpeg`,
          ],
          products: [`${ASSETS}/hodu01.jpeg`, `${ASSETS}/hodu02.jpeg`],
        },
        {
          title: "배너 타이틀 2",
          bannerImgSrc: [`${ASSETS}/shiru08.jpeg`, `${ASSETS}/shiru09.jpeg`],
          products: [
            `${ASSETS}/hodu03.jpeg`,
            `${ASSETS}/hodu04.jpeg`,
            `${ASSETS}/hodu05.jpeg`,
          ],
        },
        {
          title: "배너 타이틀 3",
          bannerImgSrc: [`${ASSETS}/shiru10.jpeg`],
          products: [`${ASSETS}/hodu06.jpeg`, `${ASSETS}/hodu07.jpeg`],
        },
      ],
    },
  },
  {
    id: 5,
    title: "퀵메뉴 2줄 연동 스크롤",
    description:
      "두 줄의 가로 스크롤 메뉴가 Swiper Controller로 연동되어 함께 움직입니다. 두 줄의 콘텐츠 길이 차이가 일정 이상이면 저항값을 낮춰 스크롤이 서로 밀리지 않게 보정합니다.",
    tags: ["Swiper", "Sync Scroll"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "quickMenu",
      row1: [
        { text: "전체", imgSrc: `${ASSETS}/hodu01.jpeg` },
        { text: "신상품", imgSrc: `${ASSETS}/hodu02.jpeg` },
        { text: "베스트", imgSrc: `${ASSETS}/hodu03.jpeg` },
        { text: "위클리 특가", imgSrc: `${ASSETS}/hodu04.jpeg`, isAd: true },
        { text: "브랜드관", imgSrc: `${ASSETS}/hodu05.jpeg` },
        { text: "아울렛", imgSrc: `${ASSETS}/hodu06.jpeg` },
      ],
      row2: [
        { text: "쿠폰", imgSrc: `${ASSETS}/hodu01.jpeg`, isAd: true },
        { text: "기획전" },
        { text: "이벤트" },
        { text: "럭키드로우" },
        { text: "선물하기" },
        { text: "매거진" },
        { text: "고객센터" },
      ],
    },
  },
  {
    id: 6,
    title: "상품 카드 인터랙션 세트",
    description:
      "찜 토글, 품절 태그, 할인율 자동 계산 뱃지를 갖춘 상품 카드에 별점(0.5 단위)과 수량 조절 스텝퍼를 더한 PDP형 인터랙션 모음입니다.",
    tags: ["Like Toggle", "Rating & Stepper"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "productShowcase",
      items: [
        {
          imgSrc: `${ASSETS}/hodu01.jpeg`,
          brand: "SHIRU",
          name: "오버핏 데일리 니트",
          price: 49000,
          originPrice: 89000,
          isNew: true,
        },
        {
          imgSrc: `${ASSETS}/hodu02.jpeg`,
          brand: "HODU",
          name: "광고 상품 예시",
          price: 29000,
          isAd: true,
        },
        {
          imgSrc: `${ASSETS}/hodu03.jpeg`,
          brand: "SHIRU",
          name: "품절된 인기 상품",
          price: 59000,
          originPrice: 79000,
          soldOut: true,
        },
      ],
    },
  },
  {
    id: 7,
    title: "가로 스크롤 2줄 그리드",
    description:
      "아이템을 2줄로 나눠 배치하는 가로 스크롤 스냅 컴포넌트입니다. perView·gap·rowGap·offsetLR을 조절해 다양한 그리드 밀도를 만들 수 있습니다.",
    tags: ["Scroll Snap", "2-Row Grid"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "itemsScrollBar",
      items: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
    },
  },
  {
    id: 8,
    title: "옵션 선택 커스텀 셀렉트",
    description:
      "배송 예정일, 추가 금액, 품절 옵션의 재입고 알림 신청 버튼까지 옵션별 부가 정보를 노출하는 실전형 커스텀 셀렉트입니다.",
    tags: ["Custom Select", "Restock Alert"],
    thumbnailUrl: THUMBNAIL_PLACEHOLDER,
    period: "2026",
    detail: {
      type: "customSelect",
      options: [
        {
          value: "1",
          label: "색상/사이즈 선택1",
          optionvalue: "색상/사이즈 선택1",
        },
        {
          value: "2",
          label: "색상/사이즈 선택2",
          optionvalue: "색상/사이즈 선택2",
          deliveryDate: "내일 도착",
          surcharge: "+2,000원",
          restockBtn: true,
          restockUrl: "#",
        },
        {
          value: "3",
          label: "품절 옵션",
          optionvalue: "품절 옵션",
          disabled: true,
        },
      ],
    },
  },
];
