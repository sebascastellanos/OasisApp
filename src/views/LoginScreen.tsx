import React from 'react';
import { View, Button, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Configuración de Google Sign-In
GoogleSignin.configure({
  webClientId: '429308432569-ig8hn6c052t21cvn0qcocd3dv5lmlu0s.apps.googleusercontent.com',
}); 

const LoginScreen = ({ navigation }:any) => { // Aquí se recibe navigation como parámetro
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Bienvenido</Text>
      <Button title="Iniciar sesión con Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
