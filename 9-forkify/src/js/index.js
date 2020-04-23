import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            await state.search.getResults();
            
            clearLoader();
            searchView.renderResults(state.search.result);            
        } catch (error) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', event => {
    const btn = event.target.closest('.btn-inline');
    
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResults();
        searchView.clearButtons();
        searchView.renderResults(state.search.result, goToPage);
    }
});

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    
    if(id) {
        state.recipe = new Recipe(id);

        try {
            await state.recipe.getRecipe();
    
            state.recipe.parseIngredients();
            state.recipe.calcTime();
            state.recipe.calcServings();            
        } catch (error) {
            alert('Error processing recipe!');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));