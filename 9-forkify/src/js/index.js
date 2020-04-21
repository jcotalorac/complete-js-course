import Search from './models/Search';

const state = {};

const controlSearch = () => {
    
}

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});

const search = new Search('pasta');
console.log(search);
search.getResults();