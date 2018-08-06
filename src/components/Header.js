import { Breadcrumb } from 'antd';
import React, { Component } from 'react'
import "../style/HeaderStyle.css"
import { Menu, Dropdown, Icon,Upload } from 'antd';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import axios from "axios";
import {basepath} from "../utils/Constant";
import { Button } from 'antd/lib/radio';


 class Header extends Component {
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
           <div id="headerdiv">
           <button 
           style={{color:'white',fontSize:"20px",marginTop:"5px",marginLeft:"10px"}}
           id="LoginButton" 
           type="primary" onClick={()=>{
             this.props.history.replace("/")
           }}>
           Logout
            </button>
           </div> 
           <div id="HeaderDiv2">
      <span id="UserList"> 
      <h2 style={{marginLeft:'10px'}}>Employee </h2>
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
export default connect(mapStateToProps)(Header);