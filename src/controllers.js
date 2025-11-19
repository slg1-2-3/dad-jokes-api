const services = require('/home/simone/repos/dad-jokes-api/src/services.js')

exports.getJoke = async (req, res) => {
    const joke = await services.getJoke();
    res.status(200).json(joke);
}

exports.searchJokes = async (req, res) => {
    const response = await services.searchJokes();
    console.log('in controller file --> response is: ', response)
    res.status(200).json(response)
}