
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./Rahsn Logo head.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31473A', // Match the background color of the tab bar
  },
  image: {
    flex: 1,
    backgroundColor: "#EDF4F2" 
  },
});
