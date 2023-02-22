import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {Modal} from "react-bootstrap"
import{addUserPortfolioAction,getAllUserPortfolio}  from "../actions/userActions"
// import {addUserPortfolioAction,getAllUserPortfolio} from "../actions/user_action"

const Portfolio = ({match}) => {

    const [location, setLocation] = useState("");
    const [mobile_no, setMobile_no] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [blog, setBlog] = useState("");
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);
    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem("currentUser"))._id 
        if(id){
         
         dispatch(getAllUserPortfolio(id))
        
        }
     },[])
     
     const {userPort} = useSelector(state => state.userPortffolioReducer)
    //  console.log(userPort)
     const handleEditForm = ()=> setShowEditForm(false);

     const onSubmit = (e)=> {
        e.preventDefault()
        let data = {
            location,mobile_no,github,linkedin,blog,
            userId:JSON.parse(localStorage.getItem("currentUser"))._id
        }
        console.log(data)
         dispatch(addUserPortfolioAction(data))
    }
    
    return (
        <div>

          <div>
            <Modal show={showEditForm} onHide={handleEditForm} animation={false}       size="lg" centered dialogClassName="modalclass"
        aria-labelledby="example-custom-modal-styling-title" >
                    <Modal.Header closeButton>
                    <Modal.Title>Add Your Portfolio Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
             <form onSubmit ={onSubmit}>
                         
                         <div className="edu_form">
                             <label htmlFor="">Mobile Number: </label>
                            <input required type="text" placeholder="9581515753" className="form-control edr_class" 
                            value={mobile_no} onChange={(e)=> setMobile_no(e.target.value)}  />
                         </div>

                        <div className="edu_form">
                          <label htmlFor="">Location </label>
                         <input  type="text" placeholder="Ex. Delhi" className="form-control edr_class" 
                          value={location} onChange={(e)=> setLocation(e.target.value)}  />
                        </div>
                        
                        
                         <div className="edu_form">
                         <label htmlFor="">Github Link </label>
                         <input  type="text" placeholder="https://github.com/kumoh" className="form-control edr_class" 
                        value={github} onChange={(e)=> setGithub(e.target.value)}  />
                         </div>
                         <div className="edu_form">
                         <label htmlFor="">Linkedin Account</label>
                            <input  type="text" placeholder="Linkedin Account Link" className="form-control edr_class" 
                            value={linkedin} onChange={(e)=> setLinkedin(e.target.value)}  />
                         </div>
                         <div className="edu_form">
                         <label htmlFor="">Blog </label>
                         <input  type="text" placeholder="Your Webside Link" className="form-control edr_class" 
                        value={blog} onChange={(e)=> setBlog(e.target.value)}  />
                         </div>

                         
                      
                        <div className="form-group mt-2">
                             <button className="btn btn-primary" type="submit" 
                             style={{borderRadius:"25px",height:"50px",width:"90px"}}>Submit</button>
                         </div>
             </form> 
             </Modal.Body>
             <br />
             <br />
             </Modal>
          </div>


          <div className="row">
          
          {/* <div className="col-md-1">
              <h1 style={{color:"#0a66c2"}}>{projects && projects.length}</h1>
          </div> */}
          <div className="col-md-11" >
                
                {userPort && userPort.map(item => {
          return (
              <div key={item._id} style={{display:"flex",flexDirection:"column"}}>
                  <p style={{ fontWeight:"bold" }}>GitHub profile</p>
                  <p>  <a href={item.github && item.github} style={{textDecoration:"none"}}>{item.github && item.github}</a> </p>
                  <p style={{ fontWeight:"bold" }}>Linkedin profile</p>
                  <p ><a href={item.linkedin && item.linkedin} style={{textDecoration:"none"}}>{item.linkedin && item.linkedin}</a> </p>
                  <p style={{ fontWeight:"bold" }}>Blog link</p>
                  <p > <a href={item.blog && item.blog} style={{textDecoration:"none"}}>{item.blog && item.blog}</a> </p>
                 
                      
              </div>    
          )
      })}
          </div>
      </div>

            <div >
                <i className="fas  fa-plus" onClick={() => setShowEditForm(true)}> {" "} Add  Portfolio </i>
               
            </div>

        </div>
    );
};



export default Portfolio;