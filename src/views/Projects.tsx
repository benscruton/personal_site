import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
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
    minWidth: "275",
    margin: "0px 5px 10px",
  }

  // const [projectList, setProjectList] = useState<Project[]>([]);
  // const [loaded, setLoaded] = useState(false);
  // useEffect( () => {
  //   setProjectList(allProjects);
  //   setLoaded(true);
  // }, []);

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
                titleText: "Technologies:"
              }}
            />
          )
        }
{/*         
        <Box
          title={{text: "Chess Roulette", linkAddress: "/about"}}
          dimensions={projectBoxDimensions}
          paragraphs={[
            "I built an app that lets you play chess and stuff",
            "Eventually it'll have variants too but it doesn't yet"
          ]}
        />
        
        <Box
          title={{text: "Dinner Getter"}}
          dimensions={projectBoxDimensions}
          paragraphs={[
            "It's like java and stuff but it's also React",
            "pretty cool amirite?"
          ]}
        />
        
        <Box
          title={{text: "Bookshelf"}}
          dimensions={projectBoxDimensions}
          paragraphs={[
            "What do you know, I just finished a book today, I should add to it",
            "Then I could add the Joy Williams one after",
            "That'd be cool ya?"
          ]}
        /> */}
      </div>
    </div>
  );
}

export default Projects;