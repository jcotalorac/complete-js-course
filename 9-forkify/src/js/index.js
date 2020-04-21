import Search from './models/Search';

const state = {};

const controlSearch = () => {
    const query = 'pizza';

    if (query) {
        state.search = new Search(query);

        state.search.getResults();
    }
}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});