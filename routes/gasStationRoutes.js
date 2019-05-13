const express = require('express');
const gasStationController = require('../controllers/gasStationController');
var api = express.Router();

api.get('/all', gasStationController.listAll);
api.get('/allBd', gasStationController.listBdGas);
api.get('/view/:id', gasStationController.viewGas);

module.exports = api;
