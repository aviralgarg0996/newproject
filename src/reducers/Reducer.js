import { USER_API_LOGIN_SUCCESS, GET_EMPLOYEE_DATA_SUCCESS } from "../actions/types";

let initialState={
    userTableCSV:'',
    fetching:false,
    data:{},
    error:{},
 }
 
export function Reducer(state=initialState,action){
   switch(action.type)
   {
    case USER_API_LOGIN_SUCCESS:{
        return {
            ...state,
           data:action.data,
           fetching:false,
        } 
        break; 
    };
    case GET_EMPLOYEE_DATA_SUCCESS:{
        return {
            ...state,
           data:action.data,
           fetching:false,
        } 
        break; 
    };

    default:
        return state;
    }
    


}

