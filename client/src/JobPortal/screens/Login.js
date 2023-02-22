import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux'
import {loginUser} from "../actions/userActions";
import { Link } from 'react-router-dom';

const Login = () => {
 
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    
    const dispatch = useDispatch();
    useEffect(()=>{
       if( localStorage.getItem('currentUser')){
          window.location.href = "/"
        }
    },[])

    const login = ()=> {
       
            const user = {email,password};
            dispatch(loginUser(user));
        
  
    }

    return (
        <div className=''>
            <div className=" row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <div className='card p-5'>

                  
                    <h2>Login</h2>
                    <div>
                    
                        <input required type="text" placeholder="email" 
                        className="form-control job_form" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                        <input required type="password" placeholder="password" 
                        className="form-control job_form" value={password} onChange={(e)=> setPassword(e.target.value)}  />
                       
                        <button onClick={login} className="btn btn-primary mt-3 " style={{width:"80px",height:"50px" }}>Login</button>
                        <br />
                         <p style={{ textAlign:"center",fontSize:"20px" }} ><Link to="/register" style={{ textDecoration:"none" }} >Go to register page</Link> </p> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;