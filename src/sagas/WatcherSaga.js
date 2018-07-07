import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {basepath} from "../utils/Constant"
import {push} from 'react-router-redux'
import { USER_API_LOGIN_REQUEST, USER_API_LOGIN_SUCCESS, USER_API_LOGIN_FAILURE, GET_EMPLOYEE_DATA_REQUEST, GET_SURVEY_DATA_REQUEST } from "../actions/types";
 import {EmployeeDataSaga} from './EmployeeDataSaga'
import {SurveyDataSaga} from "./SurveyDataSaga"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(USER_API_LOGIN_REQUEST, LoginWorkerSaga);
  yield takeLatest(GET_EMPLOYEE_DATA_REQUEST,EmployeeDataSaga);
  yield takeLatest(GET_SURVEY_DATA_REQUEST,SurveyDataSaga)
  }

export function fetchData(data) {
// var encodedString=base64.encode(data.email.toLowerCase() + ':' + data.password);
  return axios({
    method: "post",
    url: basepath+"admin/login",
     data,
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic'
    // + encodedString
    }
 
  });
 
}
  
// worker saga: makes the api call when watcher saga sees the action
function* LoginWorkerSaga(action) {
  try {
    const response = yield call(fetchData,action.data);
    const data = response.data;
  
    // dispatch a success action to the store with the new data
    action.data.history.replace("/admin/user");
    //  action.data.history.replace("/home/user");
    //openNotificationWithIcon('sucess','Login Success','Welcome Admin!');
  } catch (error) {
    // dispatch a failure action to the store with the error
    // if(error.response.status==500)
    // {message.error("Internal Server Error", 2);}
    // else if(error.response.status==404||401)
    // message.error(error.response.data.msg, 2);
    
    yield put({ type: USER_API_LOGIN_FAILURE, error })
    
  }
}