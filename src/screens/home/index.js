import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import MapboxComponent from '../../components/Mapbox.js';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.mapContainer}>
        <MapboxComponent />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Campus Orient</Text>
      </View>

      <View style={styles.authButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.authButton,
            {backgroundColor: '#000', marginRight: 5},
          ]}>
          <Text style={styles.authButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.authButton,
            {backgroundColor: '#00b3ff', marginLeft: 5},
          ]}>
          <Text style={styles.authButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    //
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
  },

  mapContainer: {
    flex: 1,
    elevation: 10,
  },

  titleContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#00b3ff',
  },

  authButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 20,
  },

  authButton: {
    padding: 10,
    borderRadius: 10,
    flexGrow: 1,
  },

  authButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
