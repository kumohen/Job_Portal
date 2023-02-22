import React,{useEffect} from 'react';
import { Link,withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from "../actions/userActions"

const Navbar = () => {
 
  const dispatch = useDispatch();
  
  const id = JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser"))._id : null
  const name = JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")).name : null
  const typeUser = JSON.parse(localStorage.getItem("currentUser")) ? JSON.parse(localStorage.getItem("currentUser")).applitype : null 

  

    return (
        
            <nav className="navbar fixed-top navbar-expand-lg  mb-5 navbar-white bg-white rounded ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">JOBSEEKER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav mr-auto">
        
           <div className="dropdown mt-2">
           <a className=" dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {name != null && name}
           </a>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <Link className="dropdown-item" to={`/profile/${id}`}>Profile</Link>
              {typeUser != "recuiter" ? <>
                <a className="dropdown-item" href="/myapplication">My Application</a>
              </> : null}
              
             {typeUser == "recuiter" ? <>
              <a className="dropdown-item" href="/createJobApp">createJobApp</a>
             <a className="dropdown-item" href="/jobView">JobView</a>
             </>:null}

          
             <a className="dropdown-item" href="#" onClick={()=>  dispatch(logoutUser())}> <li  >Logout</li></a>
           
           </div>
         </div>
         
            {
              id == null ? <>
                     <li className="nav-item ">
             <a className="nav-link " aria-current="page" href="/login">Login</a>
             </li>
              </>: null
            }
           
        
         
          {/* <li className="nav-item ">
          <a className="nav-link" href="/cart">Cart </a>
         </li>
        */}
       
      </ul>
    </div>
  </div>
</nav>
      
    );
};

export default (Navbar);