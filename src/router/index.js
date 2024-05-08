import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RouteStack;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
