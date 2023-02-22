const mongoose = require("mongoose");

const appskillSchema = new mongoose.Schema({


    userId: {
        type: String
    },
    skill_name: {
        type: String,
        required: true
    },
    skill_status:{
        type:String,
        default:"Beginner"
    }



}, { timestamps: true });

module.exports = mongoose.model("AppliSkill", appskillSchema);