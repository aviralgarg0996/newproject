/*This file contains the code for LoginPage of Superadmin 
Created By-Aviral Garg
Created On-13/04/18
*/

import React, { Component } from 'react';
import logo from "../images/logo.png";
import email from "../icons/email.png";
import pass from "../icons/password.png";
import { Input, Button ,Row,Col} from 'antd';
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant"
import { fetchData } from '../sagas/WatcherSaga';
import {  notification } from 'antd';
import "../style/login.css"
import { USER_API_LOGIN_REQUEST } from '../actions/types';
var base64 = require('base-64');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      Password: "",
      visiblestate:"hidden",
      error:"",
     
    }
  }

  render() {
    const { fetching, data, onRequestLogin, error } = this.props;
    return (
        <div id="LoginWholeDiv">
        <div id="Logindiv">
          <div id="logoDiv"><img src={logo} style={{width:"140px",height:"140px"}} alt="DMRC" /></div>
          <p id="WelTxt" className="LoginText">Welcome DMRC!</p>
          <p id="BelTxt" className="LoginText">Enter your email address to login your account.</p><br />
          <Input 
          className="LoginField" 
          value={this.state.userName} 
          prefix={<img src={email} alt="email" />} 
          placeholder="&nbsp;Email Id" 
          onChange={(e)=>{
              this.setState({
                userName:e.target.value
              })
          }} 
        
          /><br /><br />
          {/* <div id="paradiv" style={{visibility:this.state.visiblestate }}>hello</div> */}
         
          <Input 
          className="LoginField"  
          value={this.state.Password} 
          prefix={<img src={pass} alt="email" />} 
          type="password" placeholder="&nbsp;Password" 
          onChange={(e)=>{this.setState({
            Password:e.target.value
          })}} 
          /><br /><br />
          <div className="LoginText1">
            <Button id="LoginButton" type="primary" onClick={() => {
                this.props.onRequestLogin({
                  email:this.state.userName,
                  password:this.state.Password,
                  history: this.props.history
                })
                      

            }}>
              Login&nbsp;&nbsp;&nbsp;<img src={require("../icons/forma.png")} alt="arr" />
            </Button>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
state:state
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
   onRequestLogin: (data) => dispatch({ type: USER_API_LOGIN_REQUEST, data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)