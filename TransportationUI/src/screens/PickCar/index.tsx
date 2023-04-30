import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import HomeMap from '../../components/HomeMap';
import CarTypes from '../../components/CarTypes';

const PickCar = () => {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
      <View style={{height: 400}}>
        <CarTypes />
      </View>
    </View>
  );
};

export default PickCar;
