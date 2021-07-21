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
    "The core concept is the the user's Shelves: users are assigned four shelves upon joining, and they can add, edit, and remove custom shelves as well.  Users can find books by searching for them in the database, or by adding their own.  Then, they can add those books to any of their shelves, or add them to their friends' \"Recommended\" shelf."
  ],
  spotlightMedia: {
    address: bookshelfSpotlight,
    altText: "Screenshot from Bookshelf"
  },
  technologies: [
    techIcons.python,
    techIcons.django
  ]
};

export default bookshelf;