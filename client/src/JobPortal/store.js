import {combineReducers} from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {userReducer ,userPortffolioReducer,userLoginReducer,getAllUserReducer,userProfileReducer,userEduReducer,userSkillReducer,userProjectReducer} from "./reducers/user_reducer"
import {getAllJobReducer,getApplicationByIdReducer,
    getJobByIdReducer,getJobSkillByIdReducer,getJobOtherByIdReducer,getUserAllJobPostReducer,getUserbyjobIdReducer,geJobAppliByuserIdReducer} from "./reducers/job_reducers"

const rootReducer = combineReducers({
    userReducer,userPortffolioReducer,userLoginReducer,getAllUserReducer,userProfileReducer,userEduReducer,userSkillReducer,userProjectReducer,
    getAllJobReducer,getApplicationByIdReducer,
    getJobByIdReducer,getJobOtherByIdReducer,getJobSkillByIdReducer,getUserAllJobPostReducer,getUserbyjobIdReducer,geJobAppliByuserIdReducer
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') ) : null

const initialState = {
   
    userLoginReducer:{currentUser}
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store ;