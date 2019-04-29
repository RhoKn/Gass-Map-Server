'use strict'

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const userRoutes = require('./routes/userRoutes');
const productTypesRoutes = require('./routes/productTypeRoutes');
const productRoutes = require('./routes/productRoutes');
const dishTypesRoutes = require('./routes/dishType');
const dishRoutes = require('./routes/dishRoutes');


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
app.use('/pTypes',productTypesRoutes);
app.use('/products',productRoutes);
app.use('/dTypes',dishTypesRoutes);
app.use('/dishes',dishRoutes);
module.exports = app;