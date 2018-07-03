/*This file contains the code for AdminPanel 
Created By-Aviral Garg
Created On-13/04/18
*/

import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import EmployeeTable from "../components/EmployeeTable"
import CreateEmployee from "../components/CreateEmployee"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import "../style/adminpanel.css"
import { Breadcrumb } from 'antd';
// import "../style/Content.css"

export default class AdminPanel extends Component {
  render() {
    return (
     
        <div className="parent_container">
        
       
        <SideBar /> 
             <Header/> 
             <div className="content_container">
             
             <Route path='/admin/user' component={EmployeeTable}/>
             <Route path='/admin/createemployee' component={CreateEmployee}/>
             
             </div>
         <div>
           </div> 
      </div>
      
    )
  }
}
