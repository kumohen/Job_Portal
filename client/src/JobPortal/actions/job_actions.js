import axios from 'axios';

export const getAllJobAction = (type,data=null)=> async dispatch =>{
     dispatch({
         type:'GET_JOBS_REQUEST'
     })
     try {
         var response 
        
        if(type === "All"){
            const newData = await axios.get('/api/jobs/getAllJob')
            response = newData.data
        }
        if(type === "Salary"){
            const newData = await axios.get('/api/jobs/getAllJob')
            const RdATA = newData.data.filter(item => item.salary > data)
            response = RdATA
        }
        if(type === "Location"){
            const newData = await axios.get('/api/jobs/getAllJob')
            const RdATA = newData.data.filter(item => item.location.toLowerCase() == data.toLowerCase())
            response = RdATA
        }


         console.log(response.data)
       
         dispatch({
            type:'GET_JOBS_SUCCESS',
            payload:response
        })
     } catch (error) {
        dispatch({
            type:'GET_JOBS_FAILED',
            payload:error
        })
     }
}



export const getJobByIdAction = (id)=> async dispatch =>{
    dispatch({
        type:'GET_JOB_BY_ID'
    })
    try {
        const response = await axios.get(`/api/jobs/job/${id}`)
        dispatch({
           type:'GET_JOB_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_JOB_BY_ID_FAILED',
           payload:error
       })
    }
}
export const getJobAnotherByIdAction = (id)=> async dispatch =>{
    dispatch({
        type:'GET_JOBOTHER_BY_ID'
    })
    try {
        const response = await axios.get(`/api/jobs/jobanother/${id}`)
        dispatch({
           type:'GET_JOBAOTHER_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_JOBOTHER_BY_ID_FAILED',
           payload:error
       })
    }
}
export const getJobSkillByIdAction = (id)=> async dispatch =>{
    dispatch({
        type:'GET_JOBSKILL_BY_ID'
    })
    try {
        const response = await axios.get(`/api/jobs/jobskill/${id}`)
        dispatch({
           type:'GET_JOBSKILL_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_JOBSKILL_BY_ID_FAILED',
           payload:error
       })
    }
}

export const getApplicaByIdAction = (id)=> async dispatch =>{
    dispatch({
        type:'GET_APPLICATION_BY_ID'
    })
    try {
        const response = await axios.get(`/api/jobs/application/${id}`)
        dispatch({
           type:'GET_APPLICATION_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_APPLICATION_BY_ID_FAILED',
           payload:error
       })
    }
}

export const getAppReqStatusByIdAction = (obj)=> async dispatch =>{
    dispatch({
        type:'GET_APPSTATUS_BY_ID'
    })
    try {
        const response = await axios.post(`/api/jobs/appReqRe`,obj)
        dispatch({
           type:'GET_APPSTATUS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_APPSTATUS_FAILED',
           payload:error
       })
    }
}


export const createNewJobAction = (user)=> async dispatch =>{
    dispatch({
        type:'USER_APPLYJOBREGISTER_REQUEST'
    })
   
    try {
      const res =  await axios.post("/api/jobs/addjob",user);
      console.log(res)
        dispatch({
           type:'USER_APPLYJOslslBREGISTER_SUCCESS'
           
       })
    } catch (error) {
       dispatch({
           type:'USER_APPLYJOBRdlldldEGISTER_FAILED',
           payload:error
       })
    }
}

export const applyForJobAction = (user)=> async dispatch =>{
    dispatch({
        type:'USER_APPLYJOBREGISTER_REQUEST'
    })
   
    try {
      const res =  await axios.post("/api/jobs/applyjob",user);
      console.log(res)
        dispatch({
           type:'USER_APPLYJOBREGISTER_SUCCESS'
           
       })
    } catch (error) {
       dispatch({
           type:'USER_APPLYJOBREGISTER_FAILED',
           payload:error
       })
    }
}

export const getAlljobPostofUser = (id)=> async dispatch =>{
    dispatch({
        type:'USER_USERJOBPOST_REQUEST'
    })
   
    try {
      const response =  await axios.post("/api/jobs/getMyjobPost",{id});
     
        dispatch({
           type:'USER_USERJOBPOST_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_USERJOBPOST_FAILED',
           payload:error
       })
    }
}

export const getAllUserByJobIdAction = (id)=> async dispatch =>{
    dispatch({
        type:'USER_USERBYJOBID_REQUEST'
    })
   
    try {
      const response =  await axios.post("/api/jobs/getUserByjobId",{id});
     
        dispatch({
           type:'USER_USERBYJOBID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_USERBYJOBID_FAILED',
           payload:error
       })
    }
}

export const getAllJobAppliByuserId = (id)=> async dispatch =>{
    dispatch({
        type:'USER_JOBBYUSERID_REQUEST'
    })
   
    try {
      const response =  await axios.post("/api/jobs/getJobAppliByuserId",{id});
     
        dispatch({
           type:'USER_JOBBYUSERID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_JOBBYUSERID_FAILED',
           payload:error
       })
    }
}

export const addSkillForJob = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_JOBSKILL_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/jobs/addskill',post);
      
        dispatch({
           type:'ADD_JOBSKILL_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_JOBSKILL_FAILED',
           payload:error
       })
    }
}
export const addOtherInfoForJob = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_JOBINFO_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/jobs/addjobinfo',post);
      
        dispatch({
           type:'ADD_JOBSINFO_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_JOBINFO_FAILED',
           payload:error
       })
    }
}