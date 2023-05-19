import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const WarningMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Covid is a really dangerous disease. A lot of people have died over
        this. Please be polite with the driver and follow all safety measures.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default WarningMessage;
