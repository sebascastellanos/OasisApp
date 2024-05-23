import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomTabNavigator from '../components/BottomTabNavigator';

export default function MapScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: 3.56, 
            longitude: -73.61,
          }}
          title="Título del marcador" 
          description="Descripción del marcador"
        />
      </MapView>
      {/* Agrega BottomTabNavigator aquí */}
      <BottomTabNavigator navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
