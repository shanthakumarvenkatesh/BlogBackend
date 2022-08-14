const express = require('express');
const isimchaController = require('../details/isimcha');

const isimchaRouter = express.Router();
isimchaRouter.route('/isimcha')
  .get(isimchaController.apiController)
module.exports = isimchaRouter;




