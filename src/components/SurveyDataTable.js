import { Breadcrumb, Col } from 'antd';
import React, { Component } from 'react'
import { Menu, Dropdown, Icon,Upload ,DatePicker} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant";
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import {ColumnGroup} from 'primereact/components/columngroup/ColumnGroup';
import { InputText } from "primereact/components/inputtext/InputText";
import {Calendar} from 'primereact/components/calendar/Calendar';
import {Row} from 'primereact/components/row/Row';
import moment from "moment"
import "../style/Content.css"
// import {ColumnGroup} from 'primereact/ColumnGroup';
// import {Row} from 'primereact/row';
import Header1 from './Header1';

import { GET_SURVEY_DATA_REQUEST } from '../actions/types';
import BarChart from './BarChart';
import NavigationRoute from './NavigationRoute';
class SurveyDataTable extends Component {
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false,
      createdDate:"",
      createdBy:""
    }
  }
  componentWillMount() {
    this.props.onRequestSurveyData()
  }
  export() {
    this.dt.exportCSV();
}
createdByTemp = (rowData, column) => {
  if (rowData.createdBy) {
    return <div>{rowData.createdBy.name}</div>;
  }
  
}
travelTime=(rowData,column)=>{
  return <div>{rowData.commuteTrip.opinionTrasport}</div>
}
cost=(rowData,column)=>{
  return <div>{rowData.commuteTrip1.opinionCost}</div>
}
comfort=(rowData,column)=>{
  return <div>{rowData.commuteTrip2.opinionComfort}</div>
}
safety=(rowData,column)=>{
  return <div>{rowData.commuteTrip3.opinionSafety}</div>
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
    // let blankFilter = <div style={{margin:"4px"}}><InputText readOnly /></div>;
    let surveyList = [];
    console.log("statetete",this.props.state)
    if (this.props.state.data.data) {
      this.props.state.data.data.map((data, key) => {
        let obj;
        obj = {
          ...data,
          index: data.surveyStation+data.enumeratorName+(key+1),
          sno:key+1
        };
        surveyList = surveyList.concat(obj);
      });
    }
//     let headerGroup = <ColumnGroup>
//     <Row>
//         <Column header="S.No" rowSpan={5} />
//         <Column header="User" colSpan={10}/>
//         <Column header="Survey Station" rowS
//         {/* <Column header="Sale Rate" colSpan={4} /> */}
//     </Row>
//     <Row>
//         <Column header="UserName" colSpan={2} />
//         <Column header="Email" colSpan={2} />
//         <Column header="Contact No" colSpan={2} />
//         <Column header="Age" colSpan={2} />
//         <Column header="Sex" colSpan={2} />
        
//     </Row>
//     {/* <Row>
//         <Column header="Last Year" />
//         <Column header="This Year" />
//         <Column header="Last Year" />
//         <Column header="This Year" />
//     </Row> */}
// </ColumnGroup>;
let createdByFilter=<InputText
value={this.state.createdBy}
placeholder="Enumerator"
onChange={(e) => {this.setState({createdBy: e.target.value})
this.props.onRequestSurveyData({
  page:1,limit:this.state.limit,createdBy:e.target.value
})
}}
/>

let createdDateFilter =
<DatePicker
  allowClear={false}
  value={this.state.createdDate}
  className="ui-column-filter" onChange={
    (date, dateString) => {
      this.setState({
        filterName: "createdAt",
        filterData: dateString,
        page: 1,
        createdDate: moment(dateString)
      })
      this.props.onRequestSurveyData({
        page:1,limit:this.state.limit,createdAt:dateString
      })
    }
  } />
    return (
        <div>
         <Header1 history={this.props.history}/>
        <div className="parent_container">
      
             <div className="content_container">
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
      <button id="btnCreateUser" onClick={()=>{
this.export();
      }}>Export CSV</button>
      </div>
      <DataTable columnResizeMode="expand" 
       resizableColumns={true}
       fetching={this.props.state.fetching}
        loadingIcon="fas fa-spinner" 
        value={surveyList}
        onRowClick={(e)=>{
          this.props.history.push({pathname:`/admin/survey/surveydetails`,state:e.data})}
      }
        scrollHeight={"51vh"}
        ref={(el)=>{this.dt=el;}}
         scrollable={true}>

 <Column field="sno"
 header="Index"
 filter={true}
 style={{width:"60px",textAlign:"right",textAlign:'center'}}/>
         
 <Column field="index"
 header="S.No"
 filter={true}
 style={{width:"130px",textAlign:"right",textAlign:'center'}}/>

<Column field="userName" 
header="InterViewee" 
filter={true}
 
style={{width:"110px"}} 
 /> 

 <Column field="email" 
filter={true} 
  header="Email" 
 style={{width:"150px",textAlign:"center"}} 
 />

 <Column field="phoneNo" 
 header="Contact No" 
 filter={true}
 style={{width:"150px"}} 
 />

 <Column field="age" 
 header="Age" 
  filter={true} 
  style={{width:"90px",textAlign:'center'}} />  

 <Column field="sex" 
 header="Sex" 
  filter={true} 
   style={{width:"90px",textAlign:'center'}} />  

  <Column  field="surveyStation"
 header="Survey station" 
  filter={true} 
   style={{width:"120px",textAlign:'center'}} />  
 
 <Column  
 field="createdBy.name"
 header="Enumerator" 
  filter={true} 
  filterElement={createdByFilter}
  body={this.createdByTemp}
   style={{width:"120px",textAlign:'center',whiteSpace:'initial'}} />   

 <Column  
 field="createdAt"
 header="Created At" 
  filter={true} 
  filterElement={createdDateFilter}
  body={this.createdAt}
   style={{width:"170px",textAlign:'center'}} />   
   

<Column  
field="origin.latitude"
 header="Origin Latitude" 
  filter={true} 
  body={(rowData,column)=>{
    return<div>{rowData.origin.latitude} </div>
  }}
   style={{width:"150px",textAlign:'center'}} />  

   <Column  
field="origin.longitude"
 header="Origin Longitude" 
  filter={true} 
  body={(rowData,column)=>{
    return<div> {rowData.origin.longitude}</div>
  }}
   style={{width:"150px",textAlign:'center'}} />  

   <Column  
   field="destination.latitude1"
 header="Destination Latitude" 
  filter={true}
  body={(rowData,column)=>{
    return <div>{rowData.destination.latitude1}</div>
  }}
   style={{width:"150px",textAlign:'center'}} />  
<Column  
   field="destination.longitude1"
 header="Destination Latitude" 
  filter={true}
  body={(rowData,column)=>{
    return <div> {rowData.destination.longitude1}</div>
  }}
   style={{width:"150px",textAlign:'center'}} />  


   <Column  
   field="regularTrip3.distance"
 header="Distance" 
  filter={true}
   
  body={(rowData,column)=>{
    return <div>{rowData.regularTrip3.distance}&nbsp;Km</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  

<Column  
field="regularTrip3.timeTaken"
 header="Time Taken" 
  filter={true}
   
  body={(rowData,column)=>{
    return <div>{rowData.regularTrip3.timeTaken}&nbsp; min</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  

<Column
field="regularTrip3.startTime"  
 header="Start Time" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.regularTrip3.startTime}</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  

   <Column field="purposeTrip4" 
 header="Purpose Of Trip" 
  filter={true}
   style={{width:"130px",textAlign:'center'}} />  

 
   <Column  
   field="commuteTrip.opinionTrasport"
 header="Travel Time" 
  filter={true} 
  body={this.travelTime}
   style={{width:"170px",textAlign:'center'}} /> 

    <Column  
    field="commuteTrip1.opinionCost"
 header="Cost" 
  filter={true} 
  body={this.cost}
   style={{width:"170px",textAlign:'center'}} /> 

    <Column  
    field="commuteTrip3.opinionSafety"
 header="Safety" 
  filter={true} 
  body={this.safety}
   style={{width:"170px",textAlign:'center'}} /> 

    <Column  
    field="commuteTrip2.opinionComfort"
 header="Comfort" 
  filter={true} 
  body={this.comfort}
   style={{width:"170px",textAlign:'center'}} />   
 
 <Column  
 field="vehicleOwnership7"
 header="No of cars" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.vehicleOwnerShip7.cars}</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  
<Column  
field="vehicleOwnerShip7.twoWheeler"
 header="No Of Two Wheelers" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.vehicleOwnerShip7.twoWheeler}</div>
  }}
   style={{width:"140px",textAlign:'center'}} />  

<Column  
field="vehicleOwnerShip7.bicycle"
 header="No Of Bicycle" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.vehicleOwnerShip7.bicycle}</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  
  
  <Column  
  field="modeOfTravel.travelTrasport"
 header="Travel Mode" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.modeOfTravel.travelTrasport}</div>
  }}
   style={{width:"120px",textAlign:'center'}} />  

<Column field="costOfTravel8" 
 header="Cost of Travel" 
  filter={true} 
   style={{width:"120px",textAlign:'center'}} />  

   {/* <Column  
 header="Travel Mode" 
  filter={true} 
  body={(rowData,column)=>{
    return <div>{rowData.modeOfTravel.travelTrasport}</div>
  }}
   style={{width:"120px",textAlign:'center'}} />   */}

   {/* <Column field="paidByOffice9" 
 header="Paid By Office" 
  filter={true} 
   style={{width:"120px",textAlign:'center'}} />   */}

<Column field="willingness10" 
 header="Willingness" 
  filter={true} 
   style={{width:"130px",textAlign:'center'}} />  

<Column field="reasonForLeavingMetro" 
 header="Reason For Leaving Metro" 
  filter={true} 
   style={{width:"180px",textAlign:'center'}} />  

<Column field="stations" 
 header="When You Left Metro?" 
  filter={true} 
   style={{width:"180px",textAlign:'center'}} />  

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

const mapStateToProps = state => {
  return {
    state: state,
    fetching: state.fetching,
  };
};
const mapDispatchToProps = dispatch => {
  console.log("dispatched from dataTable")
  return {
    onRequestSurveyData: data =>
      dispatch({ type: GET_SURVEY_DATA_REQUEST, data }),
    // onRequestExportCSV: (data, value) =>
    //   dispatch({ type: USER_TABLE_CSV, data, value })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyDataTable);