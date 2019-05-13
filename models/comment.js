'use strict'

const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    user        :   {type: Schema.ObjectId, ref: 'User'},
    gasolinera  :   {type: Schema.ObjectId, ref: 'GasStation'},
    added_time  :   String,
    text        :   String
});

commentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Comment',commentSchema);
