'use strict'

const GasStation = require('../models/gasStation');
const moment = require('moment');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function listAll(req, res){

  const options = {
      page: req.params.page ? req.params.page : 1,
      limit: req.params.limit ? req.params.limit : 200,
      collation: {
          locale: 'en'
      }
  };

  var data;
  const Http = new XMLHttpRequest();
  const url='https://api.datos.gob.mx/v2/precio.gasolina.publico';
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange=(e)=>{
    data = Http.responseText;
    print(Http.responseText);
  }

  return res.status(200).send({message: "Todo bien"});

}

function print(data){
  console.log(data);
}

module.exports = {
  listAll
}
