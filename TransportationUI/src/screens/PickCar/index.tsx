import React from 'react';
import {Dimensions, View} from 'react-native';

import CarTypes from '../../components/CarTypes';
import RouteMap from '../../components/RouteMap';

const PickCar = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>
      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default PickCar;
