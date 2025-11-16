const services = require('/home/simone/repos/dad-jokes-api/src/services.js')

console.log('services is -->',services)

exports.getJoke = async (req, res) => {
    const joke = await services.getJoke();
    res.status(200).json(joke);
}