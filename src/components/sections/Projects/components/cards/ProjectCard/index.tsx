import { memo } from "react";
import Img from "@/components/common/Img";
import Tag from "@/components/common/Tag";
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
        <S.ProjectThumbnail>
          <Img src={project.thumbnailUrl} alt={project.title} />
        </S.ProjectThumbnail>
      )}

      <S.ProjectCardBody>
        {/* <S.ProjectMeta>
          <span>{project.period}</span>
        </S.ProjectMeta> */}
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
        <S.ProjectDesc>{project.description}</S.ProjectDesc>
        <S.ProjectTags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.ProjectTags>
      </S.ProjectCardBody>
    </S.ProjectCard>
  );
};

export default memo(ProjectCard);
