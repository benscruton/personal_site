import Project from "../interfaces/Project";
import bookshelfSpotlight from "../img/bookshelfSpotlight.png";
import techIcons from "../img/techIcons";
import demoImages from "../img/projectDemos/bookshelf";

const bookshelf: Project = {
  id: "bookshelf",
  localAddress: "/projects/bookshelf",
  title: {
    mainTitle: {
      text: "Bookshelf",
    },
    subtitle: [
      {
        text: "Description",
        linkAddress: "/projects/bookshelf",
      },
      {
        text: "GitHub",
        linkAddress: "https://github.com/benscruton/books_project",
        external: true
      }
    ]
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
  text: "Upon first navigating to the site, users will be greeted with this login page.  New users can register for an account, or returning users can log in with their email or username.  Passwords are stored securely using bcrypt hashing.",
  media: demoImages.login
});

bookshelf.description.push({
  text: "All pages on the site are size responsive, so it can be comfortably used on devices with a range of widths.  This includes a collapsing menu for mobile (or other narrow-screened) users.",
  media: demoImages.responsive
});

bookshelf.description.push({
  text: "When a new user joins, they are automatically assigned four shelves: \"Reading\", \"To Read\", \"Finished\", and \"Recommended\".",
  media: demoImages.newUserShelves
});

bookshelf.description.push({
  text: "In addition to these four shelves, users can add their own custom shelves.  Once added, these custom shelves can also be renamed or deleted.",
  media: demoImages.customizeShelves
});

bookshelf.description.push({
  text: "Users can search for books and add them to their shelves.  Searches can be conducted based on the title, author's first or last name, ISBN, or any combination of these.",
  media: demoImages.addBookToShelf
});

bookshelf.description.push({
  text: "If the book doesn't already exist in the database, there is a form that allows users to add a new book.",
  media: demoImages.addBookToDatabase
});

bookshelf.description.push({
  text: "Users can also add other users as friends.  The \"Friends\" link at the top directs the user to this page, where they can view friends they have already added, search among their friends, and also search for users to add as friends (by first name, last name, username, email, or any combination).",
  media: demoImages.friendsPage
});

bookshelf.description.push({
  text: "Each user also has their own profile page, where they can see their shelves, friends, and wall all in one place.",
  media: demoImages.yourProfile
});

bookshelf.description.push({
  text: "When a user visits the profile of a user who is not already a friend, they can see some limited information: their name, and any mutual friends.",
  media: demoImages.notFriendProfile
});

bookshelf.description.push({
  text: "When a user receives a friend request from another user, a notification will appear at the top left of any page they visit.  These can be accepted or ignored at any time.",
  media: demoImages.friendRequests
});

bookshelf.description.push({
  text: "Once a user's friend request has been accepted, they can see all of that user's information on their profile page, including their shelves and their wall.",
  media: demoImages.friendProfile
});

bookshelf.description.push({
  text: "In addition to adding books to their own shelves, users can also add books to the \"Recommended\" shelf of any of their friends.",
  media: demoImages.recommend
});

bookshelf.description.push({
  text: "Each user also has a wall, where they can exchange comments with their friends.  Users have the option to delete their posts and comments, as well as any posts or comments on their own wall (even from other users).",
  media: demoImages.wall
});

bookshelf.description.push({
  text: "After a user adds a book to their \"Finished\" shelf, they will receive a prompt asking if they'd like to post about it to their wall.  This includes a brief stock message, which the user can edit as they like or post as-is.",
  media: demoImages.finishedPrompt
});



export default bookshelf;