import { USER_API_LOGIN_SUCCESS, GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_REQUEST, GET_SURVEY_DATA_SUCCESS, GET_SURVEY_DATA_REQUEST } from "../actions/types";

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
    case GET_EMPLOYEE_DATA_REQUEST:{
        return{
            ...state,
            fetching:true
        }
    }
    case GET_EMPLOYEE_DATA_SUCCESS:{
        return {
            ...state,
           data:action.data,
           fetching:false,
        } 
        break; 
    };
case GET_SURVEY_DATA_SUCCESS:{
    console.log("request Success")
    
    return {
        ...state,
       data:action.data,
       fetching:false,
    } 
    break; 
}
case GET_SURVEY_DATA_REQUEST:{
    console.log("request true")
    return{
        ...state,
        fetching:true
    } 
}
    default:
        return state;
    }
    


}

