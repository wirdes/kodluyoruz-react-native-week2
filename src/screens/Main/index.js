/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '~/screens/Main/HomeTab';
import {TabBar} from '~/screens/Main/TabBar';
import {Cart} from '~/screens/Main/Cart';
import {Shopping} from '~/screens/Main/Shopping';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Tab.Navigator
        tabBar={TabBar}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
          },
        }}>
        <Tab.Screen name={'HomeTab'} component={HomeTab} />
        <Tab.Screen name={'Shopping'} component={Shopping} />
        <Tab.Screen name={'Cart'} component={Cart} />
      </Tab.Navigator>
    </View>
  );
};

export {Main};
