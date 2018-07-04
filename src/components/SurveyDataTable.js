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
import Header1 from './Header1';
 export default class SurveyDataTable extends Component {
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false
    }
  }
  

  render() {
    return (
        <div>
         <Header1/>
        <div className="parent_container">
      
             <div className="content_container">
             <div style={{marginTop:"15px"}}>
      
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
</div>
             </div>
         <div>
           </div> 
      </div>
      </div>
       
    )
  }
}