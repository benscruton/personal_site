import { RouteComponentProps } from "@reach/router";
import React from "react";

interface Props {
  path: RouteComponentProps
}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h1>Home page woo</h1>
      <p>here's some stuff</p>
    </div>
  );
}

export default Home;