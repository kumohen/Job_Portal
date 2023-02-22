
import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {Modal,Button} from "react-bootstrap"
import {getAllUserByJobIdAction,getAppReqStatusByIdAction} from "../actions/job_actions"



const JobApplicant = ({match}) => {
    const [showEditForm, setShowEditForm] = useState(false); 
    const [modelData,setModelData] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
       
        dispatch(getAllUserByJobIdAction(match.params.id))
     },[])
     const {appliList} = useSelector(state => state.getUserbyjobIdReducer)
     const filterList = appliList && appliList.filter(item => item.status == "Under Process")
    

     const handleClick = (item)=> {
        setShowEditForm(true)
        setModelData(item)
        
     }

     const handleAcceptReq = (id,staType)=> {
        const obj = {
            id,staType
        }
        dispatch(getAppReqStatusByIdAction(obj))
     }

    return (
        <div>
        <div className='col-10 m-auto'>
            <h3  style={{ textAlign:"center" }} >Number Of Applicant {filterList && filterList.length}</h3>
            
            <table  className='table table-bordered table-responsive-sm' style={{marginTop:"20px"}}>
      
                    
      
      <thead className='thead-dark' >
          <tr>
              <th>Serial No.</th>
              <th>Applicant Name</th>
              <th>Apply Date</th>
              <th>Profile</th>
              <th>Response</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
      {filterList && filterList.map((book,index)=>{
      
          return <tr key={book._id}>
                  <td>{index+1}</td>
              <td>{book.Appliname}</td>
              <td>
                 {book.createdAt.substring(0, 10)}
              </td>
              <td>  <Link to={`/profile/${book.userId}`}>See Here</Link> </td>
              <td> <button className='btn btn-primary' onClick={()=> handleClick(book)}>See Res</button> </td>
              <td>
                 
                 <button className="btn btn-success" onClick={()=> handleAcceptReq(book._id,"Selected")} >Select{"   "}</button>
                 <button className="btn btn-danger ml-2" onClick={()=> handleAcceptReq(book._id,"Rejected")}>{"  "}Reject</button>
                 
              </td>
      
          </tr>
      
      })}
      </tbody>
      
      </table>

        

        
<div>
            <Modal show={showEditForm} onHide={setShowEditForm}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <h4>Cover Letter</h4>
                        <p>{modelData && modelData.cover_letter}</p>
                        </div>
                        <br />
                        <div>
                        <h4>Availability</h4>
                        <p>{modelData && modelData.availability}</p>
                        </div>
                        <br />
                        <div>
                        <h4>Assessment</h4>
                        <p>{modelData && modelData.Assessment}</p>
                        </div>
                        
                    </Modal.Body>
             <br />
            
             </Modal>
            </div>
            </div>
        </div>
    );
};

export default JobApplicant;