export const userReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
            return {
                loading:true
            }
        case 'USER_REGISTER_SUCCESS':
            return {loading:false,success:true}
        case 'USER_REGISTER_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

export const userLoginReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return {
                loading:true
            }
        case 'USER_LOGIN_SUCCESS':
            return {loading:false,success:true,currentUser:action.payload}
        case 'USER_LOGIN_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

export const userProfileReducer = (state={},action)=>{
    switch(action.type){
        case 'USER_PROFILE_REQUEST':
            return {
                loading:true
            }
        case 'USER_PROFILE_SUCCESS':
            return {loading:false,cUser:action.payload}
        case 'USER_PROFILE_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

export const userEduReducer = (state={userEdus:[]},action)=>{
    switch(action.type){
        case 'USER_EDUCATIONS_REQUEST':
            return {
                loading:true
            }
        case 'USER_EDUCATIONS_SUCCESS':
            return {loading:false,success:true,userEdus:action.payload}
        case 'ADD_EDUCATION_SUCCESS':
            return {loading:false,success:true,
                userEdus:[...state.userEdus,action.payload]}
        case 'USER_EDUCATIONS_FAILED':    
        case 'ADD_EDUCATION_FAILED':      
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}
export const userPortffolioReducer = (state={userPort:[]},action)=>{
    switch(action.type){
        case 'GET_USERSPORTFOLIO_REQUEST':
            return {
                loading:true
            }
        case 'GET_USERSPORTFOLIO_SUCCESS':
            return {loading:false,success:true,userPort:action.payload}
        case 'GET_USERSPORTFOLIO_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}




export const userSkillReducer = (state={skills:[]},action)=>{
    switch(action.type){
        case 'USER_SKILLS_REQUEST':
            return {
                loading:true
            }
        case 'USER_SKILLS_SUCCESS':   
        case 'UPDATE_SKILL_SUCCESS':
            return {loading:false,success:true,skills:action.payload}
        case 'ADD_SKILL_SUCCESS':
            return {
                skills:[...state.skills,action.payload] ,loading:false
            }
            case 'USER_SKILLS_FAILED': 
            case 'ADD_SKILL_FAILED':         
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

// 

export const userProjectReducer = (state={projects:[]},action)=>{
    switch(action.type){
        case 'USER_PROJECTS_REQUEST':
            return {
                loading:true
            }
        case 'USER_PROJECTS_SUCCESS':
            return {loading:false,success:true,projects:action.payload}
        case 'ADD_PROJECT_SUCCESS':
            return {loading:false,success:true,
                projects:[...state.projects,action.payload]}
        case 'USER_PROJECTS_FAILED': 
        case 'ADD_PROJECT_FAILED':         
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}


export const getAllUserReducer = (state={users:[]},action)=>{
    switch(action.type){
        case 'GET_USERS_REQUEST':
            return {...state,loading:true}
        case 'GET_USERS_SUCCESS':
            return {
                users:action.payload,loading:false
            }    
        case 'GET_USERS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}
