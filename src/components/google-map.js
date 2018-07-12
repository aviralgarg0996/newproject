/* eslint-disable no-undef */
import React from "react";
const { compose, withProps, lifecycle } = require("recompose");

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDH6goBEWYbdmSimk2wdNV8o7nYTxoItMU",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{width:"80%", height: `100%`,top:"150px",left:"250px" }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      console.log("haha", this.props.originl);
      console.log("haha", parseFloat(this.props.originl));
      const a = parseFloat(this.props.originl);
      const b = parseFloat(this.props.originlo);
      const c = parseFloat(this.props.destl);
      const d = parseFloat(this.props.destlo);
      console.log("haha", typeof 28.17219, b, c, d);
      DirectionsService.route(
        {
          //   origin: new google.maps.LatLng(
          //       parseFloat(this.props.originl),
          //       parseFloat(this.props.originlo)
          //   ),
          //   destination: new google.maps.LatLng(
          //       parseFloat(this.props.destl),
          //       parseFloat(this.props.destlo)
          //   ),
          //   origin: new google.maps.LatLng(28.172191, 77.504),
          //   destination: new google.maps.LatLng(28.6139, 77.209),

          origin: new google.maps.LatLng(a, b),
          destination: new google.maps.LatLng(c, d),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          console.log("in result", status, google.maps.DirectionsStatus.OK);

            if (status === google.maps.DirectionsStatus.OK) {
                console.log("haha Success ")
              this.setState({
                directions: result
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
        }
      );
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(28.5355, 77.391)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default MapWithADirectionsRenderer;
