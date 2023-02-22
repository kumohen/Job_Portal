const router = require("express").Router();
const Applicant = require("../Jobmodel/Applicant/applicant")
const Education = require("../Jobmodel/Applicant/Education");
const Project = require("../Jobmodel/Applicant/Project");
const AppliSkill = require("../Jobmodel/Applicant/ApSkill");
const Portfolio = require("../Jobmodel/Applicant/Portfolio") 

router.post("/register",async(req,res)=>{
    const {name,email,password,applitype} = req.body ;

   const newUser = new Applicant({name,email,password,applitype})
   
   try {
      await newUser.save();
       res.send("new user create successfully")
   } catch (error) {
       return res.status(400).json({message:error})
   }
})

router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await Applicant.find({email , password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                applitype : user[0].applitype, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});

// Education 
router.post('/allUserEdu',(req,res)=>{
  
    Education.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/addEdu",(req,res)=>{
    const {cour_name,inst_name,cour_type,study_from,study_to,userId} = req.body
    const newSave = new Education({
        cour_name,inst_name,cour_type,study_from,study_to,userId
  })
  newSave.save().then(result => {
      res.json(result)
  }).catch(err => {
      console.log(err)
          
  })
})

// project 

router.post('/allUserProject',(req,res)=>{
    
    Project.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})
router.post("/addProject",(req,res)=>{
    const { userId, p_title ,p_desc, start_time,end_time,p_link} = req.body
    const newSave = new Project({
        userId,
        p_title ,p_desc, start_time,end_time,p_link
  })
  newSave.save().then(result => {
      res.json(result)
  }).catch(err => {
      console.log(err)
          
  })
})

// profolio
router.post("/addPortfolio",(req,res)=>{
    const { userId,mobile_no,github,linkedin,blog,
        location } = req.body
    const newSave = new Portfolio({
        userId,mobile_no,github,linkedin,blog,
        location
  })
  newSave.save().then(result => {
      res.json(result)
  }).catch(err => {
      console.log(err)
          
  })
})

router.post('/allUserPort',(req,res)=>{
  
    Portfolio.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})



// skill 

router.post('/allUserSkill',(req,res)=>{
  
    AppliSkill.find({userId:req.body.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/addSkills",(req,res)=>{
    const newSave = new AppliSkill({
        userId:req.body.userId,
        skill_name:req.body.skill_name ,
        skill_status:req.body.skill_status
  })
  newSave.save().then(result => {
      res.json(result)
  }).catch(err => {
      console.log(err)
          
  })
})

router.post("/updateSkills",async(req,res)=>{
      const {skill_name,skill_status,id} = req.body 
      const skill = await AppliSkill.find({_id:id});
      skill[0].skill_name = skill_name
      skill[0].skill_status = skill_status
      await skill[0].save()
})

router.post("/deleteSkills",async(req,res)=>{
    console.log(req.body.id)

    const resjj = await AppliSkill.findOneAndDelete({_id:req.body.id})
})

router.post("/profile/me", (req, res) => {

    Applicant.find({ _id: req.body.id })
      .select("-password")
      .then((admins) => {
        res.json(admins);
      })
      .catch((err) => {
        console.log(err);
      });
  });



module.exports = router ;