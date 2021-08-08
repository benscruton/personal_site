import { RouteComponentProps } from "@reach/router";
import React from "react";
import resume from "../img/pdfs/Scruton_Benjamin_resume.pdf";
import styles from "./Resume.module.css";

interface Props {
  path: RouteComponentProps,
  windowWidth: number
  darkMode: boolean,
}

const About: React.FC<Props> = ({windowWidth, darkMode}) => {

  const resumeWidth: number = Math.min(windowWidth, 900) - 50;

  return (
    <div>
      {/* <h1>Résumé:</h1> */}
      <p className={styles.linktext}>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab
        </a>
        <span className={darkMode ? "light-text" : ""}>
          &nbsp; | &nbsp;
        </span>
        <a
          href={resume}
          download
        >
          Download
        </a> 
      </p>
      <embed
        src={resume}
        width={`${resumeWidth}px`}
        height="1125px"
      />
    </div>
  );
}

export default About;