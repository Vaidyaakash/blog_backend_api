const express = require('express')
const technology = require('../data/technology')

const techRoute = express.Router()
techRoute.route("/technology").get(technology)

module.exports = techRoute;