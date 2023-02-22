const mongoose = require("mongoose");

const jobothersSchema = mongoose.Schema({

    jobId:{type:String,require},
    aboutcom:{type:String},
    numOfposi:{type:Number,require},
    benefits:{type:String},
    addiInfo:{type:String}
},{
    timestamps:true
})


module.exports = mongoose.model('JobOther',jobothersSchema) ;