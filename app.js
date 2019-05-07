'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const userRoutes = require('./routes/userRoutes');
const favsRoutes = require('./routes/favoriteRoutes');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// cabeceras http
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/users',userRoutes);
app.use('/favs',favsRoutes);


module.exports = app;