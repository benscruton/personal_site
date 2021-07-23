import Project from "../interfaces/Project";
import dinnerGetterSpotlight from "../img/dinnerGetterSpotlight.png";
import techIcons from "../img/techIcons";

const dinnerGetter: Project = {
  id: "dinnerGetter",
  title: {
    mainTitle: {
      text: "Dinner Getter",
      linkAddress: "/projects/dinnergetter"
    },
    subtitle: []
  },
  description: [],
  pitch: [
    "Not sure what you're doing for dinner tonight?  Already planned out every meal for the next two weeks?  Either way, Dinner Getter can help!",
    "One feature of the app helps users add items to a customizable, categorized shopping list, and then tap items on the list to cross them off.  Another helps match users with recipes based on ingredients that they already have in their pantry."
  ],
  spotlightMedia: {
    address: dinnerGetterSpotlight,
    altText: "Screenshot from Dinner Getter"
  },
  technologies: [
    techIcons.java,
    techIcons.javascript,
    techIcons.spring,
    techIcons.react,
    techIcons.nodejs,
    techIcons.auth0,
    techIcons.axios,
    techIcons.materialize,
    techIcons.html,
    techIcons.css,
  ]
};

dinnerGetter.description.push({text: "hello there"});

export default dinnerGetter;