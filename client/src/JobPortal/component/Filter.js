import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getAllJobAction} from "../actions/job_actions"

const Filter = () => {

   const  checkValue = [5000,10000,15000,25000,50000 ]
   const[searchKey,setSearchKey] = useState("");
   const dispatch = useDispatch()

    const handleChange= (e)=>{
       
        if((e.target.checked)){
            dispatch(getAllJobAction("Salary",e.target.value))
           
         }
    }

    return (
        <div>
            
            <div className="card price_filter">
            <p className="text-start text-bold">Filter By Salary</p>
             {checkValue.map((item,index)=>(
                          <div className="form-check" key={index}>
                          <input className="form-check-input" type="checkbox" value={item} id= {item.value}
                         
                           onChange={(e) => handleChange(e)} />
                          <label className="form-check-label" htmlFor="flexCheckDefault" style={{marginTop:"7px"}}>
                            ₹{item}
                          </label>
                          </div>
                    ))}
            </div> 

            <div className='card mt-3 p-1'>
            <p className="text-start text-bold">Filter By Location</p> 
              <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="location" className="form-control" />
               
              <button type='button' className="btn btn-primary mt-1 ser_btn" 
              onClick={()=>  dispatch(getAllJobAction("Location",searchKey))}>Search</button>
            </div>
        </div>
    );
};

export default Filter;