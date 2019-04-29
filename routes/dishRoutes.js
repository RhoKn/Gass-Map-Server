const express = require('express');
const dishController = require('../controllers/dishController');
var api = express.Router();

api.get('/all/:page?',dishController.viewAll);
api.get('/view/:id',dishController.viewDish);
api.post('/create',dishController.createDish);
api.put('/update/:id',dishController.updateDish);
api.delete('/delete/:id',dishController.deleteDish);


module.exports = api;
