
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

const btn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");

btn.addEventListener("click", async () => {
    setBackgroundColor("#jokeBtn");
    let jokeText = await displayJoke();
    console.log("jokeText is -->", )
    joke.textContent = jokeText
})