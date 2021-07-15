import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <MaterialCommunityIcons
          name={'cart-outline'}
          color={'white'}
          size={200}
        />
        {/* */}
        <Text style={styles.text}>Falan</Text>
        <Text style={styles.text}>Market</Text>
        <Image
          style={styles.gif}
          source={require('../../assets/img/loading3.gif')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgb(250,160,38)',
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    // eslint-disable-next-line no-dupe-keys
    fontSize: 52,
    textAlign: 'center',
  },
  gif: {
    marginTop: 25,
    height: 150,
    width: 150,
  },
});

export {Splash};
