import Project from "../interfaces/Project";
import bookshelfSpotlight from "../img/bookshelfSpotlight.png";
import techIcons from "../img/techIcons";
import demoImages from "../img/projectDemos/bookshelf";

const bookshelf: Project = {
  id: "bookshelf",
  title: {
    mainTitle: {
      text: "Bookshelf",
      linkAddress: "/projects/bookshelf"
    },
    subtitle: []
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

bookshelf.description.push({
  text: "When a user first navigates to the site, they will be greeted with this login page.  Users who have not yet joined can register for a new account, or returning users can log in using either their email or their username.",
  media: demoImages.login
});

bookshelf.description.push({
  text: "When a new user joins, they are automatically assigned four shelves: \"Reading\", \"To Read\", \"Finished\", and \"Recommended\".",
  media: demoImages.recommend
});

bookshelf.description.push({
  text: "This is what your friends' profiles look like, laiseuhc aliseuhcasieuhc alisuehcalis euhclaiseuhc laiseuhc laiseuhc laisuehc lasieuhc lasieuhc laseiuch alsieuc halseiuc h aseuc alseic galsieuc glaseiuygc akseuygc aseuc hlaseiucg aseuycg aselc gasekjcyg asueygc aseyg asecyg akesuygc aseuygc asecygasecuyaseg iuc ",
  media: demoImages.friendProfile
});

bookshelf.description.push({
  text: "Adding a book",
});



export default bookshelf;