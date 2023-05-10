/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';

const RouteMap = ({origin, destination}) => {
  const originCoordinates = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationCoordinates = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: originCoordinates.latitude,
        longitude: originCoordinates.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      }}>
      <Marker coordinate={origin} />
      <Marker coordinate={destination} />
      <MapViewDirections
        origin={originCoordinates}
        destination={destinationCoordinates}
        apikey={GOOGLE_API_KEY}
        strokeWidth={4}
        strokeColor="black"
        optimizeWaypoints={true}
      />
    </MapView>
  );
};

export default RouteMap;
