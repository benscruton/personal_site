import React from "react";
import { RouteComponentProps } from "@reach/router";
import styles from "./Home.module.css";
import photoAddr from "../img/photo_cropped.png";
import Box from "../components/Box";
import MediaBox from "../components/MediaBox";
import Media from "../interfaces/Media";
import CSS from "csstype";

declare module ".svg";

interface Props {
  path: RouteComponentProps,
  windowWidth: number
}

const Home: React.FC<Props> = ({windowWidth}) => {
  const photo: Media = {
    address: photoAddr,
    altText: "A photo of me"
  }

  const photoDimensions: CSS.Properties = {
    width: "40%",
    minWidth: `${Math.min(200, windowWidth - 20)}px`,
    maxWidth: "400px",
    borderRadius: "25%",
    border: "10px solid #70A0AF",
    backgroundColor: "#70A0AF"
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>My name is Ben Scruton, and I am a full stack web developer.</h2>
      <div className={styles.flexaround}>
        <MediaBox
          media={photo}
          dimensions={photoDimensions}
          imageAdjustments={{borderRadius: "25%"}}
        />
        <h3 className={styles.flexitem}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, qui. Labore, in id dolorem itaque at nostrum illum aspernatur suscipit esse aliquid officiis cupiditate explicabo dolores ipsum possimus minus mollitia?
        </h3>
      </div>
    </div>
  );
}

export default Home;