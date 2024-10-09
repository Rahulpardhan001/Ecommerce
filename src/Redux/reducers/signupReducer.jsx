import { SIGNUP } from "../actions/signupAction"

 const initialState={
    user:[]
 }

export const signupReducer = (state= initialState, action)=>{

    switch(action.type){
        case  SIGNUP:
            return{
                ...state,
                user:action.payload,
            }

          default:
            return state   
    }
}


