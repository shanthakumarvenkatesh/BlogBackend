const express = require('express')
const itemController = require('../details/Items')

const itemRouter = express.Router()
itemRouter.route("/item")
.get(itemController.apiController)
module.exports = itemRouter