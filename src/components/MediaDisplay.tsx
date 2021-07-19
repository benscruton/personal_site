import React from "react";
import CSS from "csstype";
import styles from "./MediaDisplay.module.css";

interface Props{
  mediaAddress: string,
  altText: string,
  height?: string,
  minHeight?: string,
  maxHeight?: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string,
}

const MediaDisplay: React.FC<Props> = ({mediaAddress, altText, height, minHeight, maxHeight, width, minWidth, maxWidth}) => {

  const boxStyle: CSS.Properties = {
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth
  };
  const imgStyle: CSS.Properties = {
    maxHeight: height,
    maxWidth: width,
  };

  return (
    <div className={styles.wrapper} style={boxStyle}>
      <img
        src={mediaAddress}
        alt={altText}
        className={styles.image}
        style={imgStyle}
      />
    </div>
  );
}

export default MediaDisplay;