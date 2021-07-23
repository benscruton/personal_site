import React from "react";
import Project from "../interfaces/Project";
import MediaBox from "./MediaBox";
import SeparatedList from "./SeparatedList";

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
        {project.title.mainTitle.text}
      </h1>

      {project.title.subtitle?
        <h3>
          <SeparatedList
            items={project.title.subtitle}
          />
        </h3>
        :
        <></>
      }

      {project.pitch.map( (para, idx) => 
        <p key={idx} className={styles.paragraph}>
          {para}
        </p>
      )}

      <MediaBox
        media={project.spotlightMedia}
        dimensions={{maxWidth: "400px", margin: "0 auto"}}
      />

      <hr className={styles.hr} />
    </>
  );
};

export default ProjectFound;