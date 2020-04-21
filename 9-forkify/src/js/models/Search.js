import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults(query) {
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
            const recipes = result.data.recipes;
            console.log(recipes);
        } catch (error) {
            alert(error);
        }
    }
}