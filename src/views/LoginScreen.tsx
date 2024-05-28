import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Configuración de Google Sign-In
GoogleSignin.configure({
  webClientId: '429308432569-ig8hn6c052t21cvn0qcocd3dv5lmlu0s.apps.googleusercontent.com',
});

const LoginScreen = ({ navigation }: any) => {

  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log('Usuario logueado con Google:', userCredential);

      // Navega a la pantalla Home
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmailAndPassword = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      console.log('Usuario logueado con correo y contraseña:', userCredential);

      // Navega a la pantalla Home
      navigation.navigate('Home');
    } catch (error: any) {
      console.error('Error al iniciar sesión con correo y contraseña:', error.code, error.message);
    }
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in now</Text>
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
        <Button title="Sign in" onPress={signInWithEmailAndPassword} />
      </View>
      <TouchableOpacity onPress={goToRegister}>
        <Text style={styles.registerLink}>¿No tienes cuenta aún? Regístrate aquí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C9E7E5',  // Color de fondo actualizado
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',  // Cambiado a un color más oscuro para contraste
  },
  form: {
    width: '80%',
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,  // Aumentar el borderRadius para redondear más
    width: '100%',
  },
  registerLink: {
    textDecorationLine: 'underline',
    color: '#333',  // Cambiado a un color más oscuro para contraste
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: 'white',  // Cambiado a un tono azul para combinar
    paddingVertical: 12,  
    paddingHorizontal: 20,
    borderRadius: 20,  // Aumentar el borderRadius para redondear más
    alignItems: 'center',
    width: '60%',  
    marginTop: 20,
  },
  googleButtonText: {
    color: 'black', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
