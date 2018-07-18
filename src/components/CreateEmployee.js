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
 <Col md={{span:10,offset:1}}>
 <select
 value={this.state.surveyStation}
 onChange={(event)=>{this.setState({surveyStation: event.target.value});}} 
 className="CreateUserField1" >
  <option value="AIIMS">AIIMS</option>
  <option value="Anand Vihar ISBT">Anand Vihar ISBT</option>
  <option selected value="Azadpur">Azadpur</option>
  <option value="Badarpur">Badarpur</option>
  <option value="Badli">Badli</option>
  <option value="BHIKAJI STATION">BHIKAJI STATION</option>
  <option value="Central Secretariat">Central Secretariat</option>
  <option value="	Chirag Delhi Station">	Chirag Delhi Station</option>
  <option value="Dabri Mor Station">Dabri Mor Station</option>
  <option value="DELHI AEROCITY STATION">DELHI AEROCITY STATION</option>
  <option value="	Delhi Cantt. Station">	Delhi Cantt. Station</option>
  <option value="	Delhi Gate">	Delhi Gate</option>
  <option value="Nazafgarh">Nazafgarh</option>
  <option value="Dilshad Garden">Dilshad Garden</option>
  <option value="	Dwarka Mor">	Dwarka Mor</option>
  <option value="Dwarka Sec 21">Dwarka Sec 21</option>
  <option value="G K Enclave Station">G K Enclave Station</option>
  <option value="Gobind Puri">Gobind Puri</option>
  <option value="	Green Park">	Green Park</option>
  <option value="GTB Nagar">GTB Nagar</option>
  <option value="Hauzkhas">Hauzkhas</option>
  <option value="I G I AIRPORT STATION">I G I AIRPORT STATION</option>
  <option value="I P extension Station">I P extension Station</option>
  <option value="I.G.D Station">I.G.D Station</option>
  <option value="INA">INA</option>
  <option value="ITO">ITO</option>
  <option value="Jahangir Puri">Jahangir Puri</option>
  <option value="Janak Puri E">Janak Puri E</option>
  <option value="Janak Puri W">Janak Puri W</option>
  <option value="Janpath">Janpath</option>
  <option value="JasolaViharShaheenBagh">JasolaViharShaheenBagh</option>
  <option value="Jhilmil">Jhilmil</option>
  <option value="JLN Stadium">JLN Stadium</option>
  <option value="Kalindikunj">Kalindikunj</option>
  <option value="Kalkaji Mandir">Kalkaji Mandir</option>
  <option value="Karkardooma">Karkardooma</option>
  <option value="	Lajpat Nagar">	Lajpat Nagar</option>
  <option value="Laxmi Nagar">Laxmi Nagar</option>
  <option value="Malaviya Nagar">Malaviya Nagar</option>
  <option value="Mandi House">Mandi House</option>
  <option value="Maujpur Station">Maujpur Station</option>
  <option value="Mayapuri Station">Mayapuri Station</option>
  <option value="	Mayur VPH1">	Mayur VPH1</option>
  <option value="Moti Bagh Station">Moti Bagh Station</option>
  <option value="Mundka">Mundka</option>
  <option value="Nangloi">Nangloi</option>
  <option value="Nehru Place">Nehru Place</option>
  <option value="Netaji Subhash Place">Netaji Subhash Place</option>
  <option value="NIZAMUDIN STATION">NIZAMUDIN STATION</option>
  <option value="Okhla">Okhla</option>
  <option value="Paschim V E">Paschim V E</option>
  <option value="	Patel Chowk">	Patel Chowk</option>
  <option value="Peera Garhi">Peera Garhi</option>
  <option value="Pragati Maidan">Pragati Maidan</option>
  <option value="R K Ashram">R K Ashram</option>
  <option value="Rajouri Garden">Rajouri Garden</option>
  <option value="Rithala">Rithala</option>
  <option value="	Rohini East">	Rohini East</option>
  <option value="Rohini West">Rohini West</option>
  <option value="Saket">Saket</option>
  <option value="Seelampur">Seelampur</option>
  <option value="Shadipur">Shadipur</option>
  <option value="Shahdara">Shahdara</option>
  <option value="SHASTRI PARK STATION">SHASTRI PARK STATION</option>
  <option value="shiv Vihar Station">shiv Vihar Station</option>
  <option value="Shivaji Park">Shivaji Park</option>
  <option value="SOUTH EXT. STATION">SOUTH EXT. STATION</option>
  <option value="Subhash Nagar">Subhash Nagar</option>
  <option value="Trilokpuri Station">Trilokpuri Station</option>
  <option value="	Udyog Bhavan">	Udyog Bhavan</option>
  <option value="Uttam Ngr E">Uttam Ngr E</option>
  <option value="	Vasant Vihar Station">	Vasant Vihar Station</option>
  <option value="Vinod Nagar Station">Vinod Nagar Station</option>
  <option value="Vishwa Vidalaya">Vishwa Vidalaya</option>
  
  
</select>
 {/* <input className="CreateUserField1" 
 type="text"
  value={this.state.surveyStation} 
  onChange={(e)=>{this.setState({surveyStation:e.target.value})}} 
  maxLength="30"/>
   */}
  </Col></Row>

 <Row>
     <Button id="btnCreateUser" onClick={()=>{
          if(this.state.empName=="")
          alert("Employee name")
                //   openNotificationWithIcon('warning',"Name",'Enter Employee Name');
                  else  if(this.state.userName=="")
                //   openNotificationWithIcon('warning',"Name",'Enter User Name');
                 alert("Enter User name ")  
                else  if(this.state.email=="")
                //   openNotificationWithIcon('warning',"Email",'Enter Email');
                 alert("Enter Email")  
                else if(this.state.mobile=="")
                //   openNotificationWithIcon('warning',"Phone",'Enter Contact No.');
                 alert("Enter Mobile" )  
                else  if(this.state.password=="")
                //   openNotificationWithIcon('warning',"Password",'Enter Password');
                 alert("Enter Password")  
                else if(this.state.confirmpassword=="")
                //   openNotificationWithIcon('warning',"Password",'Enter Confirm Password');
                 alert("Enter Confirm Password")  
                else if(this.state.surveyStation=="")
                //   openNotificationWithIcon('warning',"Station",'Enter Survey Station');
                 alert("Enter Survey Station")  
                else  if(this.state.password!=this.state.confirmpassword)
                  {
                //   openNotificationWithIcon('warning',"Password",'Password Fields not match');
                 alert("Password not match")
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
      <Link to="/admin/user" > <Button id="btnCreateUser">Cancel</Button></Link>
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