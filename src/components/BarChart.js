import React,{Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import axios from "axios";
import {basepath} from "../utils/Constant";
class BarChart extends Component{
  componentDidMount() {
   this.abcd();
  }
abcd=()=>{
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
      
      ];
      
    datasets:[
      {
        label:'Yes',
        data:[
          
          this.props.data.crowdedyes,
          this.props.data.highReachingCostyes,
          this.props.data.lackOfServiceyes,
          this.props.data.modeChangesyes,
          this.props.data.notRouteyes,
          this.props.data.seatAvailableyes,
          this.props.data.securityyes,
          this.props.data.travelTimeHighyes,
          this.props.data.unaffordableFareyes
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
          'rgba(10, 20, 30, 1)',
        ],
        borderWidth : 1
       
     
},
{
  label:'No',
  data:[
      this.props.data.crowdedno,
      this.props.data.highReachingCostno,
      this.props.data.lackOfServiceno,
      this.props.data.modeChangesno,
      this.props.data.notRouteno,
      this.props.data.seatAvailableno,
      this.props.data.securityno,
      this.props.data.travelTimeHighno,
      this.props.data.unaffordableFareno
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
    'rgba(50, 150, 250, 1)',
      
  ],
  borderWidth : 1

}
];

      defaultFontSize: 22;
      defaultFontColor :'24ef09'
}
this.setState({
    chartData
})
}
  
  
    constructor(props)
    {
        super(props);
        this.state = {
          
            yesdata:20,
            nodata:20,
            chartData:{},
            
    };
}




 
  render() {
      console.log("ghghghghg",this.props.data)
    return (
      <div className = "chart" style={
          {marginLeft:"250px",  width:"400px"}
          }>
     
           <Bar

          data={this.state.chartData}
          options = {
            {
           
              legend:{
               display: true,
               position:"bottom"
             },
        }
    }

           
    
        />



      </div>
    );
  }
}

 

export default BarChart;