import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({item}) => {
    return (
     
            <div key={item._id} className="card mb-2 p-3">
                 <h3>{item.jobtitle}</h3>
                 <p>{item.comName}</p>
                 <p>Work From :{item.WorkFrom}</p>

                 <p>location:{item.location}</p>
                 
                 <div className="row" >
                    <div className="col-1"></div>
                    <div className="col-3">

                      <p>start Date</p>
                      <p>24 jan ,2023</p>
                    </div> 
                    <div className="col-3">
                      <p>Duration</p>
                      <p>{item.jobduration}</p>
                    </div>
                    <div className="col-3">
                      <p>Salary</p>
                      <p>{item.salary}</p>
                    </div>
                   
                   
                 </div>
                 <div>
                 <Link to={`/job/application/${item._id}`}> <button className='btn btn-primary'>Applicant Detail</button> </Link> 
                <Link to={`/job/${item._id}`}> <button className='btn btn-secondary'>Job Detail</button> </Link> 
                 </div>
                
                 </div>
     
    );
};

export default SingleJob;