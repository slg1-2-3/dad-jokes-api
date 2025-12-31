// services are the functions that *do* something

// get one joke
async function getJoke(){
    const url = "https://icanhazdadjoke.com/"
    try {
        const response = await fetch(url, {headers: {"Accept": "application/json"}})
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
   
    const result = await response.json();
    return result;
    }
    catch (error) {console.error(error.message)} 
};

/* search jokes with a keyword (term)
 somehow I have to pass the term from the front to here... 
 but first I want to get Hello world to pop up when I press 
the button */
function searchJokes() {
    return "hello world"
}
module.exports = {getJoke, searchJokes};