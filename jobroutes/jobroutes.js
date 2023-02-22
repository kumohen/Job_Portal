const router = require("express").Router();
const Job = require("../Jobmodel/job");
const JobOther = require("../Jobmodel/jobOther")
const JobSkill = require("../Jobmodel/jobskill")
const Application = require("../Jobmodel/Appilcation")

router.get("/getAllJob",async(req,res)=>{
    try {
        const jobs = await Job.find({});
        res.send(jobs);
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.get('/job/:id',(req,res)=>{
    
    Job.findById(req.params.id)
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/getMyjobPost',(req,res)=>{
    
    Job.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/getUserByjobId',(req,res)=>{
    
    Application.find({jobId:req.body.id})
         
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/getJobAppliByuserId',(req,res)=>{
    
    Application.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post("/applyjob",async(req,res)=>{
    try {
        const {     userId,jobId,  Appliname, cover_letter, availability,Assessment,status } = req.body ;
        
        const job = new Application({
            userId,jobId,  Appliname, cover_letter, availability,Assessment,status
        })
        await job.save();
        const obj = await Job.findById(jobId)
     
        obj.jobCount.push(userId)
        await obj.save()
    
       res.send("New job is Added")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/addjob",async(req,res)=>{
    try {
        const {            location, jobtitle,comName,jobduration,salary,jobType,WorkFrom,userId} = req.body ;

        const job = new Job({
            location, jobtitle,comName,jobduration,salary,jobType,WorkFrom,userId
        })
       await job.save();
       res.send("New job is Added")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})
router.post("/addskill",async(req,res)=>{
    try {
        const {           jobId,uskill} = req.body ;

        const job = new JobSkill({
            jobId,uskill
        })
       await job.save();
       res.send("New jobskill is Added")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})
router.post("/addjobinfo",async(req,res)=>{
    try {
        const {        numOfposi, benefits, addiInfo, jobId,aboutcom,} = req.body ;

        const job = new JobOther({
            numOfposi, benefits, addiInfo, jobId,aboutcom,
        })
       await job.save();
       res.send("New JobOther is Added")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.get('/jobanother/:id',(req,res)=>{
    
    JobOther.find({jobId:req.params.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/jobskill/:id',(req,res)=>{
    
    JobSkill.find({jobId:req.params.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/application/:id',(req,res)=>{
    
    Application.find({_id:req.params.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/appReqRe',  async(req,res)=>{

   
    
  const app =   await Application.find({_id:req.body.id})
   app[0].status = req.body.staType
   await app[0].save()
})




module.exports = router ;