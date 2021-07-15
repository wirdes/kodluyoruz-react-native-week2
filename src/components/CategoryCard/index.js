import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Cart} from '~/screens/Main/Cart';

const Tab = createMaterialTopTabNavigator();

const CategoryCard = ({title}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};
export {CategoryCard};
