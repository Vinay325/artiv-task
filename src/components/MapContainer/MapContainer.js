import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ lat, lon, google }) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="map">
      {lat && lon && (
        <Map
          google={google}
          zoom={10}
          style={mapStyles}
          center={{ lat: lat, lng: lon }}
          initialCenter={{ lat: lat, lng: lon }}
        >
          <Marker position={{ lat: lat, lng: lon }} />
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBJAX_DQYM7ovn7-K6k74A7j8hXKtMOLjc',
})(MapContainer);
