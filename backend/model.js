const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
  id : {type:String,required:true},
  title : {type:String,required:true},
  subtitle : {type:String,required:true},
  price : {type:String,required:true}
})

const model = new mongoose.model('model',prodSchema);
module.exports = model;