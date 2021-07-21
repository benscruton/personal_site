import { RouteComponentProps } from "@reach/router";
import React from "react";
import Box from "../components/Box";
import styles from "./Projects.module.css";
import CSS from "csstype";
import allProjects from "../projectInfo";
import Project from "../interfaces/Project";

interface Props {
  path: RouteComponentProps
}

const Projects: React.FC<Props> = () => {
  const projectBoxDimensions: CSS.Properties = {
    width: "25%",
    minWidth: "275px",
    margin: "0px 5px 10px",
  }

  return (
    <div>
      <h1 className={styles.title}>
        Projects I've worked on:
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
            />
          )
        }
      </div>
    </div>
  );
}

export default Projects;