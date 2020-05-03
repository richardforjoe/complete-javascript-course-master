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

 const state = {};

 //add event listner for search - event listenrs go into the controller

 const controlSearch = async() => { //needs to be async function to use await
     //1) Get query from view
     const query = 'pizza' //TODO

     if (query) {
         //2) New search object and add to state
         state.search = new Search(query);

         // 3) Prepare UI for search results

         //4) Search for recipes
         await state.search.getSearchResults(); //promise

         //5) render results on UI
        console.log(state.search.recipes);
     }
 
 }

 document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault(); //prevents the page reloading
    controlSearch();
 });

import Search from './models/Search';

//const search = new Search('pizza');
console.log("----index.js----");
console.log(search);
search.getSearchResults();