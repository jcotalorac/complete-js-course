async function getResults(query) {
    const result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
    console.log(result);
    const body = await result.json();
    console.log(body);
}
getResults('Pizza');