import React,{useEffect} from 'react';
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux' 
import {userProfileAction,userEducations,userProjects,userSkills} from "../actions/userActions"
import {applyForJobAction} from "../actions/job_actions"

const JobApply = ({match}) => {
    const[letter,setLetter] = useState("")
    const[availability,setAvailability] = useState("")
    const[Assessment,setAssessment] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem("currentUser"))._id 
        if(id){
         dispatch(userProfileAction(id))
         dispatch(userEducations(id))
         dispatch(userProjects(id))
         dispatch(userSkills(id))
        }
     },[])
     const {job} = useSelector(state => state.getJobByIdReducer)
     const item = job 
    const handleSubmit= ()=> {
        const obj = {
            cover_letter:letter,
            availability:availability,
            Assessment:Assessment,
            Appliname:JSON.parse(localStorage.getItem("currentUser")).name ,
            jobId:match.params.id,
            userId:JSON.parse(localStorage.getItem("currentUser"))._id 
        }
       
        dispatch(applyForJobAction(obj))
        setLetter("")
        setAvailability("")
        setAssessment("")
    }

    return (
        <div className='row'>
            <div className="col-md-8 m-auto" >
            <h3>{item && item.jobtitle}  job/internship at {item && item.comName}</h3>

            <div>
                <h3>Cover letter</h3>
                <p>Why should you be hired for this role?</p>
                 <textarea className="form-control" id="exampleFormControlTextarea1" value={letter}
                  rows="5" onChange={e => setLetter(e.target.value) }  />
            </div>
            <br />
            <div>
                <h3>Your availability</h3>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                  onChange={e => setAvailability(e.target.value)} value={availability}
                  placeholder='ex. I am available for 3 months starting immediately for a full-time internship'  />
            </div>
            <br />
            <div>
                <h3>Assessment</h3>
                <p>Q1. If you have any experience in {item && item.jobtitle}, please share.
                If you want to share any documents or files, please upload it on Google Drive or Dropbox and paste the public link in the answer.</p>
                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                  onChange={e => setAssessment(e.target.value)} value={Assessment} />
            </div>
            <br />
           <button className='btn btn-success' style={{textalign:"center"}} onClick={()=> handleSubmit()} > Submit</button>

        </div>
        </div>
    );
};

export default JobApply;