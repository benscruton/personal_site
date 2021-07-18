import { RouteComponentProps } from "@reach/router";
import CSS from "csstype";
import React from "react";

interface Props {
  path: RouteComponentProps
}

const boxStyle: CSS.Properties = {
  height: "200px",
  width: "120px",
  backgroundColor: "white",
  margin: "0 auto",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  border: "1px solid black",
  borderRadius: "5px"
}

const About: React.FC<Props> = () => {
  return (
    <div>
      <h1>About</h1>
      <p>some more words go in this part</p>
      <div style={boxStyle}>
        hello
      </div>
    </div>
  );
}

export default About;