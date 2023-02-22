import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector } from 'react-redux'
import {userProfileAction,userEducations,userProjects,userSkills} from "../actions/userActions"
import Education from "../component/Education"
import Skillscompoent from "../component/Skills"
import Project from "../component/Project"
import Portfolio from "../component/Portfolio"

const Profile = ({match}) => {
     const dispatch = useDispatch()

    useEffect(()=>{
       const id = match.params.id
       if(id){
        dispatch(userProfileAction(id))
        dispatch(userEducations(id))
        dispatch(userProjects(id))
        dispatch(userSkills(id))
       }
    },[])
    const {cUser} = useSelector(state => state.userProfileReducer)
    const {userPort} = useSelector(state => state.userPortffolioReducer)
    

    return (
        <div className="col-md-10 m-auto">
        <div className='card p-4'>
            <div className="row">
                <div className="col-md-4 ">
                    {cUser && cUser[0] && (
                        <>
                        <h2>{cUser[0].name.toUpperCase()}</h2>
                        <p>{cUser[0].email}</p>
                        <p> +91 {userPort && userPort[0] && userPort[0].mobile_no}</p>
                        <p>{userPort && userPort[0] &&  userPort[0].location}</p>
                        </>
                    )}
                </div>
                <div className="col-md-6"></div>
            </div>
            <hr />

            <div className="row">
                <div className="col-md-2">
                  <h4>Education Details</h4>
                </div>
                <div className="col-md-1"></div>
                
                <div className="col-md-6 ">
                
            
                <Education   />
              
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-md-2">
                <h4>Skills Details</h4>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 ">
                
             
              
                <Skillscompoent  />
                </div>
            </div>


            <hr />

            <div className="row">
                <div className="col-md-2">
                <h4>PERSONAL PROJECTS</h4>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
               
                
               
                <Project   />
                </div>
            </div>
            <hr />

            <div className="row">
            <div className="col-md-2">
                
            <h4>PORTFOLIO</h4>
                </div>
                <div className="col-md-1"></div>
                
                <div className="col-md-6">
               
                
               
                <Portfolio   />
                </div>
              
            </div>
           
        </div>
        </div>
    );
};

export default Profile;