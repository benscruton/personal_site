import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import styles from "./Home.module.css";
import photoAddr from "../img/photo_cropped.png";
import darkPhotoAddr from "../img/photo_cropped_dark.png";
import MediaBox from "../components/MediaBox";
import Media from "../interfaces/Media";
import CSS from "csstype";

declare module ".svg";

interface Props {
  path: RouteComponentProps,
  windowWidth: number,
  darkMode: boolean
}

const Home: React.FC<Props> = ({windowWidth, darkMode}) => {
  const photo: Media = {
    address: darkMode ? darkPhotoAddr : photoAddr,
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
    textAlign: "justify",
    padding: "5px 10px"
  };

  const paragraphContainerDimensions: CSS.Properties = {
    width: `${windowWidth < 850? "100%" : "90%"}`,
    maxWidth: "1350px",
    margin: "0 auto"
  };

  return (
    <div>
      <h1 className={darkMode ? "light-text" : ""}>
        Welcome!
      </h1>
      <h2 className={darkMode ? "light-text" : ""}>
        My name is Ben Scruton, and I am a full stack software developer.
      </h2>
      <div className={styles.flexaround}>
        <MediaBox
          media={photo}
          dimensions={photoDimensions}
          imageAdjustments={{borderRadius: "24%"}}
          darkMode={darkMode}
        />
        <div style={textContainerDimensions}>
          <h4 style={textBoxDimensions} className={darkMode ? "light-text" : ""}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            As a Ph.D. candidate, I built experience as a learner and as a creative thinker.  Recently, I have decided to redirect these skills into software development.  To this end, I have learned to build applications in a variety of languages, including JavaScript, Python, and Java, and I am excited to continue to learn and grow as a developer!
          </h4>
          <h4 style={textBoxDimensions} className={darkMode ? "light-text" : ""}>
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
        <h3 className={darkMode ? "light-text" : ""}>
          Early experiences with programming
        </h3>
        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          My relationship with development began in middle school, when I started tinkering around with HTML.  By the time I was in high school, I had learned enough to put together a very simple website.  I was in a folk trio playing a few gigs a month, so I built a website to display information like upcoming events and contact info.  I also logged on periodically to update the events and keep it (at least mostly) up to date.  It was just a few static HTML pages that linked to one another in a logical way, but it was functional enough for what we needed at the time.
        </p>

        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          In college, I focused primarily on other subject areas as a major in History of Art and Near Eastern Languages & Civilizations, but I maintained an interest in programming.  I took a semester-long introduction to computer programming course, where I learned the basics of Java.  I also continued to do some basic website maintenance: I played and sang in a folk group in college as well, and I was tasked with making periodic updates to the group's site, which was hosted on Heroku.  Between the programming course and making updates to the website, I got an introduction to navigating my files using a command line interface, and also found myself working with code a bit more intricate than simple HTML.
        </p>

        <h3 className={darkMode ? "light-text" : ""}>
          Graduate School and Beyond
        </h3>

        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          As a graduate student, I my focus was not directly on tech and programming, but nonetheless several of the skills I was building have applications in software development.  My field was Near Eastern Languages & Civilizations with a focus on Assyriology (the study of ancient Mesopotamia), which invovled a lot of study of ancient languages.  I spent the most time with Akkadian and Sumerian, but also took two semesters of Hebrew, participated in a small student-led group studying Hittite, and attended group workshops on both the Hittite and Hurrian languages in led by a visiting professor.  There is a lot of overlap between working with written languages and working with programming languages: the grammar, syntax, and vocabulary of a written language are in many ways parallel to the syntax and function names / keywords of programming languages.  The ability to work in multiple languages, quickly identifying what language you are reading, and understanding the patterns unique to that language are important to both programming and Assyriology.
        </p>

        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          After leaving graduate school, I worked in the I.T. department at the Chicago Board of Elections during both the March primary and November general 2020 elections.  In this role, I got the opportunity to work much more directly with technology.  I was working with computers, networking equipment, and various other pieces of election technology; I was also working alongside people with programming backgrounds, and the work they were doing quite appealed to me.
        </p>

        <h3 className={darkMode ? "light-text" : ""}>
          Full-stack Development
        </h3>

        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Having enjoyed both dabbling in mostly self-taught web management and working in technology, I decided to take the next step and formally learn to write my own applications from the ground up.  At the start of 2021, I committed to learning full stack development at Coding Dojo.  As a student there, spent an intensive 14 weeks working on both front end and back end development, using a variety of languages and frameworks.
        </p>

        <p className={darkMode ? "light-text" : ""}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Since graduating in April, I have continued to develop the projects that I started with my cohort-mates at Coding Dojo.  Recently I have focused primarily on <Link to="/projects/chessroulette">Chess Roulette</Link>, a MERN-stack application which is currently fully functional for playing chess with standard rules.  My next step on that project is to reorganize the code a bit and introduce variant rule sets.
        </p>

      </div>
    </div>
  );
}

export default Home;