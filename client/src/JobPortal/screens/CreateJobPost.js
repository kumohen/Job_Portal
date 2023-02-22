import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {createNewJobAction} from "../actions/job_actions"


const CreateJobPost = () => {
    const[jobtitle,setjobtitle] = useState("")
    const[comName,setcomName] = useState("")
    const[jobduration,setjobduration] = useState("")
    const[salary,setsalary] = useState("")
    const[jobType,setjobType] = useState("")
    const [WorkFrom,setWorkFrom] = useState("office")
    const [location,setlocation]=useState("")

    const dispatch = useDispatch()
    const handleClick = ()=> {
        const obj = {
            jobtitle,comName,jobduration,salary,jobType,WorkFrom,location,
            userId:JSON.parse(localStorage.getItem("currentUser"))._id
        }
      
        dispatch(createNewJobAction(obj))
        setjobtitle("")
        setcomName("")
        setjobduration("")
        setsalary("")
        setjobType("")
        setWorkFrom("")
        setlocation("")
    }
    return (
      

    
        <div className='col-md-8 m-auto '>
              <div className="card p-2">
            <div>
                <h3 style={{ textAlign:"center",marginBottom:"50px" }}>Create A New Job Post</h3>
            </div>

             <input  type="text" placeholder="Job Post Title" className="form-control job_form" 
             value={jobtitle} onChange={(e)=> setjobtitle(e.target.value)}  />
             <input  type="text" placeholder="Company Name" className="form-control job_form"
              value={comName} onChange={(e)=> setcomName(e.target.value)}  />
             <input  type="Number" placeholder="Duration of Job/Intership"
              className="form-control job_form" value={jobduration} onChange={(e)=> setjobduration(e.target.value)}  />
             <input  type="Number" placeholder="Salary" 
             className="form-control job_form" value={salary} onChange={(e)=> setsalary(e.target.value)}  />
            <select value={jobType} onChange={e => setjobType(e.target.value)} className="job_form">
                                <option value="job">Job</option>
                                <option value="intership">Internship</option>
                               
                               
            </select>
             {/* <input  type="text" placeholder="Job Type ex. job/intership" className="form-control job_form" value={jobType} 
             onChange={(e)=> setjobType(e.target.value)}  /> */}
            <select value={WorkFrom} onChange={e => setWorkFrom(e.target.value)} className="job_form">
                                <option value="office">Office</option>
                                <option value="home">Home</option>
                                <option value="both">Hybrid/Both</option>
                               
            </select>
             {/* <input  type="text" placeholder="Work from : Office/Home/Both" className="form-control job_form" value={WorkFrom}
              onChange={(e)=> setWorkFrom(e.target.value)}  /> */}
             <input  type="text" placeholder="Location" className="form-control job_form" value={location}
              onChange={(e)=> setlocation(e.target.value)}  />
              <br />
             <button className='btn btn-primary' onClick={()=> handleClick()} >Submit</button>
        </div>
        </div>
    );
};

export default CreateJobPost;