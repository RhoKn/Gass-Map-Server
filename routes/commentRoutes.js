const express = require('express');
const favsController = require('../controllers/commentsController');
var api = express.Router();

api.get('/all/:id',favsController.listAll);
api.post('/create',favsController.createComment);
api.delete('/delete/:id',favsController.deleteCom);

module.exports = api;
