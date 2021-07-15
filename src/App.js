import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Navigation} from '~/Navigation';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="gray" />
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export {App};
