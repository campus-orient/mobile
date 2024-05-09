import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Mapbox, {MapView} from '@rnmapbox/maps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiaGF3a3dhdGNodHJhY2tlciIsImEiOiJjbHAydndzMGwxNDRuMnFwYm56NXRhM2M1In0.9yb3DGjeaEoEoksYeGIpqw',
);

const MapboxComponent = () => {
  useEffect(() => {
    Mapbox.setTelemetryEnabled(false);
  }, []);

  return <MapView style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default MapboxComponent;
