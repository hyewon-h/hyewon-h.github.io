// Profile
export interface Profile {
  name: string;
  nameEn: string;
  role: string;
  tagline: string;
  description: string;
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
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl?: string;
  siteUrl?: string;
  githubUrl?: string;
  period: string;
  role: string;
  featured?: boolean;
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
}
