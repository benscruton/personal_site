import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import Project from "../components/interfaces/Project";
import allProjects from "../components/projectInfo";
import styles from "./ProjectDisplay.module.css";

interface Props extends RouteComponentProps{
  id?: string
}

const ProjectDisplay: React.FC<Props> = ({id}) => {
  let findThisOne: Project[] = allProjects.filter(project => project.id === id);

  let project: Project = findThisOne[0];
  return (
    <>
      {findThisOne.length?
        <h1>{project.title.text}</h1>

        :
        <>
          <p>Sorry, I'm not familiar with a project called "{id}"!</p>
          <p>
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