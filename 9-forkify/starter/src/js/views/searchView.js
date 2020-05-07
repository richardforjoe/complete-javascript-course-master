import { elements } from './base';

export const getInput = () => elements.searchInput.value; //implicit return - retrun input value of the search field

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => { //clear results and buttons
    elements.searchResultList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

/*
Pasta with tomato and spinach

*/



const limitRecipeTitle = (title, limit = 17) => {
if(title.length > limit) {
    const newTitle = [];
    // if - split
    title.split(' ').reduce((acc, curr) => { //callback function
                if(acc + curr.length <= limit) {
                    newTitle.push(curr);
                }
                return acc + curr.length;
    }, 0)

    // return the result
    return `${newTitle.join('')} ...`;

} else 
   return title;
}
const renderRecipe = recipe => { //no export since this is a private function to render each recipe

    //using template strings to insert html
        const markup = `
            <li>
                <a class="results__link" href="#${recipe.recipe_id}">
                    <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="${recipe.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                    </div>
                </a>
             </li>
        `;
        elements.searchResultList.insertAdjacentHTML('beforeend',markup);
        
};

//return markup - type: prev or next
const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page +1}>
<span>Page ${type === 'prev' ? page -1 : page +1}</span>    
<svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? "left" : "right"}"></use>
    </svg>
    
</button>
`;

//render the page buttons
const renderButtons = (page, numberResults, resultsPerPage) => {
 // which page we are on
 const pages = Math.ceil(numberResults / resultsPerPage);
 let button;

 // how many pages

 if(page === 1 && pages > 1 ) {
     // button to go to next page
     button = createButton(page,"next");
 } else if (page < pages){
// both buttons
button = `
${createButton(page,"prev")}
${createButton(page,"next")}
`;

 } else if (page === pages && pages > 1) {
// only button to go to prev page
button = createButton(page,"prev");
 }

 elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resultPerPage = 10) => {
    //an array of 30 recipes receives
    //function for displaying the results

    //render results of current page


    //limit number displayed
    const start = (page - 1) * resultPerPage;
    const end = page * resultPerPage;


   //.slice(start,end) - zero index
    console.log(recipes);
    recipes.slice(start, end).forEach(renderRecipe); //function to loop through array

    //render pagenation buttons
    renderButtons(page, recipes.length, resultPerPage);
};

