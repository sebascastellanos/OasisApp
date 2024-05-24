import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/oasisfondo.jpg')} // Ruta de tu imagen de fondo
        style={styles.backgroundImage}
      >
      </ImageBackground>
      <View style={styles.bottomContainer}>
      <View style={styles.overlay}>
          <Text style={styles.title}>Oasis</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 0.7, 
    resizeMode: 'cover',
    justifyContent: 'flex-end', 
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.0)', 
    padding: 20,
  },
  title: {
    fontSize: 70,
    fontFamily: 'Pacifico',
    color: '#fff',
  },
  bottomContainer: {
    flex: 0.3, 
    backgroundColor: '#9e8d67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
