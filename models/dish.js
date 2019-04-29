const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dishSchema = new Schema({
    name        :   String,
    price       :   Number,
    category    :   {type: Schema.ObjectId, ref: 'DishType'},
    ingredients :   [{type: Schema.ObjectId, ref: 'Product'}],
    description :   String,
    enabled     :   Boolean
});


module.exports = mongoose.model('Dish',dishSchema);