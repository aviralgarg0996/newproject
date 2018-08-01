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
import { GET_EMPLOYEE_DATA_REQUEST } from '../actions/types';
 class EmployeeTable extends Component {
   componentWillMount(){
     this.props.onRequestData();
   }
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false,
      page:1,
      limit:10
    }
  }
  

  export() {
    this.dt.exportCSV();
}
DateFormat =(date)=>{
  if(date==undefined)
  date="2018-05-07T09:54:38+00:00";
  
    var res = date.split("T");
    var dates=res[0].split("-");
    var date=dates[2]+"/"+dates[1]+"/"+dates[0];
  return date;
  }

   TimeFormat=(date)=>{
    let res = date.split("T");
    let time= res[1].split(".");
    console.log(time);
    let datee=new Date(date);
    return datee.toLocaleTimeString();
  }
createdAt = (rowData, column) => {
  return (
    <div>
      {this.DateFormat(rowData.createdAt)}&nbsp;&nbsp;
       {this.TimeFormat(rowData.createdAt)}
    </div>
  );
};

  render() {
    let employeelist = [];
    console.log("statetete",this.props.state)
    if (this.props.state.data.data) {
      this.props.state.data.data.map((data, key) => {
        let obj;
        obj = {
          ...data,
          index: key + 1 + (this.state.page - 1) * this.state.limit
        };
        employeelist = employeelist.concat(obj);
      });
    }
    return (
        <div style={{marginTop:"15px"}}>
          <div id="ButtonSpans" style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
          }}>
       {/* <span id="selecNos">
      <select id="NoDropDown"
      onChange={(event)=>{
        this.setState({limit:event.target.value})
        this.props.onRequestData({page:1,limit:event.target.value})
       }}>
        <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
  <option value="40">40</option>
      </select></span> */}
      <Link to="/admin/user/createemployee" >  <button id="btnCreateUser" >Create Employee</button></Link>
      <button id="btnCreateUser" onClick={()=>{
this.export();
      }}>Export CSV</button>
      </div>
      
             <DataTable columnResizeMode="expand" 
              resizableColumns={true}
              loading={this.props.fetching}
               loadingIcon="fas fa-spinner" 
               ref={(el)=>{this.dt=el;}}
               scrollHeight={"51vh"}
               value={employeelist}
                scrollable={true}>
        <Column field="index"
        header="S.No"
        filter={true}
        style={{width:"50px",textAlign:"right",textAlign:'center'}}/>

       <Column field="_id" 
       header="Emp ID" 
       filter={true}
        style={{width:"70px"}} 
        className='BankId'/> 

        <Column field="employeeName" 
       filter={true} 
         header="Emp Name" 
        style={{width:"100px",textAlign:"center"}} 
        className='Image'/>
  <Column field="userName" 
        header="User Name" 
         filter={true} 
         style={{width:"110px",textAlign:'center'}} className='ShortName'/>  
        <Column field="email" 
        header="Email" 
        filter={true}
        style={{width:"200px"}} 
        className='bankName'/>

        <Column field="phoneNo" 
        header="Mobile" 
         filter={true} 
         style={{width:"90px",textAlign:'center'}} className='ShortName'/>  


         

        <Column field="createdAt" 
        header="Created Date" 
         filter={true} 
         body={this.createdAt}
          style={{width:"170px",textAlign:'center'}} className='CreatedDate'/>  
        
        <Column field="surveyStation" 
        header="Survey Station" 
         filter={true} 
          style={{width:"170px",textAlign:'center'}} className='surveyStation'/> 

      </DataTable> 
   </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("datainemp",state)
  return {
    state: state,
    fetching: state.fetching,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestData: data =>
      dispatch({ type: GET_EMPLOYEE_DATA_REQUEST, data }),
    // onRequestExportCSV: (data, value) =>
    //   dispatch({ type: USER_TABLE_CSV, data, value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeTable);