import { memo, useState } from "react";
import { isDesktop } from "react-device-detect";
import { projects } from "@/data/projects";
import { workProjects } from "@/data/workProjects";
import { WorkProjectCategory } from "@/data/types";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import Modal from "@/components/common/Modal";
import Img from "@/components/common/Img";
import Video from "@/components/common/Video";
import Tag from "@/components/common/Tag";
import MainVisualBnrList from "@/components/sections/Projects/components/lists/MainVisualBnrList";
import CardBannerSwiperType from "@/components/sections/Projects/components/lists/CardBannerSwiperType";
import CardTypeBannerItem from "@/components/sections/Projects/components/items/CardTypeBannerItem";
import * as S from "./style";

const WORK_CATEGORIES: WorkProjectCategory[] = [
  "대규모 프로젝트",
  "주요 기능 개선",
  "마케팅 & 광고",
];

type ProjectTab = "portfolio" | "work";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("work");
  const [openWorkId, setOpenWorkId] = useState<number | null>(null);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const toggleWork = (id: number) => {
    setOpenWorkId((prev) => (prev === id ? null : id));
  };

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
              <S.ProjectCard
                key={project.id}
                $clickable={!!project.detail}
                onClick={() => project.detail && setOpenProjectId(project.id)}
              >
                {project.thumbnailUrl && (
                  <S.ProjectThumbnail>
                    <Img src={project.thumbnailUrl} alt={project.title} />
                  </S.ProjectThumbnail>
                )}
                <S.ProjectCardBody>
                  <S.ProjectTitle>{project.title}</S.ProjectTitle>
                  <S.ProjectDesc>{project.description}</S.ProjectDesc>
                  <S.ProjectTags>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </S.ProjectTags>
                </S.ProjectCardBody>
              </S.ProjectCard>
            ))}
          </S.PortfolioGrid>
        )}

        {activeTab === "work" && (
          <S.WorkList>
            {WORK_CATEGORIES.map((category) => {
              const categoryProjects = workProjects.filter(
                (p) => p.category === category,
              );
              if (categoryProjects.length === 0) return null;

              return (
                <S.WorkCategory key={category}>
                  <S.WorkCategoryTitle>{category}</S.WorkCategoryTitle>
                  {categoryProjects.map((project) => (
                    <S.WorkItem key={project.id}>
                      <S.WorkItemHeader
                        onClick={() => toggleWork(project.id)}
                        aria-expanded={openWorkId === project.id}
                      >
                        <S.WorkItemMeta>
                          <S.WorkItemTitle>{project.title}</S.WorkItemTitle>
                          <S.WorkItemPeriod>{project.period}</S.WorkItemPeriod>
                        </S.WorkItemMeta>
                        <S.WorkItemChevron $isOpen={openWorkId === project.id}>
                          ›
                        </S.WorkItemChevron>
                      </S.WorkItemHeader>

                      {openWorkId === project.id && (
                        <S.WorkItemBody>
                          <S.WorkSummary>{project.summary}</S.WorkSummary>

                          <S.WorkSubSection>
                            <S.WorkSubTitle>주요 작업</S.WorkSubTitle>
                            <S.WorkSubList>
                              {project.tasks.map((task, i) => (
                                <li key={i}>{task}</li>
                              ))}
                            </S.WorkSubList>
                          </S.WorkSubSection>

                          {project.achievements.length > 0 && (
                            <S.WorkSubSection>
                              <S.WorkSubTitle>성과 & 특이사항</S.WorkSubTitle>
                              <S.WorkSubList>
                                {project.achievements.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </S.WorkSubList>
                            </S.WorkSubSection>
                          )}

                          <S.WorkTags>
                            {project.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </S.WorkTags>
                        </S.WorkItemBody>
                      )}
                    </S.WorkItem>
                  ))}
                </S.WorkCategory>
              );
            })}
          </S.WorkList>
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
