import Media from "./Media";
import ProjectDescriptor from "./ProjectDescriptor";
import Title from "./Title";

interface Project{
  id: string,
  title: Title,
  description: ProjectDescriptor[],
  pitch: string[],
  spotlightMedia: Media,
  technologies?: Media[]
}

export default Project;