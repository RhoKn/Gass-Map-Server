const express = require('express');
const favsController = require('../controllers/favoritesController');
var api = express.Router();

api.get('/all',favsController.listAll);
api.get('/view/:id',favsController.viewFav);
api.post('/create',favsController.createFavorite);
api.delete('/delete/:id',favsController.deleteFav);

module.exports = api;
