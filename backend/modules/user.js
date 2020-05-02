var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   time : { type : Date, default: Date.now },
   stock_price : Number

})

var user = mongoose.model('user',userSchema);

module.exports = user;