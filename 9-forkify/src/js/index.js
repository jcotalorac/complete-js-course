import Search from './models/Search';

const state = {};

document.querySelector('.search').addEventListener('submit', event => {
    event.preventDefault();
});

const search = new Search('pasta');
console.log(search);
search.getResults();