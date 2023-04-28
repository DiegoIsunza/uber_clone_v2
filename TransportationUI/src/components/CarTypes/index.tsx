/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import CarTypeRow from '../CarTypeRow';

import typesData from '../../assets/data/types';

const CarTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map((type, key) => (
        <CarTypeRow key={key} type={type} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default CarTypes;

const styles = StyleSheet.create({});
