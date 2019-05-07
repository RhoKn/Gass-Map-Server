'use strict'

const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    user           :   {type: Schema.ObjectId, ref: 'User'},
    gasolinera     :    String,
    added_time     :    String
});



favoriteSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('Favorite',favoriteSchema);
