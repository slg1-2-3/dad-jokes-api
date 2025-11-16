const express = require("express")
const router = express.Router();
const controllers = require('/home/simone/repos/dad-jokes-api/src/controllers.js')

// defining routes
router.get("/joke", controllers.getJoke);

module.exports = router