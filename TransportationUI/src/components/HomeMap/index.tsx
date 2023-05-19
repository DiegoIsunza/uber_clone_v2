/* eslint-disable react-native/no-inline-styles */
import {React, useEffect, useState} from 'react';
import {Alert, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const route = '../../assets/images';

import Geolocation from '@react-native-community/geolocation';

const HomeMap = () => {
  const [position, setPosition] = useState({lat: 0.0, long: 0.0});

  const getImage = (type: String) => {
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

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition({
          lat: parseFloat(JSON.stringify(pos.coords.latitude)),
          long: parseFloat(JSON.stringify(pos.coords.longitude)),
        });
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  }, []);

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: position.lat,
        longitude: position.long,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
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
