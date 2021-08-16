import Media from "./Media";
import ProjectDescriptor from "./ProjectDescriptor";
import BoxTitle from "./BoxTitle";

interface Project{
  id: string,
  localAddress?: string,
  title: BoxTitle,
  description: ProjectDescriptor[],
  pitch: string[],
  spotlightMedia: Media,
  technologies?: Media[]
}

export default Project;