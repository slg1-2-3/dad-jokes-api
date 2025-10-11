
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
    console.log(result, result.joke);    
    }
    catch (error) {console.error(error.message)} 
};

const btn = document.querySelector("#jokeBtn");

btn.addEventListener("click", () => {
    setBackgroundColor("#jokeBtn");
    getJoke();
})