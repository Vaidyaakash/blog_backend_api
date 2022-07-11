const express = require('express')
const sports = require('../data/sports')

const sportsRoute = express.Router()
sportsRoute.route("/sports").get(sports)

module.exports = sportsRoute;