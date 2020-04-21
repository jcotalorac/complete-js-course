import Search from './models/Search';

const state = {};

const controlSearch = () => {
    const query = 'pizza';

    if (query) {
        state.search = new Search(query);
    }
}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

const search = new Search('pasta');
console.log(search);
search.getResults();