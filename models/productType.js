const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productTypeSchema = new Schema({
    type        :   String,
    enabled     :   Boolean
});


module.exports = mongoose.model('ProductType',productTypeSchema);
