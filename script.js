
function setBackgroundColor(id) {
    const element = document.querySelector(id)
    element.style.backgroundColor = "rgb(0,0,0)"
}

async function displayJoke() {
    const url = "http://localhost:3000/joke"
        const response = await fetch(url, {headers: {"Accept": "application/json"}})
        const data = await response.json()
    return data.joke
}

async function searchJokes() {
    const url = "http://localhost:3000/search"
        const response = await fetch (url, {headers: {"Accept": "application/json"}})
        const data = await response.json()
    return data /*return an array of jokes (5)*/ 
}

const jokeBtn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");


jokeBtn.addEventListener("click", async () => {
    setBackgroundColor("#jokeBtn");
    let jokeText = await displayJoke();
    joke.textContent = jokeText
})

const searchBtn = document.querySelector("#searchBtn");
const search = document.querySelector("#search")

// searchString
const searchTerms = document.getElementById("search").value;

// search button
searchBtn.addEventListener("click", async() => {
    setBackgroundColor("#searchBtn");
    let searchText = await searchJokes();
    search.textContent = searchText
})