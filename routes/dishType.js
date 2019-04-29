const express = require('express');
const dishTypeController = require('../controllers/dishTypeController');
var api = express.Router();

api.get('/all/:page?',dishTypeController.viewAll);
api.get('/view/:id',dishTypeController.viewType);
api.post('/create',dishTypeController.createType);
api.put('/update/:id',dishTypeController.updateType);
api.delete('/delete/:id',dishTypeController.deleteType);


module.exports = api;