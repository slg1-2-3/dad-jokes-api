
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
 somehow I have to pass the term from the front to here...*/

async function searchJokes(searchTerm) {
    //needs to be able to handle when search term is "" and an actual string. 
    if (searchTerm === ''){return "You did not search anything!"} 

    const url = "https://icanhazdadjoke.com/search?term="+searchTerm 

    try{
        const response = await fetch(url, {headers: {"Accept": "application/json"}})
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        const result = await response.json()
        return result;
    }
    catch (error) {console.error(error.message)} 
};

module.exports = {getJoke, searchJokes};