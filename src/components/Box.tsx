import React from "react";
import styles from "./Box.module.css";
import CSS from "csstype";

interface Props {
  title?: string,
  mediaAddress?: string,
  paragraphs?: string[],
  height?: string,
  minHeight?: string,
  maxHeight?: string,
  width?: string,
  minWidth?: string,
  maxWidth?: string,
}

const Box: React.FC<Props> = ({title, mediaAddress, paragraphs, height, minHeight, maxHeight, width, minWidth, maxWidth}) => {

  const boxStyle: CSS.Properties = {height, minHeight, maxHeight, width, minWidth, maxWidth};

  return (
    <div className={styles.wrapper} style={boxStyle}>
      {title? 
        <h2>{title}</h2>
        :
        <></>
      }

      {mediaAddress?
        <p>Link is {mediaAddress}</p>
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