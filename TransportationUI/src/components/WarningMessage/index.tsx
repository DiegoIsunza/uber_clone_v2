import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const WarningMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        asdsdsdsdsadasdasnfjasfjaalsjncascnalsjcnajsnfjsaflasfnjlascnjlasncljasnclasn
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default WarningMessage;
