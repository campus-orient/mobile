import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FA5Icons from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const HeaderComponent = () => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <FA5Icons name="map-marked-alt" size={30} color="#03a5fc" />
      </TouchableOpacity>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Campus Orient</Text>
        <Text style={styles.userType}>Administrator</Text>
      </View>

      <TouchableOpacity>
        <FA5Icons name="user-circle" size={30} color="#03a5fc" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  titleWrapper: {
    flexGrow: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
  },

  userType: {
    textAlign: 'center',
    fontSize: 10,
    color: '#000',
  },
});
