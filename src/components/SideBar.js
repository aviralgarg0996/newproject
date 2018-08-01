/*This file contains the code for Sider 
Created By-Aviral Garg
Created On-13/04/18
*/
import { Layout, Menu } from 'antd';
import {connect} from "react-redux"
import React, { Component } from 'react'
import logo from "../images/logo.png";
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route';
import "../style/SideBar.css";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class SideBar extends Component {
    render() {
        return (

            
<div className="sider_container">
       
        <div className="logo" id="Siderlogo"><img id="Siderimg" src={logo} alt="MyChoice" /> </div>
        <div className="wrapper">
        
   
      <Sider width={210} >
        <Menu
          mode="inline"
          style={{ backgroundColor:"#C0C0C0", left: 0 ,height:"100%"}}
        >
    <Menu.Item
         key="50">
                    <NavLink className="nav-text" to="/admin/user">&nbsp;&nbsp;<span style={{color:'black'}}>Employee</span></NavLink>
                    </Menu.Item>
                    <Menu.Item
         key="50">
                    <NavLink className="nav-text" to="/admin/survey">&nbsp;&nbsp;<span style={{color:'black'}}>Survey</span></NavLink>
                    </Menu.Item>
        {/* <SubMenu key="1"
                    title={<span> */}
                        {/* <img src={require("../icons/SideBar/products.png")} alt="user" /> */}
                        {/* <NavLink className="nav-text" to="/admin/user"><span style={{color:'white'}}>Employee</span></NavLink></span>}>
            </SubMenu>
                 
          <SubMenu key="2"
                    title={<span> */}
                        {/* <img src={require("../icons/SideBar/products.png")} alt="user" /> */}
                        {/* <NavLink className="nav-text" to="/admin/survey"><span style={{color:'white'}}>Survey</span></NavLink></span>}> */}
                        
                      
                        {/* <Menu.Item key="21"><NavLink className="nav-text" to="/home/product">Products</NavLink></Menu.Item>
                        <Menu.Item key="22"><NavLink className="nav-text" to="/home/product/categories">Categories</NavLink></Menu.Item>
                        <Menu.Item key="23"><NavLink className="nav-text" to="/home/product/brands">Brands</NavLink></Menu.Item>
                        <Menu.Item key="24"><NavLink className="nav-text" to="/home/product/suppliers">Suppliers</NavLink></Menu.Item> */}
            {/* </SubMenu> */}

          
                   

                    
         
        </Menu></Sider>
        
         
        </div>
      </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
     
    }
  }
  export default connect(mapStateToProps,null)(SideBar)