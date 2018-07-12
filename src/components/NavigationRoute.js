import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import axios from "axios";
import { basepath } from "../utils/Constant";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Header1 from "./Header1";
import Google from "./google-map";

class NavigationRoute extends Component {
  componentDidMount() {
    if (this.props.history.location.state) {
      console.log(
        "statatat",
        this.props.history.location.state.origin,
        this.props.history.location.state.destination
      );
      this.setState({
        olatitude: this.props.history.location.state.origin.latitude,
        olongitude: this.props.history.location.state.origin.longitude,
        dlatitude: this.props.history.location.state.destination.latitude1,
        dlongitude: this.props.history.location.state.destination.longitude1
      });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      olatitude: "",
      olongitude: "",
      dlatitude: "",
      dlongitude: ""
    };
  }

  render() {
    return (
      <div>
        <Google
          originl={this.state.olatitude}
          originlo={this.state.olongitude}
          destl={this.state.dlatitude}
          destlo={this.state.dlongitude}
        />
      </div>
    );
  }
}

export default NavigationRoute;
