const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://mahen:12345a@cluster0.zxtfp.mongodb.net/PIZZA_MERN';

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection ;

db.on('connected',()=>{
    console.log("mongodb is connect");
})

db.on('error',()=>{
    console.log("not connected");


})

module.exports = mongoose ;