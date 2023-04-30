import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import HomeMap from '../../components/HomeMap';
import WarningMessage from '../../components/WarningMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>

      <WarningMessage />
      {/* Button Component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
