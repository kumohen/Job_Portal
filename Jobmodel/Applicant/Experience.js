const mongoose = require("mongoose");

const saveSchema = new mongoose.Schema({


    userId: {
        type: String
    },
    company_name: {
        type: String,
        required: true
    },
    position: {
        type: String,

    },
    join_from: {
        type: String,
    },
    to_to: {
        type: String,
    },



}, { timestamps: true });

module.exports = mongoose.model("Experience", saveSchema);