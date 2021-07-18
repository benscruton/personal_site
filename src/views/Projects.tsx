import { RouteComponentProps } from "@reach/router";
import React from "react";

interface Props {
  path: RouteComponentProps
}

const Projects: React.FC<Props> = () => {
  return (
    <div>
      <h1>Here are some of my projects:</h1>
      <p>Chess Roulette</p>
      <p>Dinner Getter</p>
      <p>Bookshelf</p>
    </div>
  );
}

export default Projects;