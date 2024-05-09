import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return <SafeAreaView style={styles.root}></SafeAreaView>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    //
    flex: 1,
    backgroundColor: 'white',
  },
});
