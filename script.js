
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


async function searchJokes(searchTerm) {
    if (searchTerm === '') {return "You didn't search anything!"}
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

// search components
const searchBtn = document.querySelector("#searchBtn");
const search = document.querySelector("#search")

searchBtn.addEventListener("click", async() => {
    setBackgroundColor("#searchBtn");
    let searchTerm = search.value
    console.log('searchTerm is -->', searchTerm)
    let jokes = await searchJokes(searchTerm);
})