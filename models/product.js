const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name        :   String,
    category    :   {type: Schema.ObjectId, ref: 'ProductType'},
    description :   String,
    price       :   Number,
    enabled     :   Boolean
});

//productSchema.methods.name = function(){}

module.exports = mongoose.model('Product',productSchema);