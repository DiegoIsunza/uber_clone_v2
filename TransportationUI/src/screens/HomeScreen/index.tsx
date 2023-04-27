import {View, Text} from 'react-native';
import React from 'react';

import HomeMap from '../../components/HomeMap';
import WarningMessage from '../../components/WarningMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />

      <WarningMessage />
      {/* Button Component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
