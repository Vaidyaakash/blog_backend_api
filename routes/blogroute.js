const express = require("express")
const blogapi = require("../data/blogApi")

const blogrouter = express.Router()

blogrouter.route("/blog").get(blogapi.blogNews)

module.exports = blogrouter;