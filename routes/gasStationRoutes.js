const express = require('express');
const gasStationController = require('../controllers/gasStationController');
var api = express.Router();

api.get('/all', gasStationController.listAll);

module.exports = api;
