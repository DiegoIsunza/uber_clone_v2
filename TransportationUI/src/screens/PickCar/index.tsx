import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import HomeMap from '../../components/HomeMap';
import CarTypes from '../../components/CarTypes';

const PickCar = () => {
  return (
    <View>
      <HomeMap />
      <CarTypes />
    </View>
  );
};

export default PickCar;
