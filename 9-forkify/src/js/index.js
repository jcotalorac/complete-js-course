import axios from 'axios';

async function getResults(query) {
    const result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    console.log(result);
}
getResults('Pizza');