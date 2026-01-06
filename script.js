
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
    const params = new URLSearchParams();
    params.append("term", searchTerm)
        const response = await fetch (`${url}?${params.toString()}`, {headers: {"Accept": "application/json"}})
        const data = await response.json()
        console.log(`in scripts.js`);
        console.log(data.results[0].joke);
    return data.results[0].joke;
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
const searchJokeText = document.querySelector("#searchJokeText")

searchBtn.addEventListener("click", async(event) => {
    event.preventDefault()
    setBackgroundColor("#searchBtn");
    let searchTerm = search.value
    let joke = await searchJokes(searchTerm);
    searchJokeText.textContent = joke;
})