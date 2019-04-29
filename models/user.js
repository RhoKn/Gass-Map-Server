'use strict'

const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    user_type           :   String,
    first_name          :   String,
    last_name           :   String,
    nick_name           :   String,
    password            :   String,
    email               :   String,
    registration_Date   :   String,
    image               :   String
});

userSchema.methods.fullName = function(){
    return `${this.name} ${this.lastName}`;
}
userSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('User',userSchema);
