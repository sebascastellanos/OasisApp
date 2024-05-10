import React from 'react';
import { View, Button, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Configuración de Google Sign-In (Deberías configurar el webClientId aquí)
GoogleSignin.configure({
  webClientId: '429308432569-ig8hn6c052t21cvn0qcocd3dv5lmlu0s.apps.googleusercontent.com', // Reemplaza con tu web client ID de la consola de Google
});

const LoginScreen = () => {
  const signInWithGoogle = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log('Usuario logueado con Google:', userCredential);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bienvenido</Text>
      <Button title="Iniciar sesión con Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
