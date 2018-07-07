import React,{Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import BarChart from './BarChart';
import axios from "axios";
import {basepath} from "../utils/Constant";

class Example extends Component{
  componentWillMount() {
    axios({
      method: "post",
      url: basepath + "survey/counttrue",
    })
      .then(response => {
       console.log("responsefor yes",response.data.data);
       this.setState({
          crowdedyes:response.data.data.crowded,
          highReachingCostyes:response.data.data.highReachingCost,
          lackOfServiceyes:response.data.data.lackOfService,
          modeChangesyes:response.data.data.modeChanges,
          notRouteyes:response.data.data.notRoute,
          seatAvailableyes:response.data.data.seatAvailable,
          securityyes:response.data.data.security,
          travelTimeHighyes:response.data.data.travelTimeHigh,
          unaffordableFareyes:response.data.data.unaffordableFare,    
       })
       
      })
      .catch(error => {
        alert("Error");
      })
      axios({
          method: "post",
          url: basepath + "survey/countfalse",
        })
          .then(response => {
              console.log("responsefor no",response);
              this.setState({
                  crowdedno:response.data.data.crowded,
                  highReachingCostno:response.data.data.highReachingCost,
                  lackOfServiceno:response.data.data.lackOfService,
                  modeChangesno:response.data.data.modeChanges,
                  notRouteno:response.data.data.notRoute,
                  seatAvailableno:response.data.data.seatAvailable,
                  securityno:response.data.data.security,
                  travelTimeHighno:response.data.data.travelTimeHigh,
                  unaffordableFareno:response.data.data.unaffordableFare,
                   
               })
          })
          .catch(error => {
            alert("Error");
          })

  }
  
    constructor(props)
    {
        super(props);
        this.state = {
          crowdedyes:0,
          highReachingCostyes:0,
          lackOfServiceyes:0,
          modeChangesyes:0,
          notRouteyes:0,
          seatAvailableyes:0,
          securityyes:0,
          travelTimeHighyes:0,
          unaffordableFareyes:0,
          
          crowdedno:0,
          highReachingCostno:0,
          lackOfServiceno:0,
          modeChangesno:0,
          notRouteno:0,
          seatAvailableno:0,
          securityno:0,
          travelTimeHighno:0,
          unaffordableFareno:0,
    };
}



 
  render() {
    return (
     <BarChart   data={this.state} />
    );
  }
}

 

export default Example;