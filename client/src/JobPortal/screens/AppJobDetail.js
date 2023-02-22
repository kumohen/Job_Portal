import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {getJobByIdAction,getApplicaByIdAction} from "../actions/job_actions"
  

const AppJobDetail = ({match}) => {
    console.log(match)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getJobByIdAction(match.params.jobid))
        dispatch(getApplicaByIdAction(match.params.appId))
   },[])
   const {job} = useSelector(state => state.getJobByIdReducer)
   const {applica} = useSelector(state => state.getApplicationByIdReducer)
   const item = job 
    return (
        <div>
       

             <div>
             
             <br />
                {applica && <>
                     <div className="col-8 m-auto">
                        <h3>Cover Letter</h3>
                        <p>{applica[0].cover_letter}</p>
                         <h3>Availability</h3> 
                         <p>{applica[0].availability}</p>
                         <h3>Assessment</h3>
                         <p>{applica[0].Assessment}</p>
                     </div>
                
                </>}
             </div>

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
        </div>
    );
};

export default AppJobDetail;