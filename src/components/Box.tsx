import React from "react";
import styles from "./Box.module.css";
import CSS from "csstype";
import { Link } from "@reach/router";
import Media from "../interfaces/Media";
import Title from "../interfaces/Title";
import BoxFooter from "../interfaces/BoxFooter";

interface Props {
  title?: Title,
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
        title.linkAddress?
          <Link to={title.linkAddress}>
            <h2 className={styles.title}>{title.text}</h2>
          </Link>
          :
          <h2 className={styles.title}>{title.text}</h2>
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
          <h3 className={styles.footertitle}>
            {footer.titleText}
          </h3>
          
        </>
        :
        <></>
      }
    </div>
  );
}

export default Box;