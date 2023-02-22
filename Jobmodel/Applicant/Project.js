const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const projectSchema = new mongoose.Schema({


    userId: {
        type: String,
        required: true
    },
    p_title: {
        type: String,
        required: true
    },
    p_desc: {
        type: String,

    },
    start_time: {
        type: String,
    },
    
    end_time: {
        type: String,
    },
    p_link: {
        type: String,
    }


}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);