const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({


    userId: {
        type: String
    },
    inst_name: {
        type: String,
        required: true
    },
    cour_name: {
        type: String,

    },
    cour_type:{
        type: String
    },
    study_from: {
        type: String,
    },
    study_to: {
        type: String,
    },



}, { timestamps: true });

module.exports = mongoose.model("Education", educationSchema);