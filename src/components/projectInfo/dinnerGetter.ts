import Project from "../interfaces/Project";
import dinnerGetterSpotlight from "../../img/dinnerGetterSpotlight.png";

const dinnerGetter: Project = {
  id: "dinnerGetter",
  title: {
    text: "Dinner Getter",
    linkAddress: "/projects/dinnerGetter"
  },
  description: [],
  pitch: [
    "It's like java and stuff but it's also React",
    "pretty cool amirite?"
  ],
  spotlightMedia: {
    address: dinnerGetterSpotlight,
    altText: "Screenshot from Dinner Getter"
  }
};

export default dinnerGetter;