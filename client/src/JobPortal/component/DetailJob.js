import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {Modal,Button} from "react-bootstrap"
import {getJobByIdAction,getAllUserByJobIdAction,
  getJobAnotherByIdAction,getJobSkillByIdAction,addSkillForJob,addOtherInfoForJob} from "../actions/job_actions"

const DetailJob = ({match}) => {
  const [showEditForm, setShowEditForm] = useState(false); 
  const [showComAddForm, setshowComAddForm] = useState(false); 
    const[skill_name,setSkillName] = useState("")
    const[aboutcom,setaboutcom] = useState("")
    const[numOfposi,setnumOfposi] = useState("")
    const[benefits,setbenefits] = useState("")
    const [addiInfo,setaddiInfo] = useState("")
   const dispatch = useDispatch()

   useEffect(()=>{
        dispatch(getJobByIdAction(match.params.id))
        dispatch(getJobSkillByIdAction(match.params.id))
        dispatch(getJobAnotherByIdAction(match.params.id))
        dispatch(getAllUserByJobIdAction(match.params.id))
   },[])
   const userId = JSON.parse(localStorage.getItem("currentUser"))._id
   const handleEditForm = ()=> setShowEditForm(false);
  const handleComAddForm = ()=> setshowComAddForm(false);

   const {job} = useSelector(state => state.getJobByIdReducer)
   const {jobanother} = useSelector(state => state.getJobOtherByIdReducer)
   const {jobskill} = useSelector(state => state.getJobSkillByIdReducer)
   const {appliList} = useSelector(state => state.getUserbyjobIdReducer)
   const item = job 

  //  const ApplyBool = appliList && appliList.forEach(item =>{
  //   if(item.userId == userId && item.postId == match.params.id){
  //     return true
  //   }
  //   return false
  //  })

  //  console.log(ApplyBool)

   const onSubmit = (e)=> {
    e.preventDefault()
    let data = {
      jobId:match.params.id,
      uskill:skill_name
    }
   
     dispatch(addSkillForJob(data))
     setShowEditForm(false)
     setSkillName("")
}

const onComInfoSubmit= (e)=>{
  e.preventDefault()
  let data = {
    aboutcom,numOfposi,benefits,addiInfo,
    jobId:match.params.id
  }
  dispatch(addOtherInfoForJob(data))
  setshowComAddForm(false)
  console.log(data)
}

    return (
        <div>
             <div className="row">
                <div className="col-8 m-auto">
                <h2>{item && item.jobtitle} Work from home job/internship at {item && item.comName}</h2>
                </div>
                </div>
           <br />
           <div className="col-8 m-auto">
           <p> <b>Number Of Application: </b> { item && item.jobCount.length}</p>
                </div>
       
            <div className="row">
                <div className="col-8 m-auto">
                {item && (
                 <div key={item._id} className="card mb-2 p-3">
                 <h3>{item.jobtitle}</h3>
                 <p>{item.comName}</p>
                 <p>Work From :{item.WorkFrom}</p>

                 <p>location:{item.location}</p>
                 
                 <div className="row" >
                    <div className="col-1"></div>
                    <div className="col-3">

                      <p>start Date</p>
                      <p>24 jan ,2023</p>
                    </div> 
                    <div className="col-3">
                      <p>Duration</p>
                      <p>{item.jobduration}</p>
                    </div>
                    <div className="col-3">
                      <p>Salary</p>
                      <p>{item.salary}</p>
                    </div>
                   
                   
                 </div>
                 </div>
            )}
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8 m-auto">
                  <h4>{item && item.comName}</h4>
                   <p>{jobanother && jobanother[0] && jobanother[0].aboutcom}</p>
                
            </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8 m-auto">
                 <h3>Skill(s) required</h3>
                  {item && item.userId == userId && (
                     <button className='btn btn-primary'  onClick={()=> setShowEditForm(true)}>Add Skill</button>
                  )}
                 


                  {jobskill  && jobskill.map(item => (
                    <div key={item._id} >

                        <p style={{ fontSize:"18px",marginRight:"15px",float:"left" }}>{item.uskill}</p>
                    </div>
                  ))}
            </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8 m-auto">
                 <h3>Who Can Apply</h3>
                 <p>1. are available for the work from home job/internship</p>
                 <p>2. have relevant skills and interests</p>
                 <p>3. are available for duration of {item && item.jobduration}  months</p> 
            </div>
            </div>
            <br />
            <div className="row">
                <div className="col-8 m-auto">
                 <h3>Number of openings</h3>
                
                 <p> {jobanother && jobanother[0] && jobanother[0].numOfposi}  </p> 
            </div>
            </div>
            <div className="row">
              {item && item.userId !== userId && (
                  <div className="col-2 m-auto">
                  {item && item.jobCount.includes(userId) ? <button className='btn btn-block'>Already Applied</button> : 
                  <Link to={`/apply/${match.params.id}`}><button className='btn btn-success m-auto'>Apply Now</button></Link> 
                  }  
                  
                </div> 
              )}
               {item && item.userId == userId && (
                  <div className="col-2 m-auto">
                 <button className='btn btn-success m-auto' onClick={()=> setshowComAddForm(true)}> Add More Infor</button>
                </div> 
              )}
              
            </div>
           
            <div>

            <Modal show={showEditForm} onHide={handleEditForm}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add A Skill For Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
             <form onSubmit ={onSubmit}>
                        <div>
                         <input required type="text" placeholder="Ex. javascript" className="form-control" 
                        value={skill_name} onChange={(e)=> setSkillName(e.target.value)}  />
                         </div>
                      
                        <div className="form-group mt-2">
                             <button className="btn btn-primary" type="submit">Save</button>
                         </div>
             </form> 
             </Modal.Body>
             <br />
             <br />
             </Modal>
            </div>
            <div>
            <Modal show={showComAddForm} onHide={handleComAddForm} animation={false}       size="lg" centered dialogClassName="modalclass"
        aria-labelledby="example-custom-modal-styling-title" >
                    <Modal.Header closeButton>
                    <Modal.Title>Add Info About Company</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
             <form onSubmit ={onComInfoSubmit}>
                         
                         <div className="edu_form">
                          
                            <input  type="text" placeholder="About Company" className="form-control edr_class" 
                            value={aboutcom} onChange={(e)=> setaboutcom(e.target.value)}  />
                         </div>

                        <div className="edu_form">
                          
                         <input  type="Number" placeholder="Number of Position" className="form-control edr_class" 
                          value={numOfposi} onChange={(e)=> setnumOfposi(e.target.value)}  />
                        </div>
                        
                        
                         <div className="edu_form">
                        
                         <input  type="text" placeholder="Benefits from Company" className="form-control edr_class" 
                        value={benefits} onChange={(e)=> setbenefits(e.target.value)}  />
                         </div>
                         <div className="edu_form">
                        
                            <input  type="text" placeholder="Additional Info" className="form-control edr_class" 
                            value={addiInfo} onChange={(e)=> setaddiInfo(e.target.value)}  />
                         </div>
                        

                         
                      
                        <div className="form-group mt-2">
                             <button className="btn btn-primary" type="submit" 
                             style={{borderRadius:"25px",height:"50px",width:"90px"}}>Save</button>
                         </div>
             </form> 
             </Modal.Body>
             <br />
             <br />
             </Modal>
            </div>
        </div>
    );
};

export default DetailJob;