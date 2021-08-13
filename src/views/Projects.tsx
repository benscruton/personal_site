import React from "react";
import Box from "../components/Box";
import styles from "./Projects.module.css";
import CSS from "csstype";
import allProjects from "../projectInfo";

interface Props {
  windowWidth: number,
  darkMode: boolean
}

const Projects: React.FC<Props> = ({windowWidth, darkMode}) => {
  const projectBoxDimensions: CSS.Properties = {
    width: "25%",
    minWidth: `${Math.min(325, windowWidth - 25)}px`,
    maxWidth: "900px",
    margin: "0px 5px 15px",
  }

  return (
    <div>
      <h1 className={`${styles.title}${darkMode ? " light-text" : ""}`}>
        My projects:
      </h1>

      <div className={styles.outerflex}>

        {allProjects.map( (project, idx) =>
          <Box
            key={idx}
            title={project.title}
            paragraphs={project.pitch}
            dimensions={projectBoxDimensions}
            media={{
              address: project.spotlightMedia.address,
              altText: project.spotlightMedia.altText,
            }}
            footer={{
              titleText: "Technologies:",
              listOfMedia: project.technologies
            }}
            darkMode={darkMode}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;