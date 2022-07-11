const express = require('express')
const tourism = require('../data/tourism')

const tourRoute = express.Router()
tourRoute.route("/tourism").get(tourism)

module.exports = tourRoute;