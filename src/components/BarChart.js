import React,{Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import axios from "axios";
import {basepath} from "../utils/Constant";
class BarChart extends Component{
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
            yesdata:20,
            nodata:20,
        chartData:{
              labels:[
            'crowded',
            'High reaching cost',
            'lack of service ',
            'No of Changes',
            'Route',
            'Seat Availability',
            
            'Security',
            'Travel Time High',
            'Unaffordable fares',
            // 'a',
            // 'b',
            // 'c',
            // 'd',
            // 'e',
            // 'f',
            // 'g',
            // 'h',
            ],
            
          datasets:[
            {
              label:'Yes',
              data:[
                this.crowdedyes,
                this.highReachingCostyes,
                this.lackOfServiceyes,
                this.modeChangesyes,
                this.notRouteyes,
                this.seatAvailableyes,
                this.securityyes,
                this.travelTimeHighyes,
                this.unaffordableFareyes
              ],
              backgroundColor:[
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
                'rgba(10, 20, 30, 0.3)',
              ],
              borderColor : [
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
                'rgba(10, 20, 30, 1)',
              ],
              borderWidth : 1
             
           
      },
      {
        label:'No',
        data:[
            this.crowdedno,
            this.highReachingCostno,
            this.lackOfServiceno,
            this.modeChangesno,
            this.notRouteno,
            this.seatAvailableno,
            this.securityno,
            this.travelTimeHighno,
            this.unaffordableFareno
        ],
        
        backgroundColor:[
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
          'rgba(50, 150, 250, 0.3)',
        ],
        borderColor : [
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
          'rgba(50, 150, 250, 1)',
        ],
        borderWidth : 1
     
}
    ],

            defaultFontSize: 22,
            defaultFontColor :'24ef09',
  }
            
    };
}



 
  render() {
      console.log("ghghghghg",this.state)
    return (
      <div className = "chart">
     
           <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Largest Cities In ',
              fontSize:25
            },
            legend:{
              display: true,
              position:"bottom"
            },
            
            
          }}
          options = {
            {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
              legend:{
               display: true,
               position:"bottom"
             },
        }}
        />



      </div>
    );
  }
}

 

export default BarChart;