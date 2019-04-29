const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dishTypeSchema = new Schema({
    type        :   String,
    enabled     :   Boolean
});


module.exports = mongoose.model('DishType',dishTypeSchema);
