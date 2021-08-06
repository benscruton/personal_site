import categoryAddr from "./addEditRemoveCategory.ogg";
import recipeAddr from "./addRecipe.ogg";
import ingredientAddr from "./addRemoveIngredients.ogg";
import authZeroAddr from "./authZero.png";
import dragAndDropAddr from "./dragAndDrop.ogg";
import homePageAddr from "./homePage.png";
import notLoggedInAddr from "./notLoggedIn.png";
import recipePageAddr from "./recipePage.png";
import storeModeAddr from "./storeMode.ogg";
import Media from "../../../interfaces/Media";

const category: Media = {
  address: categoryAddr,
  altText: "",
  videoType: "video/ogg"
};

const recipe: Media = {
  address: recipeAddr,
  altText: "",
  videoType: "video/ogg"
};

const ingredient: Media = {
  address: ingredientAddr,
  altText: "",
  videoType: "video/ogg"
};

const authZero: Media = {
  address: authZeroAddr,
  altText: ""
};

const dragAndDrop: Media = {
  address: dragAndDropAddr,
  altText: "",
  videoType: "video/ogg"
};

const homePage: Media = {
  address: homePageAddr,
  altText: ""
};

const notLoggedIn: Media = {
  address: notLoggedInAddr,
  altText: ""
};

const recipePage: Media = {
  address: recipePageAddr,
  altText: ""
};

const storeMode: Media = {
  address: storeModeAddr,
  altText: "",
  videoType: "video/ogg"
};

const images: {readonly [key: string]: Media} = {
  category,
  recipe,
  ingredient,
  authZero,
  dragAndDrop,
  homePage,
  notLoggedIn,
  recipePage,
  storeMode
};

export default images;