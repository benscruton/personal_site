import React from "react";
import { RouteComponentProps } from "@reach/router";
import logo from "../logo.svg";

declare module ".svg";

interface Props {
  path: RouteComponentProps
}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <h1>Home page woo</h1>
      <p>here's some stuff</p>
      <img
        src={logo}
        alt="The React logo"
        style={{height: "150px"}}
      />
    </div>
  );
}

export default Home;