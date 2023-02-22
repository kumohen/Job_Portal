const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({

    jobtitle:{type:String,require},
    comName:{type:String,require},
    jobduration:{type:Number,require},
    salary:{type:Number,require},
    jobType:{type:String,require},
    WorkFrom:{type:String,require},
    location:{type:String,require},
    userId:{type:String,require},
    jobCount:[]
   
},{
    timestamps:true
})


module.exports = mongoose.model('Job',jobSchema) ;