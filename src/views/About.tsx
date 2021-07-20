import { RouteComponentProps } from "@reach/router";
import CSS from "csstype";
import React from "react";
import Box from "../components/Box";

interface Props {
  path: RouteComponentProps
}

const boxDimensions: CSS.Properties = {
  height: "200px",
  width: "50%",
  maxWidth: "1000px",
  minWidth: "100px"
}

const About: React.FC<Props> = () => {
  return (
    <div>
      <h1>About</h1>
      <p>some more words go in this part</p>
      <Box
        dimensions={boxDimensions}
        title={{text: "Hello there"}}
        paragraphs={["What's that over there?", "You feel sad."]}
      />
    </div>
  );
}

export default About;