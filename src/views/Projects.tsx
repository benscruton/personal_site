import { RouteComponentProps } from "@reach/router";
import React from "react";
import Box from "../components/Box";
import styles from "./Projects.module.css";

interface Props {
  path: RouteComponentProps
}

const Projects: React.FC<Props> = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Here are some of my projects:
      </h1>

      <div className={styles.outerflex}>
        <Box
          title="Chess Roulette"
          titleLink="/about"
          width="25%"
          minWidth="250px"
          paragraphs={[
            "I built an app that lets you play chess and stuff",
            "Eventually it'll have variants too but it doesn't yet"
          ]}
        />
        
        <Box
          title="Dinner Getter"
          width="25%"
          minWidth="250px"
          paragraphs={[
            "It's like java and stuff but it's also React",
            "pretty cool amirite?"
          ]}
        />
        
        <Box
          title="Bookshelf"
          width="25%"
          minWidth="250px"
          paragraphs={[
            "What do you know, I just finished a book today, I should add to it",
            "Then I could add the Joy Williams one after",
            "That'd be cool ya?"
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;