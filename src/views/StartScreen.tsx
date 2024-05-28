import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function StartScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/start.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle} 
      />
      <View style={styles.bottomContainer}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Oasis</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9E7E5',  // Color de fondo actualizado
  },
  backgroundImage: {
    flex: 0.7,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 70,
    fontFamily: 'Pacifico',
    color: 'white',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 0.3,
    backgroundColor: '#C9E7E5',  // Color de fondo actualizado
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#007AFF',  // Cambiado a un tono azul para combinar
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

