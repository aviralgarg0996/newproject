import { Breadcrumb } from 'antd';
import React, { Component } from 'react'
import "../style/HeaderStyle.css"
import { Menu, Dropdown, Icon,Upload } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant";


 class Header1 extends Component {
  constructor(props){
    super(props);
    this.state={
      userimage:[],
      toggle:false
    }
  }
  

  render() {
    return (
    
        <div className="header_container">
           <div id="headerdiv"></div> 
           <div id="HeaderDiv2">
      <span id="UserList"> 
      <h2 style={{marginLeft:'10px'}}>Survey Data </h2>
          </span>
      </div>  
      </div>
   
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    // state:state,
  }
}
export default connect(mapStateToProps)(Header1);