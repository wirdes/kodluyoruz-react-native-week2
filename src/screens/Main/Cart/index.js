import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {fontSize: 20, color: 'rgb(250,160,38)'},
});
export {Cart};
