const services = require('/home/simone/repos/dad-jokes-api/src/services.js')

exports.getJoke = async (req, res) => {
    const joke = await services.getJoke();
    res.status(200).json(joke);
}

exports.searchJokes = async (req, res) => {   
    const searchTerm = req.query.term
    const response = await services.searchJokes(searchTerm);
    res.status(200).json(response);
    // note to self, the response.results is an array of around 20 jokes
}