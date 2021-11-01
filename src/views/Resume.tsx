import React, { useState } from "react";
import resume from "../img/pdfs/Scruton_Benjamin_resume.pdf";
import styles from "./Resume.module.css";

interface Props {
  windowWidth: number
  darkMode: boolean,
}

const About: React.FC<Props> = ({windowWidth, darkMode}) => {

  const [viewEmbed, setViewEmbed] = useState(false);
  const [viewMobileWarning, setViewMobileWarning] = useState(true);

  const toggleEmbed = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setViewEmbed(!viewEmbed);
    setViewMobileWarning(false);
  }

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
      <hr className={styles.rule}/>

      <p className={viewEmbed ? styles.resemblelink : styles.mainlink}>
        <a href="/resume" onClick={toggleEmbed}>
          Click to {viewEmbed ? "hide" : "view"} embedded pdf
        </a>
      </p>
      <br />

      {viewMobileWarning? 
        <p className={darkMode ? "light-text" : ""}>
          Note: embeds may not work on mobile devices
        </p>
        :
        <></>
      }

      {viewEmbed ?
        <embed
          src={resume}
          width={`${resumeWidth}px`}
          height="1125px"
        />
        :
        <></>
      }

    </div>
  );
}

export default About;