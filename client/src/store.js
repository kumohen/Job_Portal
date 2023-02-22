import {combineReducers} from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {getAllPizzasReducer,addPizzaReducer,getPizzaById,editPizzaReducer} from "./reducers/pizza_reducer";
import {cartReducer} from "./reducers/cart_reducer";
import {userReducer ,userLoginReducer,getAllUserReducer} from "./reducers/user_reducer"
// import {placeOrderReducer,getUsersOrdersReducer,getALLsOrdersReducer} from "./reducers/order_reducer"

const rootReducer = combineReducers({
    getAllPizzasReducer ,getUsersOrdersReducer,addPizzaReducer,getPizzaById,editPizzaReducer,
    cartReducer,userReducer,userLoginReducer,placeOrderReducer,getALLsOrdersReducer,getAllUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') ) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') ) : null

const initialState = {
    cartReducer:{cartItems},
    userLoginReducer:{currentUser}
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store ;