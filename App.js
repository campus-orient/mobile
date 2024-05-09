import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import RouteStack from './src/router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <RouteStack />
      <StatusBar backgroundColor={'black'} />
    </NavigationContainer>
  );
};

export default App;
