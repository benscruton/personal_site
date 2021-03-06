import React from "react";
import Media from "../interfaces/Media";
import CSS from "csstype";
import styles from "./Box.module.css";

interface Props{
  media: Media,
  dimensions?: CSS.Properties,
  imageAdjustments?: CSS.Properties,
  darkMode?: boolean
}

const MediaBox: React.FC<Props> = ({media, dimensions, imageAdjustments, darkMode}) => {
  return (
    <div
      className={darkMode ? styles.mediaboxdark : styles.mediabox}
      style={dimensions}
    >
      {media.videoType?
        <video
          controls
          className={styles.media}
          style={imageAdjustments}
        >
          <source src={media.address} type={media.videoType} />
        </video>
        :
        <img
          src={media.address}
          alt={media.altText}
          className={styles.media}
          style={imageAdjustments}
        />
      }
    </div>
  );
}

export default MediaBox;