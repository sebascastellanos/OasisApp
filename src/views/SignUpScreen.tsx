import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignUpScreen({ navigation }:any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implementar lógica de registro
    console.log('Registrando usuario:', name, email);
    // Navegar a la siguiente pantalla después del registro
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9E7E5',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 50, // Aumentado desde 20 para más espacio alrededor de los bordes
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Comic Sans MS', // Asegúrate de que esta fuente esté disponible o elige una similar
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 180, // Agregando espacio antes del botón si es necesario
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});