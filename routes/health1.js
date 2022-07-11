const express = require('express')
const helth = require('../data/health')

const healthRoute = express.Router()
healthRoute.route("/health").get(helth)

module.exports = healthRoute;