/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const route = '../../assets/images';

const HomeMap = () => {
  const getImage = type => {
    switch (type) {
      case 'UberX':
        return require(route + '/top-UberX.png');
      case 'Comfort':
        return require(route + '/top-Comfort.png');
      case 'UberXL':
        return require(route + '/top-UberXL.png');
      default:
        return require(route + '/top-UberX.png');
    }
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
