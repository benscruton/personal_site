import React from "react";
import Project from "../interfaces/Project";
import MediaBox from "./MediaBox";
import SeparatedList from "./SeparatedList";
import CSS from "csstype";

interface Props{
  project: Project,
  styles: {
    readonly [key: string]: string;
  },
  windowWidth: number
}

const ProjectFound: React.FC<Props> = ({project, styles, windowWidth}) => {

  const demoMediaBoxStyle: CSS.Properties = {
    width: `${windowWidth > 850? "40%" : `${Math.min(windowWidth - 20, 400)}px`}`
  };

  const demoDescriptorTextStyle: CSS.Properties = {
    width: `${windowWidth > 850? "50%" : `${Math.min(windowWidth - 20, 600)}px`}`,
    margin: "15px 0",
    textAlign: "left"
  }

  return (
    <>
      <h1 className={styles.center}>
        {project.title.mainTitle.text}
      </h1>

      {project.title.subtitle?
        <h3>
          <SeparatedList
            items={project.title.subtitle}
          />
        </h3>
        :
        <></>
      }

      <MediaBox
        media={project.spotlightMedia}
        dimensions={{maxWidth: "400px", margin: "0 auto"}}
      />

      {project.pitch.map( (para, idx) => 
        <p key={idx} className={styles.paragraph}>
          {para}
        </p>
      )}

      <hr className={styles.hr} />

      {project.description.length ? 
        <h3>Project Features:</h3>
        :
        <></>
      }

      <div className={styles.descriptorcontainer}>
        {project.description.map( (desc, idx) =>
          <div
            key={idx}
            className={`${styles[`flexaround${idx % 2}`]} ${styles.descriptor}`}
          >
            <p
              style={desc.media? 
                demoDescriptorTextStyle
                :
                {...demoDescriptorTextStyle,
                  width: "90%"
                }
              }
            >
              {desc.text}
            </p>
            {desc.media?
              <MediaBox
                media={desc.media}
                dimensions={demoMediaBoxStyle}
              />
              :
              <></>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectFound;