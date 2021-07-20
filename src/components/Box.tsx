import React from "react";
import styles from "./Box.module.css";
import CSS from "csstype";
import { Link } from "@reach/router";

interface Media{
  address: string,
  altText: string,
  height?: string,
  width?: string
}

interface Props {
  title?: string,
  titleLink?: string,
  media?: Media,
  paragraphs?: string[],
  height?: string,
  minHeight?: string,
  maxHeight?: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string,
}

const Box: React.FC<Props> = ({title, titleLink, media, paragraphs, height, minHeight, maxHeight, width, minWidth, maxWidth}) => {

  const boxStyle: CSS.Properties = {height, minHeight, maxHeight, width, minWidth, maxWidth};

  return (
    <div className={styles.wrapper} style={boxStyle}>
      {title? 
        titleLink?
          <Link to={titleLink}>
            <h2 className={styles.title}>{title}</h2>
          </Link>
          :
          <h2 className={styles.title}>{title}</h2>
        :
        <></>
      }

      {media?
        <img
          src={media.address}
          alt={media.altText}
          height={media.height}
          width={media.width}
        />
        :
        <></>
      }

      {paragraphs && paragraphs.length? 
        paragraphs.map( (para, idx) => 
          <p key={idx}>{para}</p>
        )
        :
        <></>
      }
    </div>
  );
}

export default Box;