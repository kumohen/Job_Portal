const mongoose = require("mongoose");

const jobAppSchema = mongoose.Schema({
    
   
    userId:{type:String,require},
    jobId:{type:String,require},
    Appliname:{type:String,require},
    cover_letter:{type:String,require},
    availability:{type:String,require},
    Assessment:{type:String,require},
    status:{type:String, default:"Under Process"},
   
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }
    
   
},{
    timestamps:true
})


module.exports = mongoose.model('Application',jobAppSchema) ;