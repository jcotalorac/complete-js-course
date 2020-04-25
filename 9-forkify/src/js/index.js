import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
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
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        searchView.highlightSelected(id);

        state.recipe = new Recipe(id);

        try {
            await state.recipe.getRecipe();
    
            state.recipe.parseIngredients();
            state.recipe.calcTime();
            state.recipe.calcServings();

            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        } catch (error) {
            alert('Error processing recipe!');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

const controlList = () => {
    if(!state.listShopping) {
        state.listShopping = new List();
    }

    state.recipe.ingredients.forEach(element => {
        const item = state.listShopping.addItem(element.count, element.unit, element.ingredient);
        listView.renderItem(item);
    });
};

state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes());

const controlLike = () => {
    if(!state.likes) {
        state.likes = new Likes();
    }

    if(!state.likes.isLiked(state.recipe.id)) {
        const newLike = state.likes.addLikes(state.recipe.id, state.recipe.title, state.recipe.author, state.recipe.img);

        likesView.toggleLikeBtn(true);

        likesView.renderLike(newLike);
    } else {
        state.likes.deleteLike(state.recipe.id);

        likesView.toggleLikeBtn(false);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

elements.shopping.addEventListener('click', event => {
    const id = event.target.closest('.shopping__item').dataset.itemid;

    if(event.target.matches('.shopping__delete, .shopping__delete *')) {
        state.listShopping.deleteItem(id);
        listView.deleteItem(id);
    } else if (event.target.matches('.shopping__count-value')) {
        const value = event.target.value;
        state.listShopping.updateCount(id, value);
    }
});

elements.recipe.addEventListener('click', event => {
    if(event.target.matches('.btn-decrease, .btn-decrease *')) {
        if(state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if(event.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if(event.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    } else if(event.target.matches('.recipe__love, .recipe__love *')) {
        controlLike();
    }
});