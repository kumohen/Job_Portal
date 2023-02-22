
export const getAllJobReducer = (state={jobs:[]},action)=>{
    switch(action.type){
        case 'GET_JOBS_REQUEST':
            return {...state,loading:true}
        case 'GET_JOBS_SUCCESS':
            return {
                jobs:action.payload,loading:false
            }    
        case 'GET_JOBS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getUserAllJobPostReducer = (state={jobsPost:[]},action)=>{
    switch(action.type){
        case 'USER_USERJOBPOST_REQUEST':
            return {...state,loading:true}
        case 'USER_USERJOBPOST_SUCCESS':
            return {
                jobsPost:action.payload,loading:false
            }    
        case 'USER_USERJOBPOST_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getUserbyjobIdReducer = (state={appliList:[]},action)=>{
    switch(action.type){
        case 'USER_USERBYJOBID_REQUEST':
            return {...state,loading:true}
        case 'USER_USERBYJOBID_SUCCESS':
            return {
                appliList:action.payload,loading:false
            }    
        case 'USER_USERBYJOBID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const geJobAppliByuserIdReducer = (state={myJob:[]},action)=>{
    switch(action.type){
        case 'USER_JOBBYUSERID_REQUEST':
            return {...state,loading:true}
        case 'USER_JOBBYUSERID_SUCCESS':
            return {
                myJob:action.payload,loading:false
            }    
        case 'USER_JOBBYUSERID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getJobByIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_JOB_BY_ID':
            return {...state,loading:true}
        case 'GET_JOB_BY_ID_SUCCESS':
     
       
            return {
                job:action.payload,loading:false
            }    
        case 'GET_JOB_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getApplicationByIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_APPLICATION_BY_ID':
            return {...state,loading:true}
        case 'GET_APPLICATION_BY_ID_SUCCESS':
     
       
            return {
                applica:action.payload,loading:false
            }    
        case 'GET_APPLICATION_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}


export const getJobOtherByIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_JOBOTHER_BY_ID':
            return {...state,loading:true}
        case 'GET_JOBAOTHER_BY_ID_SUCCESS':
     
       
            return {
                jobanother:action.payload,loading:false
            }    
        case 'GET_JOBOTHER_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

// export const addJobSkillReducer = (state={skills:[]},action)=>{
//     switch(action.type){
//         case 'ADD_JOBSKILL_REQUEST':
//             return {
//                 loading:true
//             }
//         case 'USER_SKILLS_SUCCESS':
//             return {loading:false,success:true,skills:action.payload}
//         case 'USER_SKILLS_FAILED':          
//             return {loading:false,error:action.payload}
       
//         default:
//             return state         
//     }
// }


export const getJobSkillByIdReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_JOBSKILL_BY_ID':
            return {...state,loading:true}
        case 'GET_JOBSKILL_BY_ID_SUCCESS':
            
     
       
            return {
                jobskill:action.payload,loading:false
            }    
        case 'GET_JOBSKILL_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}