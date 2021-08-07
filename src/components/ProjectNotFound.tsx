import React from "react";
import { Link } from "@reach/router";

interface Props{
  id: string | undefined,
  styles: {
    readonly [key: string]: string;
  },
  darkMode: boolean
}

const ProjectNotFound: React.FC<Props> = ({id, styles, darkMode}) => {
  const projectName: string = id? id[0].toUpperCase() + id.substring(1) : "";

  return (
    <>
      <h1 className={`${styles.center}${darkMode ? " light-text" : ""}`}>
        {projectName}
      </h1>
      <p className={`${styles.center}${darkMode ? " light-text" : ""}`}>
        Sorry, I'm not familiar with a project called "{projectName}"!
      </p>
      <p className={styles.center}>
        <Link to="/projects" className={styles.link}>
          Return to projects page
        </Link>
      </p>
    </>
  );
}

export default ProjectNotFound;