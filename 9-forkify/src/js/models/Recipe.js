import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        } catch (error) {
            alert(error);
        }
    }

    calcTime() {
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        
        const newIngredients = this.ingredients.map(element => {
            
            let ingredient = element.toLowerCase();
            
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(element => unitsShort.includes(element));

            let ingredientObject;
            if(unitIndex > -1) {

                const arrCount = arrIng.slice(0, unitIndex);

                const ingredientCount = arrCount.reduce((sum, element) => {
                    return sum + eval(element);
                }, 0);
                
                ingredientObject = {
                    count: ingredientCount,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };
            } else if(unitIndex === -1) {
                ingredientObject = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            }
            console.log(ingredientObject);

            return ingredient;
        });

        this.ingredients = newIngredients;
    }
}