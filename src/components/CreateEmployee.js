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
      confirmpassword:"",
      surveyStation:""
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
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="password" value={this.state.confirmpassword} onChange={(e)=>{this.setState({confirmpassword:e.target.value})}} maxLength="30"/></Col></Row>
 <Row><Col md={{span:3,offset:1}} style={{textAlign:"center"}}> <span id="BrandSpan" className="CreateUserText">Survey Station<span style={{color:'red'}}>*</span></span></Col>
 <Col md={{span:10,offset:1}}><input className="CreateUserField1" type="text" value={this.state.surveyStation} onChange={(e)=>{this.setState({surveyStation:e.target.value})}} maxLength="30"/></Col></Row>

 <Row>
     <Button id="btnCreateUser" onClick={()=>{
          if(this.state.empName=="")
          alert("Employee name")
                //   openNotificationWithIcon('warning',"Name",'Enter Employee Name');
                  else  if(this.state.userName=="")
                //   openNotificationWithIcon('warning',"Name",'Enter User Name');
                 alert("Employee name 2")  
                else  if(this.state.email=="")
                //   openNotificationWithIcon('warning',"Email",'Enter Email');
                 alert("Employee name 3")  
                else if(this.state.mobile=="")
                //   openNotificationWithIcon('warning',"Phone",'Enter Contact No.');
                 alert("Employee name 4" )  
                else  if(this.state.password=="")
                //   openNotificationWithIcon('warning',"Password",'Enter Password');
                 alert("Employee name 4")  
                else if(this.state.confirmpassword=="")
                //   openNotificationWithIcon('warning',"Password",'Enter Confirm Password');
                 alert("Employee name 5")  
                else if(this.state.surveyStation=="")
                //   openNotificationWithIcon('warning',"Station",'Enter Survey Station');
                 alert("Employee name 6")  
                else  if(this.state.password!=this.state.confirmpassword)
                  {
                //   openNotificationWithIcon('warning',"Password",'Password Fields not match');
                 alert("Employee name 7")
                this.setState({
                      password:"",
                      confirmpassword:""
                  })
                  }
                  else{
                      axios({
                          method: "post",
                          url: basepath + "employee/addEmployee",
                          data: {
                            userName:this.state.userName,
                            employeeName:this.state.empName,
                            email:this.state.email,
                            password:this.state.confirmpassword,
                            phoneNo:this.state.mobile,
                            surveyStation:this.state.surveyStation
                          },
                        })
                          .then(response => {
                            this.props.history.push("/admin/user")
                          })
                          .catch(error => {
                            alert("Error");
                          })
                  }
               
      } }>Create</Button>
 </Row>
</div>
   </div>
    )
  }
}
// if(this.state.empName=="")
//         openNotificationWithIcon('warning',"Name",'Enter Employee Name');
//         else  if(this.state.userName=="")
//         openNotificationWithIcon('warning',"Name",'Enter User Name');
//         else  if(this.state.email=="")
//         openNotificationWithIcon('warning',"Email",'Enter Email');
//         else if(this.state.mobile=="")
//         openNotificationWithIcon('warning',"Phone",'Enter Contact No.');
//         else  if(this.state.password=="")
//         openNotificationWithIcon('warning',"Password",'Enter Password');
//         else if(this.state.confirmpassword=="")
//         openNotificationWithIcon('warning',"Password",'Enter Confirm Password');
//         else if(this.state.surveyStation=="")
//         openNotificationWithIcon('warning',"Station",'Enter Survey Station');
//         else  if(this.state.password!=this.state.confirmpassword)
//         {
//         openNotificationWithIcon('warning',"Password",'Password Fields not match');
//         this.setState({
//             password:"",
//             confirmpassword:""
//         })
//         }
//         else{
//             axios({
//                 method: "post",
//                 url: basepath + "employee/addEmployee",
//                 data: {
//                   userName:this.state.userName,
//                   employeeName:this.state.empName,
//                   email:this.state.email,
//                   password:this.state.confirmpassword,
//                   phoneNo:this.state.mobile,
//                   surveyStation:this.state.surveyStation
//                 },
//               })
//                 .then(response => {
//                   openNotificationWithIcon(
//                     "success",
//                     " Employee",
//                     "Employee created successfully"
//                   );
        
//                 })
//                 .catch(error => {
//                   alert("Error");
//                 })
//         }
//      }