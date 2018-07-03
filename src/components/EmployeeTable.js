import { Breadcrumb } from 'antd';
import React, { Component } from 'react'
import { Menu, Dropdown, Icon,Upload } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant";
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
 export default class EmployeeTable extends Component {
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false
    }
  }
  

  render() {
    return (
        <div style={{marginTop:"15px"}}>
          <span id="ButtonSpans">
      
      <Link to="/admin/createemployee" >  <button id="btnExportCsv" style={{color:"#333333",marginRight:"-800px", backgroundColor: '#99b3ff',fontSize:"20px",marginBottom:"8px"}}>Create Employee</button></Link>
      </span>
      
             <DataTable columnResizeMode="expand" 
              resizableColumns={true}
               loadingIcon="fas fa-spinner" 
               
                scrollable={true}>
        <Column field="index"
        header="S.No"
        filter={true}
        style={{width:"50px",textAlign:"right",textAlign:'center'}}/>

       <Column field="_id" 
       header="Emp ID" 
       filter={true}
        style={{width:"80px"}} 
        className='BankId'/> 
        <Column field="picture" 
       filter={true} 
         header="Emp Name" 
        style={{width:"100px",textAlign:"center"}} 
        className='Image'/>
        <Column field="bankName" 
        header="Email" 
        filter={true}
        style={{width:"200px"}} 
        className='bankName'/>
        <Column field="bankShortName" 
        header="Mobile" 
         filter={true} 
         style={{width:"90px",textAlign:'center'}} className='ShortName'/>  
        <Column field="createdAt" 
        header="Created Date" 
         filter={true} 
          style={{width:"90px",textAlign:'center'}} className='CreatedDate'/>  
        
      </DataTable> 
      <h1>Adminfddffdfdf</h1>  
   </div>
    )
  }
}