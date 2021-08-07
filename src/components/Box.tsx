import React from "react";
import styles from "./Box.module.css";
import CSS from "csstype";
import { Link } from "@reach/router";
import Media from "../interfaces/Media";
import BoxTitle from "../interfaces/BoxTitle";
import BoxFooter from "../interfaces/BoxFooter";
import SeparatedList from "./SeparatedList";

interface Props {
  title?: BoxTitle,
  introText?: string[],
  media?: Media,
  paragraphs?: string[],
  dimensions?: CSS.Properties,
  footer?: BoxFooter,
  darkMode?: boolean
}

const Box: React.FC<Props> = ({title, introText, media, paragraphs, dimensions, footer, darkMode}) => {

  return (
    <div className={darkMode ? styles.wrapperdark : styles.wrapper} style={dimensions}>

      {/* TITLE */}
      {title? 
        title.mainTitle.linkAddress?
          <h2 className={darkMode ? styles.titledark : styles.title}>
            <Link to={title.mainTitle.linkAddress}>
            {title.mainTitle.text}
            </Link>
          </h2>
          :
          <h2 className={darkMode ? styles.titledark : styles.title}>
            {title.mainTitle.text}
          </h2>
        :
        <></>
      }

      {/* SUBTITLE */}
      {title && title.subtitle && title.subtitle.length?
        <p className={darkMode ? styles.subtitlesdark : styles.subtitles}>
          <SeparatedList
            items={title.subtitle}
          />
        </p>
        :
        <></>
      }

      {/* PRE-IMAGE TEXT */}
      {introText?
        <>
          {introText.map( (para, idx) => 
            <p
              key={idx}
              className={`${styles.paragraph}${darkMode ? " light-text" : ""}`}
            >
              {para}
            </p>
          )}
          <br />
        </>
        :
        <></>
      }

      {/* IMAGE */}
      {media?
        <div className={styles.mediabox}>
          <img
            src={media.address}
            alt={media.altText}
            className={styles.media}
          />
        </div>
        :
        <></>
      }

      {/* POST-IMAGE TEXT */}
      {paragraphs && paragraphs.length? 
        paragraphs.map( (para, idx) => 
          <p 
            key={idx}
            className={`${styles.paragraph}${darkMode ? " light-text" : ""}`}
          >
            {para}
          </p>
        )
        :
        <></>
      }

      {/* FOOTER */}
      {footer?
        <>
          {footer.titleText?
            <h3 className={styles.footertitle}>
              {footer.titleText}
            </h3>
            : 
            <></>
          }
          
          <div className={darkMode ? styles.footerbodydark : styles.footerbody}>
            {footer.footerText && footer.footerText.length?
              footer.footerText.map( (para, idx) =>
                <p key={idx}>
                  {para}
                </p>
              )
              :
              <></>
            }

            {footer.listOfMedia && footer.listOfMedia.length?
              <div className={styles.mediadisplay}>
                {footer.listOfMedia.map( (med, idx) => 
                  <div className={styles.outerimghover} key={idx}>
                    <img
                      key={idx}
                      className={styles.displayitem}
                      src={med.address}
                      alt={med.altText}
                    />                
                    <p className={darkMode ? styles.imghovertextdark : styles.imghovertext}>
                      {med.altText}
                    </p>
                  </div>
                )}
              </div>
              :
              <></>
            }
          </div>
        </>
        :
        <></>
      }
    </div>
  );
}

export default Box;