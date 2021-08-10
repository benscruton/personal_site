import loginAddr from "./login.png";
import responsiveAddr from "./responsive_combined.webm";
import newUserShelvesAddr from "./new_user_shelves.png";
import customizeShelvesAddr from "./customize_shelves.webm";
import addBookToShelfAddr from "./add_book_to_shelf.webm";
import addBookToDatabaseAddr from "./add_book_to_database.png";
import friendsPageAddr from "./friends_page.png";
import yourProfileAddr from "./profile.png";
import notFriendProfileAddr from "./not_friend_profile.png";
import friendRequestsAddr from "./friend_requests.webm";
import friendProfileAddr from "./friend_profile.png";
import recommendAddr from "./recommend_to_friend.webm";
import wallAddr from "./wall.png";
import finishedPromptAddr from "./finished_prompt.png";
import removeBookAddr from "./remove_book.webm";
import searchUserAddr from "./search_user.webm";
import Media from "../../../interfaces/Media";

const login: Media = {
  address: loginAddr,
  altText: "Bookshelf login page"
};

const responsive: Media = {
  address: responsiveAddr,
  altText: "Demo of size responsiveness on login and profile pages, as well as responsive collapsing menu",
  videoType: "video/ogg"
};

const newUserShelves: Media = {
  address: newUserShelvesAddr,
  altText: "Automatically generated shelves: \"Reading,\" \"Finished\", \"To Read\", and \"Recommended\"" 
};

const customizeShelves: Media = {
  address: customizeShelvesAddr,
  altText: "Add, rename, and delete shelves",
  videoType: "video/webm"
};

const addBookToShelf: Media = {
  address: addBookToShelfAddr,
  altText: "Adding a book to a shelf",
  videoType: "video/ogg"
};

const addBookToDatabase: Media = {
  address: addBookToDatabaseAddr,
  altText: "Form for creating a new book to add to the database"
};

const friendsPage: Media = {
  address: friendsPageAddr,
  altText: "Screenshot of \"Friends\" page, showing friends as well as separate boxes to search among your friends and to search among all users"
};

const yourProfile: Media = {
  address: yourProfileAddr,
  altText: "Logged-in user's own profile"
};

const notFriendProfile: Media = {
  address: notFriendProfileAddr,
  altText: "Profile of a user who is not friends with the logged-in user"
};

const friendRequests: Media = {
  address: friendRequestsAddr,
  altText: "Friend requests show up in the top left corner.  They can be accepted or ignored at any time.",
  videoType: "video/ogg"
};

const friendProfile: Media = {
  address: friendProfileAddr,
  altText: "Profile of a user who is friends with the logged-in user"
};

const recommend: Media = {
  address: recommendAddr,
  altText: "Recommend a book to a friend",
  videoType: "video/webm"
};

const wall: Media = {
  address: wallAddr,
  altText: "A user's wall, with one post and two comments"
};

const finishedPrompt: Media = {
  address: finishedPromptAddr,
  altText: "Prompt to post about finishing a book"
};

const removeBook: Media = {
  address: removeBookAddr,
  altText: "Removing a book from your shelf",
  videoType: "video/webm"
};

const searchUser: Media = {
  address: searchUserAddr,
  altText: "Search for another user",
  videoType: "video/webm"
};

const images: {readonly [key: string]: Media} = {
  login,
  responsive,
  newUserShelves,
  addBookToShelf,
  customizeShelves,
  addBookToDatabase,
  friendsPage,
  yourProfile,
  notFriendProfile,
  friendRequests,
  friendProfile,
  recommend,
  wall,
  finishedPrompt,
  removeBook,
  searchUser,
};

export default images;