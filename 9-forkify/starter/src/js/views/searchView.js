import { elements } from './base';

export const getInput = () => elements.searchInput.value; //implicit return - retrun input value of the search field

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};

const renderRecipe = recipe => { //no export since this is a private function to render each recipe

    //using template strings to insert html
        const markup = `
            <li>
                <a class="results__link" href="#${recipe.recipe_id}">
                    <figure class="results__fig">
                        <img src="${recipe.image_url}" alt="${recipe.title}">
                    </figure>
                    <div class="results__data">
                        <h4 class="results__name">${recipe.title}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                    </div>
                </a>
             </li>
        `;
        elements.searchResultList.insertAdjacentHTML('beforeend',markup);
        
};

export const renderResults = recipes => {
    //an array of 30 recipes receives
    console.log(recipes);
    recipes.forEach(renderRecipe); //function to loop through array
};