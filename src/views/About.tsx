import { RouteComponentProps } from "@reach/router";
import CSS from "csstype";
import React from "react";
import Box from "../components/Box";

interface Props {
  path: RouteComponentProps
}



const boxStyle: CSS.Properties = {
  // height: "200px",
  // width: "120px",
  backgroundColor: "white",
  margin: "0 auto",
  boxShadow: "rgba(0, 0, 0, 0.4) 2px 4px 8px",
  // border: "1px solid black",
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
      <Box
        height="200px"
        width="50%"
        maxWidth="1000px"
        minWidth="999px"
        title="Hello there"
        paragraphs={["What's that over there?", "You feel sad."]}
      />
    </div>
  );
}

export default About;