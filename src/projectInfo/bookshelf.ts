import Project from "../interfaces/Project";
import bookshelfSpotlight from "../img/bookshelfSpotlight.png";
import techIcons from "../img/techIcons";

const bookshelf: Project = {
  id: "bookshelf",
  title: {
    text: "Bookshelf",
    linkAddress: "/projects/bookshelf"
  },
  description: [],
  pitch: [
    "Inspired by a feature from the Chicago Public Library website, Bookshelf is an app that helps users keep track of books that they have read or that they are interested in.",
    "Users can create custom \"Shelves\" and add books to these shelves, or add other users as friends and recommend books to them!"
  ],
  spotlightMedia: {
    address: bookshelfSpotlight,
    altText: "Screenshot from Bookshelf"
  },
  technologies: [
    techIcons.python,
    techIcons.django,
    techIcons.bcrypt,
    techIcons.html,
    techIcons.css,
    techIcons.materialize
  ]
};

export default bookshelf;