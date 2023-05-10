/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/* User row */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 15,
            }}
          />
          <View style={{marginVertical: 5}}>
            <Text style={{color: 'white', fontSize: 24}}>Adam White</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                alignItems: 'center',
              }}>
              <Text style={{color: 'lightgrey', marginRight: 3}}>4.92</Text>
              <Ionicons name={'ios-star-sharp'} size={13} color={'lightgrey'} />
            </View>
          </View>
        </View>
        {/* Messages row */}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>
        {/* Do more  */}
        <Pressable
          onPress={() => {
            console.warn('Do more with your account');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/* Make money */}
        <Pressable
          onPress={() => {
            console.warn('Make money driving');
          }}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
