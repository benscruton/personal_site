import Project from "../interfaces/Project";
import dinnerGetterSpotlight from "../img/dinnerGetterSpotlight.png";
import techIcons from "../img/techIcons";
import demoImages from "../img/projectDemos/dinnerGetter";

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
    "One feature of the app helps users add items to a customizable, categorized shopping list, and then tap items on the list to cross them off.  Another helps find recipes that users can make using ingredients that they already have in their pantry."
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
    techIcons.mysql,
    techIcons.auth0,
    techIcons.axios,
    techIcons.materialize,
    techIcons.html,
    techIcons.css,
  ]
};

dinnerGetter.description.push({
  text: "Before logging in to the site, users will be presented with a button to log in.",
  media: demoImages.notLoggedIn
});

dinnerGetter.description.push({
  text: "The login button brings the user to a login page powered by Auth0.  Users can sign up with an email and password, or with an existing Google account.",
  media: demoImages.authZero
});

dinnerGetter.description.push({
  text: "The home page features the user's pantry (right), where they can enter ingredients that they have on hand.  Based on these ingredients, the app generates recipes that are a good match (left), indicating ingredients that are still missing and offering a button to add the missing ingredient to the user's shopping list.",
  media: demoImages.homePage
});

dinnerGetter.description.push({
  text: "The user can also add recipes to the site; any recipes that the user has added will appear on the Recipes page, shown here.",
  media: demoImages.recipePage
});

dinnerGetter.description.push({
  text: "When adding a recipe, users can add (and remove) as many ingredients as the recipe calls for, as well as the name of the recipe and the steps required to make it.",
  media: demoImages.recipe
});

dinnerGetter.description.push({
  text: "Each user also has a shopping list, which they can manage on this page.  Users can add categories, add new ingredients to any category, and remove any items from the list.",
  media: demoImages.shoppingList
});

dinnerGetter.description.push({
  text: "When in \"Edit Mode\", each category features an input field at the bottom, so users can easily add new ingredients to any category.  Each ingredient also has a delete button.",
  media: demoImages.ingredient
});

dinnerGetter.description.push({
  text: "Users can also add new categories to the list, rename existing categories, and delete categories.  Before deleting a category, they will be presented with a warning that all the ingredients in that category will also be deleted.",
  media: demoImages.category
});

dinnerGetter.description.push({
  text: "Drag and drop functionality makes it easy to reorder items on the list.  Items can be moved within their own category or dragged onto other categories.",
  media: demoImages.dragAndDrop
});

dinnerGetter.description.push({
  text: "Dinner Getter also helps manage your grocery list while at the store: toggle the switch at the top to \"Store Mode\" to enable a feature that helps with the shopping.  When in Store Mode, simply click (or more likely touch, assuming most users will be on mobile while in the store) an item to cross it off.  Touch again to un-cross of an item.",
  media: demoImages.storeMode
});


export default dinnerGetter;