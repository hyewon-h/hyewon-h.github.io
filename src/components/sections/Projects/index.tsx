import { memo, useState } from "react";
import { isDesktop } from "react-device-detect";
import { projects } from "@/data/projects";
import { workProjects } from "@/data/workProjects";
import { WorkProjectCategory } from "@/data/types";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import Modal from "@/components/common/Modal";
import Video from "@/components/common/Video";
import MainVisualBnrList from "@/components/sections/Projects/components/lists/MainVisualBnrList";
import CardBannerSwiperType from "@/components/sections/Projects/components/lists/CardBannerSwiperType";
import ProjectHistoryList from "@/components/sections/Projects/components/lists/ProjectHistoryList";
import CardTypeBannerItem from "@/components/sections/Projects/components/items/CardTypeBannerItem";
import ProjectCard from "@/components/sections/Projects/components/cards/ProjectCard";
import Img from "@/components/common/Img";
import * as S from "./style";

const WORK_CATEGORIES: WorkProjectCategory[] = [
  "대규모 프로젝트",
  "주요 기능 개선",
  "마케팅 & 광고",
];

type ProjectTab = "portfolio" | "work";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("work");
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const openProject = projects.find((p) => p.id === openProjectId);

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsInner>
        <SectionTitle label="Projects" title="프로젝트" />

        <S.TabBar>
          <S.TabButton
            $isActive={activeTab === "work"}
            onClick={() => setActiveTab("work")}
            data-label="Project Overview"
          >
            Project Overview
          </S.TabButton>
          <S.TabButton
            $isActive={activeTab === "portfolio"}
            onClick={() => setActiveTab("portfolio")}
            data-label="Component Archive"
          >
            Component Archive
          </S.TabButton>
        </S.TabBar>

        {activeTab === "portfolio" && (
          <S.PortfolioGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => project.detail && setOpenProjectId(project.id)}
              />
            ))}
          </S.PortfolioGrid>
        )}

        {activeTab === "work" && (
          <ProjectHistoryList
            items={workProjects}
            categories={WORK_CATEGORIES}
          />
        )}
      </S.ProjectsInner>

      {openProject?.detail && (
        <Modal
          isOpen
          onClose={() => setOpenProjectId(null)}
          title={openProject.title}
          size={isDesktop ? "large" : "fullscreen"}
        >
          {openProject.detail.type === "mainVisual" && (
            <MainVisualBnrList
              {...(openProject.detail.title !== undefined && {
                title: openProject.detail.title,
              })}
              {...(openProject.detail.desc !== undefined && {
                desc: openProject.detail.desc,
              })}
              isDesktop={isDesktop}
              items={openProject.detail.slides.map((slide, index) => (
                <div key={index}>
                  {slide.imgSrc && (
                    <Img
                      src={slide.imgSrc}
                      alt={
                        slide.value || `${openProject.title} 배너 ${index + 1}`
                      }
                    />
                  )}
                  {slide.videoSrc && (
                    <Video src={slide.videoSrc} responsive muted playsinline />
                  )}
                </div>
              ))}
            />
          )}

          {openProject.detail.type === "cardBanner" && (
            <CardBannerSwiperType
              isDesktop={isDesktop}
              items={openProject.detail.items.map((item, index) => (
                <CardTypeBannerItem
                  key={index}
                  type="card"
                  {...(item.imgSrc !== undefined && { imgSrc: item.imgSrc })}
                  {...(item.videoSrc !== undefined && {
                    videoSrc: item.videoSrc,
                  })}
                  {...(item.title1 !== undefined && { title1: item.title1 })}
                  {...(item.subTitle !== undefined && {
                    subTitle: item.subTitle,
                  })}
                />
              ))}
            />
          )}
        </Modal>
      )}
    </S.ProjectsSection>
  );
};

export default memo(Projects);
