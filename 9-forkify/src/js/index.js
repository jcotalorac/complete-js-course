import Search from './models/Search';

const state = {};

const controlSearch = async () => {
    const query = 'pizza';

    if (query) {
        state.search = new Search(query);

        await state.search.getResults();
    }
}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});