import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {basepath} from "../utils/Constant"
import {push} from 'react-router-redux'
import { GET_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_FAILURE } from "../actions/types";

// function that makes the api request and returns a Promise for response
export function getData(data,url) {
  return axios({
    method: "post",
    url: url,   
    data:data  
  });
}
  
// worker saga: makes the api call when watcher saga sees the action
export function* EmployeeDataSaga(action) {
  try {
    const response = yield call(getData,action.data,`${basepath}employee/getEmployee`);
    const data = response.data;
    console.log("datainempsaga",data);
    // dispatch a success action to the store with the new data
    yield put({ type: GET_EMPLOYEE_DATA_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_EMPLOYEE_DATA_FAILURE, error })
    alert(error);
    
  }
}