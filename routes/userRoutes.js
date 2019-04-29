const express = require('express');
const usersController = require('../controllers/usersController');
var api = express.Router();

api.get('/all',usersController.listAll);
api.get('/view/:id',usersController.viewUser);
api.post('/register',usersController.createUser);
api.post('/login',usersController.loginUser);
api.put('/update/:id',usersController.updateUser);
api.delete('/delete/:id',usersController.deleteUser);

module.exports = api;
