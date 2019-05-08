'use strict'

const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var gasStationSchema = new Schema({
    id          :    String,
    direction   :    String,
    premium     :    Number,
    regular     :    Number,
    diesel      :    Number
});

gasStationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('GasStation', gasStationSchema);
