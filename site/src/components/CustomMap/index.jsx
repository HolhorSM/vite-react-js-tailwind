import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 16.7575797,
      lng: -99.767500
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div className="w-80 h-80">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={16.7575987}
          lng={-99.767500}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}