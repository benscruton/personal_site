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
  footer?: BoxFooter
}

const Box: React.FC<Props> = ({title, introText, media, paragraphs, dimensions, footer}) => {

  return (
    <div className={styles.wrapper} style={dimensions}>
      {title? 
        title.mainTitle.linkAddress?
          <h2 className={styles.title}>
            <Link to={title.mainTitle.linkAddress}>
            {title.mainTitle.text}
            </Link>
          </h2>
          :
          <h2 className={styles.title}>{title.mainTitle.text}</h2>
        :
        <></>
      }

      {title && title.subtitle && title.subtitle.length?
        <p className={styles.subtitles}>
          <SeparatedList
            items={title.subtitle}
          />
        </p>
        :
        <></>
      }

      {introText?
        <>
          {introText.map( (para, idx) => 
            <p key={idx} className={styles.paragraph}>
              {para}
            </p>
          )}
          <br />
        </>
        :
        <></>
      }

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

      {paragraphs && paragraphs.length? 
        paragraphs.map( (para, idx) => 
          <p key={idx} className={styles.paragraph}>
            {para}
          </p>
        )
        :
        <></>
      }

      {footer?
        <>
          {footer.titleText?
            <h3 className={styles.footertitle}>
              {footer.titleText}
            </h3>
            : 
            <></>
          }
          
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
                  <p className={styles.imghovertext}>
                    {med.altText}
                  </p>
                </div>
              )}
            </div>
            :
            <></>
          }
            
        </>
        :
        <></>
      }
    </div>
  );
}

export default Box;