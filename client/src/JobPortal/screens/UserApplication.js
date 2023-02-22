import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import {getAllJobAppliByuserId,getAllJobAction} from "../actions/job_actions"
import {Link} from "react-router-dom"

const UserApplication = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem("currentUser"))._id
        dispatch(getAllJobAppliByuserId(id))
        dispatch(getAllJobAction("All"));
    },[])

    const {myJob} = useSelector(state => state.geJobAppliByuserIdReducer)
    const {jobs} = useSelector(state => state.getAllJobReducer)
    var arr = []
    const modifyFyb = ()=> {
        var ddarr = myJob && jobs && myJob.forEach(element => {
            jobs.forEach(item => {
                if(element.jobId == item._id){
                    element.jobtitle = item.jobtitle
                    element.comName = item.comName
                    arr.push(element)
                }
            })
        });
    }
    modifyFyb()



     console.log(arr)
    return (
        <div className='col-md-10 m-auto'>
            <h4>My All Application</h4>
            <table  className='table table-bordered table-responsive-sm' style={{marginTop:"20px"}}>
      
                    
      
      <thead className='thead-dark' >
          <tr>
              <th>Serial No.</th>
              <th>Company</th>
              <th>Profile</th>
              <th>Date</th>
              <th>Application Status</th>
              <th>Application Review</th>
          </tr>
      </thead>
      <tbody>
      {arr && arr.map((book,index)=>{
      
          return <tr key={book._id}>
                  <td>{index+1}</td>
              <td>{book.comName}</td>
              <td>
                 {book.jobtitle}
              </td>
              <td>   {book.createdAt.substring(0, 10)} </td>
              <td> {book.status} </td>
              <td>
                 
                <button className='btn btn-success'> <Link to={`/myapplication/${book._id}/job/${book.jobId}`} 
                style={{ textDecoration:"none",color:"white" }}>Detail</Link></button>
                 
              </td>
      
          </tr>
      
      })}
      </tbody>
      
      </table>
        </div>
    );
};

export default UserApplication;