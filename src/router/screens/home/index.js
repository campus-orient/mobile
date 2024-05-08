import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text>Campus Orient</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    //
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
  },
});
