import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from "../actions/userActions";
import { Link } from 'react-router-dom';


const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[cpassword,setcPassword] = useState("");
    const[itemSelect,setItemSelect] = useState("")
    
    const registerState = useSelector(state => state.userReducer);
    const {error,loading ,success} = registerState ;

    const dispatch = useDispatch();

    const register = ()=> {
        if(password !== cpassword){
            alert("password does not matched")
        } else {
            const user = {name,email,password,applitype:itemSelect};
         
            dispatch(registerUser(user));
        }
  
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                
                <div className="col-md-6 mt-5 shadow p-3 mb-5 bg-white rounded">
                <div className='card p-5'>
                    <h2 style={{textAlign:"center" }} >Register As a {itemSelect === "" ? "candidate" : itemSelect} </h2>
                    <div>
                        <input required type="text" placeholder="name"
                         className="form-control job_form" value={name} onChange={(e)=> setName(e.target.value)} />
                        <input required type="text" placeholder="email"
                         className="form-control job_form" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                        <input required type="password" placeholder="password"
                         className="form-control job_form" value={password} onChange={(e)=> setPassword(e.target.value)}  />
                        <input required type="password" placeholder="confirmpassword" className="form-control job_form" value={cpassword} 
                         onChange={(e)=> setcPassword(e.target.value)} />
                         <br />
                        <select value={itemSelect} onChange={e => setItemSelect(e.target.value)}>
                                <option value="recuiter">Recuiter</option>
                                <option value="candidate">Candidate</option>
                               
                               
                         </select>
                         <br />
                       
                        <button onClick={register} className="btn btn-primary mt-3 " style={{width:"100px",height:"50px" }}>Register</button>
                        <br />
                         <p style={{ textAlign:"center",fontSize:"20px" }} ><Link to="/login" style={{ textDecoration:"none" }} >Go to login page</Link> </p> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;