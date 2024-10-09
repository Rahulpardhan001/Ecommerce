import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk }from 'redux-thunk';
// import rootReducer from './reducers/mainReducer';
import { apiReducer } from './reducers/apiReducers';
import rootReducer from './reducers/mainReducer';


// Create store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;