const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// when using liveServer extension in vs code, this should be the frontend 
const allowedOrigins = ['http://localhost:5500']

// only allow localhost:5500 to access the backend localhost:3000
app.use (cors({
  origin: allowedOrigins
}))

// function to pull the joke Object (id, joke, & other stuff)
async function getJoke(){
    const url = "https://icanhazdadjoke.com/"
    try {
        const response = await fetch(url, {headers: {"Accept": "application/json"}})
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
   
    const result = await response.json();
    //console.log(result, result.joke)
    return result
    }
    catch (error) {console.error(error.message)} 
};

// how express is going to make that joke info available to the front end
app.get('/joke', async (req, res) => {
  const jokeResult = await getJoke()
  res.json(jokeResult)
})

//let'er rip 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
