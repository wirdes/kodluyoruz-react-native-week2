import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const HomeTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeTab</Text>
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

export {HomeTab};
