const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({


    userId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: String,
         
    },
    github:{
        type: String
    },
    linkedin: {
        type: String,
    },
    blog: {
        type: String,
    },



}, { timestamps: true });

module.exports = mongoose.model("Portfolio", portfolioSchema);