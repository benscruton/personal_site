import Project from "../interfaces/Project";
import dinnerGetterSpotlight from "../img/dinnerGetterSpotlight.png";
import techIcons from "../img/techIcons";

const dinnerGetter: Project = {
  id: "dinnerGetter",
  title: {
    text: "Dinner Getter",
    linkAddress: "/projects/dinnerGetter"
  },
  description: [],
  pitch: [
    "Not sure what you're doing for dinner tonight?  Already planned out every meal for the next two weeks?  Either way, Dinner Getter can help!",
    "One portion of the app focuses on grocery shopping: users can create a categorized list of items you need, and reorganize their lists with drag-and-drop functionality.  Then, once at the store, flip the switch to enter \"Store Mode\" and simply tap items on the same list to cross them off.",
    "The other side of the app allows users to enter ingredients they already have, then searches for recipes that call for these ingredients."
  ],
  spotlightMedia: {
    address: dinnerGetterSpotlight,
    altText: "Screenshot from Dinner Getter"
  },
  technologies: [
    techIcons.java,
    techIcons.javascript,
    techIcons.react,
    techIcons.nodejs,
    techIcons.materialize
  ]
};

dinnerGetter.description.push({text: "hello there"});

export default dinnerGetter;