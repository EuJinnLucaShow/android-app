import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: '',
          longitude: '',
          latitudeDelta: '',
          longitudeDelta: '',
        }}
      >
        <Marker
          coordinate={{
            latitude: '',
            longitude: '',
          }}
          title={'title'}
          description={'description'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
