import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import Project from "../interfaces/Project";
import allProjects from "../projectInfo";
import styles from "./ProjectDisplay.module.css";

interface Props extends RouteComponentProps{
  id?: string
}

const ProjectDisplay: React.FC<Props> = ({id}) => {
  let findThisOne: Project[] = allProjects.filter(project => project.id === id);
  let project: Project | null = (findThisOne.length? findThisOne[0] : null);

  return (
    <>
      {project?
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
        :
        <>
          <h1 className={styles.center}>
            {id? id[0].toUpperCase() + id.substring(1) : ""}
          </h1>
          <p className={styles.center}>
            Sorry, I'm not familiar with a project called "{id}"!
          </p>
          <p className={styles.center}>
            <Link to="/projects" className={styles.link}>
              Return to projects page
            </Link>
          </p>
        </>
      }
    </>
  );
}

export default ProjectDisplay;