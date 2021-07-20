import Project from "../interfaces/Project";
import bookshelfSpotlight from "../../img/bookshelfSpotlight.png";

const bookshelf: Project = {
  id: "bookshelf",
  title: {
    text: "Bookshelf",
    linkAddress: "/projects/bookshelf"
  },
  description: [],
  pitch: [
    "What do you know, I just finished a book today, I should add to it",
    "Then I could add the Joy Williams one after",
    "That'd be cool ya?"
  ],
  spotlightMedia: {
    address: bookshelfSpotlight,
    altText: "Screenshot from Bookshelf"
  }
};

export default bookshelf;