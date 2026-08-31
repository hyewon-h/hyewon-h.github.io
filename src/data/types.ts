// Profile
export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  description: string;
  avatar: string;
  tel: string;
  email: string;
  github: string;
}

// Skills
export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Projects
export interface ProjectBannerSlide {
  imgSrc?: string;
  videoSrc?: string;
  value?: string;
}

export interface ProjectCardBannerItem {
  imgSrc?: string;
  videoSrc?: string;
  title1?: string;
  subTitle?: string;
}

export interface ProjectShowcaseBanner {
  title: string;
  bannerImgSrc: string[];
  products: string[];
}

export interface ProjectQuickMenuItem {
  text: string;
  imgSrc?: string;
  isAd?: boolean;
}

export interface ProjectShowcaseProduct {
  imgSrc: string;
  brand?: string;
  name: string;
  price: number;
  originPrice?: number;
  isNew?: boolean;
  isAd?: boolean;
  soldOut?: boolean;
}

export interface ProjectCustomSelectOption {
  value: string;
  label: string;
  optionvalue?: string;
  disabled?: boolean;
  deliveryDate?: string;
  surcharge?: string;
  restockBtn?: boolean;
  restockUrl?: string;
}

// Modal 안에 어떤 컴포넌트로 상세를 보여줄지: type으로 분기
export type ProjectDetail =
  | {
      type: "mainVisual";
      title?: string;
      desc?: string;
      slides: ProjectBannerSlide[];
    }
  | {
      type: "cardBanner";
      items: ProjectCardBannerItem[];
    }
  | {
      type: "filterModal";
    }
  | {
      type: "showcaseBanner";
      banners: ProjectShowcaseBanner[];
    }
  | {
      type: "quickMenu";
      row1: ProjectQuickMenuItem[];
      row2: ProjectQuickMenuItem[];
    }
  | {
      type: "productShowcase";
      items: ProjectShowcaseProduct[];
    }
  | {
      type: "itemsScrollBar";
      items: string[];
    }
  | {
      type: "customSelect";
      options: ProjectCustomSelectOption[];
    };

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  period: string;
  featured?: boolean;
  /** 클릭 시 Modal로 보여줄 상세 (type에 따라 렌더링 컴포넌트가 달라짐) */
  detail?: ProjectDetail;
}

// Career
export interface Career {
  company: string;
  role: string;
  period: string;
  description: string[];
}

// Work Projects (회사 작업 - 텍스트 서술 전용)
export type WorkProjectCategory =
  | "대규모 프로젝트"
  | "주요 기능 개선"
  | "마케팅 & 광고";

export interface WorkProject {
  id: number;
  title: string;
  category: WorkProjectCategory;
  period: string;
  summary: string;
  tasks: string[];
  achievements: string[];
  tags: string[];
  /** 실제 운영 중인 페이지 링크 (있을 때만 타이틀 옆에 바로가기 노출) */
  siteUrl?: string;
}
