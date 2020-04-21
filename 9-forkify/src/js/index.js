import axios from 'axios';

async function getResults(query) {
    try {
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        console.log(result);
    } catch (error) {
        alert(error);
    }
}
getResults('pasta');