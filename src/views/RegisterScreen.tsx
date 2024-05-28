import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerWithEmailAndPassword = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('Usuario registrado con correo y contraseña:', userCredential);

      // Navega a la pantalla de inicio de sesión después del registro
      navigation.navigate('Login');
    } catch (error: any) {
      console.error('Error al registrar usuario:', error.code, error.message);
    }
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/login.jpg')} style={styles.backgroundImage} />
      <Text style={styles.title}>Registro</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.registerButton} onPress={registerWithEmailAndPassword}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterScreen;
