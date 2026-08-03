import { memo, useMemo } from "react";
import Tag from "@/components/common/Tag";
import { WorkProject, WorkProjectCategory } from "@/data/types";
import * as S from "./style";

interface IProps {
  items: WorkProject[];
  categories: WorkProjectCategory[];
}

const ProjectHistoryList = ({ items, categories }: IProps) => {
  const groupedItems = useMemo(
    () =>
      categories
        .map((category) => ({
          category,
          items: items.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length > 0),
    [categories, items],
  );

  return (
    <S.ProjectHistoryList>
      {groupedItems.map((group) => (
        <S.CategorySection key={group.category}>
          <S.CategoryTitle>{group.category}</S.CategoryTitle>

          <S.HistoryGroup>
            {group.items.map((project) => (
              <S.HistoryItem key={project.id}>
                <S.HistoryAside>
                  <S.Period>{project.period}</S.Period>
                </S.HistoryAside>

                <S.HistoryContent>
                  <S.TitleRow>
                    <S.Title>{project.title}</S.Title>
                  </S.TitleRow>

                  <S.Summary>{project.summary}</S.Summary>

                  <S.Section>
                    <S.SectionTitle>주요 작업</S.SectionTitle>
                    <S.BulletList>
                      {project.tasks.map((task, index) => (
                        <li key={`${project.id}-task-${index}`}>{task}</li>
                      ))}
                    </S.BulletList>
                  </S.Section>

                  {project.achievements.length > 0 && (
                    <S.Section>
                      <S.SectionTitle>성과 & 특이사항</S.SectionTitle>
                      <S.BulletList>
                        {project.achievements.map((item, index) => (
                          <li key={`${project.id}-achievement-${index}`}>
                            {item}
                          </li>
                        ))}
                      </S.BulletList>
                    </S.Section>
                  )}

                  <S.TagRow>
                    {project.tags.map((tag) => (
                      <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                    ))}
                  </S.TagRow>
                </S.HistoryContent>
              </S.HistoryItem>
            ))}
          </S.HistoryGroup>
        </S.CategorySection>
      ))}
    </S.ProjectHistoryList>
  );
};

export default memo(ProjectHistoryList);
