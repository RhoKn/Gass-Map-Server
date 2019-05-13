'use strict'

const GasStation = require('../models/gasStation');
const moment = require('moment');
const axios = require('axios');


function listAll(req, res) {

  const options = {
    page: req.params.page ? req.params.page : 1,
    limit: req.params.limit ? req.params.limit : 200,
    collation: {
      locale: 'en'
    }
  };

  let numeroRegex = /\No\.+.+[0-9]+/;
  let coloniaRegex = /\Col+[^a-np-z]+.+/;
  let calleRegex = /\No\.+.+[0-9]+.+/;
  let ciudadRegex = /\Col.+\s\s/;

  let colonia = "";
  let numero = "";
  let calle = "";
  let ciudad = "";

  axios.get("https://api.datos.gob.mx/v2/precio.gasolina.publico")
    .then(response => {
      let json = response.data

      json.results.forEach(data => {

        //console.log("data: " + data.calle);

        calle = data.calle.replace(calleRegex, "");
        calle = calle.toString();

        numero = numeroRegex.exec(data.calle);
        if (!numero) {
          numero = "S/N";
        }

        numero = numero.toString();

        colonia = calleRegex.exec(data.calle);
        if (!colonia) {
          colonia = "Not Available";
        } else {
          colonia = colonia.toString();
          colonia = colonia.replace(numeroRegex, "");
          colonia = colonia.replace("  ", "");
        }

        if (colonia == "Not Available") {
          if (coloniaRegex.test(data.calle)) {
            colonia = coloniaRegex.exec(data.calle);
            colonia = colonia.toString();

            calle = calle.replace(colonia, "");
          }
        }
        let gas_station = new GasStation({
          id: data._id,
          street: calle,
          number: numero,
          colony: colonia,
          premium: data.premium,
          regular: data.regular,
          diesel: data.diesel,
          longitude: data.longitude,
          latitude: data.latitude,
          postal_code: data.codigopostal,
          razonsocial: data.razonsocial
        })

        console.log(gas_station);

        GasStation.find({ id: data._id }, (err, gs) => {
          //console.log(gs);
          if (gs.length) {
            GasStation.remove({ id: data._id }).then(() => {
              //print('Se borro la gasolinera')
            }).catch((e) => {
              print(e)
            });
          }

          gas_station.save()
            .then(() => {
              //print('Se guardo gasolinera')
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

function print(data) {
  console.log(data);
}

function listBdGas(req, res) {
  const options = {
    page: req.params.page ? req.params.page : 1,
    limit: req.params.limit ? req.params.limit : 200,
    collation: {
      locale: 'en'
    }
  };
  GasStation.paginate({}, options, function (err, result) {
    if (err) return res.status(500).send({ message: 'Hubo un error en la petición' });
    return res.status(200).send({
      message: 'Lista de gasolineras',
      gas: result.docs,
      total: result.totalDocs,
      pages: result.totalPages,
      hasNextPage: result.hasNextPage,
      nextPage: result.nextPage,
      hasPrevPage: result.hasPrevPage,
      prevPage: result.prevPage
    });
  });
}

function viewGas(req, res) {
  const gasToView = req.params.id;

  GasStation.findById(gasToView, (err, gas) => {
    if (err) return res.status(500).send({ message: 'Hubo un error en la petición' });
    if (!gas) return res.status(404).send({ message: 'La gasolinera no existe' });
    return res.status(200).send({
      message: 'Gasolinera encontrada',
      gas: gas
    });
  });

}

module.exports = {
  listAll, listBdGas, viewGas
}
