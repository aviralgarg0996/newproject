import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {basepath} from "../utils/Constant"
import {push} from 'react-router-redux'

// import {BidsByBankSaga} from './BidsByBankSaga;
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
//   yield takeLatest(USER_API_CALL_REQUEST, LoginWorkerSaga);
 
  }

// function that makes the api request and returns a Promise for response
export function fetchData(data) {
// var encodedString=base64.encode(data.email.toLowerCase() + ':' + data.password);
  return axios({
    method: "get",
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
    localStorage.setItem("token", data.token);
    localStorage.setItem("name",data.userName);
    localStorage.setItem("email",data.email);
    localStorage.setItem("picture",data.picture);
    // dispatch a success action to the store with the new data
    // yield put({ type: USER_API_CALL_SUCCESS, data });
    //  action.data.history.replace("/home/user");
    //openNotificationWithIcon('sucess','Login Success','Welcome Admin!');
  } catch (error) {
    // dispatch a failure action to the store with the error
    // if(error.response.status==500)
    // {message.error("Internal Server Error", 2);}
    // else if(error.response.status==404||401)
    // message.error(error.response.data.msg, 2);
    
    // yield put({ type: USER_API_CALL_FAILURE, error })
    
  }
}