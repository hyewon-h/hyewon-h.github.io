import { memo, useState } from "react";
import { projects } from "@/data/projects";
import { workProjects } from "@/data/workProjects";
import { WorkProjectCategory } from "@/data/types";
import * as S from "./style";

const WORK_CATEGORIES: WorkProjectCategory[] = [
  "대규모 프로젝트",
  "주요 기능 개선",
  "마케팅 & 광고",
];

type ProjectTab = "portfolio" | "work";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("portfolio");
  const [openWorkId, setOpenWorkId] = useState<number | null>(null);

  const toggleWork = (id: number) => {
    setOpenWorkId((prev) => (prev === id ? null : id));
  };

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsInner>
        <S.SectionLabel>Projects</S.SectionLabel>
        <S.SectionTitle>프로젝트</S.SectionTitle>

        <S.TabBar>
          <S.TabButton
            $isActive={activeTab === "portfolio"}
            onClick={() => setActiveTab("portfolio")}
          >
            포트폴리오
          </S.TabButton>
          <S.TabButton
            $isActive={activeTab === "work"}
            onClick={() => setActiveTab("work")}
          >
            회사 프로젝트
          </S.TabButton>
        </S.TabBar>

        {activeTab === "portfolio" && (
          <S.PortfolioGrid>
            {projects.length === 0 ? (
              <S.EmptyState>
                <S.EmptyIcon>🚧</S.EmptyIcon>
                <S.EmptyText>포트폴리오 프로젝트를 준비 중입니다.</S.EmptyText>
              </S.EmptyState>
            ) : (
              projects.map((project) => (
                <S.ProjectCard key={project.id}>
                  {project.thumbnailUrl && (
                    <S.ProjectThumbnail
                      src={project.thumbnailUrl}
                      alt={project.title}
                    />
                  )}
                  <S.ProjectCardBody>
                    <S.ProjectTitle>{project.title}</S.ProjectTitle>
                    <S.ProjectDesc>{project.description}</S.ProjectDesc>
                    <S.ProjectTags>
                      {project.tags.map((tag) => (
                        <S.Tag key={tag}>{tag}</S.Tag>
                      ))}
                    </S.ProjectTags>
                    <S.ProjectLinks>
                      {project.githubUrl && (
                        <S.ProjectLink
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </S.ProjectLink>
                      )}
                      {project.siteUrl && (
                        <S.ProjectLink
                          href={project.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                        </S.ProjectLink>
                      )}
                    </S.ProjectLinks>
                  </S.ProjectCardBody>
                </S.ProjectCard>
              ))
            )}
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
                              <S.Tag key={tag}>{tag}</S.Tag>
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
    </S.ProjectsSection>
  );
};

export default memo(Projects);
