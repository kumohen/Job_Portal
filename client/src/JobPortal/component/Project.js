import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {Modal,Button,Dropdown} from "react-bootstrap"
import {userProjects,addProject} from "../actions/userActions"

const Project = ({match}) => {

    const [p_title, setP_Title] = useState("");
    const [p_desc,setP_Desc ] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
    const [p_link, setPLink] = useState("");
    const [lan_type, setLanType] = useState("");
    const [item,setItem] = useState(" ")

    const dispatch = useDispatch();

    const [showEditForm, setShowEditForm] = useState(false);
    const [showProjectForm, setShowProjectForm] = useState(false);
  

    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem("currentUser"))._id 
        if(id){
      
         dispatch(userProjects(id))
        
        }
     },[])
     
     const {projects} = useSelector(state => state.userProjectReducer)
    
     const handleEditForm = ()=> setShowEditForm(false);
     const handleProjectForm = ()=> setShowProjectForm(false);
  

     const onSubmit = (e)=> {
        e.preventDefault()
        let data = {
            p_title ,p_desc, start_time,end_time,p_link,userId:JSON.parse(localStorage.getItem("currentUser"))._id 
        }
        dispatch(addProject(data))
    }
     
    
    const onSubmitLanguage = (e)=> {
        e.preventDefault();
          const data = {
            lan_skill: item,lan_name:lan_type,userId:match.params.id
          }
        //   dispatch(addSLanguage(data))
    }
    return (
        <div>



          
            <div className="project_list">
            <Modal show={showEditForm} onHide={handleEditForm}  size="lg" centered dialogClassName="modalclass">
                    <Modal.Header closeButton>
                    {/* <Modal.Title>Accomplishments</Modal.Title> */}
                    </Modal.Header>

                    <Modal.Body>
                      <h3>Add Project</h3>
                       
<form onSubmit ={onSubmit}>
                        <div className="edu_form">
                         <input required type="text" placeholder="Project Title" className="form-control edr_class" 
                        value={p_title} onChange={(e)=> setP_Title(e.target.value)}  />
                         </div>
                        
                         <div className="edu_form">
                            <input required type="text" placeholder="Project discription" className="form-control edr_class" 
                            value={p_desc} onChange={(e)=> setP_Desc(e.target.value)}  />
                         </div>
     
                         <div className="edu_form">
                         <input required type="text" placeholder="project start date" className="form-control edr_class" 
                        value={start_time} onChange={(e)=> setStartTime(e.target.value)}  />
                         </div>
                          
                         <div className="edu_form">
                            <input required type="text" placeholder="project end Date" className="form-control edr_class" 
                            value={end_time} onChange={(e)=> setEndTime(e.target.value)}  />
                         </div>

                         <div className="edu_form">
                         <input required type="text" placeholder="Project Link" className="form-control edr_class" 
                        value={p_link} onChange={(e)=> setPLink(e.target.value)}  />
                         </div>
                        
                      
                        <div className="form-group mt-2">
                             <button className="btn btn-primary" type="submit">Submit</button>
                         </div>
             </form> 
             
                   </Modal.Body>
             <br />
             <br />
             </Modal>
            </div>

             
           


          {/* <button type="button" class="btn btn-primary"  onClick={() => setShowEditForm(true)}>+</button> */}
        


            <div className="row">
          
                {/* <div className="col-md-1">
                    <h1 style={{color:"#0a66c2"}}>{projects && projects.length}</h1>
                </div> */}
                <div className="col-md-11" >
                      
                      {projects && projects.map(item => {
                return (
                    <div key={item._id} style={{display:"flex",flexDirection:"column"}}>
                        <h4 style={{alignSelf:"flex-start"}}>{item.p_title}</h4>
                        <p style={{alignSelf:"flex-start",fontSize:"20px",textAlign:"justify"}}>{item.p_desc }</p>
                        <p style={{alignSelf:"flex-start",fontSize:"20px"}}>
                            {item. start_time} -{item.end_time}</p>
                            <p style={{textAlign:"start",fontSize:18}}><a href={item.p_link} style={{textDecoration:"none"}}>See Project</a></p>
                            
                    </div>    
                )
            })}
                </div>
            </div>
             
            <div  style={{}}>
                    {/* <h3 style={{display:"flex",marginLeft:"20px"}}>Skills and endorsements</h3> */}
                    <i className="fas  fa-plus" onClick={() => setShowEditForm(true)}> {" "} Add  Project </i>
                   
            </div>
           
            
          


        </div>
    );
};

export default Project;

