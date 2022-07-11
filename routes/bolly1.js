const express = require('express')
const bolly = require('../data/bolly')

const bollyRoute = express.Router()
bollyRoute.route("/bollywood").get(bolly)

module.exports = bollyRoute;