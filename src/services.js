// function to pull the joke Object (id, joke, & other stuff)
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

module.exports = {getJoke};