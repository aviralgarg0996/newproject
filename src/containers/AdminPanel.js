/*This file contains the code for AdminPanel 
Created By-Aviral Garg
Created On-13/04/18
*/

import React, { Component } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import EmployeeRoutes from "../containers/EmployeeRoutes"
import CreateEmployee from "../components/CreateEmployee"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import "../style/adminpanel.css"
import { Breadcrumb } from 'antd';
import SurveyDataTable from '../components/SurveyDataTable';
import BarChart from '../components/BarChart';
import Example from '../components/Testrsat';
// import "../style/Content.css"

export default class AdminPanel extends Component {
  render() {
    return (
     
        <div className="parent_container">
        
       
        <SideBar /> 
             {/* <Header/>  */}
            
             <Route path='/admin/user' component={EmployeeRoutes}/>
             <Route path='/admin/survey' component={SurveyDataTable}/>
             <Route path='/admin/use' component={Example}/>
            
         <div>
           </div> 
      </div>
      
    )
  }
}
