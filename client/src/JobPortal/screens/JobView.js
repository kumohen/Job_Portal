import React,{useEffect,useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {useDispatch,useSelector } from 'react-redux'
import {userProfileAction} from "../actions/userActions"
import {getAlljobPostofUser} from "../actions/job_actions"
import SingleJob from "../component/SingleJob"
import Loading from '../component/Loading';


const JobView = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
       const id = JSON.parse(localStorage.getItem("currentUser"))._id 
       if(id){
        dispatch(userProfileAction(id))
        dispatch(getAlljobPostofUser(id))
       }
    },[])
    
    const {jobsPost,loading} = useSelector(state => state.getUserAllJobPostReducer)
    console.log(loading)
    
   
    return (
        <div className='row'>
            <div className="col-md-8 m-auto">
            <h3 style={{ textAlign:"center",marginBottom:"20px" }} >All My Job Post is Here</h3>
          
                <div  style={{marginLeft:"400px"}}>
                {loading && <Loading />}
                </div>
             
          
         
            {jobsPost && jobsPost.map(ele => {
               return  < SingleJob key={ele._id} item={ele} />
            })}
        </div>    
        </div>
    );
};

export default JobView;