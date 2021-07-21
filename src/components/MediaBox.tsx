import React from "react";
import Media from "../interfaces/Media";
import CSS from "csstype";
import styles from "./Box.module.css";

interface Props{
  media: Media,
  dimensions?: CSS.Properties
}

const MediaBox: React.FC<Props> = ({media, dimensions}) => {
  return (
    <div
      className={styles.mediabox}
      style={dimensions}
    >
      <img
        src={media.address}
        alt={media.altText}
        className={styles.media}
      />
    </div>
  );
}

export default MediaBox;