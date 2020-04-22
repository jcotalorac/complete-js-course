import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.recipe = result.data.recipe;
            console.log(this.recipe);
        } catch (error) {
            alert(error);
        }
    }
}