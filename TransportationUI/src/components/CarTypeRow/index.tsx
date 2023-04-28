import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const route = '../../assets/images';

const CarTypeRow = ({type}) => {
  const getImage = () => {
    switch (type.type) {
      case 'UberX':
        return require(route + '/UberX.jpeg');
      case 'Comfort':
        return require(route + '/Comfort.jpeg');
      case 'UberXL':
        return require(route + '/UberXL.jpeg');
      default:
        return 'UberX';
    }
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          {'  '}
          <Ionicons name={'person'} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default CarTypeRow;
