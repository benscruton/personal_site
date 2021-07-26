import React from "react";
import { RouteComponentProps } from "@reach/router";
import styles from "./Home.module.css";
import photoAddr from "../img/photo_cropped.png";
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
    width: `${windowWidth - 20}px`,
    maxWidth: "400px",
    borderRadius: "25%",
    border: "10px solid #70A0AF",
    backgroundColor: "#70A0AF"
  };

  const textContainerDimensions: CSS.Properties = {
    width: `${windowWidth < 850? "100%" : `${windowWidth - 450}px`}`,
    maxWidth: "900px",
    display: "inline-block"
  };

  const textBoxDimensions: CSS.Properties = {
    textAlign: "left",
    padding: "5px 10px"
  };

  const paragraphContainerDimensions: CSS.Properties = {
    width: `${windowWidth < 850? "100%" : "90%"}`,
    maxWidth: "1350px",
    margin: "0 auto"
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>My name is Ben Scruton, and I am a full stack software developer.</h2>
      <div className={styles.flexaround}>
        <MediaBox
          media={photo}
          dimensions={photoDimensions}
          imageAdjustments={{borderRadius: "24%"}}
        />
        <div style={textContainerDimensions}>
          <h4 style={textBoxDimensions}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            As a Ph.D. candidate, I honed my skills as a learner and a creative thinker.   I have decided to redirect these skills into software development.  To this end, I have learned to build applications in a variety of languages, including JavaScript, Python, and Java, and I am excited to continue to learn and grow as a developer!
          </h4>
          <h4 style={textBoxDimensions}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I also believe that technology can be used to make the world a better, safer, more equitable place.  I am particularly interested in finding a way to use programming to help make a difference in people's everyday lives.
          </h4>
        </div>
      </div>

      <hr className={styles.hr} />

      <div
        className={styles.paracontainer}
        style={paragraphContainerDimensions}
      >
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          My relationship with software development began in middle school, when I started tinkering around with HTML.  By the time I was in high school, I had learned enough to put together a very simple website.  I was in a folk trio playing a few gigs a month, so I built a website to display information like upcoming events and contact info.  I also logged on periodically to update the events and keep it (at least mostly) up to date.  It was just a few static HTML pages that linked to one another in a logical way, but it was functional enough for what we needed at the time.
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ut! Possimus, explicabo aperiam tempora excepturi recusandae dicta esse quasi doloribus ut adipisci dolor, consectetur, placeat nesciunt debitis aut deserunt nihil.
        </p>
      </div>
    </div>
  );
}

export default Home;