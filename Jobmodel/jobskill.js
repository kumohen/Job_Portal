const mongoose = require("mongoose");

const jobSkillSchema = mongoose.Schema({

    jobId:{type:String,require},
    uskill:{type:String,require}
   
},{
    timestamps:true
    
})


module.exports = mongoose.model('JobSkill',jobSkillSchema) ;