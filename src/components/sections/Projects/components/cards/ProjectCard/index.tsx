import { memo } from "react";
import Img from "@/components/common/Img";
import { Project } from "@/data/types";
import * as S from "./style";

interface IProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

const ProjectCard = ({ project, className, onClick }: IProps) => {
  const isClickable = typeof onClick === "function";

  return (
    <S.ProjectCard
      as={isClickable ? "button" : "article"}
      type={isClickable ? "button" : undefined}
      className={className}
      $clickable={isClickable}
      onClick={onClick}
    >
      {project.thumbnailUrl && (
        <S.ProjectThumbnailWrap>
          <S.ProjectThumbnail>
            <Img src={project.thumbnailUrl} alt={project.title} />
          </S.ProjectThumbnail>
          <S.ProjectTags>
            {project.tags.map((tag) => (
              <S.ProjectTag key={tag}>{tag}</S.ProjectTag>
            ))}
          </S.ProjectTags>
        </S.ProjectThumbnailWrap>
      )}

      <S.ProjectCardBody>
        {/* <S.ProjectMeta>
          <span>{project.period}</span>
        </S.ProjectMeta> */}
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
        <S.ProjectDesc>{project.description}</S.ProjectDesc>
      </S.ProjectCardBody>
    </S.ProjectCard>
  );
};

export default memo(ProjectCard);
