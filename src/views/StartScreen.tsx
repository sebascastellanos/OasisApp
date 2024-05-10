import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

export default function StartScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>To</Text>
        <Text style={styles.title}>Oasis</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Let's Start"
          onPress={() => navigation.navigate('SignUp')}
          color="#FF6347"  // Tomato color for the button, feel free to customize
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9E7E5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',  // Centers text horizontally
    marginBottom: 20,
  },
  title: {
    fontSize: 70  ,
    fontFamily: 'Pacifico',
    color: '#306B34'  // A playful green color
  },
  buttonContainer: {
    width: '90%',
    borderRadius: 20,
    overflow: 'hidden',
  }
});
