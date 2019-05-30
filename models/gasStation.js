'use strict'

const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var gasStationSchema = new Schema({
    id          :    String,
    street      :    String,
    colony      :    String,
    number      :    String,
    premium     :    Number,
    regular     :    Number,
    diesel      :    Number,
    longitude    :    String,
    latitude   :    String,
    postal_code :   String,
    razonsocial :   String
});

gasStationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('GasStation', gasStationSchema);
