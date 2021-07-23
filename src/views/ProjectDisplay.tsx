import React from "react";
import { RouteComponentProps } from "@reach/router";
import Project from "../interfaces/Project";
import ProjectNotFound from "../components/ProjectNotFound";
import ProjectFound from "../components/ProjectFound";
import allProjects from "../projectInfo";
import styles from "./ProjectDisplay.module.css";

interface Props extends RouteComponentProps{
  id?: string
}

const ProjectDisplay: React.FC<Props> = ({id}) => {

  const findThisOne: Project[] = allProjects.filter(proj => 
    id && proj.id.toLowerCase() === id.toLowerCase()
  );
  const project: Project | null = findThisOne[0] || null;

  return (
    <>
      {project?
        <>
          <ProjectFound
            styles={styles}
            project={project}
          />
        </>
        :
        <ProjectNotFound
          id={id}
          styles={styles}
        />
      }
    </>
  );
}

export default ProjectDisplay;