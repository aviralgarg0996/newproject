import React,{Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import axios from "axios";
import {basepath} from "../utils/Constant";
import { withGoogleMap, GoogleMap ,Marker} from 'react-google-maps';
import Header1 from "./Header1"
class NavigationRoute extends Component{
  componentDidMount() {
    if (this.props.history.location.state) {
        console.log("statatat",this.props.history.location.state.origin)
this.setState({
    latitude:this.props.history.location.state.origin.latitude,
    long:this.props.history.location.state.origin.longitude
})
    }
  }
    constructor(props)
    {
        super(props);
        this.state={
            latitude:"",
            long:""
        }
    }


  render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 28.6275609, lng: 77.2784081 } }
          defaultZoom = { 13 }
        >
        <Marker position={{ lat: 28.6275609, lng: 77.2784081 }} />
        </GoogleMap>
     ));
    return (
        <div id="MapDiv">
         <Header1/>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '1000px' }} /> }
          mapElement={ <div style={{left:"250px",top:"200px", height: `100%` }} /> }
        
        />
      </div>
    )
  }
}

 

export default NavigationRoute;