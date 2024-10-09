import { combineReducers } from 'redux';
import { apiReducer } from './apiReducers';
import { cartReducer } from './cartReducer';
import { signupReducer } from './signupReducer';



const rootReducer = combineReducers({
  posts: apiReducer,  // Posts data from API
  cart: cartReducer,  // Cart state
  singup: signupReducer,
});

export default rootReducer;