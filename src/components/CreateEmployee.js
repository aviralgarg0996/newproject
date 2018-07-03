import { Breadcrumb, Button } from 'antd';
import React, { Component } from 'react'
import { Menu, Dropdown, Icon,Upload,Row,Col } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant";
import {openNotificationWithIcon} from "../utils/Method"
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import "../style/createemployee.css"
 export default class CreateEmployee extends Component {
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false,
      empName:"",
      userName:"",
      email:"",
      name:"",
      mobile:"",
      password:"",
      confirmpassword:""
    }
  }
  

  render() {
    return (
        <div style={{marginTop:"30px"}}>
   <div id="CreateUserDiv">
  <Row>
      <Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Employee Name<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="text" value={this.state.empName} onChange={(e)=>{this.setState({empName:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">User Name<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="text" value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Email<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="text" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Mobile No.<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="text" value={this.state.mobile} onChange={(e)=>{this.setState({mobile:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Password<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Confirm Password<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="password" value={this.state.Confirmpassword} onChange={(e)=>{this.setState({Confirmpassword:e.target.value})}} maxLength="30"/></Col></Row>
 <Row>
     <Button id="createBtn">Create</Button>
 </Row>
</div>
   </div>
    )
  }
}