import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllJobAction} from "../actions/job_actions"
import Jobs from "../component/Jobs"
import Filter from "../component/Filter"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllJobAction("All"));
     },[])

     const {jobs} = useSelector(state => state.getAllJobReducer)

    return (
        <div>
           
            <div className="row">
                <div className="col-2" >

                </div>
                <div className="col-2" >
                    <div style={{position: "fixed"}}>
                    <Filter  />
                    </div>
                    
                </div>
                <div className="col-6">
                    
                     <Jobs  jobs={jobs} />
                </div>
                <div className="col-2">

                </div>

            </div>
        </div>
    );
};

export default Home;