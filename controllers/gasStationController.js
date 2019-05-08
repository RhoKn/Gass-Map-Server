'use strict'

const GasStation = require('../models/gasStation');
const moment = require('moment');
const axios = require('axios');


function listAll(req, res){

  const options = {
      page: req.params.page ? req.params.page : 1,
      limit: req.params.limit ? req.params.limit : 200,
      collation: {
          locale: 'en'
      }
  };

  axios.get("https://api.datos.gob.mx/v2/precio.gasolina.publico")
  .then( response => {
    let json = response.data

    json.results.forEach( data => {
      let gas_station = new GasStation({
        id          :    data._id,
        direction   :    data.calle,
        premium     :    data.premium,
        regular     :    data.regular,
        diesel      :    data.diesel
      })

      GasStation.find({ id: data._id }, (err, gs) => {
        console.log(gs);
        if (gs.length) {
          GasStation.remove({ id: data._id }).then(() => {
            print('Se borro la gasolinera')
          }).catch( (e) => {
            print(e)
          });
        }

        gas_station.save()
        .then( () => {
          print('Se guardo gasolinera')
        }).catch((e) => {
          print(e)
        })
      })
    })

    return res.status(200).json(json);
  }).catch(error => {
    console.log(error);
  });

}

function print(data){
  console.log(data);
}

module.exports = {
  listAll
}
