import React, { useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
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
      <Image source={require('../assets/login.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
          <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
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
          <Button title="Iniciar sesión" onPress={signInWithEmailAndPassword} />
        </View>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.registerLink}>¿No tienes cuenta aún? Regístrate aquí</Text>
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
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 5,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: '100%',
  },
  registerLink: {
    textDecorationLine: 'underline',
    color: 'white',
    marginTop: 20,
  },
});

export default LoginScreen;
