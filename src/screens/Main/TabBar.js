/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const TabBar = ({state: {index}, navigation: {jumpTo}}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        disabled={index === 0}
        style={style.tabButton}
        onPress={() => jumpTo('HomeTab')}>
        <Icon
          name="home"
          color={index === 0 ? 'rgb(250,160,38)' : '#808080'}
          size={30}
        />
        {index === 0 ? (
          <Text style={{color: 'rgb(250,160,38)'}}>Ana Sayfa</Text>
        ) : (
          <Text style={{color: '#808080'}}>Ana Sayfa</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        disabled={index === 1}
        style={style.tabButtonMiddle}
        onPress={() => jumpTo('Shopping')}>
        <Icon
          raised
          name="add-shopping-cart"
          color={index === 1 ? 'rgb(250,160,38)' : '#808080'}
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        disabled={index === 2}
        style={style.tabButton}
        onPress={() => jumpTo('Cart')}>
        <Icon
          name="shopping-cart"
          color={index === 2 ? 'rgb(250,160,38)' : '#808080'}
          size={30}
        />
        {index === 2 ? (
          <Text style={{color: 'rgb(250,160,38)'}}>Sepet</Text>
        ) : (
          <Text style={{color: '#808080'}}>Sepet</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  tabButton: {padding: 15},
  tabButtonMiddle: {top: -30, marginRight: 20},
});

export {TabBar};
