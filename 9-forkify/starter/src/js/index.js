// Global app controller
//import string from './models/Search'; //import an exported value, current folder + module name
//import {add as addition, multiply, ID} from './views/searchView';
//import * as searchView from './views/searchView';
//console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${string}`)

//forkify-api.herokuapp.com
//https://forkify-api.herokuapp.com/api/search?q=pizza
//https://forkify-api.herokuapp.com/api/get?rId=47746

// import axios from "axios";

// async function getSearchResults(query){
//      // fetch is not supported by all browsers
//      //const query = pizza
//      const parameter = "q"

//      try {
//         const result = await axios(`https://forkify-api.herokuapp.com/api/search?${parameter}=${query}`);
//         const recipes = result.data.recipes
//         console.log(result.data.count);
//         console.log(recipes);
//      } catch (error) {
//         console.log(error);
//      }

// }

// getSearchResults("pizza");

//-------------------------
/** Global state of the app
 * - Search object - search query and result
 * - Current recipe object
 * - Liked recipes
 */
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import {elements, renderLoader, clearLoader} from './views/base';

const state = {};

//add event listner for search - event listenrs go into the controller

/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
	//needs to be async function to use await
	//1) Get query from view
	const query = searchView.getInput(); //TODO
	console.log(searchView);

	if (query) {
		//2) New search object and add to state
		state.search = new Search(query);

		// 3) Prepare UI for search results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			//4) Search for recipes
			await state.search.getSearchResults(); //promise

			//5) render results on UI 1
			clearLoader();
			console.log(state.search.recipes);
			searchView.renderResults(state.search.recipes);
			//console.log(state.search.recipes); //array with results - function to receive results and print them
		} catch (err) {
			console.log(`Error processing search!' Error: ${err}`);
			clearLoader();
		}
	}
};

elements.searchForm.addEventListener('submit', e => {
	e.preventDefault(); //prevents the page reloading
	controlSearch();
});

//const search = new Search('pizza');
console.log('----index.js----');
//console.log(search);
//search.getSearchResults();

//event deligation - when elements for the listener don't yet exist
elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10); //base 10
		console.log(goToPage);

		searchView.clearResults();
		searchView.renderResults(state.search.recipes, goToPage);
	}
});

/**
 * RECIPE CONTROLLER
 */

const controlRecipe = async () => {
	// Get id from url
	const id = window.location.hash.replace('#', ''); //.location entire locations , .hash is hash part of url
	console.log(id);

	if (id) {
		//prepare UI for changes
		recipeView.clearRecipe();
		renderLoader(elements.recipe);

		//Highlight selected search item
		if (state.search) {
			searchView.highlightSelected(id);
		}

		//create new recipe object
		state.recipe = new Recipe(id);
		console.log(state.recipe);

		try {
			// only do the following if there is no error
			//get recipe data and ingredients
			await state.recipe.getRecipe(id); //loads recipe data in background

			state.recipe.parseIngredients();
			console.log(state.recipe.ingredients);

			//calculate services and time
			state.recipe.calcTime();
			state.recipe.calcServings();
			//render recipe
			console.log(state.recipe);
			console.log(state);
			clearLoader();
			recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
		} catch (err) {
			console.log(`Error processing recipe!' Error: ${err}`);
		}
	}
};
// window.addEventListener('hashchange', controlRecipe) //event listener on hash change
// window.addEventListener('load',controlRecipe) //event listener on page load

['hashchange', 'load'].forEach(event =>
	window.addEventListener(event, controlRecipe),
);

/**
 * LIST CONTROLLER
 */
const controlList = () => {
	// Create a new list IF there is none yet
	if (!state.list) state.list = new List();

	// Add each ingredient to the list and UI - List is an array
	state.recipe.ingredients.forEach(el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		console.log(item);
		listView.renderItem(item);
	});
};

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
	const id = e.target.closest('.shopping__item').dataset.itemid;

	// Handle the delete button - matches returns true of false
	if (e.target.matches('.shopping__delete, .shopping__delete *')) {
		// Delete from state
		state.list.deleteItem(id);

		// Delete from UI
		listView.deleteItem(id);

		// Handle the count update
	} else if (e.target.matches('.shopping__count-value')) {
		const val = parseFloat(e.target.value, 10);
		state.list.updateCount(id, val);
	}
});

/**
 * LIKE CONTROLLER
 */

const controlLike = () => {
	//new likes object

	if (!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;

	//user has not yet likes current recipe
	if (!state.likes.isLiked(currentID)) {
		// Add like to the state
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.publisher,
			state.recipe.image_url,
		);
		//Toggle the like button
		likesView.toggleLikeBtn(true);
		//Add like to the UI list
		likesView.renderLike(newLike);
		console.log(state.likes);
		//User has liked current recipe
	} else {
		// Remove like from the state
		state.likes.deleteLike(currentID);
		//Toggle the like button
		likesView.toggleLikeBtn(false);
		//Remove like from the UI list
		likesView.deleteLike(currentID);
		console.log(state.likes);
	}
	likesView.toggleLikeMenu(state.likes.getNumLikes());
};

/**
 * Restore liked recipes on page load [code restore likes from local storage]
 */
window.addEventListener('load', () => {
	state.likes = new Likes();

	//Restore likes from local storage
	state.likes.readStorage();

	//Toggle like mew button
	likesView.toggleLikeMenu(state.likes.getNumLikes());

	//render the existing likes
	state.likes.likes.forEach(like => likesView.renderLike(like));
});

//Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		//Decrease button is clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		//Increase button is clicked

		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		//Add ingredients to shopping list
		console.log('Add to Shopping list button clicked');
		controlList();
	} else if (e.target.matches('.recipe__love, .recipe__love *')) {
		// Like controller
		controlLike();
	}
	console.log(state.recipe);
});
