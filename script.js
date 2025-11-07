
function setBackgroundColor(id) {
    const element = document.querySelector(id)
    element.style.backgroundColor = "rgb(0,0,0)"
}

async function getJoke(){
    const url = "https://icanhazdadjoke.com/"
    try {
        const response = await fetch(url, {headers: {"Accept": "application/json"}})
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
   
    const result = await response.json();
    console.log(result, result.joke)
    return result.joke    
    }
    catch (error) {console.error(error.message)} 
};

function getHelloWorld(){
    const url = "http://localhost:3000/"
    const response = fetch(url, {headers: {"Accept": "application/json"}})
    return response

}

function getHelloWorld2(){
    const url = "http://localhost:3000/hello2"
    const response = fetch(url, {headers: {"Accept": "application/json"}})
    return response

}

const btn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");

btn.addEventListener("click", async () => {
    setBackgroundColor("#jokeBtn");
    let jokeText = await getHelloWorld2();
    joke.textContent = jokeText
})