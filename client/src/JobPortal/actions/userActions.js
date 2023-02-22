
import axios from 'axios';

export const registerUser = (user)=> async dispatch =>{
     dispatch({
         type:'USER_REGISTER_REQUEST'
     })
    
     try {
       const res =  await axios.post("/api/applicant/register",user);
       window.location.href = "/login";
         dispatch({
            type:'USER_REGISTER_SUCCESS'
            
        })
     } catch (error) {
        dispatch({
            type:'USER_REGISTER_FAILED',
            payload:error
        })
     }
}

export const loginUser = (user)=> async dispatch =>{
    dispatch({
        type:'USER_LOGIN_REQUEST'
    })
   
    try {
      const res =  await axios.post("/api/applicant/login",user);
      
        dispatch({
           type:'USER_LOGIN_SUCCESS',
           payload:res.data
       })
       localStorage.setItem('currentUser',JSON.stringify(res.data));
       window.location.href = "/";
    } catch (error) {
       dispatch({
           type:'USER_LOGIN_FAILED',
           payload:error
       })
    }
}


export const logoutUser = ()=> async dispatch =>{
    
       localStorage.removeItem('currentUser');
       window.location.href = "/login";
   
}

export const userProfileAction = (id)=> async dispatch =>{
    dispatch({
        type:'USER_PROFILE_REQUEST'
    })
   
    
    try {
        const response = await axios.post(`/api/applicant/profile/me` ,{id});
         console.log(response)
        dispatch({
           type:'USER_PROFILE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_PROFILE_FAILED',
           payload:error
       })
    }
}

export const userEducations = (id)=> async dispatch =>{
    dispatch({
        type:'USER_EDUCATIONS_REQUEST'
    })
  
    try {
        const response = await axios.post(`/api/applicant/allUserEdu`,{id});
        console.log(response)
        dispatch({
           type:'USER_EDUCATIONS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_EDUCATIONS_FAILED',
           payload:error
       })
    }
}
export const userProjects = (id)=> async dispatch =>{
    dispatch({
        type:'USER_PROJECTS_REQUEST'
    })
  
    try {
        const response = await axios.post(`/api/applicant/allUserProject`,{id});
       
        dispatch({
           type:'USER_PROJECTS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_PROJECTS_FAILED',
           payload:error
       })
    }
}
export const userSkills = (id)=> async dispatch =>{
    dispatch({
        type:'USER_SKILLS_REQUEST'
    })
  
    try {
        const response = await axios.post(`/api/applicant/allUserSkill`,{id});
       
        dispatch({
           type:'USER_SKILLS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'USER_SKILLS_FAILED',
           payload:error
       })
    }
}

export const addEducation = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_EDUCATION_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/applicant/addEdu',post);
      
        dispatch({
           type:'ADD_EDUCATION_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_EDUCATION_FAILED',
           payload:error
       })
    }
}

export const addProject = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_PROJECT_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/applicant/addProject',post);
      
        dispatch({
           type:'ADD_PROJECT_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_PROJECT_FAILED',
           payload:error
       })
    }
}

export const addASkill = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_SKILL_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/applicant/addSkills',post);
      
        dispatch({
           type:'ADD_SKILL_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_SKILL_FAILED',
           payload:error
       })
    }
}

export const updateASkill = (post)=> async dispatch =>{
    dispatch({
        type:'UPDATE_SKILL_REQUEST'
    })
  
    try {
        const resp = await axios.post('/api/applicant/updateSkills',post);

        const id = post.uId ;
        const response = await axios.post(`/api/applicant/allUserSkill`,{id});


      
        dispatch({
           type:'UPDATE_SKILL_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'UPDATE_SKILL_FAILED',
           payload:error
       })
    }
}

export const deleteASkill = (post)=> async dispatch =>{
    dispatch({
        type:'DELETE_SKILL_REQUEST'
    })
    
    try {
        const resp = await axios.post('/api/applicant/deleteSkills',post);

    const id = post.uId ;
    const response = await axios.post(`/api/applicant/allUserSkill`,{id});

    dispatch({
        type:'USER_SKILLS_SUCCESS',
        payload:response.data
    })
      
    //     dispatch({
    //        type:'UPDATE_SKILL_SUCCESS',
    //        payload:response.data
    //    })
    } catch (error) {
       dispatch({
           type:'UPDATE_SKILL_FAILED',
           payload:error
       })
    }
}


// portfolio 
export const addUserPortfolioAction = (post)=> async dispatch =>{
    dispatch({
        type:'ADD_PORTFOLIO_REQUEST'
    })
  
    try {
        const response = await axios.post('/api/applicant/addPortfolio',post);
      
        dispatch({
           type:'ADD_PORTFOLIO_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_PORTFOLIO_FAILED',
           payload:error
       })
    }
}

export const getAllUserPortfolio = (id)=> async dispatch =>{
    dispatch({
        type:'GET_USERSPORTFOLIO_REQUEST'
    })
    try {
        const response = await axios.post('/api/applicant/allUserPort',{id})
        dispatch({
           type:'GET_USERSPORTFOLIO_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_USERSPORTFOLIO_FAILED',
           payload:error
       })
    }
}




export const getAllUser = ()=> async dispatch =>{
    dispatch({
        type:'GET_USERS_REQUEST'
    })
    try {
        const response = await axios.get('/api/applicant/allUser')
        dispatch({
           type:'GET_USERS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_USERS_FAILED',
           payload:error
       })
    }
}

export const deleteUser = (userId)=> async dispatch =>{
   
    try {
       await axios.post('/api/applicant/deleteUser',{userId});
      alert("pizza deleted");
      window.location.reload()
      
    } catch (error) {
        console.log("llslld");
    }
}
