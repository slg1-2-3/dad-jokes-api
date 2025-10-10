
function setBackgroundColor(id) {
    const element = document.querySelector(id)
    element.style.backgroundColor = "rgb(0,0,0)"
}

const btn = document.querySelector("#jokeBtn");

btn.addEventListener("click", () => {
    setBackgroundColor("#jokeBtn");
})