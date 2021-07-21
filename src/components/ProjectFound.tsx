import React from "react";
import Project from "../interfaces/Project";

interface Props{
  project: Project,
  styles: {
    readonly [key: string]: string;
  }
}

const ProjectFound: React.FC<Props> = ({project, styles}) => {
  return (
    <>
      <h1 className={styles.center}>
        {project.title.text}
      </h1>

      {project.pitch.map( (para, idx) => 
        <p key={idx}>
          {para}
        </p>
      )}
    </>
  );
};

export default ProjectFound;